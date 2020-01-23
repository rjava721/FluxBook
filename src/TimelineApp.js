import React, {Component} from 'react';
import ReactDom from 'react-dom';
import Header from './Header';
import StatusForm from './StatusForm';
import Timeline from './Timeline';
import Post1 from './Post1';

class TimelineApp extends Component {
  render () {
    return (
      <div className='main-box'>
        <Header />
        <StatusForm />
        <Timeline />
      </div>
    )
  }
}

export default TimelineApp;
