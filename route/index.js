const getRouter = require('router');
const router = getRouter();
const template = require('art-template');
const querystring = require('querystring');
const User = require('../model/user');

// 用户列表
router.get('/', async (req, res) => {
    const users = await User.find();
    const html = template('list.art', {
        users
    });
    res.end(html);
});
// 添加用户界面
router.get('/add', (req, res) => {
    const html = template('add.art', {});
    res.end(html);
});

// 添加用户功能
router.post('/add', (req, res) => {
    let str = '';
    req.on('data', chunk => {
        str += chunk;
    });
    req.on('end', async () => {
        let user = querystring.parse(str);
        await User.create(user)
        res.writeHead(301, {
            Location: '/'
        });
        res.end();
    });
});

module.exports = router;