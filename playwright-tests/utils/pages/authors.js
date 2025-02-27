const defaultDropdownText = 'Most Editions';

export const orderWorksByCriteria = async (page, order) => {
  await page
    .locator('summary')
    .filter({ hasText: defaultDropdownText })
    .click();
  await page.getByRole('link', { name: `✓ ${order}` }).click();
};
