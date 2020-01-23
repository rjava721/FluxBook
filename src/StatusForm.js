import React, {Component} from 'react';
import ReactDom from 'react-dom';
import Header from './Header';
import Timeline from './Timeline';
import TimelineApp from './TimelineApp';
import Post1 from './Post1';

class StatusForm extends Component {
  render() {
    return (
      <div className="add-new-status">
        <form>
          <h3>Add New Status<a>×</a></h3>
          <input type="text" className='text-box' placeholder=" Message goes here ..."/>
          <button type='submit'>Post</button>
        </form>
      </div>
    )
  }
}

export default StatusForm;