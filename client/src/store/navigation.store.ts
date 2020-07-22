import { RouterStore } from 'mobx-react-router';
let createBrowserHistory = require("history").createBrowserHistory
export default class NavigationStore extends RouterStore {
     browserHistory = createBrowserHistory();

}