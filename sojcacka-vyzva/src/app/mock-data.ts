import { User, UserFull } from './user';
import { Challenge, ChallengeFull } from './challenge';

export const USERS: User[] = [
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

export const USERS_FULL: UserFull[] = [
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

export const CURRENT_USER: UserFull = USERS_FULL[5];

export const CHALLENGES: Challenge[] = [
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

export const CHALLENGES_FULL: ChallengeFull[] = [
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

export const DIFFICULTIES = [
  {
    id: 1,
    name: 'easy'
  },
  {
    id: 2,
    name: 'moderate'
  },
  {
    id: 3,
    name: 'hard'
  },
  {
    id: 4,
    name: 'die_hard'
  }
];

export const STATES_WITH_FLAGS = [
  {'name': 'Alabama', 'flag': '5/5c/Flag_of_Alabama.svg/45px-Flag_of_Alabama.svg.png'},
  {'name': 'Alaska', 'flag': 'e/e6/Flag_of_Alaska.svg/43px-Flag_of_Alaska.svg.png'},
  {'name': 'Arizona', 'flag': '9/9d/Flag_of_Arizona.svg/45px-Flag_of_Arizona.svg.png'},
  {'name': 'Arkansas', 'flag': '9/9d/Flag_of_Arkansas.svg/45px-Flag_of_Arkansas.svg.png'},
  {'name': 'California', 'flag': '0/01/Flag_of_California.svg/45px-Flag_of_California.svg.png'},
  {'name': 'Colorado', 'flag': '4/46/Flag_of_Colorado.svg/45px-Flag_of_Colorado.svg.png'},
  {'name': 'Connecticut', 'flag': '9/96/Flag_of_Connecticut.svg/39px-Flag_of_Connecticut.svg.png'},
  {'name': 'Delaware', 'flag': 'c/c6/Flag_of_Delaware.svg/45px-Flag_of_Delaware.svg.png'},
  {'name': 'Florida', 'flag': 'f/f7/Flag_of_Florida.svg/45px-Flag_of_Florida.svg.png'},
  {
    'name': 'Georgia',
    'flag': '5/54/Flag_of_Georgia_%28U.S._state%29.svg/46px-Flag_of_Georgia_%28U.S._state%29.svg.png'
  },
  {'name': 'Hawaii', 'flag': 'e/ef/Flag_of_Hawaii.svg/46px-Flag_of_Hawaii.svg.png'},
  {'name': 'Idaho', 'flag': 'a/a4/Flag_of_Idaho.svg/38px-Flag_of_Idaho.svg.png'},
  {'name': 'Illinois', 'flag': '0/01/Flag_of_Illinois.svg/46px-Flag_of_Illinois.svg.png'},
  {'name': 'Indiana', 'flag': 'a/ac/Flag_of_Indiana.svg/45px-Flag_of_Indiana.svg.png'},
  {'name': 'Iowa', 'flag': 'a/aa/Flag_of_Iowa.svg/44px-Flag_of_Iowa.svg.png'},
  {'name': 'Kansas', 'flag': 'd/da/Flag_of_Kansas.svg/46px-Flag_of_Kansas.svg.png'},
  {'name': 'Kentucky', 'flag': '8/8d/Flag_of_Kentucky.svg/46px-Flag_of_Kentucky.svg.png'},
  {'name': 'Louisiana', 'flag': 'e/e0/Flag_of_Louisiana.svg/46px-Flag_of_Louisiana.svg.png'},
  {'name': 'Maine', 'flag': '3/35/Flag_of_Maine.svg/45px-Flag_of_Maine.svg.png'},
  {'name': 'Maryland', 'flag': 'a/a0/Flag_of_Maryland.svg/45px-Flag_of_Maryland.svg.png'},
  {'name': 'Massachusetts', 'flag': 'f/f2/Flag_of_Massachusetts.svg/46px-Flag_of_Massachusetts.svg.png'},
  {'name': 'Michigan', 'flag': 'b/b5/Flag_of_Michigan.svg/45px-Flag_of_Michigan.svg.png'},
  {'name': 'Minnesota', 'flag': 'b/b9/Flag_of_Minnesota.svg/46px-Flag_of_Minnesota.svg.png'},
  {'name': 'Mississippi', 'flag': '4/42/Flag_of_Mississippi.svg/45px-Flag_of_Mississippi.svg.png'},
  {'name': 'Missouri', 'flag': '5/5a/Flag_of_Missouri.svg/46px-Flag_of_Missouri.svg.png'},
  {'name': 'Montana', 'flag': 'c/cb/Flag_of_Montana.svg/45px-Flag_of_Montana.svg.png'},
  {'name': 'Nebraska', 'flag': '4/4d/Flag_of_Nebraska.svg/46px-Flag_of_Nebraska.svg.png'},
  {'name': 'Nevada', 'flag': 'f/f1/Flag_of_Nevada.svg/45px-Flag_of_Nevada.svg.png'},
  {'name': 'New Hampshire', 'flag': '2/28/Flag_of_New_Hampshire.svg/45px-Flag_of_New_Hampshire.svg.png'},
  {'name': 'New Jersey', 'flag': '9/92/Flag_of_New_Jersey.svg/45px-Flag_of_New_Jersey.svg.png'},
  {'name': 'New Mexico', 'flag': 'c/c3/Flag_of_New_Mexico.svg/45px-Flag_of_New_Mexico.svg.png'},
  {'name': 'New York', 'flag': '1/1a/Flag_of_New_York.svg/46px-Flag_of_New_York.svg.png'},
  {'name': 'North Carolina', 'flag': 'b/bb/Flag_of_North_Carolina.svg/45px-Flag_of_North_Carolina.svg.png'},
  {'name': 'North Dakota', 'flag': 'e/ee/Flag_of_North_Dakota.svg/38px-Flag_of_North_Dakota.svg.png'},
  {'name': 'Ohio', 'flag': '4/4c/Flag_of_Ohio.svg/46px-Flag_of_Ohio.svg.png'},
  {'name': 'Oklahoma', 'flag': '6/6e/Flag_of_Oklahoma.svg/45px-Flag_of_Oklahoma.svg.png'},
  {'name': 'Oregon', 'flag': 'b/b9/Flag_of_Oregon.svg/46px-Flag_of_Oregon.svg.png'},
  {'name': 'Pennsylvania', 'flag': 'f/f7/Flag_of_Pennsylvania.svg/45px-Flag_of_Pennsylvania.svg.png'},
  {'name': 'Rhode Island', 'flag': 'f/f3/Flag_of_Rhode_Island.svg/32px-Flag_of_Rhode_Island.svg.png'},
  {'name': 'South Carolina', 'flag': '6/69/Flag_of_South_Carolina.svg/45px-Flag_of_South_Carolina.svg.png'},
  {'name': 'South Dakota', 'flag': '1/1a/Flag_of_South_Dakota.svg/46px-Flag_of_South_Dakota.svg.png'},
  {'name': 'Tennessee', 'flag': '9/9e/Flag_of_Tennessee.svg/46px-Flag_of_Tennessee.svg.png'},
  {'name': 'Texas', 'flag': 'f/f7/Flag_of_Texas.svg/45px-Flag_of_Texas.svg.png'},
  {'name': 'Utah', 'flag': 'f/f6/Flag_of_Utah.svg/45px-Flag_of_Utah.svg.png'},
  {'name': 'Vermont', 'flag': '4/49/Flag_of_Vermont.svg/46px-Flag_of_Vermont.svg.png'},
  {'name': 'Virginia', 'flag': '4/47/Flag_of_Virginia.svg/44px-Flag_of_Virginia.svg.png'},
  {'name': 'Washington', 'flag': '5/54/Flag_of_Washington.svg/46px-Flag_of_Washington.svg.png'},
  {'name': 'West Virginia', 'flag': '2/22/Flag_of_West_Virginia.svg/46px-Flag_of_West_Virginia.svg.png'},
  {'name': 'Wisconsin', 'flag': '2/22/Flag_of_Wisconsin.svg/45px-Flag_of_Wisconsin.svg.png'},
  {'name': 'Wyoming', 'flag': 'b/bc/Flag_of_Wyoming.svg/43px-Flag_of_Wyoming.svg.png'}
];
