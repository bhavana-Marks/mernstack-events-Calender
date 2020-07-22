import * as React from 'react';
// import * as Styled from 'styeld';
import { observer, Provider } from 'mobx-react';
import rootStore from './store/root.store';
import {Router, Route} from 'react-router-dom';
import Home from './containers/Home/home';

@observer
class App extends React.Component {
  render () {
    return(
      <Provider rootStore={rootStore}>
              <Router history={rootStore.history}>
                <Route path='/' component={Home}/>
              </Router>
      </Provider>
    )
  }
}

export default App;
