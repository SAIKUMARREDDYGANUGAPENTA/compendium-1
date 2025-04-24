interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  image: string;
  keyDevelopments: string[];
  newEditions?: string[];
}

export const timelineEvents: TimelineEvent[] = [
  {
    year: '2019',
    title: 'Club Founding',
    description: 'The Compendium was established with a vision to amplify student voices through creative journalism and innovation. It laid the foundation for a dynamic platform driven by passion and storytelling.',
    image: '/timeline/2019.jpg',
    keyDevelopments: []
  },
  {
    year: '2021',
    title: 'A New Chapter',
    description: 'Entering its second year, the club welcomed a new leadership team and broadened its scope. Engaging activities such as debates and annual signature events gained popularity across the campus.',
    image: '/timeline/2021.jpg',
    keyDevelopments: [
      'THE COMPENDIUM\'S DEBATE',
      'DEVIANCE 2022'
    ]
  },
  {
    year: '2022',
    title: 'Creative Evolution',
    description: 'The third year marked a phase of artistic growth, with a focus on design and expression. Workshops and interactive sessions drew enthusiastic participation, reflecting the club\'s expanding creative influence.',
    image: '/timeline/2022.jpg',
    keyDevelopments: [
      'THE COMPENDIUM\'S DEBATE 2.0',
      'GRAPHIC DESIGNING WORKSHOP',
      'POTTERY WORKSHOP'
    ],
    newEditions: [
      'ANNUAL MAGAZINE (2022-2023)'
    ]
  },
  {
    year: '2023',
    title: 'Expanding Horizons',
    description: 'This year brought the introduction of new initiatives, including regular content features and interactive events. The club continued to nurture talent while engaging students through thoughtfully curated activities.',
    image: '/timeline/2023.jpg',
    keyDevelopments: [
      'WRITER\'S WORKSHOP',
      'SCAVENGER HUNT'
    ],
    newEditions: [
      'DAILY DIGEST',
      'ANNUAL MAGAZINE (2023-2024)'
    ]
  },
  {
    year: '2024',
    title: 'Five Years Strong',
    description: 'Commemorating its fifth anniversary, the club celebrated its journey with a vibrant lineup of intellectually and creatively stimulating events. It reaffirmed its role as a hub for innovation, expression, and impactful student experiences.',
    image: '/timeline/2024.jpg',
    keyDevelopments: [
      'DESIGN FOR EVERYONE - WORKSHOP',
      'QUIZ - THE BATTLE OF BRAINS',
      'VIBE CODING',
      'COURTROOM CONUNDRUM',
      'STATE VS NOBODY'
    ],
    newEditions: [
      'ARTICLES',
      'WEBSITE',
      'CULTURAL FEST MAGAZINE (2024-2025)',
      'ANNUAL MAGAZINE (2024-2025)'
    ]
  }
];

export default timelineEvents; 