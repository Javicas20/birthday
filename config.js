// ============================================================
//  CONFIGURACIÓN DEL JUEGO
//  Solo tienes que editar este archivo. No hace falta tocar index.html.
//
//  Cada pegatina NFC abre:  https://TU-USUARIO.github.io/TU-REPO/?p=N
//    ?p=0           -> carta de inicio (reglas + primera pista)
//    ?p=1 ... ?p=N  -> cada prueba
//    ?p=final       -> felicitación (o ?p=N+1)
//
//  Utilidades para probar:
//    ?p=3&dev=1     -> entra a cualquier pantalla saltándose el bloqueo
//    ?reset=1       -> borra el progreso guardado en el móvil
// ============================================================

window.JUEGO = {
  nombre: "[Su nombre]",

  // Minutos que tarda en aparecer el botón de ayuda en cada prueba
  minutosAyuda: 3,

  // Mensaje si abre una pegatina que todavía no le toca
  mensajeBloqueado: "Esta pegatina aún no toca 👀 Vuelve a la pista anterior.",

  inicio: {
    titulo: "Hoy tu móvil es la llave 🔑",
    texto: `
      <p>Feliz cumpleaños, [Su nombre]. Este año tu felicitación está escondida por la casa.</p>
      <p>Encontrarás pegatinas escondidas. Acerca la <strong>parte de arriba del móvil</strong>
      y toca la notificación que aparece.</p>
      <p>Cada pegatina tiene una prueba. Resuélvela y te diré dónde buscar la siguiente.</p>
      <p>Si te atascas, a los pocos minutos aparecerá un botón de ayuda.</p>
    `,
    siguiente: "Guardo historias pero no hablo. Busca la que más te ha hecho llorar. 📚",
  },

  pruebas: [
    {
      titulo: "El comienzo",
      enunciado: "<p>¿Dónde fue nuestra primera cita?</p>",
      imagen: "", // opcional: "img/prueba1.jpg"
      respuestas: ["[respuesta]", "[otra forma válida]"],
      ayuda: "[Pista de ayuda si se atasca]",
      siguiente: "Donde descansan tus sueños… pero por debajo. 🛏️",
    },
    {
      titulo: "Adivina con emojis",
      enunciado: "<p>¿Qué película o serie es esta?</p><p class='grande'>🎬 ❓ ❓ ❓</p>",
      imagen: "",
      respuestas: ["[título]"],
      ayuda: "[Ayuda]",
      siguiente: "Te sigo a todas partes, pero solo de día. 👟",
    },
    {
      titulo: "Reto musical",
      enunciado: "<p>Mándame un audio cantando el estribillo de <strong>[vuestra canción]</strong>. Te responderé con el código.</p>",
      imagen: "",
      respuestas: ["[código que le mandas tú]"],
      ayuda: "¡Sin audio no hay código! 🎤",
      siguiente: "Por las mañanas me abrazas antes que a él. ☕",
    },
    {
      titulo: "Nuestra historia",
      enunciado: "<p>Junto a esta pegatina hay fotos. Ordénalas de la más antigua a la más reciente y lee las letras de detrás.</p>",
      imagen: "",
      respuestas: ["[palabra]"],
      ayuda: "[Ayuda]",
      siguiente: "Te reflejo cada mañana. 🪞",
    },
    {
      titulo: "Mensaje cifrado",
      enunciado: "<p>Descifra esto. La clave es el día del mes en que empezamos: mueve cada letra hacia atrás ese número de posiciones.</p><p class='grande mono'>[TEXTO CIFRADO]</p>",
      imagen: "",
      respuestas: ["[palabra descifrada]"],
      ayuda: "[Ayuda]",
      siguiente: "Sin mí no hay sofá que valga. 🛋️",
    },
    {
      titulo: "Trivial de pareja",
      enunciado: `
        <ol>
          <li>¿Qué pedí la primera vez que cenamos juntos?</li>
          <li>¿Cuál es mi manía más rara?</li>
          <li>¿Qué día te dije te quiero?</li>
        </ol>
        <p>Escribe juntas las <strong>primeras letras</strong> de las tres respuestas.</p>
      `,
      imagen: "",
      respuestas: ["[abc]"],
      ayuda: "[Ayuda]",
      siguiente: "Lo que guardo te calienta los pies. 🧦",
    },
    {
      titulo: "Último reto",
      enunciado: "<p>Ponte <strong>[canción]</strong> y baila 30 segundos. Mándame la prueba y te daré el código final.</p>",
      imagen: "",
      respuestas: ["[código final]"],
      ayuda: "¡A bailar! 💃",
      siguiente: "[Pista del escondite de la última pegatina]",
    },
  ],

  final: {
    titulo: "¡Feliz cumpleaños! 🎉",
    mensaje: `
      <p>[Tu felicitación aquí]</p>
      <p>Te quiero,<br>[Tu nombre]</p>
    `,
    fotos: [], // ej: ["img/foto1.jpg", "img/foto2.jpg"]
    video: "", // ej: "video/felicitacion.mp4" o vacío
  },
};
