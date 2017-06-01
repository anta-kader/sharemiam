import { SharemiamPage } from './app.po';

describe('sharemiam App', function() {
  let page: SharemiamPage;

  beforeEach(() => {
    page = new SharemiamPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
