'use client'

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import Image, { getImageProps } from 'next/image'
import type { ImageProps } from 'next/image'
import { createContext, useContext, useEffect, useLayoutEffect, useRef, useState } from 'react'
import type { CSSProperties, ReactNode } from 'react'
import { cartasInvitados, escenas, fotosRecuerdos, manualPagina, mensajeCierre, mensajeFinal, umbralMessage } from '@/lib/data'
import { Butterfly, PlayingCard } from './icons'

export const TOTAL_STEPS = 5
const pokerSuits = ['♥', '♦', '♣', '♠']

// Scene artwork with the sizes it is displayed at, so Next.js serves each
// screen a resized WebP. The same props drive the preload in page.tsx.
type Art = Omit<ImageProps, 'alt'>
const background = (src: string): Art => ({ src, fill: true, sizes: '100vw' })
const art = {
  bjFondo: background(escenas.beetlejuice.fondo),
  bjPersonaje: { src: escenas.beetlejuice.personaje, width: 550, height: 454, sizes: '(max-width: 650px) 58vw, 30vw' },
  bjManual: { src: escenas.beetlejuice.manual, width: 283, height: 381, sizes: '(max-width: 650px) 62vw, 30vw' },
  noviaFondo: background(escenas.novia.fondo),
  noviaPersonaje: { src: escenas.novia.personaje, width: 373, height: 669, sizes: '(max-width: 650px) 52vw, 28vw' },
  frankFondo: background(escenas.frankenweenie.fondo),
  frankLogo: { src: escenas.frankenweenie.logo, width: 965, height: 258, sizes: '(max-width: 760px) 62vw, 34vw' },
  aliciaFondo: background(escenas.alicia.fondo),
  aliciaLogo: { src: escenas.alicia.logo, width: 920, height: 226, sizes: '(max-width: 760px) 55vw, 34vw' },
  jackFondo: background(escenas.jack.fondo),
  jackLogo: { src: escenas.jack.logo, width: 760, height: 272, sizes: '190px' },
} satisfies Record<string, Art>

export function preloadSceneArt() {
  Object.values(art).forEach((item) => {
    const { props } = getImageProps({ ...item, alt: '' })
    const img = new window.Image()
    if (props.sizes) img.sizes = props.sizes
    if (props.srcSet) img.srcset = props.srcSet
    img.src = props.src
  })
}

function shuffle<T>(items: T[]) {
  const result = [...items]
  for (let index = result.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1))
    ;[result[index], result[swapIndex]] = [result[swapIndex], result[index]]
  }
  return result
}

function createCardLayout(count: number) {
  return shuffle(Array.from({ length: count }, (_, index) => index)).map((order) => ({
    order,
    rotate: Math.round((Math.random() * 12 - 6) * 10) / 10,
  }))
}

// One shuffle per visit, so the deck looks the same on every copy of the page.
let cardLayoutCache: ReturnType<typeof createCardLayout> | null = null
function getCardLayout(count: number) {
  if (!cardLayoutCache || cardLayoutCache.length !== count) cardLayoutCache = createCardLayout(count)
  return cardLayoutCache
}

// Copies of a page drawn on a turning sheet render in their final state, without entrance animations.
const StillPage = createContext(false)
function useStill() {
  const reduce = useReducedMotion()
  return useContext(StillPage) || !!reduce
}

// Runs callbacks after a delay and cancels the pending ones on unmount.
function useTimeline() {
  const timers = useRef<number[]>([])
  useEffect(() => () => timers.current.forEach((timer) => window.clearTimeout(timer)), [])
  return (delay: number, callback: () => void) => { timers.current.push(window.setTimeout(callback, delay)) }
}

// Messages are written as template literals with manual line wraps: blank
// lines separate paragraphs, single line breaks are just wrapping.
function Paragraphs({ text }: { text: string }) {
  return <>{text.trim().split(/\n\s*\n/).map((paragraph, index) => <p key={index}>{paragraph.split('\n').map((line) => line.trim()).join(' ')}</p>)}</>
}

// The Nightmare Before Christmas font has no "ñ": draw it as an "n" with a tilde on top.
function WithEnye({ text }: { text: string }) {
  return <>{text.split(/(ñ)/).map((part, index) => part === 'ñ'
    ? <span key={index} className="enye" aria-label="ñ"><span aria-hidden="true">n</span><span className="enye-tilde" aria-hidden="true">~</span></span>
    : part)}</>
}

