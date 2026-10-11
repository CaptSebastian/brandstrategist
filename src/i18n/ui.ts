export type Lang = 'nl' | 'en';

export const routes = {
  nl: {
    home: '/',
    work: '/werk/',
    case: (id: string) => `/werk/${id}/`,
    about: '/over/',
    contact: '/#contact',
    thanks: '/bedankt/',
  },
  en: {
    home: '/en/',
    work: '/en/work/',
    case: (id: string) => `/en/work/${id}/`,
    about: '/en/about/',
    contact: '/en/#contact',
    thanks: '/en/thanks/',
  },
} as const;

export const email = 'bas@vanderpaardt.com';

export const ui = {
  nl: {
    siteName: 'Bas van der Paardt',
    nav: { work: 'Werk', about: 'Over', contact: 'Contact', cta: 'Neem contact op', switchTo: 'English' },
    meta: {
      homeTitle: 'Bas van der Paardt — merkstrateeg en ontwerper',
      homeDesc:
        'Onafhankelijk ontwerper en merkstrateeg in Amsterdam. Ik help ondernemers met een missie hun verhaal helder te krijgen én bijzonder te vertellen.',
      workTitle: 'Werk',
      workDesc: 'Een selectie van projecten op het gebied van merkstrategie, branding en design.',
      aboutTitle: 'Over Bas',
      aboutDesc: 'Onafhankelijk ontwerper en merkstrateeg met meer dan 25 jaar ervaring in branding en digitale innovatie.',
      thanksTitle: 'Bedankt',
    },
    hero: {
      eyebrow: 'Onafhankelijk ontwerper en merkstrateeg',
      title: 'Ik help ondernemers met een missie hun verhaal helder te krijgen én bijzonder te vertellen.',
      lead: '25+ jaar ervaring in marketing, branding en digitale innovatie, voor merken als Orange, Jumbo, Nike, Rabobank en Schiphol Group.',
      primary: 'Neem contact op',
      secondary: 'Bekijk werk',
    },
    work: { title: 'Geselecteerd werk', all: 'Alle projecten', back: 'Terug naar alle werk', more: 'Meer projecten', shuffle: 'Toon andere selectie' },
    values: {
      title: 'Waarde',
      body: 'De kern van mijn werk is het ontdekken, vormgeven en communiceren van waarde. Een opdrachtgever noemde mij een schatgraver. Ik verzin niet zomaar iets ‘creatiefs’: de waarde zit in jou en je organisatie. Vaak verborgen, maar nooit onvindbaar. De creativiteit zit hem vervolgens in het vormgeven ervan voor je klant of gebruiker.',
    },
    method: {
      title: 'De 4XB-werkwijze',
      intro: 'Door vier vragen telkens opnieuw te beantwoorden, leggen we een solide basis voor je marketing.',
      steps: [
        { word: 'Behoefte', q: 'Waar is behoefte aan, bij wie?' },
        { word: 'Belofte', q: 'Wat is jouw belofte aan hen?' },
        { word: 'Beleving', q: 'Welke beleving bieden we hen?' },
        { word: 'Bewijs', q: 'Hoe bewijzen we dat jouw belofte de moeite waard is?' },
      ],
    },
    quotes: {
      title: 'Wat opdrachtgevers zeggen',
      items: [
        {
          text: 'Onze 3FM corporate campagne is als eerste en enige in de geschiedenis van de Nederlandse radio bekroond met een Gouden Effie, de hoogst haalbare marketingprijs in Nederland. Vernieuwend!',
          name: 'Florent Luyckx',
          org: 'NPO Public Broadcasting',
        },
        {
          text: 'Bas van der Paardt heeft ons als business consultant geadviseerd en begeleid met het vaststellen van onze missie en visie naar aanloop van een investeringsplan en toekomststrategieën. Het resultaat was een uniek plan waarmee wij een investering hebben binnengehaald.',
          name: 'Wouter Suren',
          org: 'L1NDA',
        },
        {
          text: 'ID+AD heeft ons geholpen bij het bepalen en kiezen van onze positionering. Bas is een professional die ons team uitdaagde en continu terugbracht naar de essentie. […] Op het resultaat hebben we sterk verder kunnen bouwen.',
          name: 'Pieter Meijer',
          org: 'Pervorm',
        },
      ],
    },
    meaning: {
      title: 'Betekenis',
      body: 'Ik haal veel voldoening uit het helpen starten, of uit de prut trekken, van ondernemers die van betekenis willen zijn voor ‘de wereld’. Bijvoorbeeld voor een bedrijf dat bioplastics maakt van PHA, een TU Delft-spinoff die ethische AI ontwikkelt, een blockchain-biermerk dat strijdt voor een decentrale samenleving of een social company die ondernemers uit de schulden helpt.',
    },
    contact: {
      title: 'Klaar voor de volgende stap?',
      lead: 'Ben jij een ondernemer met een missie en op zoek naar een ervaren partner die je helpt je verhaal helder te krijgen én bijzonder te vertellen? Neem contact op. Ik denk graag met je mee over hoe we jouw impact kunnen vergroten.',
      name: 'Naam',
      email: 'E-mailadres',
      message: 'Waar kan ik je mee helpen?',
      send: 'Verstuur',
      orMail: 'Of mail direct naar',
      visit: 'Bezoekadres',
    },
    about: {
      title: 'Over Bas',
      intro: 'Ik ben een onafhankelijk ontwerper en merkstrateeg met meer dan 25 jaar ervaring in branding en digitale innovatie.',
      paragraphs: [
        'Ik werk voor merken die willen groeien en voor gevestigde merken die sterk willen blijven.',
        'Als adviseur help ik teams hun merkpositionering en strategie aan te scherpen. Als ontwerper ontwikkel ik marketingconcepten en breng ik structuur aan in design en contentproductie.',
        'Mijn werk is meer dan twintig keer bekroond.',
      ],
      quote: {
        text: 'Jij hebt ons meegenomen in dat proces. De lat lag hoog, we gingen ervoor. Met plezier. Het is de maatstaf geworden voor heel het groene onderwijs.',
        name: 'Willy Vogels',
        org: 'Wellantcollege',
      },
    },
    thanks: { title: 'Bedankt voor je bericht', body: 'Ik neem zo snel mogelijk contact met je op.', back: 'Terug naar home' },
    notFound: { title: 'Pagina niet gevonden', body: 'Deze pagina bestaat niet (meer).', back: 'Terug naar home' },
    footer: { tagline: 'Strategic Branding' },
  },
  en: {
    siteName: 'Bas van der Paardt',
    nav: { work: 'Work', about: 'About', contact: 'Contact', cta: 'Get in touch', switchTo: 'Nederlands' },
    meta: {
      homeTitle: 'Bas van der Paardt — brand strategist and designer',
      homeDesc:
        'Independent designer and brand strategist in Amsterdam. I help mission-driven entrepreneurs get their story clear and tell it in a remarkable way.',
      workTitle: 'Work',
      workDesc: 'A selection of projects in brand strategy, branding and design.',
      aboutTitle: 'About Bas',
      aboutDesc: 'Independent designer and brand strategist with more than 25 years of experience in branding and digital innovation.',
      thanksTitle: 'Thank you',
    },
    hero: {
      eyebrow: 'Independent designer and brand strategist',
      title: 'I help mission-driven entrepreneurs get their story clear and tell it in a remarkable way.',
      lead: '25+ years of experience in marketing, branding and digital innovation, for brands such as Orange, Jumbo, Nike, Rabobank and Schiphol Group.',
      primary: 'Get in touch',
      secondary: 'See work',
    },
    work: { title: 'Selected work', all: 'All projects', back: 'Back to all work', more: 'More projects', shuffle: 'Show another selection' },
    values: {
      title: 'Value',
      body: 'The core of my work is discovering, shaping and communicating value. A client once called me a treasure hunter. I don’t just make up something ‘creative’: the value is in you and your organisation. Often hidden, but never impossible to find. The creativity then lies in shaping it for your customer or user.',
    },
    method: {
      title: 'The 4XB method',
      intro: 'In Dutch, all four steps start with a B. By answering four questions again and again, we build a solid foundation for your marketing.',
      steps: [
        { word: 'Need', q: 'What is needed, and by whom?' },
        { word: 'Promise', q: 'What is your promise to them?' },
        { word: 'Experience', q: 'What experience do we offer them?' },
        { word: 'Proof', q: 'How do we prove your promise is worth it?' },
      ],
    },
    quotes: {
      title: 'What clients say',
      items: [
        {
          text: 'Our 3FM corporate campaign was the first and only one in the history of Dutch radio to win a Gouden Effie, the highest marketing award in the Netherlands. Innovative!',
          name: 'Florent Luyckx',
          org: 'NPO Public Broadcasting',
        },
        {
          text: 'Bas van der Paardt advised and guided us as a business consultant in defining our mission and vision ahead of an investment plan and future strategies. The result was a unique plan with which we secured an investment.',
          name: 'Wouter Suren',
          org: 'L1NDA',
        },
        {
          text: 'ID+AD helped us determine and choose our positioning. Bas is a professional who challenged our team and kept bringing us back to the essence. […] We were able to build strongly on the result.',
          name: 'Pieter Meijer',
          org: 'Pervorm',
        },
      ],
    },
    meaning: {
      title: 'Meaning',
      body: 'I find great satisfaction in helping entrepreneurs start, or get out of a rut, who want to be meaningful to ‘the world’. For example a company making bioplastics from PHA, a TU Delft spin-off developing ethical AI, a blockchain beer brand fighting for a decentralised society, or a social company helping entrepreneurs out of debt.',
    },
    contact: {
      title: 'Ready for the next step?',
      lead: 'Are you an entrepreneur with a mission, looking for an experienced partner to help you get your story clear and tell it in a remarkable way? Get in touch. I’d be glad to think along about how we can increase your impact.',
      name: 'Name',
      email: 'Email address',
      message: 'How can I help you?',
      send: 'Send',
      orMail: 'Or email directly',
      visit: 'Address',
    },
    about: {
      title: 'About Bas',
      intro: 'I’m an independent designer and brand strategist with more than 25 years of experience in branding and digital innovation.',
      paragraphs: [
        'I work with brands that want to grow and with established brands that want to stay strong.',
        'As an adviser I help teams sharpen their brand positioning and strategy. As a designer I develop marketing concepts and bring structure to design and content production.',
        'My work has won more than twenty industry awards.',
      ],
      quote: {
        text: 'You took us through that process. The bar was high, and we went for it. With pleasure. It has become the benchmark for all of green education.',
        name: 'Willy Vogels',
        org: 'Wellantcollege',
      },
    },
    thanks: { title: 'Thank you for your message', body: 'I’ll get back to you as soon as possible.', back: 'Back to home' },
    notFound: { title: 'Page not found', body: 'This page doesn’t exist (anymore).', back: 'Back to home' },
    footer: { tagline: 'Strategic Branding' },
  },
} as const;
