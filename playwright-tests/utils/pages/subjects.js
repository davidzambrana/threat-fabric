export const historicalFictionHeaderName = 'Historical Fiction';

export const selectSubject = async (page, subject) => {
  await page.getByRole('link', { name: subject }).click();
};
