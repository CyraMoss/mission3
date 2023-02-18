const request = require('supertest');
const app = require('./server');

describe('POST /api/get-value', () => {
  it('returns the correct result for valid input', async () => {
    const res = await request(app)
      .post('/api/get-value')
      .send({ carmodel: 'Swift', caryear: 2013 })
      .set('Content-Type', 'application/json')
      .expect(200);

    expect(res.body.result).toEqual(9713);
  });

  it('just numbers is okay', async () => {
    const res = await request(app)
      .post('/api/get-value')
      .send({ carmodel: '964', caryear: 2022 })
      .set('Content-Type', 'application/json')
      .expect(200);

    expect(res.body.result).toEqual(2022);
  });

  it('returns 400 for invalid carmodel', async () => {
    const res = await request(app)
      .post('/api/get-value')
      .send({ carmodel: 123, caryear: 2022 })
      .set('Accept', 'application/json')
      .expect(400);

    expect(res.text).toEqual('Error processing request');
  });

  it('returns 400 for invalid vehile year', async () => {
    const res = await request(app)
      .post('/api/get-value')
      .send({ carmodel: '123', caryear: 'Twenty3' })
      .set('Accept', 'application/json')
      .expect(400);

    expect(res.text).toEqual('Error processing request');
  });
  it('returns 400 for vehile year being too high', async () => {
    const res = await request(app)
      .post('/api/get-value')
      .send({ carmodel: '123', caryear: 2033 })
      .set('Accept', 'application/json')
      .expect(400);

    expect(res.text).toEqual('Error processing request');
  });
});

describe('POST /api/get-rating', () => {
  it('returns the correct result for valid input', async () => {
    const res = await request(app)
      .post('/api/get-rating')
      .send({
        input: 'i have been in a crash that bumped my car into a scratched car',
      })
      .set('Content-Type', 'application/json')
      .expect(200);

    expect(res.body.rating).toEqual(3);
  });

  it('returns maximum of 5 ', async () => {
    const res = await request(app)
      .post('/api/get-rating')
      .send({
        input:
          'i have crashed one time i was in a crash that bumped my car into a scratched car but they bumped into me and scratched',
      })
      .set('Content-Type', 'application/json')
      .expect(200);

    expect(res.body.rating).toEqual(5);
  });

  it('returns minimum of 1 ', async () => {
    const res = await request(app)
      .post('/api/get-rating')
      .send({
        input: 'i have never claimed',
      })
      .set('Content-Type', 'application/json')
      .expect(200);

    expect(res.body.rating).toEqual(1);
  });

  it('returns error if no input ', async () => {
    const res = await request(app)
      .post('/api/get-rating')
      .send({
        input: '',
      })
      .set('Content-Type', 'application/json')
      .expect(400);

    expect(res.body.error).toEqual('Input text is required');
  });

  it('returns error if no input ', async () => {
    const res = await request(app)
      .post('/api/get-rating')
      .send({
        input:
          'this is some random text about how i crashed my car into my neighbours house and smashed a couple windows plus made a few sctraches during the collide with the house. also they got quite mad and chased me down the road and i fell over and scratched my leg pretty bad',
      })
      .set('Content-Type', 'application/json')
      .expect(400);

    expect(res.body.error).toEqual('Input text must be 250 characters or less');
  });
});
