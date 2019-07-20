import { Tutorial } from './models/tutorial.model';
import { User } from './models/user.model';

export interface AppState {
  readonly tutorial: Tutorial[];
  readonly user: User[];
}
