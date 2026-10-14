// ============================================================
//  EDIT THIS FILE ONLY. Everything on the website comes from here.
//  Replace the placeholder text, then drop your photos into /images.
// ============================================================
window.SITE = {
  name: "Your Name",
  tagline: "Dancer · Choreographer · Teacher",
  style: "Your dance style (e.g. Bharatanatyam, Kathak, Contemporary)",
  intro:
    "A short, warm paragraph about what dance means to you, how long you have performed, " +
    "and who you teach or perform for. Two or three sentences work best.",

  // Main hero photo (portrait works best). Put the file in /images
  heroImage: "images/hero.jpg",

  // About section
  about: {
    photo: "images/about.jpg",
    paragraphs: [
      "Paragraph 1: your story. How you started dancing, your gurus or teachers, your training.",
      "Paragraph 2: your journey. Stages you have performed on, festivals, productions, collaborations.",
    ],
    highlights: [
      { label: "Years dancing", value: "10+" },
      { label: "Performances", value: "50+" },
      { label: "Students taught", value: "100+" },
    ],
  },

  // Portfolio: awards, training, achievements (shown as a timeline)
  portfolio: [
    { year: "2024", title: "Achievement or award title", detail: "Where / who awarded it" },
    { year: "2022", title: "Notable performance", detail: "Festival, venue or production" },
    { year: "2019", title: "Training / certification", detail: "Institution or guru" },
  ],

  // Testimonials
  testimonials: [
    { quote: "A kind word from a teacher, organiser or student.", by: "Name, role" },
    { quote: "Another testimonial goes here.", by: "Name, role" },
  ],

  // Gallery: list your image files. Missing files show a coloured placeholder.
  gallery: [
    "images/gallery/01.jpg",
    "images/gallery/02.jpg",
    "images/gallery/03.jpg",
    "images/gallery/04.jpg",
    "images/gallery/05.jpg",
    "images/gallery/06.jpg",
  ],

  // Videos: paste YouTube video IDs (the part after v= in the URL)
  videos: [
    { id: "dQw4w9WgXcQ", title: "Performance title 1" },
    { id: "dQw4w9WgXcQ", title: "Performance title 2" },
    { id: "dQw4w9WgXcQ", title: "Performance title 3" },
  ],

  // Events: use YYYY-MM-DD dates. They sort into Upcoming / Past automatically.
  events: [
    {
      date: "2026-12-12",
      title: "Upcoming recital",
      venue: "Venue name, City",
      description: "One line about the event.",
      link: "",
    },
    {
      date: "2025-03-08",
      title: "Past performance",
      venue: "Venue name, City",
      description: "One line about the event.",
      link: "",
    },
  ],

  // Contact
  contact: {
    email: "you@example.com",
    // Optional: create a free form at https://formspree.io and paste its URL here.
    // Leave empty to have the form open the visitor's email app instead.
    formEndpoint: "",
    social: {
      instagram: "https://instagram.com/yourhandle",
      youtube: "https://youtube.com/@yourchannel",
      facebook: "",
      linkedin: "",
    },
  },
};
