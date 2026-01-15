import { By, PageElement} from '@serenity-js/web';

  export const actualUser = () =>
  PageElement.located(By.xpath("//i[contains(@class,'userdropdown-icon')]"))
    .describedAs('Actual user');

  export const logoutOption = () =>
    PageElement.located(By.role('menuitem', { name: 'Logout' })).describedAs("Logout Option");
