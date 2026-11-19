// ============================================================================
// EDITABLE DATA STRUCTURE FOR MARI'S 18TH BIRTHDAY EXPERIENCE
// ============================================================================
// Modify the arrays and messages below to customize the content without
// touching the component code. Each section is clearly labeled.
//
// Images live in /public/18anos/resources-18anos/<chapter folder>/ and are
// referenced from "/18anos/resources-18anos/...". To add a photo or a card,
// copy one entry of its array and change the values: the layout adapts to
// any number of items.

const recursos = "/18anos/resources-18anos";

// SCENE ARTWORK: backgrounds, logos and characters of each chapter
export const escenas = {
  beetlejuice: {
    fondo: `${recursos}/1 - Beetlejuice/fondo.webp`,
    personaje: `${recursos}/1 - Beetlejuice/personaje.webp`,
    manual: `${recursos}/1 - Beetlejuice/manual.webp`,
  },
  novia: {
    fondo: `${recursos}/2 - el cadaver de la novia/fondo.webp`,
    personaje: `${recursos}/2 - el cadaver de la novia/emily.webp`,
  },
  frankenweenie: {
    fondo: `${recursos}/4 - Frankeewenie/fondo.webp`,
    logo: `${recursos}/4 - Frankeewenie/logo.webp`,
  },
  alicia: {
    fondo: `${recursos}/3 - Alicia en el pais de las maravillas/fondo.webp`,
    logo: `${recursos}/3 - Alicia en el pais de las maravillas/logo.webp`,
  },
  jack: {
    fondo: `${recursos}/5 - El extrano mundo de Jack/fondo.webp`,
    logo: `${recursos}/5 - El extrano mundo de Jack/logo.webp`,
  },
};

// CHAPTER 1: BEETLEJUICE - First page of the manual (seen when the book opens)
export const manualPagina = {
  titulo: "Bienvenida, Mari",
  texto: "Acabas de cruzar al otro lado de los 18. Este manual te guiará por cinco mundos extraños e inusuales.",
};

// CHAPTER 2: EL CADÁVER DE LA NOVIA - The Threshold Message
export const umbralMessage = {
  from: "Tu familia",
  message: `Mari,

Hoy es un día especial. No es solamente un cumpleaños más, es el comienzo de una nueva etapa, una puerta que se abre hacia un mundo lleno de posibilidades, sueños y experiencias que todavía esperan por ti.

Dieciocho años de historias, aprendizajes, alegrías, pequeños momentos y personas que han tenido la dicha de acompañarte en el camino. Cada uno de esos instantes ha contribuido a formar la persona maravillosa que eres hoy.

Y si hay algo que queremos que tengas presente en este día, es que nunca has recorrido ese camino sola. Detrás de ti hay una familia que te ha visto crecer, que celebra tus logros, que guarda con cariño cada recuerdo y que, por encima de todo, te quiere profundamente.

Hoy queremos invitarte a mirar hacia atrás, a recordar de dónde vienes, las personas que han formado parte de tu historia y todo el amor que te ha acompañado hasta aquí.

Porque cumplir dieciocho años no significa dejar atrás todo lo vivido, sino llevarlo contigo mientras descubres todo lo que está por venir.

Esta historia es tuya, pero hay muchas personas que tienen un pedacito de ella. Y todas ellas están aquí para celebrar contigo.

Con todo nuestro amor
`,
};

// CHAPTER 3: FRANKENWEENIE - Photo Album of Memories
// Array of memory photos with optional captions.
// size: 'small' (1x1) | 'medium' (1x2, tall) | 'large' (2x2) | 'wide' (2x1)
export type FotoRecuerdo = { id: number; url: string; caption?: string; size?: "small" | "medium" | "large" | "wide" };

export const fotosRecuerdos: FotoRecuerdo[] = [
  {
    id: 1,
    url: "/18anos/resources-18anos/familyImg/dinny.jpeg",
    caption: "El mejor papá del mundo",
    size: "large",
  },
  {
    id: 2,
    url: "/18anos/resources-18anos/familyImg/wen.jpeg",
    caption: "La mejor Madrina del mundo",
    size: "large",
  },
  {
    id: 3,
    url: "/18anos/resources-18anos/familyImg/cindy.jpeg",
    caption: "La mejor tía del mundo",
    size: "large",
  },
  {
    id: 4,
    url: "/18anos/resources-18anos/familyImg/noa.png",
    caption: "Tu primo más loquillo",
    size: "medium",
  },
  {
    id: 5,
    url: "/18anos/resources-18anos/familyImg/gaby.jpeg",
    caption: "La mejor tía del mundo",
    size: "large",
  },
  {
    id: 6,
    url: "/18anos/resources-18anos/familyImg/samiKiki.jpeg",
    caption: "Tus primos más pegas",
    size: "large",
  },
  {
    id: 7,
    url: "/18anos/resources-18anos/familyImg/chris.jpeg",
    caption: "Tu amorsh",
    size: "medium",
  },
  { id: 8, url: "/18anos/resources-18anos/familyImg/imagen 1.jpeg", size: "large" },
  { id: 9, url: "/18anos/resources-18anos/familyImg/imagen 2.jpeg", size: "large" },
  { id: 10, url: "/18anos/resources-18anos/familyImg/imagen 3.jpeg", size: "large" },
  { id: 11, url: "/18anos/resources-18anos/familyImg/imagen 4.jpeg", size: "large" },
  { id: 12, url: "/18anos/resources-18anos/familyImg/imagen 5.jpeg", size: "large" },
  { id: 13, url: "/18anos/resources-18anos/familyImg/imagen 6.jpeg", size: "large" },
  { id: 14, url: "/18anos/resources-18anos/familyImg/imagen 7.jpeg", size: "large" },
  { id: 15, url: "/18anos/resources-18anos/familyImg/imagen 8.jpeg", size: "large" },
  { id: 16, url: "/18anos/resources-18anos/familyImg/imagen 9.jpeg", size: "large" },
  { id: 17, url: "/18anos/resources-18anos/familyImg/imagen 10.jpeg", size: "medium" },
  { id: 18, url: "/18anos/resources-18anos/familyImg/imagen 11.jpeg", size: "large" },
  { id: 19, url: "/18anos/resources-18anos/familyImg/imagen 12.jpeg", size: "large" },
  { id: 20, url: "/18anos/resources-18anos/familyImg/imagen 13.jpeg", size: "large" }
];

