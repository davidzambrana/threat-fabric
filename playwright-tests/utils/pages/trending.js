const thisYearOptionName = 'This Year';

export const clickOnThisYearOption = async (page) => {
  await page.getByRole('link', { name: thisYearOptionName }).click();
};
