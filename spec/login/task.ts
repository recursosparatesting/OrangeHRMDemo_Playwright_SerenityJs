import { Ensure,equals } from '@serenity-js/assertions';
import { Task, the} from '@serenity-js/core';
import { Click, Enter,Navigate,Page, By,Text} from '@serenity-js/web';
import { userfieldtext,passwdfieldtext,loginbutton } from './';


export const startOrangeHRM = () =>
    Task.where(the`#actor inicia pagina`,
        Navigate.to('/'),
        Ensure.that(Text.of(
            Page.current().locate(By.role('heading', { name: 'Login' })).describedAs('first page')),
            equals('Login'),
        ),
     );



export const Login = (user : string, password : string): Task => 
    Task.where(the `#actor ingresa ${ user } y ${ password }`,
        Enter.theValue(user).into(userfieldtext()),
        Enter.theValue(password).into(passwdfieldtext()),
        Click.on(loginbutton()),
    );