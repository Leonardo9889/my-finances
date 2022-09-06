const fastify = require('fastify');
const apiRoutes = require('./routes/api')

const app = fastify()

app.register(apiRoutes, { prefix: '/api'})

module.exports = app