import React from 'react';
import './App.css';
import IntroPage from './containers/IntroPage/IntroPage';
import Layout from './containers/Layout/Layout';
import { Switch, Route, Redirect } from 'react-router-dom';
import Contact from './Components/Contact/Contact';

// import SectionWipes from './Components/panels/Panels';

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path='/contact' component={Contact} />
          <Route path='/' component={IntroPage} />
          <Redirect to='/' />
        </Switch>
        {/* <IntroPage /> */}
        {/* <SectionWipes /> */}
      </Layout>
    </div>
  );
}

export default App;
