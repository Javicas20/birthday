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
//    siguiente  -> adivinanza que indica dónde está la SIGUIENTE pegatina
// ============================================================

window.JUEGO = {
  nombre: "pequeña ratina",

  // Los presentadores del concurso
  presentadores: { perro: "Toby", gato: "Luna" },

  mensajeBloqueado: "{gato} se ha dormido encima de esta pregunta. Resuelve antes la anterior y vuelve.",

  inicio: {
    antetitulo: "Esta noche, en el plató",
    titulo: "Bienvenida a El 1%",
    texto: `
      <p>Feliz cumpleaños, pequeña ratina. Tu felicitación está escondida por la casa,
      como siempre. Solo la encontrarás si usas el 99% de tu cerebro.
      (Qué difícil, ayayay)</p>
      <p>Hay 8 preguntas. La primera es muy sencilla, pero iremos aumentando la dificultad.</p>
      <p>Cada pregunta está en una pegatina escondida. Acerca la parte de arriba del móvil
      y toca la notificación que aparece.</p>
    `,
    saludoPerro: "¡Hola, {nombre}! Soy {perro} 🐶",
    saludoGato: "Y yo, {gato}. Hoy presentamos nosotros 😼",
    // Lo que aparece al pulsar «Empezar el juego»
    buscarTitulo: "Para encontrar la primera pegatina",
    buscar: "Fue la conciencia de una marioneta con la nariz muy larga, y se ha colado dos veces en nuestro salón. ¿Quién es? 🤥",
  },

  // Texto que aparece al acertar cada pregunta
  textoSiguiente: "Busca la siguiente pegatina por la casa 🐾",
  textoUltima: "Ya solo te queda encontrar la felicitación. ¡Búscala! 🎁",

  pruebas: [
    {
      porcentaje: 90,
      titulo: "El grillo del salón",
      enunciado: `
        <p>Dicen que si cuentas cuántas veces canta un grillo en <strong>14 segundos</strong>
        y le sumas <strong>40</strong>, sabes la temperatura en grados Fahrenheit.</p>
        <p>El grillo de nuestro salón cantó <strong>30 veces</strong>. ¿Qué temperatura hacía?</p>
      `,
      respuestas: ["70", "setenta", "70f", "70 f", "70 grados", "70 fahrenheit", "70 grados fahrenheit"],
      siguiente: "Tenemos lengua pero no hablamos, ojos pero no vemos, y siempre vamos en pareja. 👀",
    },
    {
      porcentaje: 75,
      titulo: "Ojo con la trampa",
      enunciado: "<p>¿Cuántos meses del año tienen <strong>28 días</strong>?</p>",
      respuestas: ["12", "doce", "todos", "todos los meses"],
      siguiente: "Cada mañana me llenas, me vacías a sorbos y, aunque me quemo, nunca me quejo.",
    },
    {
      porcentaje: 60,
      titulo: "Otra serie",
      enunciado: "<p>¿Qué letra sigue?</p>",
      serie: ["L", "M", "X", "J", "V", "?"],
      respuestas: ["s", "sabado"],
      siguiente: "Si me miras, te miro. Si te ríes, me río. Si te vas, desaparezco.",
    },
    {
      porcentaje: 45,
      titulo: "Juego de palabras",
      enunciado: "<p>¿Qué palabra se escribe siempre <strong>MAL</strong>?</p>",
      respuestas: ["mal"],
      siguiente: "De día me olvidas, de noche me abrazas, y guardo todos tus sueños sin contar ninguno.",
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
      siguiente: "Me aplastas cuando ves series y me abrazas cuando la película da miedo.",
    },
    {
      porcentaje: 15,
      titulo: "La serie misteriosa",
      enunciado: "<p>¿Qué letra sigue?</p>",
      serie: ["U", "D", "T", "C", "C", "S", "S", "?"],
      respuestas: ["o", "ocho"],
      siguiente: "Siempre llegamos de dos en dos, pero la lavadora siempre se come a uno.",
    },
    {
      porcentaje: 5,
      titulo: "Documento secreto",
      enunciado: `
        <p>Has interceptado este mensaje cifrado. Cada letra está
        <strong>una posición adelantada</strong> en el abecedario. Descífralo.</p>
      `,
      cifrado: "UF RVJFSP SBUJOB",
      respuestas: ["te quiero ratina"],
      siguiente: "Bebo sin tener boca y crezco sin moverme. Si te olvidas de mí, me pongo triste.",
    },
    {
      porcentaje: 1,
      titulo: "La pregunta del 1%",
      enunciado: "<p>¿Qué número sigue?</p>",
      pila: ["1", "11", "21", "1211", "111221", "?"],
      respuestas: ["312211"],
      siguiente: "Duermo a tu lado, sujeto lo que lees antes de soñar y guardo secretos en mis cajones.",
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
