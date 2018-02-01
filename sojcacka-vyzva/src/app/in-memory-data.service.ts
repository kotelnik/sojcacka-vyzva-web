import { InMemoryDbService } from 'angular-in-memory-web-api';

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

    const challenges_full = [
      {
        id: 1,
        creator: {
          id: 6,
          nickName: 'The Chosen One',
          scoreChallenges: 304,
          hasChallenge: true
        },
        executer: null,
        title: 'Zdravý spánek',
        description: 'Choď spát každý den před 23:00.',
        created: '2018-01-02 15:28:13',
        started: null,
        finished: null,
        status: {
          id: 1,
          name: 'unassigned'
        },
        score: 20,
        durationSec: 3600,
        difficulty: {
          id: 2,
          name: 'moderate'
        },
        dueTime: null
      },
      {
        id: 2,
        creator: {
          id: 4,
          nickName: 'Baba',
          scoreChallenges: 70,
          hasChallenge: false
        },
        executer: {
          id: 6,
          nickName: 'The Chosen One',
          scoreChallenges: 50,
          hasChallenge: true
        },
        title: 'Poraz zlo!',
        description: 'Hoď prsten moci do Mordoru.',
        created: '2017-12-07 21:58:09',
        started: '2017-12-07 21:58:09',
        finished: null,
        status: {
          id: 2,
          name: 'started'
        },
        score: 500,
        durationSec: 3600,
        difficulty: {
          id: 4,
          name: 'die_hard'
        },
        dueTime: '2017-12-08 21:58:09'
      },
      {
        id: 3,
        creator: {
          id: 3,
          nickName: 'Arrow',
          scoreChallenges: 303,
          hasChallenge: true
        },
        executer: {
          id: 6,
          nickName: 'The Chosen One',
          scoreChallenges: 50,
          hasChallenge: true
        },
        title: 'Uteč z Kraje.',
        description: 'Dosteň se do Roklinky.',
        created: '2017-12-07 21:58:09',
        started: '2018-01-21 21:58:53',
        finished: '2018-01-21 22:58:53',
        status: {
          id: 3,
          name: 'finished'
        },
        score: 500,
        durationSec: 3600,
        difficulty: {
          id: 4,
          name: 'die_hard'
        },
        dueTime: '2018-01-22 21:58:53'
      },
      {
        id: 4,
        creator: {
          id: 4,
          nickName: 'Baba',
          scoreChallenges: 70,
          hasChallenge: false
        },
        executer: {
          id: 2,
          nickName: 'Poleno',
          scoreChallenges: 302,
          hasChallenge: true
        },
        title: 'Cvič',
        description: 'Udělej 7 dřepů.',
        created: '2017-12-07 21:58:09',
        started: '2017-12-07 21:58:09',
        finished: null,
        status: {
          id: 3,
          name: 'finished'
        },
        score: 70,
        durationSec: 3600,
        difficulty: {
          id: 1,
          name: 'easy'
        },
        dueTime: '2017-12-08 21:58:09'
      },
      {
        id: 5,
        creator: {
          id: 4,
          nickName: 'Baba',
          scoreChallenges: 70,
          hasChallenge: false
        },
        executer: {
          id: 3,
          nickName: 'Arrow',
          scoreChallenges: 303,
          hasChallenge: true
        },
        title: 'Vař',
        description: 'Dvakrát v týdnu uvař teplé jídlo.',
        created: '2017-12-07 21:58:09',
        started: '2017-12-07 21:59:09',
        finished: null,
        status: {
          id: 3,
          name: 'finished'
        },
        score: 90,
        durationSec: 3600,
        difficulty: {
          id: 1,
          name: 'easy'
        },
        dueTime: '2017-12-08 21:59:09'
      }
    ];

    const users = [
      {
        id: 1,
        nickName: 'Nick',
        scoreChallenges: 301,
        hasChallenge: false
      },
      {
        id: 2,
        nickName: 'Poleno',
        scoreChallenges: 302,
        hasChallenge: true
      },
      {
        id: 3,
        nickName: 'Arrow',
        scoreChallenges: 303,
        hasChallenge: true
      },
      {
        id: 4,
        nickName: 'Baba',
        scoreChallenges: 70,
        hasChallenge: false
      },
      {
        id: 5,
        nickName: 'Nulák',
        scoreChallenges: 700,
        hasChallenge: false
      },
      {
        id: 6,
        nickName: 'The Chosen One',
        scoreChallenges: 304,
        hasChallenge: true
      }
    ];

    const users_full = [
      {
        id: 1,
        firstName: 'First',
        lastName: 'Last',
        nickName: 'Nick',
        scoreChallenges: 301,
        hasChallenge: false
      },
      {
        id: 2,
        firstName: 'Lojza',
        lastName: 'Dřím',
        nickName: 'Poleno',
        scoreChallenges: 302,
        hasChallenge: true
      },
      {
        id: 3,
        firstName: 'Mirek',
        lastName: 'Dušín',
        nickName: 'Arrow',
        scoreChallenges: 303,
        hasChallenge: true
      },
      {
        id: 4,
        firstName: 'Onlina',
        lastName: 'Smělá',
        nickName: 'Baba',
        scoreChallenges: 70,
        hasChallenge: false
      },
      {
        id: 5,
        firstName: null,
        lastName: null,
        nickName: 'Nulák',
        scoreChallenges: 700,
        hasChallenge: false
      },
      {
        id: 6,
        firstName: 'Frodo',
        lastName: 'Pytlík',
        nickName: 'The Chosen One',
        scoreChallenges: 304,
        hasChallenge: true
      }
    ];

    return {challenges, challenges_full, users, users_full};
  }
}
