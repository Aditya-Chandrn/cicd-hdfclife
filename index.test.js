const request = require('supertest');
const app = require('./index'); // Import your app

describe('API Endpoints', () => {

  // Test the /health endpoint
  it('should return 200 OK for /health', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toEqual(200);
    expect(res.body.status).toBe('UP');
  });

  // Test the / endpoint
  it('should return 200 OK for /', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toBe('Welcome to the MERN CI/CD pipeline!');
  });

});