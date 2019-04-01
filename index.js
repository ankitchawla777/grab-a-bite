const fastify = require('fastify')({
    logger: {
      prettyPrint: true 
    }
  })


fastify.listen(3000, err => {
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
    fastify.log.info(
      `server listening on ${fastify.server.address().port}`
    )
  })