export function BeetlejuiceChapter({ onOpen }: { onOpen: () => void }) {
  const [phase, setPhase] = useState<'closed' | 'opening' | 'diving'>('closed')
  const reduce = useReducedMotion()
  const after = useTimeline()

  // The cover swings open on its spine, then the camera dives into the first page.
  const open = () => {
    if (phase !== 'closed') return
    if (reduce) return onOpen()
    setPhase('opening')
    after(6500, () => setPhase('diving'))
    after(7500, onOpen)
  }

  return <section className={`chapter beetlejuice is-${phase}`} aria-label="Bienvenida">
    <Image {...art.bjFondo} className="scene-bg beetlejuice-bg" alt="" preload />
    <Image {...art.bjPersonaje} className="beetlejuice-character" alt="Beetlejuice con traje a rayas" loading="eager" fetchPriority="high" />
    <div className="beetlejuice-manual">
      <div className="book">
        <div className="book-pages" aria-hidden={phase === 'closed'}>
          <p className="book-page-kicker">Manual · Página 1</p>
          <h2>{manualPagina.titulo}</h2>
          <p>{manualPagina.texto}</p>
          <span className="book-page-stamp">18</span>
        </div>
        <div className="book-cover">
          <div className="book-face book-front">
            <Image {...art.bjManual} alt="Manual para el recién cumplido 18" loading="eager" fetchPriority="high" />
            <button className="beetlejuice-open" onClick={open} disabled={phase !== 'closed'}>ABRIR</button>
          </div>
          <div className="book-face book-back" aria-hidden="true"><span>Ex libris · Mari</span></div>
        </div>
      </div>
    </div>
  </section>
}

export function ThresholdChapter() {
  return <section className="chapter threshold" aria-label="El cadáver de la novia">
    <Image {...art.noviaFondo} className="scene-bg" alt="" />
    <Image {...art.noviaPersonaje} className="threshold-emily" alt="Emily, la novia cadáver, de perfil" />
    <div className="threshold-card">
      <div className="threshold-scroll">
        <p className="threshold-kicker">Capítulo II · El Umbral</p>
        <h2 className="threshold-title">Un paso entre dos mundos</h2>
        <div className="threshold-message"><Paragraphs text={umbralMessage.message} /></div>
        <span className="threshold-signature">{umbralMessage.from}</span>
      </div>
    </div>
    <div className="threshold-butterflies" aria-hidden="true">
      {['tl', 'tr', 'bl', 'br'].map((corner) => <span key={corner} className={`neon-butterfly neon-butterfly-${corner}`}><Butterfly /></span>)}
    </div>
  </section>
}

