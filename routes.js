'use strict'

let routes = [{
    method: 'GET',
    url: '/',
    handler: function (request, reply) {
      reply.send({ hello: 'world' })
    }
  }]

module.exports = [routes]