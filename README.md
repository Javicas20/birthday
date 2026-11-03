# Juego de cumpleaños con NFC

## Archivos
- `index.html`: la web del juego (no hace falta tocarla).
- `config.js`: textos, pruebas, respuestas y felicitación. **Solo editas esto.**
- `img/` (opcional): fotos para pruebas y felicitación.

## Publicar en GitHub Pages
1. Crea un repo nuevo en GitHub con un nombre que no la delate (por ejemplo `notas`). Debe ser **público** en el plan gratuito.
2. Sube `index.html` y `config.js` (y la carpeta `img/` si la usas) a la raíz.
3. En el repo: **Settings → Pages → Source: Deploy from a branch → main / (root) → Save**.
4. En uno o dos minutos estará en `https://TU-USUARIO.github.io/notas/`.

## URLs para grabar en las pegatinas
| Pegatina | URL |
|---|---|
| Inicio (sobre) | `https://TU-USUARIO.github.io/notas/?p=0` |
| Prueba 1 | `…/?p=1` |
| … | … |
| Prueba 7 | `…/?p=7` |
| Felicitación | `…/?p=final` |

Grábalas con **NFC Tools → Escribir → Añadir registro → URL**.

## Probar
- `?p=3&dev=1` abre cualquier pantalla sin bloqueo.
- `?reset=1` borra el progreso guardado en ese móvil. **Hazlo en su iPhone (o en el tuyo) antes del día del juego** si has estado probando con él.

## Cómo funciona
- Cada prueba pide una respuesta. Acepta mayúsculas, tildes y espacios extra.
- Al acertar, muestra la pista del siguiente escondite.
- Si abre una pegatina antes de tiempo, sale una pantalla de bloqueo.
- A los `minutosAyuda` minutos aparece un botón de ayuda.
- El progreso se guarda en el navegador del móvil (Safari en iPhone).

## Ojo
- El repo es público: las respuestas se pueden ver en `config.js` si alguien lo busca. Con un nombre de repo discreto no hay problema.
- Las URLs deben ser cortas (las pegatinas guardan unos 140 caracteres). Estas lo son.
