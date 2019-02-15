这是一个根据 Create React App 改造过来的cli；



### `npm start`

开始已开发环境启动项目<br>
打开 [http://localhost:3000](http://localhost:3000) 在浏览器中展示.

页面当你有改动文件时回自动刷新；<br>
当代码有问题时你也可以看到一些错误信息

### `npm test`

Launches the test runner in the interactive watch mode.<br>


### `npm run build`

打包你的app到  `build`  文件夹<br>




### `npm run release`

把打包好的项目上传到ftp上；所以你需要去修改你的ftp配置；在`config/userConf.js`里
````
module.exports= {
  ftp:{
    host: "***.my3w.com",//服务器地址
    user: "**",//用户名
    password: "**"//密码
  },
  remote:"/htdocs/**" // 服务器目录
}
````
---
以下是Create React App 原有的内容；自己看一下把；对项目没有太大影响
## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
