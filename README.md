# node-practice2

## 目录结构

```javascript
├── app.js              => 项目入口
├── model               => 数据库相关
|  ├── connect.js
|  └── user.js
├── public              => 静态资源
|  └── css
|     ├── list.css
|     └── main.css
├── route               => 路由相关
|  └── index.js
└── views               => 模板相关
   ├── add.art
   └── list.art
```

## 模块清单

- art-template，模板引擎

```javascript
// 注意这里是 views 而不是 view
template.defaults.root = path.join(__dirname, 'views');
template.defaults.imports.dateFormat = dateFormat;
template.defaults.extname = '.art';
const html = template('index', {});
```

- dateformat，格式化日期

- router，路由

- serve-static，托管静态资源

- mongoose
