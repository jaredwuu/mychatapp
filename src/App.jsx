import LogginPage from './components/loggin/Loggin_Page.jsx'
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import React from 'react'
import Home from './components/home/Home'
import Join from './components/chat/Join/Join'
import Chat from './components/chat/Chat/Chat'

const store = createStore(reducers, compose(applyMiddleware(thunk)))


function App() {


  return (
    <div className="font-serif text-center h-screen">
      <Provider store={store}>
        <BrowserRouter>        
          <Switch>
            <Route path='/' exact component={LogginPage} />
            <Route path="/auth" component={Home} />
            {/* <Route path="/join" component={Join} /> */}
            <Route path="/chat" component={Chat} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
