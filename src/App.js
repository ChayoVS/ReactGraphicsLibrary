import React, { Fragment } from 'react';
import './App.css';
import GraphicOne from './components/GraphicOne/GraphicOne';
import GraphicTwo from './components/GraphicTwo/GraphicTwo';
import GraphicThree from './components/GraphicThree/GraphicThree';


const App = () => {
  return (
    <Fragment>
      <div className="container-graphics">
      <GraphicOne/>
      <GraphicTwo/>
      <GraphicThree/>
      </div>
    </Fragment>
  )
}



export default App;
