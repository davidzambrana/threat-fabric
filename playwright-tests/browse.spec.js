import { test, expect } from '@playwright/test';
import { clickOnThisYearOption } from './utils/pages/trending.js';
import {
  clickOnTheHamburgerMenu,
  selectOptionFromBrowseDropdown,
  selectOptionFromHamburgerMenu,
} from './utils/pages/search.js';
import {
  selectSubject,
  historicalFictionHeaderName,
} from './utils/pages/subjects.js';

test.describe('Open library browse feature', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should be able to browse the trending books for this year', async ({
    page,
  }) => {
    // This might change in the future
    const expectedTrendingBook = 'Atomic Habits by James Clear';

    // await page.goto('/');

    await selectOptionFromBrowseDropdown(page, 'Trending');
    expect(page.url()).toContain('/trending/now');

    await clickOnThisYearOption(page);
    expect(page.url()).toContain('/trending/yearly');

    // Here I ensure that one of the expected books is visible in the list
    await expect(
      page.locator('div').filter({ hasText: expectedTrendingBook }).nth(3)
    ).toBeVisible();
  });

  test('should be able to use the hamburger menu to reach the subjects page and select a subject', async ({
    page,
  }) => {
    // await page.goto('/');

    await clickOnTheHamburgerMenu(page);

    await selectOptionFromHamburgerMenu(page, 'Subjects');
    expect(page.url()).toContain('/subjects');

    await selectSubject(page, 'Historical fiction');
    // expect(page.url()).toContain('/subjects/historical_fiction');

    await expect(
      page.getByRole('heading', { name: historicalFictionHeaderName })
    ).toBeVisible();
  });
});
