const path = require('path')
const getapp = require('getapp')

class App {
    constructor(system) {
        this.system = system;
        this.parent = system;
        this.router = this.parent.express.Router();
    }

    init() {
        // Reg router
        this.parent.use(path.join(this.parent.get('apps.path'), this.name), this.router)
        return this
    }

    reg() {
        return this
    }

    routes() {
        this.router.get('/', (req, res) => res.send(`Hello ${this.name}`))
        return this
    }

    static(url) {
        this.parent.use(path.join(this.parent.get('apps.static'), this.name), this.parent.express.static(url))
        return this
    }
}

/**
 * 为Express系统提供子系统注册
 * @param   {Object}  system Express实例
 * @param   {String}  url    Apps子系统所在目录
 * @return  {Function}
 * @example this.reg(app, path.join(__dirname, 'apps'))
 */
App.reg = function(system, url) {
    getapp.config.set('cwd', url)
    getapp.config.set('system', system)
    getapp.getAll().forEach(app => app.reg())
    return (req, res, next) => next()
}

module.exports = App
