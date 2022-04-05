const request = require('supertest');
const app = require('./index');
describe('Simple Test', () => {
    it('should test that server start on port 3000',async() =>{
        await request(app);
    })

    it('should test api get',async() =>{
        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual({
            status: true,
            message: 'Hello World'
        });
    })
})

