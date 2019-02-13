var path = require('path');
var fs = require('fs');
var Client = require('ftp');
var c = new Client();
var userConf =require('../config/userConf')
var connectionProperties = userConf.ftp
c.on('ready', function () {
    console.log('ready');
    uploadFile().then(()=>{
      console.log('-------------------------')
      console.log('======OK')
      c.end()
    }).catch(e=>{
      console.log('-------------------------')
      console.log('======fail')
      c.end()
    })
});

c.connect(connectionProperties);
const staticFilesPath = {
  html: {
    local: path.resolve(__dirname, '../build'),
    remote: userConf.remote,
  }
};
/**
* 处理文件路径，循环所有文件，如果是图片需要读取成Buffer类型
**/
function handleFilePath(obj, type) {
  const { local, remote } = obj;
  const files = fs.readdirSync(local);
  let allFiles=[]
  files.forEach(file => {
    const _lp = `${local}/${file}`;
    let fileType = fs.lstatSync(_lp)
    if(fileType.isDirectory()){
      allFiles=allFiles.concat(handleFilePath({local:`${local}/${file}`,remote:`${remote}/${file}`},type))
    }else{
      allFiles.push({
        type: type,
        file: file,
        localPath: type !== 'img' ? _lp : fs.readFileSync(_lp),
        remotePath: `${remote}/${file}`,
      });
    }
  });
  return allFiles
}
/**
* 上传文件
**/
function uploadFile() {
  let files = [];

  Object.keys(staticFilesPath).forEach(key => {
    files = files.concat(handleFilePath(staticFilesPath[key], key));
  });
  const tasks = files.map(item => {
    return new Promise((resolve, reject) => {
      c.get(item.remotePath,function(err){
        if(err){
          // console.log(path.dirname(item.remotePath))
          c.mkdir(path.dirname(item.remotePath),true,function(err){
            upFile(item,reject,resolve)
          })
        }else{
          upFile(item,reject,resolve)
        }
      })
    });
  });

  return Promise.all(tasks);
}
function upFile(item,reject,resolve){
  c.put(item.localPath, item.remotePath,function(err){
    if(err){
      console.log(`${item.file}上传失败`);
      reject();
    }else{
      console.log(`${item.file}上传完成`);
      resolve();
    }
  })
}