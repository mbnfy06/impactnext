# Plan de Rediseño de la Navbar (Header)

*Por favor, revisa este plan y añade tus comentarios o notas directamente debajo de cada punto, en las líneas que empiezan con `> COMENTARIO: `.*

---

## 1. Diseño "Píldora Flotante" y Fondo Translúcido
- **Objetivo:** Asegurar la visibilidad del texto en todo momento y darle un toque más premium que una barra de ancho completo.
- **Acción:** La navbar no ocupará todo el ancho desde el principio. Flotará en la parte superior con márgenes (`top-4`) y tendrá un ancho máximo contenido (ej: `max-w-6xl` o similar).
- **Fondo:** Tendrá un fondo translúcido permanente (ej: `bg-black/60 backdrop-blur-md`) y un borde sutil (`border border-white/10`).
aaa
> COMENTARIO: Pero quiero la animacion de la barra que se encoja al hacer scroll. asique hazlo como consideres como un profesional. puedes hacer que empiece el en fondo del Hero y que al hacer la animacion coja el efecto translucido

## 2. Tamaños Dinámicos y Ensanchamiento (Scroll)
- **Objetivo:** Ajustar el tamaño de la barra y sus elementos dinámicamente al hacer scroll.
- **Acción:** 
  - Al hacer scroll, la barra se encogerá ligeramente (ej. pasará a `max-w-5xl` o mantendrá su forma pero con menos *padding*). 
  - Las fuentes de los enlaces del menú serán un poco más grandes (ej. pasaremos de `text-sm` a `text-base` o `16px`).
- **Logo:** Ajustaremos el tamaño del logo para que el estado "pequeño" no se vea demasiado diminuto, mejorando la coherencia.

> COMENTARIO: Asegura los logos porque ahra mismo no estan los de impact channel

## 3. Botón "Empezar" -> MBNify
- **Objetivo:** Redirigir el botón principal.
- **Acción:** Modificar el botón (actualmente llamado "Empezar") para que redirija a `https://mbnify.com` abriendo en una nueva pestaña (tanto en desktop como en móvil).

> COMENTARIO: El boton empezar no, el boton del footer es el que quiero que redirija a MBNify

## 4. Opcional o Extras
- Si quieres algún color de *hover* específico para los links (ahora es amarillo logo) indícalo aquí.

> COMENTARIO: Quiero que el boton de empezar no este, sino que sea el de Presupuesto

---

**Instrucciones para el Agente:** 
Una vez que hayas escrito tus comentarios y guardado este archivo, avísame en el chat ("ya lo he revisado", "listo", etc.) para que yo proceda a leerlo y ejecutar los cambios en `Header.tsx`.
