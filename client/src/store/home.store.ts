import baseStore from './base.store';
import { observable } from 'mobx';
import axios from 'axios';

export interface friendsList {
  userName: string;
}
export interface user {
  userName: String;
  password: String;
}
export interface events{
  name: string,
  start: Date,
  end: Date
}
export default class HomeStore extends baseStore {
    @observable user:any = [];
    @observable events: events[] = [];

    getEvents = async() => {
      let result = await axios.get("http://localhost:4000/events/");
      this.events = result.data;
    }
    // doLogin = (user:any) => {
    //     this.user = user;
    //     this.friendsList = user.friends;
    //     this.navigateToChat();
    // }
    // navigateToChat = () => {
    //    this.rootStore.navigationStore.push('/chat');
    // }
}