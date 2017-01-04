import { CoastSchoolAppPage } from './app.po';

describe('coast-school-app App', function() {
  let page: CoastSchoolAppPage;

  beforeEach(() => {
    page = new CoastSchoolAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
