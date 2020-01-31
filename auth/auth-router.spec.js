const server = require('./auth-router.js');
const supertest = require('supertest');
const request = supertest(server)



server.post('/register', async (req, res) => {
    res.json({message: 'pass!'})
})

it('Got the /register endpoint', async done => {
const response = await request.post('/register')

expect(response.status).toBe(201)
expect(response.body.message).toBe('pass!')
done()
});

server.post('/login', async (req, res) => {
    res.json({message: 'pass!'})
})

it('Got the /login endpoint', async done => {
const response = await request.post('/login')

expect(response.status).toBe(200)
expect(response.body.message).toBe('pass!')
done()
});