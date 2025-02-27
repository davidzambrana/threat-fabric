/* Using this file to store all the reusable functions related to search page 
and common utilities such as browse */
const searchTextBoxName = 'Search';
const submitSearchButton = 'Search submit';
const searchBooksHeaderName = 'Search Books';
export const bookAuthorClassName = '.bookauthor';
const hamburgerMenuImageName = 'additional options menu';
const browseDropdownText = 'Browse Menu';

export const selectOptionFromBrowseDropdown = async (page, option) => {
  await page.locator('#header-bar').getByText(browseDropdownText).click();
  await page.getByRole('link', { name: option, exact: true }).click();
};

export const searchBooks = async (page, bookTitle) => {
  await page.getByRole('textbox', { name: searchTextBoxName }).click();
  await page.getByRole('textbox', { name: searchTextBoxName }).fill(bookTitle);
  await page.getByRole('button', { name: submitSearchButton }).click();

  // Click somewhere else to close the dropdown
  await page.getByRole('heading', { name: searchBooksHeaderName }).click();
};

export const clickOnTheHamburgerMenu = async (page) => {
  await page.getByRole('img', { name: hamburgerMenuImageName }).click();
};

export const selectOptionFromHamburgerMenu = async (page, option) => {
  await page.locator('#header-bar').getByRole('link', { name: option }).click();
};
