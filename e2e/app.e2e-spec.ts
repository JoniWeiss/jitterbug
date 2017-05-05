import { Jitterbug2017Page } from './app.po';

describe('jitterbug2017 App', () => {
  let page: Jitterbug2017Page;

  beforeEach(() => {
    page = new Jitterbug2017Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
