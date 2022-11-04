const axios = require('axios');

const api = axios.create({
  baseURL: 'http://localhost:8081/v1/api'
});

describe('CRUD Delivery Success', () => {
  it('should be able to create a new delivery', async () => {
    const bodySubmission = {
      name: 'Delivery1',
      deliveryDate: '2020-05-01',
      local_description: 'Rua 1',
      location_initial: {
        lat: 1,
        lng: 1
      },
      location_final: {
        lat: 2,
        lng: 2
      }
    }
    const apiResponse = await api.post('/delivery', bodySubmission );

    expect(apiResponse.status).toBe(201);
    expect(apiResponse.data).toHaveProperty('_id');
  });
});


describe('CRUD Delivery Fail', () => {
  it('should not be able to create a new delivery', async () => {
    const bodySubmission = {
      name: 'Delivery1',
      deliveryDate: '2020-05-01',
      local_description: 'Rua 1',
      location_initial: {
        lat: 1,
        lng: 1
      },
    }
    await api.post('/delivery', bodySubmission ).catch(error => {
      expect(error.response.status).toBe(400);
      expect(error.response.data).toHaveProperty('error');
    });
  });
});
