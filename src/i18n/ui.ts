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
      homeTitle: 'Bas van der Paardt — zelfstandig merk- en marketingadviseur',
      homeDesc:
        'Zelfstandig merk- en marketingadviseur in Amsterdam. Ik help ondernemers en organisaties scherp te krijgen waar ze voor staan en dat zichtbaar te maken.',
      workTitle: 'Werk',
      workDesc: 'Een selectie van projecten op het gebied van merkstrategie, branding en design.',
      aboutTitle: 'Over Bas',
      aboutDesc: 'Onafhankelijk ontwerper en merkstrateeg met meer dan 25 jaar ervaring in branding en digitale innovatie.',
      thanksTitle: 'Bedankt',
    },
    hero: {
      eyebrow: 'Zelfstandig merk- en marketingadviseur',
      title: 'Een helder verhaal. Een merk dat klopt.',
      lead: 'Je bedrijf groeit of verandert. Er komen mensen, producten en ideeën bij. Maar vertellen je website, je presentatie en je team nog hetzelfde verhaal?',
      lead2:
        'Ik help ondernemers en organisaties scherp te krijgen waar ze voor staan en wat hen onderscheidt. En ik help om die keuzes zichtbaar te maken: van de eerste ideeën tot de uitvoering en de samenhang daarna.',
      primary: 'Bespreek jouw vraag',
      secondary: 'Bekijk mijn werk',
    },

    change: {
      title: 'Als je bedrijf verandert, moet je verhaal soms mee',
      paragraphs: [
        'Misschien herken je het: je website past niet meer bij wat je bedrijf vandaag doet. Je aanbod is gegroeid, maar het is lastig uit te leggen hoe alles samenhangt. Of er wordt volop gewerkt aan marketing, terwijl niemand zeker weet of alle keuzes dezelfde kant op wijzen.',
        'Dan is een nieuw logo of een campagne niet altijd het eerste antwoord. Soms helpt het om eerst een stap terug te doen: wat willen we bereiken, voor wie zijn we relevant en wat maakt ons anders?',
        'Van daaruit kun je gerichter kiezen wat je vertelt, wat je maakt en hoe je klanten je bedrijf ervaren.',
      ],
    },
    practice: {
      title: 'Van richting naar praktijk',
      intro:
        'Ik verbind strategisch denken met creatieve uitwerking. Niet door een rapport op te leveren en te vertrekken, maar door samen te onderzoeken wat nodig is en te helpen die keuzes in praktijk te brengen.',
      steps: [
        {
          word: 'De koers bepalen',
          q: 'We brengen in kaart waar je bedrijf staat, waar je naartoe wilt en wat voor je klanten van waarde is. Dat kan uitmonden in een aangescherpte positionering, een merkverhaal en duidelijke keuzes voor je communicatie.',
        },
        {
          word: 'De koers zichtbaar maken',
          q: 'Een goed idee wordt sterker als je kunt zien hoe het werkt. Daarom vertaal ik de richting naar concrete voorstellen: bijvoorbeeld voor je verhaal, identiteit, website, presentatie, campagne of dienstverlening.',
        },
        {
          word: 'De rode draad bewaken',
          q: 'Ook tijdens en na de uitvoering denk ik mee en bewaak ik de samenhang. Ik help bij keuzes, briefings en de beoordeling van werk, zodat verschillende uitingen en initiatieven elkaar versterken.',
        },
      ],
      outro:
        'Je kunt me inschakelen voor één vraag of voor een langer traject. Soms maak ik zelf dingen; soms werk ik samen met andere specialisten. Wat nodig is, hangt af van de opdracht.',
    },
    aboutHome: {
      title: 'Over Bas',
      paragraphs: [
        'Ik ben Bas van der Paardt, zelfstandig adviseur in merk en marketing. Ik heb ruim 25 jaar ervaring in marketing, branding en digitale innovatie, voor merken als Orange, Jumbo, Nike, Rabobank en Schiphol Group.',
        'De kern van mijn werk is het ontdekken, vormgeven en communiceren van waarde. Een opdrachtgever noemde mij ooit een schatgraver: ik geloof dat de waarde vaak al in een organisatie aanwezig is. De uitdaging is om die te vinden, scherp te maken en betekenis te geven voor klanten en gebruikers.',
        'Ik werk graag met ondernemers en organisaties die iets van betekenis willen maken. Van bedrijven die nieuwe materialen ontwikkelen tot initiatieven rond ethische AI of het helpen van ondernemers met schulden.',
      ],
    },
    work: {
      title: 'Werk dat laat zien hoe dat eruitziet',
      selected: 'Meer geselecteerd werk',
      all: 'Bekijk alle projecten',
      back: 'Terug naar alle werk',
      more: 'Meer projecten',
      shuffle: 'Toon andere selectie',
    },

    method: {
      title: 'Mijn werkwijze: vier vragen die richting geven',
      intro: 'Mijn 4XB-werkwijze helpt om steeds vanuit de klant naar je merk te kijken:',
      steps: [
        { word: 'Behoefte', q: 'Waar is behoefte aan, en bij wie?' },
        { word: 'Belofte', q: 'Wat beloof je die mensen?' },
        { word: 'Beleving', q: 'Hoe ervaren zij die belofte?' },
        { word: 'Bewijs', q: 'Hoe laat je zien dat je die belofte waarmaakt?' },
      ],
      outro:
        'De antwoorden zijn geen eindpunt. Ze vormen een basis om keuzes te maken en ideeën te ontwikkelen die je in de praktijk kunt brengen.',
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
          text: 'ID+AD heeft ons geholpen bij het bepalen en kiezen van onze positionering. Bas is een professional die ons team uitdaagde en continu terugbracht naar de essentie. […] Op het resultaat hebben we sterk verder kunnen bouwen.',
          name: 'Pieter Meijer',
          org: 'Pervorm',
        },
      ],
    },

    contact: {
      title: 'Waar loopt jouw merk tegenaan?',
      lead: 'Heb je een concrete vraag, of merk je dat je verhaal niet meer helemaal past bij waar je bedrijf naartoe wil? Vertel me waar je mee bezig bent. Dan kijken we samen wat een goede eerste stap is.',
      role: 'Zelfstandig merk- en marketingadviseur',
      name: 'Naam',
      email: 'E-mailadres',
      message: 'Waar loop je tegenaan?',
      send: 'Neem contact op',
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
      homeTitle: 'Bas van der Paardt — independent brand and marketing adviser',
      homeDesc:
        'Independent brand and marketing adviser in Amsterdam. I help entrepreneurs and organisations get clear on what they stand for and make it visible.',
      workTitle: 'Work',
      workDesc: 'A selection of projects in brand strategy, branding and design.',
      aboutTitle: 'About Bas',
      aboutDesc: 'Independent designer and brand strategist with more than 25 years of experience in branding and digital innovation.',
      thanksTitle: 'Thank you',
    },
    hero: {
      eyebrow: 'Independent brand and marketing adviser',
      title: 'A clear story. A brand that adds up.',
      lead: 'Your business is growing or changing. People, products and ideas are being added. But do your website, your presentation and your team still tell the same story?',
      lead2:
        'I help entrepreneurs and organisations get clear on what they stand for and what sets them apart. And I help make those choices visible: from the first ideas to the execution and the coherence afterwards.',
      primary: 'Discuss your question',
      secondary: 'See my work',
    },

    change: {
      title: 'When your business changes, your story sometimes has to change with it',
      paragraphs: [
        'You may recognise it: your website no longer fits what your business does today. Your offering has grown, but it’s hard to explain how everything fits together. Or a lot of marketing is going on, while nobody is sure all the choices point the same way.',
        'A new logo or a campaign isn’t always the first answer. Sometimes it helps to take a step back first: what do we want to achieve, who are we relevant to and what makes us different?',
        'From there you can choose more deliberately what you tell, what you make and how customers experience your business.',
      ],
    },
    practice: {
      title: 'From direction to practice',
      intro:
        'I connect strategic thinking with creative execution. Not by delivering a report and leaving, but by exploring together what is needed and helping put those choices into practice.',
      steps: [
        {
          word: 'Setting the course',
          q: 'We map out where your business stands, where you want to go and what your customers value. This can lead to sharper positioning, a brand story and clear choices for your communication.',
        },
        {
          word: 'Making the course visible',
          q: 'A good idea gets stronger when you can see how it works. That’s why I translate the direction into concrete proposals: for your story, identity, website, presentation, campaign or services.',
        },
        {
          word: 'Keeping the thread',
          q: 'During and after execution I keep thinking along and safeguard coherence. I help with choices, briefs and the review of work, so different expressions and initiatives reinforce each other.',
        },
      ],
      outro:
        'You can bring me in for a single question or a longer engagement. Sometimes I make things myself; sometimes I work with other specialists. What is needed depends on the assignment.',
    },
    aboutHome: {
      title: 'About Bas',
      paragraphs: [
        'I’m Bas van der Paardt, an independent brand and marketing adviser. I have more than 25 years of experience in marketing, branding and digital innovation, for brands such as Orange, Jumbo, Nike, Rabobank and Schiphol Group.',
        'The core of my work is discovering, shaping and communicating value. A client once called me a treasure hunter: I believe the value is often already present in an organisation. The challenge is to find it, sharpen it and give it meaning for customers and users.',
        'I enjoy working with entrepreneurs and organisations that want to make something of meaning. From companies developing new materials to initiatives around ethical AI or helping entrepreneurs in debt.',
      ],
    },
    work: {
      title: 'Work that shows what this looks like',
      selected: 'More selected work',
      all: 'View all projects',
      back: 'Back to all work',
      more: 'More projects',
      shuffle: 'Show another selection',
    },

    method: {
      title: 'My method: four questions that give direction',
      intro: 'My 4XB method helps to look at your brand from the customer’s point of view, again and again. In Dutch, all four steps start with a B:',
      steps: [
        { word: 'Need', q: 'What is needed, and by whom?' },
        { word: 'Promise', q: 'What do you promise those people?' },
        { word: 'Experience', q: 'How do they experience that promise?' },
        { word: 'Proof', q: 'How do you show you deliver on that promise?' },
      ],
      outro:
        'The answers are not an endpoint. They form a basis for making choices and developing ideas you can put into practice.',
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
          text: 'ID+AD helped us determine and choose our positioning. Bas is a professional who challenged our team and kept bringing us back to the essence. […] We were able to build strongly on the result.',
          name: 'Pieter Meijer',
          org: 'Pervorm',
        },
      ],
    },

    contact: {
      title: 'What is your brand running into?',
      lead: 'Do you have a specific question, or do you notice your story no longer quite fits where your business is heading? Tell me what you’re working on. Then we’ll look together at a good first step.',
      role: 'Independent brand and marketing adviser',
      name: 'Name',
      email: 'Email address',
      message: 'What are you running into?',
      send: 'Get in touch',
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
