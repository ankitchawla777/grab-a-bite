'use strict'

const fastify = require('fastify')({
    logger: false
});
const routes = require('./routes');

routes.forEach((route, index) => {
    route.forEach((route) => {
        fastify.route(route);
    });
});

fastify.listen(3000, err => {
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
      console.log(`server listening on ${fastify.server.address().port}`)
})

