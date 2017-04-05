import { FlipAppPage } from './app.po';

describe('flip-app App', () => {
  let page: FlipAppPage;

  beforeEach(() => {
    page = new FlipAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
