import { CwtsFrontendPage } from './app.po';

describe('cwts-frontend App', () => {
  let page: CwtsFrontendPage;

  beforeEach(() => {
    page = new CwtsFrontendPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
