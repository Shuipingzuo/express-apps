const path = require('path')
const getapp = require('getapp')

class App {

    constructor() {

    }

    reg(system, url) {
        getapp.config.set('cwd', url)
        getapp
            .getAll()
            .then(apps => apps.forEach(app => app.reg(system)))

        return (req, res, next) => next()
    }
}

const app = new App;
app.App = App;
app.Apps = App;
module.exports = app;
