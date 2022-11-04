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

  it('should be able to list all deliveries', async () => {
    const apiResponse = await api.get('/delivery');

    expect(apiResponse.status).toBe(200);
    expect(apiResponse.data).toBeInstanceOf(Array);
  });

  it('should get a delivery by id', async () => {
    const deliveryList = await api.get('/delivery');

    const apiResponse = await api.get(`/delivery/${deliveryList.data[0]._id}`);

    expect(apiResponse.status).toBe(200);
    expect(apiResponse.data).toHaveProperty('_id');
  });

  it('should be able to update a delivery', async () => {
    const deliveryList = await api.get('/delivery');

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

    const apiResponse = await api.put(`/delivery/${deliveryList.data[0]._id}`, bodySubmission);

    expect(apiResponse.status).toBe(200);
    expect(apiResponse.data).toHaveProperty('_id');
  });

  it('should be able to delete a delivery', async () => {
    const deliveryList = await api.get('/delivery');

    const apiResponse = await api.delete(`/delivery/${deliveryList.data[0]._id}`);

    expect(apiResponse.status).toBe(200);
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
      expect(error.response.status).toBe(500);
      expect(error.response.data).toHaveProperty('error');
    });
  });

  it('should not be able to list all deliveries', async () => {
    await api.get('/delivery').catch(error => {

      expect(error.response.status).toBe(500);
      expect(error.response.data).toHaveProperty('error');
    });
  });

  it('should not get a delivery by id', async () => {
    await api.get(`/delivery/1`).catch(error => {
      expect(error.response.status).toBe(500);
      expect(error.response.data).toHaveProperty('error');
    });
  });

  it('should not be able to update a delivery', async () => {
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

    await api.put(`/delivery/1`, bodySubmission).catch(error => {
      expect(error.response.status).toBe(500);
      expect(error.response.data).toHaveProperty('error');
    });
  });

  it('should not be able to delete a delivery', async () => {
    await api.delete(`/delivery/1`).catch(error => {
      expect(error.response.status).toBe(500);
      expect(error.response.data).toHaveProperty('error');
    });
  });
});
