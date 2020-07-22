import { RootStore } from './root.store';

export default class BaseStore {
    rootStore: RootStore;
    constructor(root: RootStore) {
        this.rootStore = root;
    }
}