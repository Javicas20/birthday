// ============================================================
//  CONFIGURACIÓN DEL JUEGO — tema "El 1%"
//  Solo tienes que editar este archivo. No hace falta tocar index.html.
//
//  Cada pegatina NFC abre:  https://javicas20.github.io/birthday/?p=N
//    ?p=0           -> carta de inicio (reglas + primera pista)
//    ?p=1 ... ?p=8  -> cada pregunta
//    ?p=final       -> felicitación
//
//  Utilidades para probar:
//    ?p=3&dev=1     -> entra a cualquier pantalla saltándose el bloqueo
//    ?reset=1       -> borra el progreso guardado en el móvil
//
//  Campos de cada prueba:
//    porcentaje -> % de gente que la acierta (se muestra como etiqueta)
//    respuestas -> todas las formas válidas (da igual mayúsculas/tildes)
//    ayuda      -> aparece tras "minutosAyuda" minutos
//    siguiente  -> pista del escondite de la SIGUIENTE pegatina
// ============================================================

window.JUEGO = {
  nombre: "[Su nombre]",
  minutosAyuda: 3,
  mensajeBloqueado: "Esta pegatina aún no toca 👀 Vuelve a la pregunta anterior.",

  inicio: {
    titulo: "Bienvenida a El 1% 🧠",
    texto: `
      <p>Feliz cumpleaños, [Su nombre]. Tu felicitación está escondida por la casa,
      y solo la encontrará alguien que esté en el <strong>1%</strong>.</p>
      <p>Hay <strong>8 preguntas</strong>. La primera la acierta casi todo el mundo.
      La última, solo el 1%.</p>
      <p>Cada pregunta está en una pegatina escondida. Acerca la <strong>parte de arriba
      del móvil</strong> y toca la notificación que aparece.</p>
      <p>Si aciertas, te digo dónde está la siguiente. Si te atascas, a los pocos minutos
      aparecerá un botón de ayuda.</p>
    `,
    siguiente: "Guardo historias pero no hablo. Busca la que más te ha hecho llorar. 📚",
  },

  pruebas: [
    {
      porcentaje: 90,
      titulo: "Calentamiento",
      enunciado: "<p>¿Qué letra sigue?</p><p class='grande mono'>E · F · M · A · M · J · J · ?</p>",
      respuestas: ["a", "agosto"],
      ayuda: "Piensa en el calendario 📅",
      siguiente: "Donde descansan tus sueños… pero por debajo. 🛏️",
    },
    {
      porcentaje: 75,
      titulo: "Ojo con la trampa",
      enunciado: "<p>¿Cuántos meses del año tienen <strong>28 días</strong>?</p>",
      respuestas: ["12", "doce", "todos", "todos los meses"],
      ayuda: "No pregunto cuáles tienen <em>solo</em> 28 días 😉",
      siguiente: "Te sigo a todas partes, pero solo de día. 👟",
    },
    {
      porcentaje: 60,
      titulo: "Otra serie",
      enunciado: "<p>¿Qué letra sigue?</p><p class='grande mono'>L · M · X · J · V · ?</p>",
      respuestas: ["s", "sabado"],
      ayuda: "Lo usas en la agenda cada semana 🗓️",
      siguiente: "Por las mañanas me abrazas antes que a mí. ☕",
    },
    {
      porcentaje: 45,
      titulo: "Juego de palabras",
      enunciado: "<p>¿Qué palabra se escribe siempre <strong>MAL</strong>?</p>",
      respuestas: ["mal"],
      ayuda: "Léete la pregunta otra vez, muy despacio 🔍",
      siguiente: "Te reflejo cada mañana. 🪞",
    },
    {
      porcentaje: 30,
      titulo: "Matemáticas con hambre",
      enunciado: `
        <p class='grande'>🍕 + 🍕 = 10</p>
        <p class='grande'>🍕 + 🍔 = 8</p>
        <p class='grande'>🍔 × 🍦 = 12</p>
        <p>¿Cuánto es…?</p>
        <p class='grande'>🍕 + 🍔 × 🍦 = ?</p>
      `,
      respuestas: ["17", "diecisiete"],
      ayuda: "En matemáticas, ¿qué se hace antes: sumar o multiplicar? ✖️",
      siguiente: "Sin mí no hay sofá que valga. 🛋️",
    },
    {
      porcentaje: 15,
      titulo: "La serie misteriosa",
      enunciado: "<p>¿Qué letra sigue?</p><p class='grande mono'>U · D · T · C · C · S · S · ?</p>",
      respuestas: ["o", "ocho"],
      ayuda: "Cuenta con los dedos… y di los números en voz alta 🔢",
      siguiente: "Lo que guardo te calienta los pies. 🧦",
    },
    {
      porcentaje: 5,
      titulo: "Documento secreto",
      enunciado: `
        <p>Has interceptado este mensaje cifrado. Cada letra está
        <strong>una posición adelantada</strong> en el abecedario.</p>
        <p class='grande mono'>CBKP MB BMGPNCSB</p>
        <p>Descífralo y escríbelo aquí.</p>
      `,
      respuestas: ["bajo la alfombra", "debajo de la alfombra", "alfombra", "la alfombra"],
      ayuda: "La C es en realidad una B, la B es una A… 🔐",
      siguiente: "¡Ya sabes dónde buscar! El mensaje secreto te lo acaba de decir. 😉",
    },
    {
      porcentaje: 1,
      titulo: "La pregunta del 1%",
      enunciado: `
        <p>Solo el 1% lo acierta. ¿Qué número sigue?</p>
        <p class='grande mono'>1<br>11<br>21<br>1211<br>111221<br>?</p>
      `,
      respuestas: ["312211"],
      ayuda: "No sumes nada: lee cada número en voz alta… describiendo el de arriba. «Un 1» → 11 🗣️",
      siguiente: "Estás en el 1%. Tu premio te espera en tu mesita de noche. 🎁",
    },
  ],

  final: {
    titulo: "¡Estás en el 1%! 🎉",
    mensaje: `
      <p>¡Feliz cumpleaños, [Su nombre]!</p>
      <p>[Tu felicitación aquí]</p>
      <p>Te quiero,<br>[Tu nombre]</p>
    `,
    fotos: [], // ej: ["img/foto1.jpg", "img/foto2.jpg"]
    video: "", // ej: "video/felicitacion.mp4" o vacío
  },
};
