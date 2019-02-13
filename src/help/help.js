import React,{Component} from 'react'
import './help.styl'
class App extends Component{
  constructor(){
    super()
    this.state={
      text:''
    }
  }
  render(){
    return <div>
      <div className="item">
        <div className='note note-top'><h1 className="note-title">影咖VIP视频解析教程</h1>
				<p className="note-description">影咖vip解析旨在为网友提供免费的vip视频解析服务，让大家不花钱就能观看各大视频网站的收费视频。目前支持腾讯vip,爱奇艺vip,芒果TV会员,搜狐vip,pptv会员,优酷vip等，那么如何使用？本页将会一一为您解答</p></div>
        <ul className="note-list">
          <li className="note">
            <div className="note-left">
              <img src="https://wx2.sinaimg.cn/mw690/0073OKEyly1fnrigvo1yjj30jt03ldfz.jpg" title="英卡vip解析如何查找视频" alt="英卡vip解析如何查找视频"/>
              <img src="https://wx1.sinaimg.cn/mw690/0073OKEyly1fnrigvp7f2j30s40icaau.jpg" title="英卡vip解析如何免费播放视频" alt="英卡vip解析如何免费播放视频"/>
              <img src="https://wx1.sinaimg.cn/mw690/0073OKEyly1fnrigvpdwnj310502twek.jpg" title="英卡vip解析如何免费解析视频" alt="英卡vip解析如何免费解析视频"/>
            </div>
            <div className="note-right">
              <p className="note-title-sm">如何免费播放视频</p>
              <p className="note-step">0.直接在vip视频解析页面中输入想要看的影片名后点击右侧搜索即可</p>
              <p className="note-step">1.当然如果你不知道要看什么，可点击选项进入相应网站</p>
              <p className="note-step">2.挑选您想要看的视频并点击进入其播放页面</p>
              <p className="note-step">3.复制浏览器顶部地址栏信息</p>
              <p className="note-step">4.粘贴到vip视频解析页的方框中并点击右侧播放按钮即可</p>
              <p className="note-step">5.推荐使用官网提供的视频解析插件，可快速解析视频</p>
              <p className="note-step">注意：目前优酷视频的解析全网都不稳定，所以尽可能不要用优酷的视频进行观看</p>
              <p className="note-step">注意：如果视频播放卡或是无法播放有极大可能是因为您开启了广告拦截软件，可关闭后重试</p>
              {/* <p className="note-step">注意:如果您想要观看一些未上映的影片或是正规网站因为版权原因未上架的影片。那么您可以直接在搜索栏输入影片名进行搜索，如果片源存在则可以尝试播放</p> */}
            </div>
          </li>
          <li className="note">
            <div className="note-left">
              <p className="note-title-sm">播放失败？播放卡慢？</p>
              <p className="note-step">1.鼠标移动到视频上可发现顶部有推荐线路</p>
              <p className="note-step">2.点击其中一条线路进行切换并耐心等待几秒即可</p>
              <p className="note-step">3.如若还是不行则重复2步骤切换其他线路尝试</p>
            </div>
            <div className="note-right">
              <img src="https://wx1.sinaimg.cn/mw690/0073OKEyly1fnrigvo456j30zw054glu.jpg" title="英卡vip解析播放失败说明" alt="英卡vip解析播放失败说明"/>
            </div>
          </li>
        </ul>
      </div>
    </div>
  }
}
export default App