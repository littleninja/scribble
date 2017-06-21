import { ScribblesPage } from './app.po';

describe('scribbles App', () => {
  let page: ScribblesPage;

  beforeEach(() => {
    page = new ScribblesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
