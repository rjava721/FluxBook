import React, {Component} from 'react';
import ReactDom from 'react-dom';
import StatusForm from './StatusForm';
import Timeline from './Timeline';
import TimelineApp from './TimelineApp';
import Post1 from './Post1';

class Header extends Component {
  render() {
    return (
      <div className="header">
          <h3 className="app-title">My Timeline</h3>
      </div>
    )
  } 
}

export default Header;