export function AlbumChapter() {
  const reduce = useStill()
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null)
  const selected = selectedPhoto === null ? null : fotosRecuerdos[selectedPhoto]

  useEffect(() => {
    if (selectedPhoto === null) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedPhoto(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [selectedPhoto])

  return <section className="chapter album" aria-label="Álbum de recuerdos">
    <Image {...art.frankFondo} className="scene-bg" alt="" />
    <div className="album-inner">
      <Image {...art.frankLogo} className="album-brand" alt="Frankenweenie" />
      <motion.div className="album-heading" initial={reduce ? false : { opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .8, ease: [0.22, 1, 0.36, 1] }}>
        <p className="eyebrow">Capítulo III</p><h2>Una vida en <em>fotogramas</em></h2><p>Los mejores recuerdos siempre tienen personas especiales detrás</p>
      </motion.div>
      <div className="memory-grid">
        {fotosRecuerdos.map((photo, index) => {
          const big = photo.size === 'large' || photo.size === 'wide'
          return <motion.figure key={photo.id} className={`memory-card size-${photo.size ?? 'small'}`} initial={reduce ? false : { opacity: 0, y: 18, scale: .96 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ delay: .15 + Math.min(index, 10) * .06, duration: .6, ease: [0.22, 1, 0.36, 1] }}>
            <button type="button" className="memory-photo memory-open" onClick={() => setSelectedPhoto(index)} aria-label={`Ver ${photo.caption || `recuerdo ${photo.id}`} más grande`}>
              <Image src={photo.url} alt={photo.caption || `Recuerdo ${photo.id}`} fill sizes={big ? '(max-width: 760px) 90vw, 40vw' : '(max-width: 760px) 45vw, 20vw'} loading={index < 6 ? 'eager' : 'lazy'} />
            </button>
            {photo.caption && <figcaption>{photo.caption}<span aria-hidden="true">+</span></figcaption>}
          </motion.figure>
        })}
      </div>
    </div>
    <AnimatePresence>
      {selected && selectedPhoto !== null && <motion.div
        className="memory-zoom-backdrop"
        role="presentation"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: reduce ? 0 : .35 }}
        onClick={() => setSelectedPhoto(null)}
      >
        <motion.div
          className="memory-zoom"
          role="dialog"
          aria-modal="true"
          aria-label={selected.caption || `Recuerdo ${selected.id}`}
          initial={reduce ? false : { opacity: 0, scale: .82, y: 28 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={reduce ? undefined : { opacity: 0, scale: .92, y: 18 }}
          transition={{ duration: reduce ? 0 : .5, ease: [0.22, 1, .36, 1] }}
          onClick={(event) => event.stopPropagation()}
        >
          <button type="button" className="memory-zoom-close" onClick={() => setSelectedPhoto(null)} aria-label="Cerrar imagen ampliada">×</button>
          <div className="memory-zoom-image">
            <img src={selected.url} alt={selected.caption || `Recuerdo ${selected.id}`} />
          </div>
          {selected.caption && <p className="memory-zoom-caption">{selected.caption}</p>}
        </motion.div>
      </motion.div>}
    </AnimatePresence>
  </section>
}

function CardFace({ suit, name, isRead }: { suit: string; name: string; isRead: boolean }) {
  return <>
    <span className="card-corner card-corner-top"><strong>A</strong><b>{suit}</b></span>
    <span className="card-corner card-corner-bottom"><strong>A</strong><b>{suit}</b></span>
    <span className="poker-center-suit" aria-hidden="true">{suit}</span>
    <strong className="poker-name">{name}</strong>
    <span className="card-invite">{isRead ? 'leída' : 'abrir mensaje'}</span>
  </>
}

const suitOf = (index: number) => pokerSuits[index % pokerSuits.length]
const suitClass = (suit: string) => suit === '♥' || suit === '♦' ? 'suit-red' : 'suit-black'

// Where a table card sits relative to the screen center, so the big card can
// start exactly on top of it and fly to the middle (and back when it closes).
type CardOrigin = { x: number; y: number; scale: number; rotate: number; width: number }

export function WishesChapter() {
  const [selected, setSelected] = useState<number | null>(null)
  const [awayCard, setAwayCard] = useState<number | null>(null)
  const [origin, setOrigin] = useState<CardOrigin | null>(null)
  const [frontCard, setFrontCard] = useState<number | null>(null)
  const [readCards, setReadCards] = useState<number[]>([])
  const [cardLayout] = useState(() => getCardLayout(cartasInvitados.length))
  const cardRefs = useRef<(HTMLButtonElement | null)[]>([])
  const tableRef = useRef<HTMLDivElement>(null)
  const [deck, setDeck] = useState<{ card: number; columns: number } | null>(null)
  const reduce = useReducedMotion()

  // Pick the largest card size that fits the whole deck on the table, whatever the screen and the number of cards.
  useLayoutEffect(() => {
    const table = tableRef.current
    if (!table) return
    const fit = () => {
      const style = getComputedStyle(table)
      const width = table.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight)
      const height = table.clientHeight - parseFloat(style.paddingTop) - parseFloat(style.paddingBottom)
      const gap = parseFloat(style.rowGap) || 0
      const count = cartasInvitados.length
      const largest = Math.min(150, width * .3)
      let best = { card: 0, columns: count }
      for (let columns = 1; columns <= count; columns++) {
        const rows = Math.ceil(count / columns)
        const byWidth = width / (columns * .92 + .08)
        const byHeight = (height - gap * (rows - 1)) / rows * .63
        const card = Math.min(byWidth, byHeight, largest)
        if (card > best.card) best = { card, columns }
      }
      // Spread the cards evenly over the rows (6 + 5 instead of 10 + 1).
      const rows = Math.ceil(count / best.columns)
      setDeck({ card: Math.floor(best.card * .96), columns: Math.ceil(count / rows) })
    }
    fit()
    const observer = new ResizeObserver(fit)
    observer.observe(table)
    return () => observer.disconnect()
  }, [])
  const guest = selected === null ? null : cartasInvitados[selected]

  const measure = (index: number): CardOrigin => {
    const card = cardRefs.current[index]
    const width = Math.min(window.innerWidth * .92, 560, (window.innerHeight - 40) * .63)
    if (!card) return { x: 0, y: 0, scale: .3, rotate: 0, width }
    const rect = card.getBoundingClientRect()
    return { x: rect.left + rect.width / 2 - window.innerWidth / 2, y: rect.top + rect.height / 2 - window.innerHeight / 2, scale: card.offsetWidth / width, rotate: cardLayout[index].rotate, width }
  }

  const show = (index: number) => {
    setReadCards((cards) => cards.includes(index) ? cards : [...cards, index])
    setOrigin(measure(index))
    setAwayCard(index)
    setSelected(index)
  }
  const close = () => setSelected(null)

  useEffect(() => {
    if (selected === null) return
    const onKey = (event: KeyboardEvent) => { if (event.key === 'Escape') close() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [selected])

  // First tap brings a card forward, the second one brings it close and turns it over.
  const openCard = (index: number) => {
    if (frontCard !== index) return setFrontCard(index)
    if (selected === null) show(index)
  }

  const flight = { duration: reduce ? 0 : .85, ease: [0.65, 0, 0.25, 1] as const }
  const atTable = origin && { x: origin.x, y: origin.y, scale: origin.scale, rotate: origin.rotate, rotateY: 0 }

  return <section className="chapter wishes" aria-label="Mesa de los deseos">
    <Image {...art.aliciaFondo} className="scene-bg" alt="" />
    <Image {...art.aliciaLogo} className="wishes-logo" alt="Alicia en el País de las Maravillas" />
    <div className="card-fall" aria-hidden="true"><PlayingCard /><PlayingCard /><PlayingCard /></div>
    <div className="wishes-header"><p className="eyebrow">Capítulo IV</p><h2>La mesa de<br /><em>los deseos</em></h2><p>Elige una carta. Hay palabras esperando por ti.</p></div>
    <div className="wish-table" ref={tableRef}>
      <div className="wish-deck" style={deck ? { '--card-w': `${deck.card}px`, '--deck-columns': deck.columns } as CSSProperties : undefined}>
      {cartasInvitados.map((card, index) => {
        const suit = suitOf(index)
        const isRead = readCards.includes(index)
        const classes = ['wish-card', suitClass(suit), frontCard === index && 'is-front', awayCard === index && 'is-away', isRead && 'is-read'].filter(Boolean).join(' ')
        return <button key={card.id} ref={(element) => { cardRefs.current[index] = element }} className={classes} style={{ '--card-order': cardLayout[index].order, '--card-rotation': `${cardLayout[index].rotate}deg`, '--card-z': frontCard === index ? 30 : isRead ? 10 + readCards.indexOf(index) : 1, '--drop-index': index } as CSSProperties} onMouseEnter={() => setFrontCard(index)} onFocus={() => setFrontCard(index)} onClick={() => openCard(index)} aria-label={`Carta de ${card.nombre}`}>
          <span className="wish-face wish-front"><CardFace suit={suit} name={card.nombre} isRead={isRead} /></span>
        </button>
      })}
      </div>
    </div>
    <div className="wish-clock" aria-hidden="true" />

    <AnimatePresence onExitComplete={() => setAwayCard(null)}>{guest && selected !== null && origin && atTable && <motion.div className="wish-zoom-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: .5, delay: .3 } }} transition={{ duration: .45 }} onClick={close}>
      <motion.div className={`wish-zoom ${suitClass(suitOf(selected))}`} role="dialog" aria-modal="true" aria-label={`Mensaje de ${guest.nombre}`} style={{ width: origin.width, transformPerspective: 1600 }} initial={atTable} animate={{ x: 0, y: 0, scale: 1, rotate: 0, rotateY: 180 }} exit={atTable} transition={flight} onClick={(event) => event.stopPropagation()}>
        <div className="wish-face wish-front" aria-hidden="true"><CardFace suit={suitOf(selected)} name={guest.nombre} isRead={false} /></div>
        <div className="wish-zoom-back">
          <button className="modal-close" onClick={close} aria-label="Cerrar mensaje">×</button>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div key={guest.id} className="wish-letter" initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={{ duration: .3 }}>
              <Image src={guest.fotoInvitado} alt="" width={132} height={132} sizes="132px" />
              <p className="eyebrow"></p>
              <h3>{guest.nombre}</h3>
              <div className="guest-message"><Paragraphs text={guest.mensaje} /></div>
            </motion.div>
          </AnimatePresence>
          {cartasInvitados.length > 1 && <button className="text-button" onClick={() => show((selected + 1) % cartasInvitados.length)}>Siguiente mensaje <span>→</span></button>}
          <span className="wish-letter-suit wish-letter-suit-top" aria-hidden="true">{suitOf(selected)}</span>
          <span className="wish-letter-suit wish-letter-suit-bottom" aria-hidden="true">{suitOf(selected)}</span>
        </div>
      </motion.div>
    </motion.div>}</AnimatePresence>
  </section>
}

export function FinaleChapter({ onRestart }: { onRestart: () => void }) {
  const reduce = useStill()
  const ease = [0.22, 1, 0.36, 1] as const
  return <section className="chapter finale" aria-label="Deseo final">
    <Image {...art.jackFondo} className="scene-bg finale-bg" alt="" />
    <div className="finale-vignette" aria-hidden="true" />
    <motion.div className="jack-wordmark" initial={reduce ? false : { opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .9, ease }}>
      <Image {...art.jackLogo} alt="El extraño mundo de Jack" />
    </motion.div>
    <motion.div className="finale-content" initial={reduce ? false : { opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .25, duration: .9, ease }}>
      <div className="finale-kicker"><span /> CAPÍTULO V <b>·</b> EL DESEO FINAL <span /></div>
      <h2><WithEnye text={mensajeFinal.title} /></h2>
      <div className="skull-rule" aria-hidden="true"><span />✦<span /></div>
      <div className="finale-copy"><Paragraphs text={mensajeFinal.message} /></div>
      <button className="finale-button" onClick={onRestart}>Cerrar el libro <span>→</span></button>
    </motion.div>
  </section>
}

export function EndingScreen({ onRestart, onClosingStart }: { onRestart: () => void; onClosingStart: () => void }) {
  const reduce = useReducedMotion()
  const [phase, setPhase] = useState<'phrase' | 'closing'>('phrase')
  const restartRef = useRef(onRestart)
  const closingStartRef = useRef(onClosingStart)

  useEffect(() => {
    restartRef.current = onRestart
  }, [onRestart])

  useEffect(() => {
    closingStartRef.current = onClosingStart
  }, [onClosingStart])

  useEffect(() => {
    const phraseDuration = reduce ? 1500 : 4000
    const closeDuration = reduce ? 1000 : 2100
    const closingTimer = window.setTimeout(() => {
      setPhase('closing')
      closingStartRef.current()
    }, phraseDuration)
    const restartTimer = window.setTimeout(() => restartRef.current(), phraseDuration + closeDuration)
    return () => {
      window.clearTimeout(closingTimer)
      window.clearTimeout(restartTimer)
    }
  }, [reduce])

  return <motion.section
    className={`ending-screen is-${phase}`}
    aria-label="Cierre del libro"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: reduce ? 0 : 1.2, ease: 'easeOut' }}
  >
    <p className="ending-phrase">{mensajeCierre}</p>
    {phase === 'closing' && <div className="ending-book" aria-hidden="true">
      <div className="ending-book-shell">
        <div className="ending-book-pages">
          <p className="book-page-kicker">Manual · Página 1</p>
          <h2>{manualPagina.titulo}</h2>
          <p>{manualPagina.texto}</p>
          <span className="book-page-stamp">18</span>
        </div>
        <div className="ending-book-cover">
          <div className="ending-book-front">
            <Image {...art.bjManual} alt="" loading="eager" />
          </div>
        </div>
      </div>
    </div>}
  </motion.section>
}

