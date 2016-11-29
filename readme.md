express-apps
---
为express提供子系统加载功能

### Install
```js
npm i express-apps --save
```

### Usage
```js
const app = express()
const apps = require('express-apps')

app.use(apps.reg(app, path.join(__dirname, 'apps')))
```

### Class
```js
const Apps = apps.Apps
```
