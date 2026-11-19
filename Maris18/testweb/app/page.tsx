'use client'

import { useEffect, useState } from 'react'
import { ChapterNav, ChapterScene, EndingScreen, TOTAL_STEPS, preloadSceneArt } from '@/components/chapters'
import { MusicPlayer } from '@/components/music-player'

export default function Page() {
  // direction: 1 turns the page forward, -1 turns it back.
  const [[currentStep, direction], setPage] = useState<[number, number]>([1, 1])
  const [isBookClosed, setIsBookClosed] = useState(false)
  const [isDarkReturn, setIsDarkReturn] = useState(false)
  const [isClosingBook, setIsClosingBook] = useState(false)
  const goTo = (step: number) => setPage(([current]) => step === current ? [current, 1] : [step, step > current ? 1 : -1])
  const goNext = () => goTo(Math.min(TOTAL_STEPS, currentStep + 1))
  const goPrevious = () => goTo(Math.max(1, currentStep - 1))

  // Warm the cache with every chapter's artwork so transitions never wait on a download.
  useEffect(() => {
    const idle = window.requestIdleCallback?.(preloadSceneArt) ?? window.setTimeout(preloadSceneArt, 1200)
    return () => { window.cancelIdleCallback?.(idle); window.clearTimeout(idle) }
  }, [])

  // Arrow keys move between chapters (except on the cover and while a message is open).
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (currentStep === 1 || document.querySelector('[role="dialog"]')) return
      if (event.key === 'ArrowRight') goNext()
      if (event.key === 'ArrowLeft') goPrevious()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [currentStep])

  useEffect(() => {
    if (!isDarkReturn) return
    const timer = window.setTimeout(() => setIsDarkReturn(false), 1300)
    return () => window.clearTimeout(timer)
  }, [isDarkReturn])

  useEffect(() => {
    if (isClosingBook) window.dispatchEvent(new Event('music:fade-out'))
  }, [isClosingBook])

  return <main className="birthday-app" onDragStart={(event) => event.preventDefault()}>
    <ChapterScene step={currentStep} direction={direction} onOpen={goNext} onRestart={() => setIsBookClosed(true)} disableTurn={isDarkReturn} />
    {isBookClosed
      ? <EndingScreen onClosingStart={() => setIsClosingBook(true)} onRestart={() => {
          goTo(1)
          setIsBookClosed(false)
          setIsClosingBook(false)
          setIsDarkReturn(true)
          window.dispatchEvent(new Event('music:fade-in'))
        }} />
      : currentStep > 1 && <ChapterNav step={currentStep} onPrevious={goPrevious} onNext={goNext} />}
    <MusicPlayer />
    {isDarkReturn && <div className="dark-return-fade" aria-hidden="true" />}
  </main>
}
