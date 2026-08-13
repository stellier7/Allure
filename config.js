// ============================================================
// ALLURE — Salón de Belleza & Day Spa · Comayagua
// Edita todo en este archivo para adaptar el sitio.
// Para un re-skin normal, no debería hacer falta cambiar
// nada fuera de este archivo.
// ============================================================

const CONFIG = {
  lang: "es",

  // ---- Marca ----
  brandName: "ALLURE",
  brandNameShort: "ALLURE",
  tagline: "Salón de Belleza & Day Spa",
  heroEyebrow: "Comayagua, Honduras",
  heroHeadlineLines: ["Belleza", "que te abraza"],
  heroSub:
    "Cabello, uñas y piel en un day spa pensado para ti. Venta de productos de belleza con envíos a todo Honduras.",

  // ---- Contacto / Reservas ----
  whatsappNumber: "50499123052", // código de país + número, sin + ni espacios
  whatsappDefaultMessage: "¡Hola! Me gustaría reservar una cita en ALLURE Comayagua.",
  phoneDisplay: "(+504) 9912-3052",
  address: "Frente entrada principal Mall Premier, contiguo a La Curacao — Comayagua, Honduras",
  hours: [
    { day: "Lun — Sáb", time: "9:00 AM – 5:00 PM" },
    { day: "Domingo", time: "Cerrado" },
  ],
  instagramHandle: "@allurecomayagua",
  instagramUrl: "https://www.instagram.com/allurecomayagua?igsh=aGY2cDYybTB6OGJp",
  facebookUrl: "https://www.facebook.com/AllureComayagua/",

  // ---- Colores (beige / tonos piel) ----
  colors: {
    noir: "#2A2420",
    noirSoft: "#3D3530",
    champagne: "#C9A882",
    champagneSoft: "#E8D5BC",
    ivory: "#F7F0E8",
    ivorySoft: "#EDE4D8",
    umber: "#4A3F35",
    roseEmber: "#C4A088",
    smoke: "#9A8E82",
  },

  // ---- Servicios ----
  services: [
    {
      label: "Cabello",
      name: "Cabello",
      description:
        "Cortes, color, tratamientos y acabados para lucir tu mejor versión.",
      items: ["Corte y peinado", "Color y tratamientos", "Alisados y brillo", "Productos para el cuidado del cabello"],
    },
    {
      label: "Uñas",
      name: "Manicure & Pedicure",
      description:
        "Manos y pies impecables con técnicas actuales y acabados de larga duración.",
      items: ["Manicure", "Pedicure", "Uñas en gel", "Nail art y diseños"],
    },
    {
      label: "Spa",
      name: "Faciales, Masajes & Spa",
      description:
        "Tratamientos faciales, exfoliación corporal y masajes para relajarte y renovar tu piel.",
      items: ["Faciales", "Exfoliación corporal", "Masajes relajantes", "Productos para piel y cuerpo"],
    },
  ],

  // ---- Consejos antes de tu cita (franja ritual) ----
  ritualSteps: [
    {
      time: "01",
      title: "Agenda adecuadamente",
      text: "Reserva con tiempo para asegurar tu horario ideal y recibir la atención que mereces.",
      img: "images/ritual-01.jpeg",
    },
    {
      time: "02",
      title: "Tómale foto a tus productos",
      text: "Trae fotos de los productos que usas en casa — nos ayuda a personalizar tu tratamiento.",
      img: "images/ritual-02.jpeg",
    },
    {
      time: "03",
      title: "Pensando en hacerte un facial",
      text: "Cuéntanos qué buscas: hidratación, luminosidad o una piel más uniforme. Te orientamos.",
      img: "images/ritual-03.jpeg",
    },
    {
      time: "04",
      title: "No te exfolies en la semana de tu facial",
      text: "Evita exfoliantes fuertes unos días antes para que tu piel reciba el facial en las mejores condiciones.",
      img: "images/ritual-04.jpeg",
    },
    {
      time: "05",
      title: "Guarda el retinol",
      text: "Pausa el retinol antes de tu facial — tu piel lo agradecerá y el resultado será aún mejor.",
      img: "images/ritual-05.jpeg",
    },
  ],

  // ---- Galería ----
  gallery: [
    "images/gallery-01.jpeg",
    "images/gallery-02.jpeg",
    "images/gallery-03.jpeg",
    "images/gallery-04.jpeg",
    "images/gallery-05.jpeg",
    "images/gallery-06.jpeg",
  ],

  // ---- Testimonios (Google Maps) ----
  testimonials: [
    {
      quote:
        "Excelente servicio. Muy buena recepción, muy amables — un día antes te avisan. El servicio muy bien.",
      name: "Kevin E. M.",
    },
    {
      quote:
        "Fueron muy puntuales, responsables y me atendieron súper bien. Los precios son asequibles y el resultado me encantó.",
      name: "Keyli C.",
    },
    {
      quote: "Excelente atención, variedad de servicios. ¡El mejor SPA!",
      name: "Lamar Consultores",
    },
  ],

  // ---- Imágenes & mapa ----
  logo: "images/logo.jpeg",
  shareImage: "images/logo.jpeg",
  siteUrl: "https://stellier7.github.io/Allure",
  heroImage: "images/Hero.png",
  heroImagePosition: "100% center",
  heroImageSize: "contain",
  mapsUrl: "https://maps.app.goo.gl/Vu8PJMr21e7DMBc16",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=14.4523522,-87.6383451&hl=es&z=16&output=embed",

  // ---- Textos de interfaz ----
  ui: {
    metaDescription:
      "ALLURE — Salón de Belleza & Day Spa en Comayagua. Cabello, uñas, faciales, masajes y productos con envío a todo Honduras.",
    navServices: "Servicios",
    navExperience: "Consejos",
    navGallery: "Galería",
    navVisit: "Visítanos",
    navBook: "Reservar",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    heroCta: "Reservar por WhatsApp",
    heroSecondary: "Ver servicios",
    heroScroll: "Desliza",
    servicesEyebrow: "Lo Que Hacemos",
    servicesTitle: "Cabello, uñas, spa y productos.",
    ritualEyebrow: "Antes de Tu Cita",
    ritualTitle: "Prepárate para brillar.",
    galleryEyebrow: "Nuestro Espacio",
    galleryTitle: "Conoce ALLURE en Comayagua.",
    galleryImageAlt: "Imagen de galería",
    testimonialsEyebrow: "Reseñas en Google",
    testimonialsTitle: "Lo que dicen nuestras clientas.",
    visitEyebrow: "Encuéntranos",
    visitTitle: "Visítanos en Mall Premier.",
    visitMapTitle: "ALLURE Day Spa & Salon en Google Maps",
    mapsOpenLabel: "Abrir en Google Maps",
    footerEyebrow: "Cuando Quieras",
    footerTitle: "Reserva tu cita.",
    footerCta: "Escríbenos por WhatsApp",
    whatsappLabel: "WhatsApp",
    facebookLabel: "Facebook",
  },
};
