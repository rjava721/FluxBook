import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Header from './Header';
import StatusForm from './StatusForm';
import Timeline from './Timeline';
import TimelineApp from './TimelineApp';

class Post5 extends Component {
  render() {
    return (
      <div>
        <div className='message-box'>
          <div className="status-container-left">
            <img src="https://www.rtings.com/images/test-materials/2015/204_Gray_Uniformity.png"  width='80px' height='80px' alt="grey-box"/>
          </div>

          <div className="status-container-right">
            <h3>{this.props.time}</h3>
            <p className='message'>{this.props.status}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Post5;