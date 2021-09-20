import React, { useState } from 'react';
import './App.css';
import { MouseOverBox } from './Components/mouseOverBox';
import { ResetButton } from './Components/resetButton';

function App() {
  let someRandomImagesOfPeopleStoredInAnArray = [
    "https://images.unsplash.com/photo-1610384467831-4b1e0cd08336?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80",
    "https://images.unsplash.com/photo-1607017137021-5dc7e8cd4317?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80",
    "https://images.unsplash.com/photo-1631182660899-a182d65fd236?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
    "https://images.unsplash.com/photo-1631476541206-64efcea39ca3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    "https://images.unsplash.com/photo-1602428993559-814da78e1bf3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=356&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80",
    "https://images.unsplash.com/photo-1474176857210-7287d38d27c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
  ]
  
  const [freezeCounters, setFreezeCounters] = useState<boolean>(false);

  const renderImagesFromArray = () => {
    return someRandomImagesOfPeopleStoredInAnArray.map((imagePath) => {
      return (
      <MouseOverBox imagePath={imagePath}
        freezeCounter={freezeCounters}
        setFreezeCounter={setFreezeCounters}/>)
    })
  }

  return (
    <div className="App-header">
      <h1>Mouse over the images to increase their counters.</h1>
      <ResetButton reset={() => window.location.reload()}/>
      <br/>
      {renderImagesFromArray()}
    </div>
  );
}

export default App;
