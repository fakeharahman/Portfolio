import React from 'react';
import './App.css';
import IntroPage from './containers/IntroPage/IntroPage';
import Layout from './containers/Layout/Layout';

// import SectionWipes from './Components/panels/Panels';

function App() {
  return (
    <div className="App">
      <Layout>
        <IntroPage />
        {/* <SectionWipes /> */}
      </Layout>
    </div>
  );
}

export default App;
