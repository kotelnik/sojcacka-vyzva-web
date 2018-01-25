import {InMemoryDbService} from 'angular-in-memory-web-api';

import {Challenge} from './challenge';

export class InMemoryDataService implements InMemoryDataService {
  createDb() {
    const challenges = [
      {
        id: 1,
        title: 'Zdravý spánek',
        started: null,
        status: {
          id: 1,
          name: 'unassigned'
        },
        difficulty: {
          id: 2,
          name: 'moderate'
        }
      },
      {
        id: 2,
        title: 'Poraz zlo!',
        started: '2017-12-07 21:58:09',
        status: {
          id: 2,
          name: 'started'
        },
        difficulty: {
          id: 4,
          name: 'die_hard'
        }
      },
      {
        id: 3,
        title: 'Uteč z Kraje.',
        started: '2018-01-21 21:58:53',
        status: {
          id: 3,
          name: 'finished'
        },
        difficulty: {
          id: 4,
          name: 'die_hard'
        }
      },
      {
        id: 4,
        title: 'Cvič',
        started: '2017-12-07 21:58:09',
        status: {
          id: 3,
          name: 'finished'
        },
        difficulty: {
          id: 1,
          name: 'easy'
        }
      },
      {
        id: 5,
        title: 'Vař',
        started: '2017-12-07 21:59:09',
        status: {
          id: 3,
          name: 'finished'
        },
        difficulty: {
          id: 1,
          name: 'easy'
        }
      }
    ];

    return {challenges};
  }
}
