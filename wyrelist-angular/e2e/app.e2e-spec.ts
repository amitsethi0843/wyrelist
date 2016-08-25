import { WyrelistAngularPage } from './app.po';

describe('wyrelist-angular App', function() {
  let page: WyrelistAngularPage;

  beforeEach(() => {
    page = new WyrelistAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
