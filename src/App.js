import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// import style from './App.module.css';
import MainPage from './MainPage/MainPaige';
import MainPageMobile from './MainPageMobile/MainPageMobile';
import Contacts from './pages/Contacts/Contacts';
import Gallery from './pages/gallery/Gallery';
import Slider from './pages/Slider/Slider';

class App extends Component {
  render() {
    return (
      <>
        <Switch>
          {/* <Route path="/" exact component={MainPage} /> */}
          <Route path="/" exact component={MainPageMobile} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/artwork#:id" component={Slider} />
          <Redirect to="/" />
        </Switch>
      </>
    );
  }
}
export default App;
