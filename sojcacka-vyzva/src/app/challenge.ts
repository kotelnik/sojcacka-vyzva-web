import { User } from './user';
import { Enum } from './enum';

export class Challenge {
  id: number;
  title: string;
  description: string;
}

export class ChallengeFull {
  id: number;
  creator: User;
  executer: User;
  title: string;
  description: string;
  created: string;
  started: string;
  finished: string;
  status: Enum;
  score: number;
  durationSec: number;
  difficulty: Enum;
  dueTime: string;
}
