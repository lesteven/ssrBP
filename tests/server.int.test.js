import app from '../src/server/index';
import request from 'supertest';


describe('server', () => {
  it('should', () => {
    return request(app)
      .get('/')
      .expect(200)
  })

});
