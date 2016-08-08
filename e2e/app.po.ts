export class PippesExamplePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('jc-root h1')).getText();
  }
}
