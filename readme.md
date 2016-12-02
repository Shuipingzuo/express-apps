express-apps
---
为express提供子系统注册服务  
依赖 [getapp](https://github.com/Shuipingzuo/getapp)

### Install
```js
npm i express-apps --save
```

### Usage For Express
为基于express实现的后台提供子系统注册
```js
const app = express()
const App = require('express-apps')

app.set('apps.path', '/g');
app.set('apps.static', '/g/static');
app.use(App.reg(app, path.join(__dirname, 'apps')))
```

### Usage For Express-apps
开发基于express-apps的子系统
```js
const path = require('path')
const App = require('express-apps')

class Stats extends App {
    constructor(parent){
        super(parent)
        this.name = 'stats'
    }

    reg() {
        this.routes()
        this.static(path.join(__dirname, 'static'))
    }

    routes(routes) {
        this.router
            .get('/', (req, res) => res.send(`Hello ${this.name}`))
    }
}

module.exports = Stats
```
