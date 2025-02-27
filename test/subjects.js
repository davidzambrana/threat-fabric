import { expect } from 'chai';
import api from './utils/api.js';
import requestWithHeader from './helpers/requestWithJson.js';

context('Open Library subjects API', () => {
  it('should return a list of works when looking for "thriller"', async () => {
    const subject = 'thriller';

    const res = await requestWithHeader(
      api,
      'get',
      `/subjects/${subject}`
    ).expect(200);
    expect(res.body.work_count).to.be.gt(0, 'Expected at least one work');
  });

  it('should return work count 0 when passing an invalid subject', async () => {
    const invalidSubject = 'nietniet';

    const res = await requestWithHeader(
      api,
      'get',
      `/subjects/${invalidSubject}`
    ).expect(200);
    expect(res.body.work_count).to.be.eq(
      0,
      'Expected no works for this request'
    );
  });
});
