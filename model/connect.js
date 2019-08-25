const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test2', {
    useNewUrlParser: true
}).then(res => {
    console.log('连接数据库成功');
}).catch(err => {
    console.log('连接数据库失败');
});