export function ChapterNav({ step, onPrevious, onNext }: { step: number; onPrevious: () => void; onNext: () => void }) {
  return <nav className={`chapter-nav nav-step-${step}`} aria-label="Capítulos">
    <button onClick={onPrevious} disabled={step === 1}>← <span>Anterior</span></button>
    <div className="progress-dots" aria-label={`Capítulo ${step} de ${TOTAL_STEPS}`}>{Array.from({ length: TOTAL_STEPS }, (_, i) => <span key={i} className={step === i + 1 ? 'active' : ''} />)}</div>
    <button onClick={onNext} disabled={step === TOTAL_STEPS}><span>Siguiente capítulo</span> →</button>
  </nav>
}

const chapters: Record<number, (props: { onOpen: () => void; onRestart: () => void }) => ReactNode> = {
  1: ({ onOpen }) => <BeetlejuiceChapter onOpen={onOpen} />,
  2: () => <ThresholdChapter />,
  3: () => <AlbumChapter />,
  4: () => <WishesChapter />,
  5: ({ onRestart }) => <FinaleChapter onRestart={onRestart} />,
}

// ---------------------------------------------------------------------------
// PAGE TURN: while changing chapter the screen becomes an open book with the
// spine in the middle. Going forward, the right half of the current page lifts
// towards the reader and turns over to the left, carrying the left half of the
// next chapter on its back. Going back, the left half turns over to the right.
// The sheets show still copies of the chapters; the real next chapter is
// already mounted underneath, so it is ready the moment the sheet lands.
// ---------------------------------------------------------------------------
type Turn = { id: number; from: number; to: number; dir: number }
const TURN_SECONDS = 1.2
const noop = () => {}

