// ============================================================
//  CONFIGURACIÓN DEL JUEGO — "El 1%"
//  Solo tienes que editar este archivo. No hace falta tocar index.html.
//
//  Cada pegatina NFC abre:  https://javicas20.github.io/birthday/?p=N
//    ?p=0           -> inicio (presentación + primera pista)
//    ?p=1 ... ?p=8  -> cada pregunta
//    ?p=final       -> felicitación
//
//  Para probar:
//    ?p=3&dev=1     -> entra a cualquier pantalla sin bloqueo
//    ?reset=1       -> borra el progreso guardado en el móvil
//
//  En cualquier texto puedes usar {nombre}, {perro} y {gato}.
//
//  Campos de cada pregunta:
//    porcentaje -> % de gente que la acierta (marcador circular)
//    enunciado  -> texto de la pregunta (admite HTML)
//    serie      -> opcional: fichas en fila, ej. ["L","M","?"]
//    cifrado    -> opcional: mensaje cifrado en fichas, ej. "CBKP MB"
//    pila       -> opcional: filas de fichas apiladas, ej. ["1","11","?"]
//    respuestas -> formas válidas (da igual mayúsculas, tildes y espacios)
//    ayuda      -> se desbloquea pasados "minutosAyuda" minutos
//    siguiente  -> pista del escondite de la SIGUIENTE pegatina
// ============================================================

window.JUEGO = {
  nombre: "[Su nombre]",

  // Los presentadores del concurso
  presentadores: { perro: "Toby", gato: "Luna" },

  minutosAyuda: 3,
  mensajeBloqueado: "{gato} se ha dormido encima de esta pregunta. Resuelve antes la anterior y vuelve.",

  inicio: {
    antetitulo: "Esta noche, en el plató",
    titulo: "Bienvenida a El 1%",
    texto: `
      <p>Feliz cumpleaños, {nombre}. Tu felicitación está escondida en casa y solo
      la encontrará alguien que esté en el 1%.</p>
      <p>La primera pregunta la acierta casi todo el mundo. La última, casi nadie.</p>
    `,
    saludoPerro: "¡Hola, {nombre}! Soy {perro} 🐶",
    saludoGato: "Y yo, {gato}. Hoy presentamos nosotros 😼",
    siguiente: "Guardo historias pero no hablo. Busca la que más te ha hecho llorar. 📚",
  },

  pruebas: [
    {
      porcentaje: 90,
      titulo: "Para calentar",
      enunciado: "<p>¿Qué letra sigue?</p>",
      serie: ["E", "F", "M", "A", "M", "J", "J", "?"],
      respuestas: ["a", "agosto"],
      ayuda: "Piensa en el calendario 📅",
      siguiente: "Donde descansan tus sueños… pero por debajo. 🛏️",
    },
    {
      porcentaje: 75,
      titulo: "Ojo con la trampa",
      enunciado: "<p>¿Cuántos meses del año tienen <strong>28 días</strong>?</p>",
      respuestas: ["12", "doce", "todos", "todos los meses"],
      ayuda: "No te pregunto cuáles tienen <em>solo</em> 28 días 😉",
      siguiente: "Te sigo a todas partes, pero solo de día. 👟",
    },
    {
      porcentaje: 60,
      titulo: "Otra serie",
      enunciado: "<p>¿Qué letra sigue?</p>",
      serie: ["L", "M", "X", "J", "V", "?"],
      respuestas: ["s", "sabado"],
      ayuda: "Lo miras en la agenda cada semana 🗓️",
      siguiente: "Por las mañanas me abrazas antes que a mí. ☕",
    },
    {
      porcentaje: 45,
      titulo: "Juego de palabras",
      enunciado: "<p>¿Qué palabra se escribe siempre <strong>MAL</strong>?</p>",
      respuestas: ["mal"],
      ayuda: "Vuelve a leer la pregunta, muy despacio 🔍",
      siguiente: "Te reflejo cada mañana. 🪞",
    },
    {
      porcentaje: 30,
      titulo: "Matemáticas con hambre",
      enunciado: `
        <div class="eq"><span>🍕</span><b>+</b><span>🍕</span><b>=</b><i>10</i></div>
        <div class="eq"><span>🍕</span><b>+</b><span>🍔</span><b>=</b><i>8</i></div>
        <div class="eq"><span>🍔</span><b>×</b><span>🍦</span><b>=</b><i>12</i></div>
        <div class="eq pregunta"><span>🍕</span><b>+</b><span>🍔</span><b>×</b><span>🍦</span><b>=</b><i>?</i></div>
      `,
      respuestas: ["17", "diecisiete"],
      ayuda: "En matemáticas, ¿qué va antes: sumar o multiplicar? ✖️",
      siguiente: "Sin mí no hay sofá que valga. 🛋️",
    },
    {
      porcentaje: 15,
      titulo: "La serie misteriosa",
      enunciado: "<p>¿Qué letra sigue?</p>",
      serie: ["U", "D", "T", "C", "C", "S", "S", "?"],
      respuestas: ["o", "ocho"],
      ayuda: "Cuenta en voz alta… 🔢",
      siguiente: "Lo que guardo te calienta los pies. 🧦",
    },
    {
      porcentaje: 5,
      titulo: "Documento secreto",
      enunciado: `
        <p>Has interceptado este mensaje cifrado. Cada letra está
        <strong>una posición adelantada</strong> en el abecedario. Descífralo.</p>
      `,
      cifrado: "CBKP MB BMGPNCSB",
      respuestas: ["bajo la alfombra", "debajo de la alfombra", "alfombra", "la alfombra"],
      ayuda: "La C es en realidad una B, la B es una A… 🔐",
      siguiente: "El mensaje secreto ya te ha dicho dónde buscar. 😉",
    },
    {
      porcentaje: 1,
      titulo: "La pregunta del 1%",
      enunciado: "<p>¿Qué número sigue?</p>",
      pila: ["1", "11", "21", "1211", "111221", "?"],
      respuestas: ["312211"],
      ayuda: "No sumes nada. Lee cada fila en voz alta describiendo la de arriba: «un 1» → 11 🗣️",
      siguiente: "Estás en el 1%. Tu premio te espera en tu mesita de noche. 🎁",
    },
  ],

  final: {
    titulo: "¡Estás en el 1%!",
    mensaje: `
      <p>¡Feliz cumpleaños, {nombre}!</p>
      <p>[Tu felicitación aquí]</p>
      <p>Te quiero,<br>[Tu nombre]</p>
    `,
    fotos: [], // ej: ["img/foto1.jpg", "img/foto2.jpg"]
    video: "", // ej: "video/felicitacion.mp4"
  },
};
