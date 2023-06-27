import './App.css';
import React from 'react'
import Thumbnail from './components/Thumbnail';
import Video from './components/Video';

function App  () {
  return (
    <div className='App'>
      <Thumbnail/>
      <Video></Video>
      <p>this is new function component</p>
    </div>
  )
}

export default App
