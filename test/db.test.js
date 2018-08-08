const db = require('../query.js');

afterAll(() => db.connection.end());

test('Should have 100 photosets', (done) => {
  const callback = (error, data) => {
    expect(data.length).toBe(100);
    done();
  };

  db.connection.query('SELECT * FROM deal_images', (error, results) => {
    if (error) {
      throw error;
    } else {
      callback(null, results);
    }
  });
});

test('db.getImages should behave as expected', (done) => {
  const callback = (error, data) => {
    expect(data.length).toBe(1);
    expect(Object.keys(data[0]).length).toBe(22);
    done();
  };
  db.getImages(1, (error, results) => {
    if (error) {
      throw error;
    } else {
      callback(null, results);
    }
  });
});