function PageCopy({ step, half }: { step: number; half: 'left' | 'right' }) {
  return <div className={`page-copy page-copy-${half}`} aria-hidden="true" inert>
    <StillPage.Provider value={true}>{chapters[step]({ onOpen: noop, onRestart: noop })}</StillPage.Provider>
  </div>
}

function PageTurn({ turn, onDone }: { turn: Turn; onDone: () => void }) {
  const forward = turn.dir > 0
  const transition = { duration: TURN_SECONDS, ease: [0.5, 0, 0.35, 1] as const }
  // The sheet darkens as it rises off the page and brightens again as it lands.
  const shade = (rising: boolean) => ({ opacity: rising ? [0, .55, .55] : [.55, .55, 0], transition: { ...transition, times: [0, .5, 1] } })
  return <div className="page-turn">
    <div className={`turn-half turn-half-${forward ? 'left' : 'right'}`}><PageCopy step={turn.from} half={forward ? 'left' : 'right'} /></div>
    <motion.div className="turn-gutter" initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 1, 0] }} transition={{ duration: TURN_SECONDS, times: [0, .15, .85, 1] }} />
    <motion.div className={`turn-sheet turn-sheet-${forward ? 'right' : 'left'}`} style={{ transformPerspective: 2800 }} initial={{ rotateY: 0 }} animate={{ rotateY: forward ? -180 : 180 }} transition={transition} onAnimationComplete={onDone}>
      <div className="sheet-face sheet-front">
        <PageCopy step={turn.from} half={forward ? 'right' : 'left'} />
        <motion.span className="sheet-shade" initial={{ opacity: 0 }} animate={shade(true)} />
      </div>
      <div className="sheet-face sheet-back">
        <PageCopy step={turn.to} half={forward ? 'left' : 'right'} />
        <motion.span className="sheet-shade" initial={{ opacity: .55 }} animate={shade(false)} />
      </div>
    </motion.div>
  </div>
}

