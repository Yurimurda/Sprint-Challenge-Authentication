const server = require('./jokes-router.js');
const supertest = require('supertest');
const request = supertest(server)




server.get('/', async (req, res) => {
    res.json({message: 'pass!'})
})

it('Got the / endpoint', async done => {
const response = await request.get('/')

expect(response.status).toBe(200)
expect(response.body.message).toBe('pass!')
done()
})