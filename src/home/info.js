import React,{Component} from 'react'
import {Link} from 'react-router-dom';
let supportSite =  [{"title":"腾讯视频","url":"https://v.qq.com/","img":"https://www.wsho.cn/vip-video/style/images/qqlogo.png"},{"title":"爱奇艺视频","url":"https://www.iqiyi.com/","img":"https://www.wsho.cn/vip-video/style/images/iqiyi.png"},{"title":"优酷视频","url":"https://www.youku.com/","img":"https://www.wsho.cn/vip-video/style/images/youkulogo.png"},{"title":" 土豆视频","url":"http://www.tudou.com/","img":"https://www.wsho.cn/vip-video/style/images/tudoulogo.png"},{"title":"芒果TV视频","url":"http://www.mgtv.com/","img":"https://www.wsho.cn/vip-video/style/images/hunantvlogo.png"},{"title":"搜狐视频","url":"http://tv.sohu.com/","img":"https://www.wsho.cn/vip-video/style/images/sohulogo.png"},{"title":"Ac弹幕网","url":"http://www.acfun.tv/","img":"https://www.wsho.cn/vip-video/style/images/acfun.png"},{"title":"哔哩哔哩","url":"https://www.bilibili.com/","img":"https://www.wsho.cn/vip-video/style/images/bilibili.png"},{"title":"风行网","url":"http://www.fun.tv/","img":"https://www.wsho.cn/vip-video/style/images/fengxing.gif"},{"title":"WASU华数视频","url":"http://www.wasu.cn/","img":"https://www.wsho.cn/vip-video/style/images/wasulogo.png"},{"title":"56","url":"http://www.56.com/","img":"https://www.wsho.cn/vip-video/style/images/56logo.png"},{"title":"音悦台MV","url":"http://www.yinyuetai.com/","img":"https://www.wsho.cn/vip-video/style/images/yinyuetailogo.png"}]

class App extends Component{
  getInfo(){
    let info=[{
      title:'vip视频解析是什么',
      tip:'',
      des:`现今许多视频网站都有vip会员服务,某些影片只有vip会员才能观看。还有些影片甚至连vip会员也要再花钱购买观影券。
      对于想要免费观看影片的用户怎么办了？这时候就需要用到VIP视频解析工具了！
      影咖vip解析旨在为网友提供免费的vip视频在线解析服务，让大家不花钱就能观看各大视频网站的收费视频。目前支持腾讯vip视频,爱奇艺vip视频,芒果TV会员,搜狐VIP视频,pptv会员解析等`
    },{
      title:'在线解析重要事项',
      tip:'请务必牢记',
      des:<div>如果您是第一次使用解析服务,请务<Link to="/help">必点击此处</Link>先阅读解析教程

      注意：目前优酷和腾讯的视频解析全网都不稳定，所以尽可能不要用优酷和腾讯的视频进行解析
      
      注意：如果视频播放卡或是无法播放有极大可能是因为您开启了广告拦截软件，可关闭后重试
      {/*  注意：如果您想要观看一些未上映的影视或是正规网站因为版权原因未上架的视频，找不到视频地址解析怎么办？那么您可以直接在搜索栏输入影片名进行搜索解析，如果片源存在则可以尝试播放
      
      注意：搜索vip影片时请输入准确的影片名。如海贼王黄金城不要省略的输入海贼王避免搜索不到想要的结果 */}
     </div>
    },{
      title:'以下网站视频支持解析',
      tip:'点击后可进入对应页面',
      des:<div>
        {supportSite.map((v,i)=>
          <a key={i} href={v.url} title={v.title} className="info-img" rel="nofollow">
            <img src={v.img} title={v.title} alt={v.title}/>
          </a>
        )}
      </div>	
    }]
    return info.map(this.infoList)
  }
  infoList(item,i){
    return <div key={i} className='info'>
      <div className='info-title'>{item.title}<span className='info-tip'>{item.tip}</span></div>
      <div className='info-des'>{item.des}</div>
    </div>
  }
  render(){
    return <div>{this.getInfo()}</div>
  }
}
export default App