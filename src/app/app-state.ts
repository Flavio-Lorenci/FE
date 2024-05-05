import { UserState } from './features/user/store/user.reducer';
import { GlobalState } from './globale/store/global.reducer';

export interface AppState {
  globalState: GlobalState;
  userState: UserState;
}
