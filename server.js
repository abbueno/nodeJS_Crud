import { fastify } from 'fastify'
import { DatabaseMemory } from './database-memory.js'

const server = fastify()

const database = new DatabaseMemory()

server.post('/videos', (request, reply) => {
  database.create({
    title: 'Video 01',
    description: 'Esse é o video 01',
    duration: 100,
  })

  console.log(database.list())

  return reply.status(201)
})

server.get('/videos', () => {
  return 'Hello Word'
})

server.get('/hello', () => {
  return 'Hello teste'
})

server.get('/node', () => {
  return 'Hello node.js'
})

server.listen({
  port: 3333,
})

