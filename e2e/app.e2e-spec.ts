import { PippesExamplePage } from './app.po';

describe('pippes-example App', function() {
  let page: PippesExamplePage;

  beforeEach(() => {
    page = new PippesExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('jc works!');
  });
});
