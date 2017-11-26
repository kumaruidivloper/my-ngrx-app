import { MyNgrxAppPage } from './app.po';

describe('my-ngrx-app App', () => {
  let page: MyNgrxAppPage;

  beforeEach(() => {
    page = new MyNgrxAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
