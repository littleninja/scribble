import { ScribblePage } from './app.po';

describe('scribble App', () => {
  let page: ScribblePage;

  beforeEach(() => {
    page = new ScribblePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
