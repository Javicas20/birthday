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
    buscar: "Fue la conciencia de una marioneta con la nariz muy larga. 🤥",
  },

  // Texto que aparece al acertar cada pregunta
  textoSiguiente: "Busca la siguiente pegatina por la casa 🐾",
  textoUltima: "Ya solo te queda encontrar la felicitación. ¡Búscala! 🎁",

  pruebas: [
    {
      porcentaje: 90,
      titulo: "El grillo en el pozo",
      enunciado: `
        <p>Un grillo cae a un pozo de <strong>10 metros</strong>.
        Cada día sube <strong>3 metros</strong>, pero cada noche resbala <strong>2</strong>.</p>
        <p>¿Cuántos días tarda en salir? 🦗</p>
      `,
      respuestas: ["8", "ocho", "8 dias", "ocho dias", "el octavo", "el dia 8", "octavo"],
      siguiente: "El Everest es la montaña más grande del mundo. Para seguir, tendrás que encontrar la forma de derretirla. 🏔️",
    },
    {
      porcentaje: 75,
      titulo: "Día de colada",
      enunciado: `
        <p>Si una camiseta tarda <strong>1 hora</strong> en secarse al sol,
        ¿cuánto tardan en secarse <strong>5 camisetas</strong>?</p>
        <p class="eq"><span>👕</span><span>👕</span><span>👕</span><span>👕</span><span>👕</span></p>
      `,
      respuestas: ["1", "una", "1 hora", "una hora", "1h", "1 h", "60", "60 minutos", "60 min", "lo mismo", "igual"],
      siguiente: "Donde huele a ajo, el aceite canta y siempre acabo yo fregando. 🧄",
    },
    {
      porcentaje: 60,
      titulo: "¿Qué hay de cena?",
      enunciado: `
        <p>Para cenar hay pizza. 🍕</p>
        <p>Con <strong>3 cortes rectos</strong> de cuchillo, y sin mover los trozos,
        ¿cuántos trozos puedes conseguir como máximo?</p>
        <svg viewBox="0 0 200 200" width="150" height="150" style="display:block;margin:12px auto 0" aria-hidden="true">
          <circle cx="100" cy="100" r="92" fill="#e3a24a"/>
          <circle cx="100" cy="100" r="78" fill="#f2c94c"/>
          <circle cx="100" cy="100" r="78" fill="none" stroke="#e8553c" stroke-width="6" stroke-dasharray="3 9" opacity=".5"/>
          <g fill="#d64545"><circle cx="70" cy="68" r="11"/><circle cx="128" cy="62" r="10"/><circle cx="140" cy="118" r="11"/><circle cx="95" cy="138" r="10"/><circle cx="58" cy="115" r="9"/><circle cx="104" cy="95" r="9"/></g>
          <g fill="#3e8e41"><ellipse cx="88" cy="74" rx="6" ry="3" transform="rotate(30 88 74)"/><ellipse cx="122" cy="96" rx="6" ry="3" transform="rotate(-20 122 96)"/><ellipse cx="76" cy="134" rx="6" ry="3" transform="rotate(60 76 134)"/><ellipse cx="126" cy="140" rx="6" ry="3"/></g>
        </svg>
      `,
      respuestas: ["7", "siete", "7 trozos", "siete trozos"],
      siguiente: "Si me miras, te miro. Si te ríes, me río. Si te vas, desaparezco.",
    },
    {
      porcentaje: 45,
      titulo: "El misterio del espejo",
      enunciado: `
        <p>Este es el reloj, tal y como se ve <strong>en el espejo</strong>. 🪞</p>
        <svg viewBox="0 0 200 200" width="190" height="190" style="display:block;margin:14px auto 0" aria-hidden="true">
          <circle cx="100" cy="100" r="99" fill="#c7cbe8"/>
          <circle cx="100" cy="100" r="96" fill="#ffffff"/>
          <g transform="translate(200 0) scale(-1 1)">
            <line x1="100.0" y1="14.0" x2="100.0" y2="6.0" stroke="#1d1838" stroke-width="3.2" stroke-linecap="round"/><line x1="109.4" y1="10.5" x2="109.8" y2="6.5" stroke="#1d1838" stroke-width="1.4" stroke-linecap="round"/><line x1="118.7" y1="12.0" x2="119.5" y2="8.1" stroke="#1d1838" stroke-width="1.4" stroke-linecap="round"/><line x1="127.8" y1="14.4" x2="129.0" y2="10.6" stroke="#1d1838" stroke-width="1.4" stroke-linecap="round"/><line x1="136.6" y1="17.8" x2="138.2" y2="14.1" stroke="#1d1838" stroke-width="1.4" stroke-linecap="round"/><line x1="143.0" y1="25.5" x2="147.0" y2="18.6" stroke="#1d1838" stroke-width="3.2" stroke-linecap="round"/><line x1="152.9" y1="27.2" x2="155.3" y2="24.0" stroke="#1d1838" stroke-width="1.4" stroke-linecap="round"/><line x1="160.2" y1="33.1" x2="162.9" y2="30.1" stroke="#1d1838" stroke-width="1.4" stroke-linecap="round"/><line x1="166.9" y1="39.8" x2="169.9" y2="37.1" stroke="#1d1838" stroke-width="1.4" stroke-linecap="round"/><line x1="172.8" y1="47.1" x2="176.0" y2="44.7" stroke="#1d1838" stroke-width="1.4" stroke-linecap="round"/><line x1="174.5" y1="57.0" x2="181.4" y2="53.0" stroke="#1d1838" stroke-width="3.2" stroke-linecap="round"/><line x1="182.2" y1="63.4" x2="185.9" y2="61.8" stroke="#1d1838" stroke-width="1.4" stroke-linecap="round"/><line x1="185.6" y1="72.2" x2="189.4" y2="71.0" stroke="#1d1838" stroke-width="1.4" stroke-linecap="round"/><line x1="188.0" y1="81.3" x2="191.9" y2="80.5" stroke="#1d1838" stroke-width="1.4" stroke-linecap="round"/><line x1="189.5" y1="90.6" x2="193.5" y2="90.2" stroke="#1d1838" stroke-width="1.4" stroke-linecap="round"/><line x1="186.0" y1="100.0" x2="194.0" y2="100.0" stroke="#1d1838" stroke-width="3.2" stroke-linecap="round"/><line x1="189.5" y1="109.4" x2="193.5" y2="109.8" stroke="#1d1838" stroke-width="1.4" stroke-linecap="round"/><line x1="188.0" y1="118.7" x2="191.9" y2="119.5" stroke="#1d1838" stroke-width="1.4" stroke-linecap="round"/><line x1="185.6" y1="127.8" x2="189.4" y2="129.0" stroke="#1d1838" stroke-width="1.4" stroke-linecap="round"/><line x1="182.2" y1="136.6" x2="185.9" y2="138.2" stroke="#1d1838" stroke-width="1.4" stroke-linecap="round"/><line x1="174.5" y1="143.0" x2="181.4" y2="147.0" stroke="#1d1838" stroke-width="3.2" stroke-linecap="round"/><line x1="172.8" y1="152.9" x2="176.0" y2="155.3" stroke="#1d1838" stroke-width="1.4" stroke-linecap="round"/><line x1="166.9" y1="160.2" x2="169.9" y2="162.9" stroke="#1d1838" stroke-width="1.4" stroke-linecap="round"/><line x1="160.2" y1="166.9" x2="162.9" y2="169.9" stroke="#1d1838" stroke-width="1.4" stroke-linecap="round"/><line x1="152.9" y1="172.8" x2="155.3" y2="176.0" stroke="#1d1838" stroke-width="1.4" stroke-linecap="round"/><line x1="143.0" y1="174.5" x2="147.0" y2="181.4" stroke="#1d1838" stroke-width="3.2" stroke-linecap="round"/><line x1="136.6" y1="182.2" x2="138.2" y2="185.9" stroke="#1d1838" stroke-width="1.4" stroke-linecap="round"/><line x1="127.8" y1="185.6" x2="129.0" y2="189.4" stroke="#1d1838" stroke-width="1.4" stroke-linecap="round"/><line x1="118.7" y1="188.0" x2="119.5" y2="191.9" stroke="#1d1838" stroke-width="1.4" stroke-linecap="round"/><line x1="109.4" y1="189.5" x2="109.8" y2="193.5" stroke="#1d1838" stroke-width="1.4" stroke-linecap="round"/><line x1="100.0" y1="186.0" x2="100.0" y2="194.0" stroke="#1d1838" stroke-width="3.2" stroke-linecap="round"/><line x1="90.6" y1="189.5" x2="90.2" y2="193.5" stroke="#1d1838" stroke-width="1.4" stroke-linecap="round"/><line x1="81.3" y1="188.0" x2="80.5" y2="191.9" stroke="#1d1838" stroke-width="1.4" stroke-linecap="round"/><line x1="72.2" y1="185.6" x2="71.0" y2="189.4" stroke="#1d1838" stroke-width="1.4" stroke-linecap="round"/><line x1="63.4" y1="182.2" x2="61.8" y2="185.9" stroke="#1d1838" stroke-width="1.4" stroke-linecap="round"/><line x1="57.0" y1="174.5" x2="53.0" y2="181.4" stroke="#1d1838" stroke-width="3.2" stroke-linecap="round"/><line x1="47.1" y1="172.8" x2="44.7" y2="176.0" stroke="#1d1838" stroke-width="1.4" stroke-linecap="round"/><line x1="39.8" y1="166.9" x2="37.1" y2="169.9" stroke="#1d1838" stroke-width="1.4" stroke-linecap="round"/><line x1="33.1" y1="160.2" x2="30.1" y2="162.9" stroke="#1d1838" stroke-width="1.4" stroke-linecap="round"/><line x1="27.2" y1="152.9" x2="24.0" y2="155.3" stroke="#1d1838" stroke-width="1.4" stroke-linecap="round"/><line x1="25.5" y1="143.0" x2="18.6" y2="147.0" stroke="#1d1838" stroke-width="3.2" stroke-linecap="round"/><line x1="17.8" y1="136.6" x2="14.1" y2="138.2" stroke="#1d1838" stroke-width="1.4" stroke-linecap="round"/><line x1="14.4" y1="127.8" x2="10.6" y2="129.0" stroke="#1d1838" stroke-width="1.4" stroke-linecap="round"/><line x1="12.0" y1="118.7" x2="8.1" y2="119.5" stroke="#1d1838" stroke-width="1.4" stroke-linecap="round"/><line x1="10.5" y1="109.4" x2="6.5" y2="109.8" stroke="#1d1838" stroke-width="1.4" stroke-linecap="round"/><line x1="14.0" y1="100.0" x2="6.0" y2="100.0" stroke="#1d1838" stroke-width="3.2" stroke-linecap="round"/><line x1="10.5" y1="90.6" x2="6.5" y2="90.2" stroke="#1d1838" stroke-width="1.4" stroke-linecap="round"/><line x1="12.0" y1="81.3" x2="8.1" y2="80.5" stroke="#1d1838" stroke-width="1.4" stroke-linecap="round"/><line x1="14.4" y1="72.2" x2="10.6" y2="71.0" stroke="#1d1838" stroke-width="1.4" stroke-linecap="round"/><line x1="17.8" y1="63.4" x2="14.1" y2="61.8" stroke="#1d1838" stroke-width="1.4" stroke-linecap="round"/><line x1="25.5" y1="57.0" x2="18.6" y2="53.0" stroke="#1d1838" stroke-width="3.2" stroke-linecap="round"/><line x1="27.2" y1="47.1" x2="24.0" y2="44.7" stroke="#1d1838" stroke-width="1.4" stroke-linecap="round"/><line x1="33.1" y1="39.8" x2="30.1" y2="37.1" stroke="#1d1838" stroke-width="1.4" stroke-linecap="round"/><line x1="39.8" y1="33.1" x2="37.1" y2="30.1" stroke="#1d1838" stroke-width="1.4" stroke-linecap="round"/><line x1="47.1" y1="27.2" x2="44.7" y2="24.0" stroke="#1d1838" stroke-width="1.4" stroke-linecap="round"/><line x1="57.0" y1="25.5" x2="53.0" y2="18.6" stroke="#1d1838" stroke-width="3.2" stroke-linecap="round"/><line x1="63.4" y1="17.8" x2="61.8" y2="14.1" stroke="#1d1838" stroke-width="1.4" stroke-linecap="round"/><line x1="72.2" y1="14.4" x2="71.0" y2="10.6" stroke="#1d1838" stroke-width="1.4" stroke-linecap="round"/><line x1="81.3" y1="12.0" x2="80.5" y2="8.1" stroke="#1d1838" stroke-width="1.4" stroke-linecap="round"/><line x1="90.6" y1="10.5" x2="90.2" y2="6.5" stroke="#1d1838" stroke-width="1.4" stroke-linecap="round"/>
            <text x="100.0" y="35.0" text-anchor="middle" font-family="Bricolage Grotesque, system-ui, sans-serif" font-weight="800" font-size="19" fill="#1d1838">12</text>
            <line x1="111.3" y1="95.9" x2="54.9" y2="116.4" stroke="#1d1838" stroke-width="7" stroke-linecap="round"/>
            <line x1="89.6" y1="94.0" x2="164.1" y2="137.0" stroke="#1d1838" stroke-width="4.5" stroke-linecap="round"/>
          </g>
          <circle cx="100" cy="100" r="6" fill="#ff6f91"/>
          <path d="M28 52 Q50 22 86 14" stroke="#ffffff" stroke-width="10" fill="none" opacity=".55" stroke-linecap="round"/>
        </svg>
        <p style="margin-top:14px">Tu sorpresa empieza <strong>1 hora y 50 minutos</strong> más tarde
        de la hora real. ¿A qué hora empieza?</p>
      `,
      respuestas: ["10:10", "22:10", "10.10", "22.10", "10 10", "las 10:10", "las diez y diez", "diez y diez", "10 y 10", "las 10 y 10", "22h10", "10h10"],
      siguiente: "Lumos. Busca la luz azul que se enciende antes de cada batalla. 🪄",
    },
    {
      porcentaje: 30,
      titulo: "El Sombrero se ha liado",
      enunciado: `
        <p>El Sombrero Seleccionador ha mezclado palabras de <strong>Hogwarts</strong>
        y de <strong>Fortnite</strong>. 🎩</p>
        <p>Quédate solo con los <strong>hechizos</strong> y lee sus iniciales.</p>
      `,
      palabras: ["Planeador", "Accio", "Tormenta", "Llama", "Morsmordre", "Obliviate", "Escudo", "Riddikulus"],
      respuestas: ["amor", "el amor"],
      siguiente: "Doy más vueltas que tú buscando pegatinas, me trago calcetines y de mí nace el Everest. 🌀",
    },
    {
      porcentaje: 15,
      titulo: "El aparcamiento",
      enunciado: `
        <p>Alguien ha aparcado encima de un número. 🚗</p>
        <svg viewBox="0 0 330 176" width="100%" style="display:block;max-width:360px;margin:14px auto 0" aria-hidden="true">
          <rect x="0" y="0" width="330" height="176" rx="18" fill="#3a3852"/>
          <rect x="0" y="150" width="330" height="26" rx="0" fill="#2e2c44"/>
          <path d="M0 158 H330" stroke="#ffd23f" stroke-width="3" stroke-dasharray="18 14"/>
          <line x1="15" y1="16" x2="15" y2="142" stroke="#fff" stroke-width="4" stroke-linecap="round"/>
          <line x1="65" y1="16" x2="65" y2="142" stroke="#fff" stroke-width="4" stroke-linecap="round"/>
          <line x1="115" y1="16" x2="115" y2="142" stroke="#fff" stroke-width="4" stroke-linecap="round"/>
          <line x1="165" y1="16" x2="165" y2="142" stroke="#fff" stroke-width="4" stroke-linecap="round"/>
          <line x1="215" y1="16" x2="215" y2="142" stroke="#fff" stroke-width="4" stroke-linecap="round"/>
          <line x1="265" y1="16" x2="265" y2="142" stroke="#fff" stroke-width="4" stroke-linecap="round"/>
          <line x1="315" y1="16" x2="315" y2="142" stroke="#fff" stroke-width="4" stroke-linecap="round"/>
          <text x="40" y="120" text-anchor="middle" font-family="Bricolage Grotesque, system-ui, sans-serif" font-weight="800" font-size="25" fill="#fff">16</text>
          <text x="90" y="120" text-anchor="middle" font-family="Bricolage Grotesque, system-ui, sans-serif" font-weight="800" font-size="25" fill="#fff">06</text>
          <text x="140" y="120" text-anchor="middle" font-family="Bricolage Grotesque, system-ui, sans-serif" font-weight="800" font-size="25" fill="#fff">68</text>
          <text x="190" y="120" text-anchor="middle" font-family="Bricolage Grotesque, system-ui, sans-serif" font-weight="800" font-size="25" fill="#fff">88</text>
          <g transform="translate(221 30)">
            <rect x="0" y="0" width="38" height="100" rx="12" fill="#ff6f91"/>
            <rect x="5" y="16" width="28" height="18" rx="5" fill="#cfe9ff"/>
            <rect x="5" y="66" width="28" height="14" rx="5" fill="#cfe9ff"/>
            <rect x="-3" y="22" width="5" height="12" rx="2" fill="#c2446a"/><rect x="36" y="22" width="5" height="12" rx="2" fill="#c2446a"/>
            <rect x="-3" y="66" width="5" height="12" rx="2" fill="#c2446a"/><rect x="36" y="66" width="5" height="12" rx="2" fill="#c2446a"/>
            <circle cx="9" cy="5" r="3" fill="#fff3c4"/><circle cx="29" cy="5" r="3" fill="#fff3c4"/>
          </g>
          <text x="290" y="120" text-anchor="middle" font-family="Bricolage Grotesque, system-ui, sans-serif" font-weight="800" font-size="25" fill="#fff">98</text>
          </svg>
        <p style="margin-top:14px">¿Qué número hay debajo del coche?</p>
      `,
      respuestas: ["87", "ochenta y siete"],
      siguiente: "Soy un baile en fila, pero en esta casa no tengo pies. 💃",
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
