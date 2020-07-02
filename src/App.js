import React from 'react';
import Particle from './Components/Particle/Particle'
import './App.css';
import SplitText from './Components/SplitText/SplitText';
import IntroComponents from './Components/IntroComponents/IntroComponents';
import TypingText from './Components/TypingText/TypingText';
// import Box1 from './Components/animation/box1';
import Box2 from './Components/animation/box2';

// import SectionWipes from './Components/panels/Panels';

function App() {
  return (
    <div className="App">
      <Particle />
      {/* <Box1 /> */}
      <IntroComponents><Box2 /></IntroComponents>
      <SplitText>Heyyyyy</SplitText>
      <TypingText />
      {/* <SectionWipes /> */}

    </div>
  );
}

export default App;
