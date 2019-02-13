import React, { Component } from 'react';
import './play.styl';
class App extends Component{
  constructor(){
    super()
    this.state={
      url:''
    }
  }
  componentWillMount(){
    console.log(this.props.match.params.url)
  }
  render(){
    if(this.props.match.params&&this.props.match.params.url&&this.props.match.params.url.indexOf('http')>-1){
    return   <div>
      <iframe className='myvideo' title='书咖VIP解析' src={'http://api.bbbbbb.me/jx/?url='+this.props.match.params.url}></iframe>
    </div>
  }
    else{
      return  <div></div>
    }
  }
}
export default App;
