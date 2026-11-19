'use client'

import { useEffect, useRef, useState } from 'react'

const tracks = [
  {
    title: 'Edward Scissorhands - Ice Dance',
    src: '/songs/Edward%20Scissorhands-Ice%20Dance.mp3',
  },
  {
    title: "The Piano Duet - Tim Burton's Corpse Bride",
    src: '/songs/The%20Piano%20Duet%20-%20Tim%20Burton%27s%20Corpse%20Bride%20%28Extended%20Version%29%20%5BHD%20Piano%20Cover%2C%20Halloween%20Music%5D.mp3',
  },
  {
    title: 'Jack y Sally - Canción Final',
    src: '/songs/Jack%20y%20Sally%20Canci%C3%B3n%20Final%20%5BLatino%5D%20%5BHD%5D%20%5BSubt%C3%ADtulos%5D%20-%20El%20Extra%C3%B1o%20Mundo%20de%20Jack.mp3',
  },
] as const 

const TARGET_VOLUME = 0.82

const setSafeVolume = (audio: HTMLAudioElement, volume: number) => {
  audio.volume = Math.min(1, Math.max(0, volume))
}

export function MusicPlayer() {
  const audioA = useRef<HTMLAudioElement>(null)
  const audioB = useRef<HTMLAudioElement>(null)
  const activePlayer = useRef(0)
  const currentTrack = useRef(0)
  const isPlaying = useRef(false)
  const wasPlayingBeforeFade = useRef(false)
  const fadeFrames = useRef(new Map<HTMLAudioElement, number>())
  const [playing, setPlaying] = useState(false)

  const cancelFade = (audio: HTMLAudioElement) => {
    const frame = fadeFrames.current.get(audio)
    if (frame) window.cancelAnimationFrame(frame)
    fadeFrames.current.delete(audio)
  }

  const fadeVolume = (audio: HTMLAudioElement, target: number, duration = 900) =>
    new Promise<void>((resolve) => {
      cancelFade(audio)
      const startVolume = audio.volume
      if (duration <= 0 || startVolume === target) {
        setSafeVolume(audio, target)
        resolve()
        return
      }
      const started = performance.now()
      const step = (now: number) => {
        const progress = Math.min((now - started) / duration, 1)
        setSafeVolume(audio, startVolume + (target - startVolume) * progress)
        if (progress < 1) {
          fadeFrames.current.set(audio, window.requestAnimationFrame(step))
        } else {
          fadeFrames.current.delete(audio)
          resolve()
        }
      }
      fadeFrames.current.set(audio, window.requestAnimationFrame(step))
    })

  const play = async () => {
    const players = [audioA.current, audioB.current]
    const active = players[activePlayer.current]
    if (!active) return

    try {
      await active.play()
      isPlaying.current = true
      setPlaying(true)
      await fadeVolume(active, TARGET_VOLUME, 850)
    } catch {
      isPlaying.current = false
      setPlaying(false)
    }
  }

  const pause = () => {
    const active = activePlayer.current === 0 ? audioA.current : audioB.current
    if (!active) return
    isPlaying.current = false
    setPlaying(false)
    void fadeVolume(active, 0, 650).then(() => active.pause())
  }

  const toggle = () => {
    if (isPlaying.current) pause()
    else void play()
  }

  const fadeOutForClose = () => {
    const active = activePlayer.current === 0 ? audioA.current : audioB.current
    if (!active || !isPlaying.current) return
    wasPlayingBeforeFade.current = true
    isPlaying.current = false
    setPlaying(false)
    void fadeVolume(active, 0, 2100).then(() => active.pause())
  }

  const fadeInForRestart = () => {
    if (!wasPlayingBeforeFade.current) return
    wasPlayingBeforeFade.current = false
    const active = activePlayer.current === 0 ? audioA.current : audioB.current
    if (!active) return
    void active.play().then(() => {
      isPlaying.current = true
      setPlaying(true)
      void fadeVolume(active, TARGET_VOLUME, 1300)
    }).catch(() => {
      isPlaying.current = false
      setPlaying(false)
    })
  }

  const crossfadeTo = async (nextIndex: number) => {
    const players = [audioA.current, audioB.current]
    const oldIndex = activePlayer.current
    const nextPlayerIndex = oldIndex === 0 ? 1 : 0
    const oldPlayer = players[oldIndex]
    const nextPlayer = players[nextPlayerIndex]
    if (!oldPlayer || !nextPlayer) return

    if (nextPlayer.getAttribute('src') !== tracks[nextIndex].src) {
      nextPlayer.src = tracks[nextIndex].src
    }
    nextPlayer.volume = 0
    nextPlayer.load()
    currentTrack.current = nextIndex
    activePlayer.current = nextPlayerIndex

    try {
      await nextPlayer.play()
      if (!isPlaying.current) {
        nextPlayer.pause()
        return
      }
      void fadeVolume(oldPlayer, 0, 2200).then(() => {
        if (activePlayer.current !== oldIndex) oldPlayer.pause()
      })
      await fadeVolume(nextPlayer, TARGET_VOLUME, 2200)
    } catch {
      activePlayer.current = oldIndex
    }
  }

  const onTrackEnded = (playerIndex: number) => {
    if (activePlayer.current !== playerIndex || !isPlaying.current) return
    void crossfadeTo((currentTrack.current + 1) % tracks.length)
  }

  useEffect(() => {
    const firstPlayer = audioA.current
    if (firstPlayer) {
      firstPlayer.src = tracks[0].src
      firstPlayer.volume = 0
      firstPlayer.load()
    }
    if (audioB.current) audioB.current.volume = 0

    void play()

    const startOnFirstInteraction = (event: Event) => {
      if (event.target instanceof Element && event.target.closest('.music-toggle')) return
      if (!isPlaying.current) void play()
      window.removeEventListener('pointerdown', startOnFirstInteraction)
      window.removeEventListener('keydown', startOnFirstInteraction)
    }
    window.addEventListener('pointerdown', startOnFirstInteraction, { once: true })
    window.addEventListener('keydown', startOnFirstInteraction, { once: true })
    window.addEventListener('music:fade-out', fadeOutForClose)
    window.addEventListener('music:fade-in', fadeInForRestart)

    return () => {
      window.removeEventListener('pointerdown', startOnFirstInteraction)
      window.removeEventListener('keydown', startOnFirstInteraction)
      window.removeEventListener('music:fade-out', fadeOutForClose)
      window.removeEventListener('music:fade-in', fadeInForRestart)
      fadeFrames.current.forEach((frame) => window.cancelAnimationFrame(frame))
    }
  }, [])

  return (
    <>
      <audio ref={audioA} preload="auto" onEnded={() => onTrackEnded(0)} />
      <audio ref={audioB} preload="auto" onEnded={() => onTrackEnded(1)} />
      <button
        className="music-toggle"
        type="button"
        onClick={(event) => {
          event.stopPropagation()
          toggle()
        }}
        aria-label={playing ? 'Pausar música' : 'Reproducir música'}
        aria-pressed={playing}
        title={playing ? 'Pausar música' : 'Reproducir música'}
      >
        <span className={`music-toggle-icon ${playing ? 'is-playing' : ''}`} aria-hidden="true">
          {playing ? 'Ⅱ' : '▶'}
        </span>
        <span className="music-toggle-label">{playing ? 'Pausar' : 'Reproducir'}</span>
      </button>
    </>
  )
}