export function ChapterScene({ step, direction, onOpen, onRestart, disableTurn = false }: { step: number; direction: number; onOpen: () => void; onRestart: () => void; disableTurn?: boolean }) {
  const reduce = useReducedMotion()
  const [shown, setShown] = useState(step)
  const [turning, setTurning] = useState<Turn | null>(null)
  const [fadeIn, setFadeIn] = useState(false)
  const turnId = useRef(0)

  // Start the turn in the same render the chapter changes, so the new page never flashes first.
  if (step !== shown) {
    const fromCover = shown === 1
    setShown(step)
    setFadeIn(fromCover)
    // Leaving the cover the book has already opened and faded to black, so the next page simply fades in.
    setTurning(fromCover || reduce || disableTurn ? null : { id: ++turnId.current, from: shown, to: step, dir: direction })
  }

  return <>
    <motion.div key={`page-${shown}`} className="scene" initial={fadeIn ? { opacity: 0 } : false} animate={{ opacity: 1 }} transition={{ duration: .8, ease: 'easeOut' }}>
      {chapters[shown]({ onOpen, onRestart })}
    </motion.div>
    {turning && <PageTurn key={`turn-${turning.id}`} turn={turning} onDone={() => setTurning((current) => current?.id === turning.id ? null : current)} />}
  </>
}
