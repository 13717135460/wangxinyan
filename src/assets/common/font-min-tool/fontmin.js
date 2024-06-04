var Fontmin = require('fontmin'); // 引入插件，当第一步中，使用全局下载的插件，这里路径要注意匹配，否则后面运行时会报找不到模块的错误，所以建议使用第二种：下载到当前项目的依赖中，本文件（fontmin.js）也建在当前项目目录下
 
var srcPath = './NokiaGuYin.ttf'; // 字体源文件路径，需要保证该ttf文件存在 注：(全字体文件)
var destPaths = './fontmins';    // 字体输出路径
var text = '个人博客,首页;博客;新闻;足球;视频;案例;分数;花果山;功能;音乐;王新焱;导航;欢迎访问我的网站http://www.wxyweb.com'; // 这里进行配置需要用到的字符，可以是中文或英文字母
 
// 初始化
var fontmin = new Fontmin()
    .src(srcPath)               // 输入配置
    .use(Fontmin.glyph({        // 字型提取插件
       text: text            // 所需文字
    }))
    .use(Fontmin.ttf2eot())     // eot 转换插件
    .use(Fontmin.ttf2woff())    // woff 转换插件     
    .use(Fontmin.ttf2svg())     // svg 转换插件
    .use(Fontmin.css())         // css 生成插件
    .dest(destPaths)            // 输出配置
 
// 执行
fontmin.run(function (err, files, stream) {
 
    if (err) {                  // 异常捕捉
        console.error(err);
    }
    console.log('done');        // 成功
});