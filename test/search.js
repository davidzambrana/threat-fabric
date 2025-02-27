import { expect } from 'chai';
import api from './utils/api.js';
import requestWithHeader from './helpers/requestWithJson.js';

context('Open Library search API', () => {
  it('should get the expected author for a given book and the expected website for a given author', async () => {
    const bookTitle = 'Harry Potter';
    const bookAuthor = 'Rowling';
    const expectedAuthor = 'J. K. Rowling';
    const expectedWebsite = 'http://www.jkrowling.com/';

    const resBooks = await requestWithHeader(
      api,
      'get',
      `/search?title=${bookTitle}&author=${bookAuthor}`
    ).expect(200);
    expect(resBooks.body.numFound).to.be.gt(0, 'Expected at least one book');
    expect(resBooks.body.docs[0].author_name[0]).to.be.eq(
      expectedAuthor,
      `Expected ${expectedAuthor} author`
    );

    // Get the author key from the first book
    const authorKey = resBooks.body.docs[0].author_key[0];

    // Get the author details
    const resAuthor = await requestWithHeader(
      api,
      'get',
      `/authors/${authorKey}`
    ).expect(200);
    expect(resAuthor.body.links[0].url).to.be.eq(
      expectedWebsite,
      `Expected ${expectedWebsite} website`
    );
  });

  it('should return no results if no query is specified ', async () => {
    const res = await requestWithHeader(api, 'get', '/search').expect(200);
    expect(res.body.numFound).to.be.eq(0, 'Expected no results');
  });

  it('should return no results requesting with an invalid title', async () => {
    const invalidTitle = 'asdasdasd';

    const res = await requestWithHeader(
      api,
      'get',
      `/search?title=${invalidTitle}`
    ).expect(200);
    expect(res.body.numFound).to.be.eq(0, 'Expected no results');
  });
});
