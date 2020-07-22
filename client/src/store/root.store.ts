import HomeStore from './home.store';
import NavigationStore from './navigation.store';
import { observable } from 'mobx';
import { syncHistoryWithStore } from 'mobx-react-router';

export class RootStore {
    @observable homeStore: HomeStore;
    @observable navigationStore:NavigationStore;
    history: any;

    constructor() {
        this.homeStore = new HomeStore(this);
        this.navigationStore = new NavigationStore();
        this.history = syncHistoryWithStore(this.navigationStore.browserHistory, this.navigationStore);
    }
}
export default new RootStore();