import { test, expect } from '@playwright/test';
import { searchBooks, bookAuthorClassName } from './utils/pages/search.js';
import { orderWorksByCriteria } from './utils/pages/authors.js';

test.describe('Open library search engine', () => {
  test('should be able to get to the top rated books for a given author', async ({
    page,
  }) => {
    const bookTitle = 'Harry Potter';
    const SortingCriteria = 'Top Rated';
    const expectedTopRatedBook = 'Harry Potter and the Prisoner of Azkaban';

    await page.goto('/');

    // Make sure this is visible before continuing
    await expect(page.locator('#test-body-mobile')).toBeVisible();

    // Search for Harry Potter
    await searchBooks(page, bookTitle);

    // Click on the author of the first book in the search results
    await page.locator(`${bookAuthorClassName} > a`).first().click();

    // Order by top rated books
    await orderWorksByCriteria(page, SortingCriteria);

    // Note: I saw that "Harry Potter and the Half-Blood Prince" is not the top rated book
    // so I did this according to the current top rated book, though this may change in the future
    await expect(
      page.getByRole('link', {
        name: expectedTopRatedBook,
        exact: true,
      })
    ).toBeVisible();
  });
});
