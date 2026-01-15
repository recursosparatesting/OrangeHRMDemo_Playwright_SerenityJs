import { By, PageElement, PageElements, Text } from '@serenity-js/web';

export const userfieldtext = () =>
    PageElement.located(By.role('textbox', { name: 'Username' }).describedAs('username text field'));

export const passwdfieldtext = () =>
    PageElement.located(By.role('textbox', { name: 'Password' }).describedAs('password text field'));

export const loginbutton = () =>
    PageElement.located(By.role('button', { name: 'Login' }).describedAs('login button'));

  export const invalidCredentialsmsn = () => 
    PageElement.located(By.role('alert')).describedAs("invalid credentials message");


  export const validAccess = () =>
    PageElement.located(By.role('heading', { name: 'Dashboard' })).describedAs("Access completed");




