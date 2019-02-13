import React, { Component } from 'react';
import './home.styl';
import list from './protList'
import Info from './info'
class App extends Component {
  constructor(){
    super()
    this.state={
      url:'',
      iframe:'',
      port:list[0].port,
      portList:list.map((v,i)=><option key={i} value={i}>{v.title||'vip线路'+(i+1)}</option>),
    }
  }
  getUrl(e){
    console.log(this)
  }
  getVideo(){
    console.log(this.refs.nodeUrl.value)
    if(this.refs.nodeUrl.value&&this.refs.nodeUrl.value.indexOf('http')>-1){
      this.setState({
        iframe: ''
      })
      this.setState({
        iframe:  <iframe className='myvideo' title='书咖VIP解析' src={this.state.port+this.refs.nodeUrl.value}></iframe>
      })
    }else{
      this.setState({
        iframe: ''
      })

    }
  }
  isSelect(){
    this.setState({
      port:list[this.refs.selectPort.value||0].port
    })
  }
  render() {
    return (
     <div>
       <div className='title'>影咖VIP影视解析</div>
       <div className='top-bar'>
        <select ref='selectPort' className='select' onChange={()=>{this.isSelect()}}>
          {this.state.portList}
        </select>
        <input ref='nodeUrl'  placeholder='请输入网址'></input>
        <div className='button' onClick={()=>{this.getVideo()}}>观看</div>
       </div>
        {this.state.iframe} 
        <Info/>
     </div>
    );
  }
}

export default App;
