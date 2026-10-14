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

  // Your dance school.
  //   status: "coming-soon"  -> shows a "coming soon" teaser (use this until the school is formed)
  //           "open"         -> shows the full school section (everything below)
  //           "hidden"       -> removes the section and its menu link
  school: {
    status: "coming-soon",

    // Shown only while status is "coming-soon"
    comingSoon: {
      heading: "Something new is on its way",
      message:
        "I am building a dance school of my own. Classes, batches and enrolment details " +
        "will be announced here. Leave a message and I will let you know as soon as it opens.",
      when: "Opening soon", // e.g. "Opening January 2027", or "" to hide this line
      button: "Notify me when it opens",
    },

    // Everything below is shown only when status is "open"
    name: "Your School Name",
    tagline: "Where movement becomes art",
    description:
      "A short introduction to your school: your teaching philosophy, who you teach " +
      "(children, teens, adults, beginners to advanced) and what makes your classes special.",
    photo: "images/school.jpg",
    // Quick facts shown beside the description
    facts: [
      { label: "Founded", value: "2020" },
      { label: "Students", value: "50+" },
      { label: "Location", value: "City, State" },
    ],
    // Programmes / batches
    classes: [
      {
        name: "Beginners",
        level: "Ages 6+ · No experience needed",
        schedule: "Sat & Sun · 5:00 PM",
        mode: "In person",
        description: "Foundations of rhythm, posture, basic steps and expression.",
      },
      {
        name: "Intermediate",
        level: "Ages 10+ · 1-2 years of training",
        schedule: "Tue & Thu · 6:30 PM",
        mode: "In person",
        description: "Complex footwork, compositions and stage presence.",
      },
      {
        name: "Online Batch",
        level: "All ages and levels",
        schedule: "Sun · 10:00 AM",
        mode: "Online (Zoom)",
        description: "Live classes from anywhere, with recordings to practise with.",
      },
    ],
    // Optional: a link to a registration form (Google Form etc.). Leave "" to use the contact form.
    enrolLink: "",
    // Optional: your school's own website or social page
    website: "",
  },

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
