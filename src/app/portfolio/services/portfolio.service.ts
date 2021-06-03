import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
clientsInfo = [
  {
    title: 'Fractal Systems / BuildUp / Tawazun',
    desc: 'We have created B2B infographic video materials for Abu Dhabi defense company Tawazun. It was an amazing collaboration with technical  specialists from Fractal Systems and stand builders from BuildUp.'
  },
  {
    title: 'Revenue Lab',
    desc: 'A great adventure with the Revenue Lab team resulted in this neat and clean, modern and clients oriented corporate video.',
  },
  {
    title: 'Bet On Chart',
    desc: 'Bet On Chart corporate video. We were involved in the marketing campaign of one of the first block chain and crypto-currencies related betting services.',
  },
  {
    title: 'Santiago Michel',
    desc: 'An opening video for a live-action show of the great and talented mentalist and illusionist from Mexico.',
  },
  {
    title: 'Fractal Systems / BuildUp / Ministery of the interior, Kingdom of Saudi Arabia',
    desc: 'It was an honor to work for the visuals of the MOI KSA stand during the GITEX 2020 exhibition.',
  },
  {
    title: 'TTI',
    desc: 'Video infographic about the key features of TTI company of Abu Dhabi, UAE.',
  },
  {
    title: 'Rokoko',
    desc: 'Stylish 2d explainer for a customer service application. Featuring bright colors and fresh look, produced for one of the oldest players in the market.',
  },
  {
    title: 'Volt / CRAC / PRAXIS',
    desc: 'This is how everything has begun. A few intros were created by the founder of the Legion studio. Since then we have come a long way, but we will always remember  the origins, and will always keep warm feelings for the first customers who relied on us.',
  }
];
  images = {
  tawazun : {
    largeImg : [
      undefined,
      undefined,
      '/assets/images/portfolio/tawazun/3.jpg',
      '/assets/images/portfolio/tawazun/4.jpg',
      undefined,
      '/assets/images/portfolio/tawazun/6.jpg',
      '/assets/images/portfolio/tawazun/7.jpg',
      '/assets/images/portfolio/tawazun/8.jpg',
      '/assets/images/portfolio/tawazun/9.jpg',
      '/assets/images/portfolio/tawazun/10.jpg',
      undefined,
      undefined,
      '/assets/images/portfolio/tawazun/13.jpg',
      '/assets/images/portfolio/tawazun/14.jpg',
      '/assets/images/portfolio/tawazun/15.jpg',
      '/assets/images/portfolio/tawazun/16.jpg',
      '/assets/images/portfolio/tawazun/17.jpg'
    ],
    smallImg : [
      undefined,
      undefined,
      '/assets/images/portfolio/tawazun/3-small.jpg',
      '/assets/images/portfolio/tawazun/4-small.jpg',
      undefined,
      '/assets/images/portfolio/tawazun/6-small.jpg',
      '/assets/images/portfolio/tawazun/7-small.jpg',
      '/assets/images/portfolio/tawazun/8-small.jpg',
      '/assets/images/portfolio/tawazun/9-small.jpg',
      '/assets/images/portfolio/tawazun/10-small.jpg',
      undefined,
      undefined,
      '/assets/images/portfolio/tawazun/13-small.jpg',
      '/assets/images/portfolio/tawazun/14-small.jpg',
      '/assets/images/portfolio/tawazun/15-small.jpg',
      '/assets/images/portfolio/tawazun/16-small.jpg',
      '/assets/images/portfolio/tawazun/17-small.jpg'
    ]
  },
    revlab : {
      largeImg : [
        '/assets/images/portfolio/revlab/1.jpg',
        '/assets/images/portfolio/revlab/2.jpg',
        '/assets/images/portfolio/revlab/3.jpg',
        '/assets/images/portfolio/revlab/4.jpg',
        '/assets/images/portfolio/revlab/5.jpg',
        '/assets/images/portfolio/revlab/6.jpg',
        '/assets/images/portfolio/revlab/7.jpg'
      ],
      smallImg : [
        '/assets/images/portfolio/revlab/1-small.jpg',
        '/assets/images/portfolio/revlab/2-small.jpg',
        '/assets/images/portfolio/revlab/3-small.jpg',
        '/assets/images/portfolio/revlab/4-small.jpg',
        '/assets/images/portfolio/revlab/5-small.jpg',
        '/assets/images/portfolio/revlab/6-small.jpg',
        '/assets/images/portfolio/revlab/7-small.jpg'
      ],
    },
    betonchart : {
      largeImg : [
        '/assets/images/portfolio/betonchart/1.jpg',
        '/assets/images/portfolio/betonchart/2.jpg',
        '/assets/images/portfolio/betonchart/3.jpg',
        '/assets/images/portfolio/betonchart/4.jpg',
        '/assets/images/portfolio/betonchart/5.jpg',
        '/assets/images/portfolio/betonchart/6.jpg',
        '/assets/images/portfolio/betonchart/7.jpg',
        '/assets/images/portfolio/betonchart/8.jpg',
        '/assets/images/portfolio/betonchart/9.jpg',
        '/assets/images/portfolio/betonchart/10.jpg'
      ],
      smallImg : [
        '/assets/images/portfolio/betonchart/1-small.jpg',
        '/assets/images/portfolio/betonchart/2-small.jpg',
        '/assets/images/portfolio/betonchart/3-small.jpg',
        '/assets/images/portfolio/betonchart/4-small.jpg',
        '/assets/images/portfolio/betonchart/5-small.jpg',
        '/assets/images/portfolio/betonchart/6-small.jpg',
        '/assets/images/portfolio/betonchart/7-small.jpg',
        '/assets/images/portfolio/betonchart/8-small.jpg',
        '/assets/images/portfolio/betonchart/9-small.jpg',
        '/assets/images/portfolio/betonchart/10-small.jpg'
      ]
    },
    santiago : {
      largeImg : [
        '/assets/images/portfolio/memory/1.jpg',
        '/assets/images/portfolio/memory/2.jpg',
        '/assets/images/portfolio/memory/3.jpg',
        '/assets/images/portfolio/memory/4.jpg',
        '/assets/images/portfolio/memory/5.jpg',
        '/assets/images/portfolio/memory/6.jpg',
        '/assets/images/portfolio/memory/7.jpg',
        '/assets/images/portfolio/memory/8.jpg'
      ],
      smallImg : [
        '/assets/images/portfolio/memory/1-small.jpg',
        '/assets/images/portfolio/memory/2-small.jpg',
        '/assets/images/portfolio/memory/3-small.jpg',
        '/assets/images/portfolio/memory/4-small.jpg',
        '/assets/images/portfolio/memory/5-small.jpg',
        '/assets/images/portfolio/memory/6-small.jpg',
        '/assets/images/portfolio/memory/7-small.jpg',
        '/assets/images/portfolio/memory/8-small.jpg'
      ]
    },
    fractal : {
      largeImg : [
        '/assets/images/portfolio/moi/1.jpg',
        '/assets/images/portfolio/moi/2.jpg',
        '/assets/images/portfolio/moi/3.jpg',
        '/assets/images/portfolio/moi/4.jpg',
        '/assets/images/portfolio/moi/5.jpg',
        '/assets/images/portfolio/moi/6.jpg',
        '/assets/images/portfolio/moi/7.jpg',
        '/assets/images/portfolio/moi/8.jpg',
        '/assets/images/portfolio/moi/9.jpg'
      ],
      smallImg : [
        '/assets/images/portfolio/moi/1-small.jpg',
        '/assets/images/portfolio/moi/2-small.jpg',
        '/assets/images/portfolio/moi/3-small.jpg',
        '/assets/images/portfolio/moi/4-small.jpg',
        '/assets/images/portfolio/moi/5-small.jpg',
        '/assets/images/portfolio/moi/6-small.jpg',
        '/assets/images/portfolio/moi/7-small.jpg',
        '/assets/images/portfolio/moi/8-small.jpg',
        '/assets/images/portfolio/moi/9-small.jpg'
      ]
    },
    tti : {
      largeImg : [
        '/assets/images/portfolio/tti/1.jpg',
        '/assets/images/portfolio/tti/2.jpg',
        '/assets/images/portfolio/tti/3.jpg',
        '/assets/images/portfolio/tti/4.jpg',
        '/assets/images/portfolio/tti/5.jpg',
        '/assets/images/portfolio/tti/6.jpg',
        '/assets/images/portfolio/tti/7.jpg'
      ],
      smallImg : [
        '/assets/images/portfolio/tti/1-small.jpg',
        '/assets/images/portfolio/tti/2-small.jpg',
        '/assets/images/portfolio/tti/3-small.jpg',
        '/assets/images/portfolio/tti/4-small.jpg',
        '/assets/images/portfolio/tti/5-small.jpg',
        '/assets/images/portfolio/tti/6-small.jpg',
        '/assets/images/portfolio/tti/7-small.jpg'
      ]
    },
    rokoko : {
      largeImg : [
        '/assets/images/rococo/tawazun/1.jpg',
        '/assets/images/rococo/tawazun/2.jpg',
        '/assets/images/rococo/tawazun/3.jpg',
        '/assets/images/rococo/tawazun/4.jpg',
        '/assets/images/rococo/tawazun/5.jpg',
        '/assets/images/rococo/tawazun/6.jpg',
        '/assets/images/rococo/tawazun/7.jpg'
      ],
      smallImg : [
        '/assets/images/rococo/tawazun/1-small.jpg',
        '/assets/images/rococo/tawazun/2-small.jpg',
        '/assets/images/rococo/tawazun/3-small.jpg',
        '/assets/images/rococo/tawazun/4-small.jpg',
        '/assets/images/rococo/tawazun/5-small.jpg',
        '/assets/images/rococo/tawazun/6-small.jpg',
        '/assets/images/rococo/tawazun/7-small.jpg'
      ]
    },
    volt : {
      largeImg : [
        '/assets/images/portfolio/intros/1.jpg',
        '/assets/images/portfolio/intros/2.jpg',
        '/assets/images/portfolio/intros/3.jpg',
        '/assets/images/portfolio/intros/4.jpg',
        '/assets/images/portfolio/intros/5.jpg',
        undefined,
        '/assets/images/portfolio/intros/7.jpg',
        '/assets/images/portfolio/intros/8.jpg',
        '/assets/images/portfolio/intros/9.jpg',
        '/assets/images/portfolio/intros/10.jpg',
        '/assets/images/portfolio/intros/11.jpg',
        '/assets/images/portfolio/intros/12.jpg',
        '/assets/images/portfolio/intros/13.jpg',
        '/assets/images/portfolio/intros/14.jpg',
        '/assets/images/portfolio/intros/15.jpg',
        '/assets/images/portfolio/intros/16.jpg',
        '/assets/images/portfolio/intros/17.jpg'
      ],
      smallImg : [
        '/assets/images/portfolio/intros/1-small.jpg',
        '/assets/images/portfolio/intros/2-small.jpg',
        '/assets/images/portfolio/intros/3-small.jpg',
        '/assets/images/portfolio/intros/4-small.jpg',
        '/assets/images/portfolio/intros/5-small.jpg',
        undefined,
        '/assets/images/portfolio/intros/7-small.jpg',
        '/assets/images/portfolio/intros/8-small.jpg',
        '/assets/images/portfolio/intros/9-small.jpg',
        '/assets/images/portfolio/intros/10-small.jpg',
        '/assets/images/portfolio/intros/11-small.jpg',
        '/assets/images/portfolio/intros/12-small.jpg',
        '/assets/images/portfolio/intros/13-small.jpg',
        '/assets/images/portfolio/intros/14-small.jpg',
        '/assets/images/portfolio/intros/15-small.jpg',
        '/assets/images/portfolio/intros/16-small.jpg',
        '/assets/images/portfolio/intros/17-small.jpg'
      ]
    }
  };
  constructor() { }
}
