import React, {Component} from 'react';
import ReactDom from 'react-dom';
import Header from './Header';
import StatusForm from './StatusForm';
import TimelineApp from './TimelineApp';
import Post1 from './Post1';
import Post2 from './Post2';
import Post3 from './Post3';
import Post4 from './Post4';
import Post5 from './Post5';
import Post6 from './Post6';


class Timeline extends Component {
  render() {
    return (
      <div>
        <Post1 time={`aujourd'hui`} status={'hello there'}/>
        <Post2 time={`demain`} status={`enfin j'ai vendu mon ordinateur`}/>
        <Post3 time={'yesterday'} status={'I am fffffffffffrrrrrrrrrrrrrrrreeeeeeeeeeeeeeee'}/>
        <Post4 time={'tomorrow'} status={'ouuuuuuuuuuuuuuuuuuuuuiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii'}/>
        <Post5 time={'today evening'} status={'sapologie got created'}/>
        <Post6 time={'today night'} status={'sapologie got applied'}/>
      </div>

    )
  }
}

export default Timeline;