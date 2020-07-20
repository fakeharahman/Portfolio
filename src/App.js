import React, { Suspense } from 'react';
import './App.css';
import IntroPage from './containers/IntroPage/IntroPage';
import Layout from './containers/Layout/Layout';
import { Switch, Route, Redirect } from 'react-router-dom';
import Spinner from './Components/UI/Spinner/Spinner';
// import Contact from './Components/Contact/Contact';

// import SectionWipes from './Components/panels/Panels';
const Contact = React.lazy(() => import('./Components/Contact/Contact'))

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path='/contact' render={() => <Suspense fallback={<Spinner />}><Contact /></Suspense>} />
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
