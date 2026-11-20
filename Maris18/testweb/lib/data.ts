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
  from: "Tu pequena gran familia",
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
size: "large",
},
{
id: 2,
url: "/18anos/resources-18anos/familyImg/pao.jpeg",
size: "large",
},
{
id: 3,
url: "/18anos/resources-18anos/familyImg/bran.jpeg",
size: "large",
},
{
id: 4,
url: "/18anos/resources-18anos/familyImg/eva.jpeg",
size: "large",
},
{
id: 5,
url: "/18anos/resources-18anos/familyImg/marcos.jpeg",
size: "large",
},
{
id: 6,
url: "/18anos/resources-18anos/familyImg/jimena.jpeg",
size: "large",
},
{
id: 7,
url: "/18anos/resources-18anos/familyImg/wen.jpeg",
size: "large",
},
{
id: 8,
url: "/18anos/resources-18anos/familyImg/cindy.jpeg",
size: "large",
},
{
id: 9,
url: "/18anos/resources-18anos/familyImg/noa.png",
size: "medium",
},
{
id: 10,
url: "/18anos/resources-18anos/familyImg/dey.jpeg",
size: "medium",
},
{
id: 11,
url: "/18anos/resources-18anos/familyImg/gaby.jpeg",
size: "large",
},
{
id: 12,
url: "/18anos/resources-18anos/familyImg/samiKiki.jpeg",
size: "large",
},
{
id: 13,
url: "/18anos/resources-18anos/familyImg/chris.jpeg",
size: "medium",
},
{
id: 14,
url: "/18anos/resources-18anos/familyImg/macha.jpeg",
size: "medium",
},
{ id: 15, url: "/18anos/resources-18anos/familyImg/imagen 101.png", size: "large" },
{
id: 16,
url: "/18anos/resources-18anos/familyImg/paula.png",
size: "medium",
},
{
id: 17,
url: "/18anos/resources-18anos/familyImg/joshua.jpeg",
size: "large",
},
{ id: 18, url: "/18anos/resources-18anos/familyImg/imagen 94.jpeg", size: "large" },
{ id: 19, url: "/18anos/resources-18anos/familyImg/imagen 95.png", size: "large" },
{ id: 20, url: "/18anos/resources-18anos/familyImg/imagen 1.jpeg", size: "large" },
{ id: 21, url: "/18anos/resources-18anos/familyImg/imagen 2.jpeg", size: "large" },
{ id: 22, url: "/18anos/resources-18anos/familyImg/imagen 3.jpeg", size: "large" },
{ id: 23, url: "/18anos/resources-18anos/familyImg/imagen 98.png", size: "large" },
{ id: 24, url: "/18anos/resources-18anos/familyImg/imagen 4.jpeg", size: "large" },
{ id: 25, url: "/18anos/resources-18anos/familyImg/imagen 5.jpeg", size: "large" },
{ id: 26, url: "/18anos/resources-18anos/familyImg/imagen 6.jpeg", size: "large" },
{ id: 27, url: "/18anos/resources-18anos/familyImg/imagen 7.jpeg", size: "large" },
{ id: 28, url: "/18anos/resources-18anos/familyImg/imagen 96.png", size: "medium" },
{ id: 29, url: "/18anos/resources-18anos/familyImg/imagen 8.jpeg", size: "large" },
{ id: 30, url: "/18anos/resources-18anos/familyImg/imagen 9.jpeg", size: "large" },
{ id: 31, url: "/18anos/resources-18anos/familyImg/imagen 10.jpeg", size: "medium" },
{ id: 32, url: "/18anos/resources-18anos/familyImg/imagen 11.jpeg", size: "large" },
{ id: 33, url: "/18anos/resources-18anos/familyImg/imagen 100.png", size: "large" },
{ id: 34, url: "/18anos/resources-18anos/familyImg/imagen 12.jpeg", size: "large" },
{ id: 35, url: "/18anos/resources-18anos/familyImg/imagen 13.jpeg", size: "large" },
{ id: 36, url: "/18anos/resources-18anos/familyImg/imagen 14.jpeg", size: "large" },
{ id: 37, url: "/18anos/resources-18anos/familyImg/imagen 97.png", size: "large" },
{ id: 38, url: "/18anos/resources-18anos/familyImg/imagen 15.jpeg", size: "large" },
{ id: 39, url: "/18anos/resources-18anos/familyImg/imagen 16.jpeg", size: "large" },
{ id: 40, url: "/18anos/resources-18anos/familyImg/imagen 17.jpeg", size: "large" },
{ id: 41, url: "/18anos/resources-18anos/familyImg/imagen 18.jpeg", size: "large" },
{ id: 42, url: "/18anos/resources-18anos/familyImg/imagen 99.png", size: "large" },
{ id: 43, url: "/18anos/resources-18anos/familyImg/imagen 19.jpeg", size: "large" },
{ id: 44, url: "/18anos/resources-18anos/familyImg/imagen 20.jpeg", size: "medium" },
{ id: 45, url: "/18anos/resources-18anos/familyImg/imagen 21.jpeg", size: "large" },
{ id: 46, url: "/18anos/resources-18anos/familyImg/imagen 22.jpeg", size: "medium" },
{ id: 47, url: "/18anos/resources-18anos/familyImg/imagen 23.jpeg", size: "large" },
{ id: 48, url: "/18anos/resources-18anos/familyImg/imagen 24.jpeg", size: "large" },
{ id: 49, url: "/18anos/resources-18anos/familyImg/imagen 25.jpeg", size: "large" },
{ id: 50, url: "/18anos/resources-18anos/familyImg/imagen 27.jpeg", size: "large" },
{ id: 51, url: "/18anos/resources-18anos/familyImg/imagen 28.jpeg", size: "large" },
{ id: 52, url: "/18anos/resources-18anos/familyImg/imagen 29.jpeg", size: "large" },
{ id: 53, url: "/18anos/resources-18anos/familyImg/imagen 30.jpeg", size: "large" },
{ id: 54, url: "/18anos/resources-18anos/familyImg/imagen 31.jpeg", size: "large" },
{ id: 55, url: "/18anos/resources-18anos/familyImg/imagen 32.jpeg", size: "large" },
{ id: 56, url: "/18anos/resources-18anos/familyImg/imagen 33.jpeg", size: "large" },
{ id: 57, url: "/18anos/resources-18anos/familyImg/imagen 34.jpeg", size: "large" },
{ id: 58, url: "/18anos/resources-18anos/familyImg/imagen 35.jpeg", size: "large" },
{ id: 59, url: "/18anos/resources-18anos/familyImg/imagen 36.jpeg", size: "large" },
{ id: 60, url: "/18anos/resources-18anos/familyImg/imagen 37.jpeg", size: "large" },
{ id: 61, url: "/18anos/resources-18anos/familyImg/imagen 38.jpeg", size: "large" },
{ id: 62, url: "/18anos/resources-18anos/familyImg/imagen 39.jpeg", size: "large" },
{ id: 63, url: "/18anos/resources-18anos/familyImg/imagen 40.jpeg", size: "large" },
{ id: 64, url: "/18anos/resources-18anos/familyImg/imagen 41.jpeg", size: "large" },
{ id: 65, url: "/18anos/resources-18anos/familyImg/imagen 42.jpeg", size: "large" },
{ id: 66, url: "/18anos/resources-18anos/familyImg/imagen 43.jpeg", size: "large" },
{ id: 67, url: "/18anos/resources-18anos/familyImg/imagen 44.jpeg", size: "large" },
{ id: 68, url: "/18anos/resources-18anos/familyImg/imagen 45.jpeg", size: "large" },
{ id: 69, url: "/18anos/resources-18anos/familyImg/imagen 46.jpeg", size: "large" },
{ id: 70, url: "/18anos/resources-18anos/familyImg/imagen 47.jpeg", size: "large" },
{ id: 71, url: "/18anos/resources-18anos/familyImg/imagen 48.jpeg", size: "large" },
{ id: 72, url: "/18anos/resources-18anos/familyImg/imagen 49.jpeg", size: "large" },
{ id: 73, url: "/18anos/resources-18anos/familyImg/imagen 50.jpeg", size: "large" },
{ id: 74, url: "/18anos/resources-18anos/familyImg/imagen 51.jpeg", size: "large" },
{ id: 75, url: "/18anos/resources-18anos/familyImg/imagen 52.jpeg", size: "large" },
{ id: 76, url: "/18anos/resources-18anos/familyImg/imagen 53.jpeg", size: "large" },
{ id: 77, url: "/18anos/resources-18anos/familyImg/imagen 54.jpeg", size: "large" },
{ id: 78, url: "/18anos/resources-18anos/familyImg/imagen 55.jpeg", size: "large" },
{ id: 79, url: "/18anos/resources-18anos/familyImg/imagen 56.jpeg", size: "large" },
{ id: 80, url: "/18anos/resources-18anos/familyImg/imagen 57.jpeg", size: "medium" },
{ id: 81, url: "/18anos/resources-18anos/familyImg/imagen 58.jpeg", size: "medium" },
{ id: 82, url: "/18anos/resources-18anos/familyImg/imagen 59.jpeg", size: "medium" },
{ id: 83, url: "/18anos/resources-18anos/familyImg/imagen 60.jpeg", size: "large" },
{ id: 84, url: "/18anos/resources-18anos/familyImg/imagen 61.jpeg", size: "large" },
{ id: 85, url: "/18anos/resources-18anos/familyImg/imagen 62.jpeg", size: "large" },
{ id: 86, url: "/18anos/resources-18anos/familyImg/imagen 63.jpeg", size: "large" },
{ id: 87, url: "/18anos/resources-18anos/familyImg/imagen 64.jpeg", size: "large" },
{ id: 88, url: "/18anos/resources-18anos/familyImg/imagen 65.jpeg", size: "large" },
{ id: 89, url: "/18anos/resources-18anos/familyImg/imagen 66.jpeg", size: "large" },
{ id: 90, url: "/18anos/resources-18anos/familyImg/imagen 67.jpeg", size: "large" },
{ id: 91, url: "/18anos/resources-18anos/familyImg/imagen 68.jpeg", size: "large" },
{ id: 92, url: "/18anos/resources-18anos/familyImg/imagen 69.jpeg", size: "large" },
{ id: 93, url: "/18anos/resources-18anos/familyImg/imagen 70.jpeg", size: "large" },
{ id: 94, url: "/18anos/resources-18anos/familyImg/imagen 71.jpeg", size: "medium" },
{ id: 95, url: "/18anos/resources-18anos/familyImg/imagen 72.jpeg", size: "large" },
{ id: 96, url: "/18anos/resources-18anos/familyImg/imagen 73.jpeg", size: "large" },
{ id: 97, url: "/18anos/resources-18anos/familyImg/imagen 74.jpeg", size: "large" },
{ id: 98, url: "/18anos/resources-18anos/familyImg/imagen 75.jpeg", size: "large" },
{ id: 99, url: "/18anos/resources-18anos/familyImg/imagen 76.jpeg", size: "large" },
{ id: 100, url: "/18anos/resources-18anos/familyImg/imagen 77.jpeg", size: "large" },
{ id: 101, url: "/18anos/resources-18anos/familyImg/imagen 78.jpeg", size: "large" },
{ id: 102, url: "/18anos/resources-18anos/familyImg/imagen 79.jpeg", size: "large" },
{ id: 103, url: "/18anos/resources-18anos/familyImg/imagen 80.jpeg", size: "large" },
{ id: 104, url: "/18anos/resources-18anos/familyImg/imagen 81.jpeg", size: "large" },
{ id: 105, url: "/18anos/resources-18anos/familyImg/imagen 82.jpeg", size: "large" },
{ id: 106, url: "/18anos/resources-18anos/familyImg/imagen 83.jpeg", size: "large" },
{ id: 107, url: "/18anos/resources-18anos/familyImg/imagen 84.jpeg", size: "large" },
{ id: 108, url: "/18anos/resources-18anos/familyImg/imagen 85.jpeg", size: "large" },
{ id: 109, url: "/18anos/resources-18anos/familyImg/imagen 86.jpeg", size: "large" },
{ id: 110, url: "/18anos/resources-18anos/familyImg/imagen 87.jpeg", size: "medium" },
{ id: 111, url: "/18anos/resources-18anos/familyImg/imagen 88.jpeg", size: "large" },
{ id: 112, url: "/18anos/resources-18anos/familyImg/imagen 89.jpeg", size: "large" },
{ id: 113, url: "/18anos/resources-18anos/familyImg/imagen 90.jpeg", size: "large" },
{ id: 114, url: "/18anos/resources-18anos/familyImg/imagen 91.jpeg", size: "large" },
{ id: 115, url: "/18anos/resources-18anos/familyImg/imagen 92.jpeg", size: "medium" },
{ id: 116, url: "/18anos/resources-18anos/familyImg/imagen 93.jpeg", size: "medium" }
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
    nombre: "Amor🩵",
    mensaje: `Mi amor, hoy cumplis 18 años en los que has sido una gran persona, hija, hermana, sobrina, nieta, tía y novia. Estoy muy orgulloso de vos, de todo lo que has logrado, de tus esfuerzos cada día y de tu capacidad para cumplir todo lo que te propones. Espero que después de esta etapa sigas siendo esa gran mujer y nunca te rindas, y si en algun momento te pasa por la mente, recordá que aqui estamos tu familia y yo apoyándote en todo momento. Te amo 3 millones abejita, felices 18💛`,
    fotoInvitado: "/18anos/resources-18anos/familyImg/chris.jpeg",
  },
  {
    id: 8,
    nombre: "Mami",
    mensaje: `No es nuestra mejor foto… sin embargo nos recuerda uno de los tantos momentos que reímos hasta llorar… deseo 
    que siempre sean más momentos así

    Te amo pulguis que siempre sigas brillando y siendo luz y felicidad para todos los que te rodean. 
    Felices 18’s`,
    fotoInvitado: "/18anos/resources-18anos/familyImg/pao.jpeg",
  },
  {
    id: 9,
    nombre: "Tía Macha",
    mensaje: `Felices 18 años! ❤️ Que esta nueva etapa de tu vida venga llena de sueños, alegrías y muchísimas bendiciones! 
    Nunca dejes de ser esa personita tan linda, amorosa y dedicada. Que sigas esforzándote por alcanzar todo lo que te 
    propongas y que nunca te falten los motivos para sonreír! Te quiero mucho mi amor y te deseo que siempre seas muy feliz! 💕`,
    fotoInvitado: "/18anos/resources-18anos/familyImg/macha.jpeg",
  },
  {
    id: 10,
    nombre: "Tía Paula",
    mensaje: `Princesa de Dios, el Señor te conceda muchos años de salud y prosperidad al lado de tu familia y seres queridos.
    Siempre has sido una niña llena de luz y talentos. Dios te siga bendiciendo. Te quiero mucho.`,
    fotoInvitado: "/18anos/resources-18anos/familyImg/paula.png",
  },
  {
    id: 11,
    nombre: "Bran",
    mensaje: `Mi princesita hermosa, espero que esta nueva etapa de tu vida la disfrutes montones y te llenes de nuevos aprendizajes, aquí voy a estar cada que ocupes un consejo 
    
    Te amo muchísimo❤️🥰`,
    fotoInvitado: "/18anos/resources-18anos/familyImg/bran.jpeg",
  },
  {
    id: 12,
    nombre: "Mi Gorda",
    mensaje: `Eres la mejor tía loca del mundo, espero que disfrutes mucho de tu cumple #18 
    
    Te amo muchísimo tía🩷✨`,
    fotoInvitado: "/18anos/resources-18anos/familyImg/eva.jpeg",
  },
  {
    id: 13,
    nombre: "Jime💞",
    mensaje: `Holaaa mi niña linda!

    Feliz cumpleaños preciosa de mi corazón, que Diosito y la Virgencita te cubran con su santo manto y te guíen siempre por el camino
    del bien, no olvides lo carga que eres y que mereces cosas divinas en tu vida, estoy muy orgullosa de td lo q has logrado a sol de
    hoy, solo tú sabes tu esfuerzo, tu sudor de día a día y la disciplina que tienes a la hora de lograr lo que te propones, aunque me
    ponga muy triste no estar en tu cumple por mi baile d graduación, soy la persona más feliz sabiendo que tienes un año más de vida
    y de salud, tenemos una salida pendiente al cine para celebrar tu cumple si mi corazón? 
    
    Te amo con todo mi corazón, siempre la 
    cabeza en alto como lo has hecho siempre, gracias por tu amistad, por ser d las personas que considero como mi hermana mayor, 
    ailoviussss🫶🏻💞`,
    fotoInvitado: "/18anos/resources-18anos/familyImg/jimena.jpeg",
  },
  {
    id: 14,
    nombre: "Papá Joshua",
    mensaje: `Hola Mari!!

    Aun no recuerdo en qué momento adoptaste el termino de hija, me parece peculiar la verdad sinceramente. Porque aunque en mis 
    planes de vida no es ser papá, tu cumples la misión que uno tiene para un papá. Es traerle esperanza, en mi momento más oscuro,
    tu fuiste la luz que me ayudó a sobrevivir lo que fueron los días oscuros, tu conociste la verdadera versión y aun así estuviste 
    a mi lado, pese a qué la gran mayoría no.

    Hoy cumples 18 y así como un papá, estoy orgulloso de quién eres, la mujer en la que te estás convirtiendo, que no deja de luchar
    por sus sueños. Sigue así hija mía y verás como todo aquello que hoy son oraciones, pronto serán realidades.

    Dios te bendiga un montón.

    Con cariño: Joshua`,
    fotoInvitado: "/18anos/resources-18anos/familyImg/joshua.jpeg",
  },
  {
    id: 15,
    nombre: "Cuñis",
    mensaje: `Las Mañanitas de la Flaca Loca
    Estas son las mañanitas
que te canta tu cuñao,
hoy que llegas a los dieciocho
vengo bien emocionao'.
El día que tú naciste,
qué tragedia se sintió,
pero gracias a este loco,
la alegría apareció.
Hoy que ya cumples dieciocho,
te podemos desalojar,
mandarte pa'l llano lejos
y tranquilos descansar.
Pero no te me preocupes,
era broma nada más,
porque eres de esta familia
y aquí te queremos más.
Flaca loca de ocurrencias,
de travesuras sin final,
siempre nos sacas sonrisas
con tu forma tan especial.
Que se cumplan tus anhelos,
que alcances cada ilusión,
y que Dios llene tu vida
de dicha y bendición.
Y ya deja al concuñito,
no me lo vayas a quitar,
que yo quiero quedármelo
para poder vacilar.
Con cariño te lo canta
este cuñado soñador,
el más chiflado de todos,
pero lleno de amor.
Que tengas un cumpleaños
repleto de felicidad,
y que te vuelvas muy viejita,
¡con salud y dignidad!
¡Ay, ay, ay! Levanten las copas, que hoy cumple años la flaca loca de la familia! ❤️🥳`,
    fotoInvitado: "/18anos/resources-18anos/familyImg/marcos.jpeg",
  },
  {
    id: 16,
    nombre: "Dey",
    mensaje: `Felices 18 años . Quiero que sepas que para mí eres mucho más que una prima, eres como una hermana que la vida me 
    regaló. Te tengo un cariño enorme y espero que nunca olvides lo especial e importante que eres para mí. Deseo que esta nueva etapa
     esté llena de momentos bonitos, alegrías y sueños cumplidos. Siempre voy a desear lo mejor para ti. Te quiero muchísimo.`,
    fotoInvitado: "/18anos/resources-18anos/familyImg/dey.jpeg",
  },
  {
    id: 17,
    nombre: "Enzo",
    mensaje: `Mariii feliz cumpleaños, deseo que para vos este gran comienzo sea de muchos éxitos y bendiciones. Nunca dejes de ser la persona que eres tan alegre y bien esforzada, me acuerdo de la gran dupla que éramos y quiero que sepas que nada ha cambiado, te quiero un montón y siempre me tendrás para lo que necesites, me ha costado no tener a mi compañera de exposiciones jaja, pero espero que de verdad sigas adelante y nunca te rindas, te quiero mucho Mari y te deseo un muy feliz cumpleaños ❤️`,
    fotoInvitado: "/18anos/resources-18anos/familyImg/enzo.png",
  },
  {
    id: 18,
    nombre: "Naye",
    mensaje: `Hola Mari linda, soy yo, Nayelita.
    Espero estés muy bien, hace mucho no se de ti, pero mi cariño sigue acá, siempre fuiste la mejor conmigo, siempre atenta y linda. Desde que te conocí le di muchas gracias a Dios por la personita tan maravillosa que tuve la oportunidad de conocer, aunque me duele un poco que ya no seamos como antes, acá estaré siempre. Espero te esté llendo de lo mejor, y sé que si porque eres una personita súper buena e inteligente, sé que vas a lograr todas tus metas, sabes que te deseo lo mejor hoy y siempre, acá estaré siempre que necesites.
    Sigue siendo esa personita tan amable y tan única, que Dios te bendiga hoy y siempre mi amorcita. 
    FELICES #18 PRINCESS 
    TE QUIERO MUCHÍSIMO 💗`,
    fotoInvitado: "/18anos/resources-18anos/familyImg/naye.png",
  },
  {
    id: 19,
    nombre: "Steph💕",
    mensaje: `Feliz cumpleaños, mi Mari hermosa. 💗

      No sabés cuánto te extraño. Siempre voy a recordar esos tres años que compartimos como una de las etapas más bonitas de mi vida. Aunque hayan pasado dos años sin vernos y la vida nos haya llevado por caminos diferentes, el cariño que te tengo sigue intacto.
      Extraño nuestras risas, nuestros momentos y todo lo bonito que vivimos. Siempre vas a ser alguien demasiado especial para mí, y no sabés lo agradecida que estoy por haberte tenido en mi vida.
      Deseo de todo corazón que seás muy feliz, que la vida te regale cosas bonitas, que cumplás todos tus sueños y que nunca te falten motivos para sonreír. Siempre he querido verte feliz y eso nunca va a cambiar.

      Te amo muchísimo, mi niña. Ojalá algún día volvamos a abrazarnos y a compartir como antes. Nunca olvidés lo especial que sos para mí.

      Con muchísimo cariño, Steph.🥹💕`,
    fotoInvitado: "/18anos/resources-18anos/familyImg/steph.png",
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
