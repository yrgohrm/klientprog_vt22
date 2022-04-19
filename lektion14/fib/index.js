import hapi from '@hapi/hapi'
import fibonacci from 'fibonacci'

const init = async () => {
    const server = hapi.server({
        port: 8080,
        host: 'localhost'
    })

    server.route({
        method: 'GET',
        path: '/api/fibonacci/{iterations}',
        handler: (request, h) => {
            const iterations = parseInt(request.params.iterations)
            if (isNaN(iterations) || iterations > 5000) {
                const error = { error: 'Bad Input' }
                return h.response(error).code(400)
            }
            return fibonacci.iterate(iterations)
        }
    })

    server.route({
        method: 'GET',
        path: '/api/hello',
        handler: (request, h) => {
            return "Hello World!"
        }
    })

    await server.start()
    console.log('Server running on %s', server.info.uri)
}
init()