// CHAPTER 4: ALICIA EN EL PAÍS DE LAS MARAVILLAS - Table of Wishes
// Array of guest messages (one playing card per entry)
export type CartaInvitado = { id: number; nombre: string; mensaje: string; fotoInvitado: string };

export const cartasInvitados: CartaInvitado[] = [
  {
    id: 1,
    nombre: "Papi",
    mensaje: `Mi amor sos una gran mujer e hija… que Dios te permita cumplir todos tus sueños y que siempre seas la persona que ahora eres: simpática, amable, 
    sencilla, amorosa, detallista, comprensible, educada… TE AMO… Felices 18…`,
    fotoInvitado: "/18anos/resources-18anos/familyImg/dinny.jpeg",
  },
  {
    id: 2,
    nombre: "Madri",
    mensaje: `Mi Mari hermosa ❤️ Que Diosito guíe siempre tus pasos, que nunca dejés de soñar y que jamás permitás que nadie apague tu luz. 
    Recordá que tu madrina siempre va a estar para vos. ¡Te amo montones, ahijada! ❤️😘`,
    fotoInvitado: "/18anos/resources-18anos/familyImg/wen.jpeg",
  },
  {
    id: 3,
    nombre: "Tía Cindy 🩷",
    mensaje: `Mi peque estoy muy orgullosa en la mujer que te has convertido. Lucha siempre por lo que te hace feliz! Te Amo 💕  Feliz vida!`,
    fotoInvitado: "/18anos/resources-18anos/familyImg/cindy.jpeg",
  },
  {
    id: 4,
    nombre: "Noah",
    mensaje: `¡Feliz cumple, Mari! Qué suerte la mía de crecer teniendo una prima tan linda como tú. ¡Felices 18, te quiero mucho!"`,
    fotoInvitado: "/18anos/resources-18anos/familyImg/noa.png",
  },
  {
    id: 5,
    nombre: "Tía Gaby",
    mensaje: `¡Marigel!Empiezas una etapa increíble llena de libertad, nuevos retos y sueños por cumplir. Que la vida siempre te sonría y nunca pierdas esa esencia
     tan especial que te hace única y loquita. Siempre cuentas conmigo.! Te Amo! 🦋`,
    fotoInvitado: "/18anos/resources-18anos/familyImg/gaby.jpeg",
  },
  {
    id: 6,
    nombre: "Sami y Kiki",
    mensaje: `Te amamos prima eres la mejor del mundo ❤️`,
    fotoInvitado: "/18anos/resources-18anos/familyImg/samiKiki.jpeg",
  },
  {
    id: 7,
    nombre: "Amor",
    mensaje: `a`,
    fotoInvitado: "/18anos/resources-18anos/familyImg/chris.jpeg",
  }
];

// CHAPTER 5: EL EXTRAÑO MUNDO DE JACK - Final Wish
export const mensajeFinal = {
  title: "Dieciocho años de magia",
  message: `Querida Mari,

Y así llegamos al final de este pequeño recorrido, aunque sabemos que tu historia está lejos de terminar.

Hoy cumples dieciocho años. Una edad que marca el comienzo de muchas cosas nuevas: sueños por perseguir, caminos por descubrir, decisiones por tomar y experiencias que algún día se convertirán en nuevos recuerdos.

No sabemos exactamente qué te espera en los próximos años, pero sí hay algo que queremos que nunca olvides: no importa cuánto cambie la vida, cuántos caminos recorras o qué tan lejos te lleven tus sueños, siempre tendrás un lugar al que pertenecer y personas con quienes contar.

Somos quienes hemos compartido contigo tantos momentos, quienes hemos visto crecer tu sonrisa, quienes guardamos recuerdos de cada etapa y quienes seguiremos celebrando cada paso que des.

Deseamos que nunca pierdas esa luz que te hace ser tú. Que tengas el valor de perseguir lo que te hace feliz, la fortaleza para superar los días difíciles y la sabiduría para disfrutar incluso de las cosas más pequeñas.

Y cuando la vida te lleve por caminos desconocidos, recuerda todo lo que has vivido, todo lo que has aprendido y, sobre todo, todo el amor que te rodea.

Porque si algo esperamos que te lleves de estos dieciocho años, es la certeza de que eres profundamente amada. No solamente hoy, no solamente en las celebraciones, sino en cada día, en cada etapa y en cada versión de ti que esté por venir.

Hoy celebramos tus dieciocho años, pero también celebramos la suerte de tenerte en nuestras vidas.

Que esta nueva aventura esté llena de magia, de sueños cumplidos y de momentos que algún día quieras recordar.

Y aunque este libro llegue a su última página, queremos que sepas que siempre estaremos aquí para acompañarte en los capítulos que siguen.

Con todo nuestro amor,

Tu familia.`,
};

export const mensajeCierre = "Las historias más bonitas nunca terminan. Simplemente encuentran nuevas formas de continuar. Y nosotros estaremos ahí para vivirlas contigo.";
