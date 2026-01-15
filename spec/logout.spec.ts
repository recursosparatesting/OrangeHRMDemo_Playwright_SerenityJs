import { Ensure, equals} from '@serenity-js/assertions';
import { describe, it } from '@serenity-js/playwright-test';
import { Text,Page,By } from '@serenity-js/web';
import { startOrangeHRM,Login } from './login/task';
import { validAccess } from './login/questions';

import {Logout } from './logout/task';


describe('Orange HRM Logout', () => {

    const user = process.env.TEST_USER || 'Admin'; 
    const pass = process.env.TEST_PASS || 'admin123';

    describe('Logout', () => {

        it('@logout Deberia regresar a la pagina de inicio de sesion', async ({ actor }) => {
            await actor.attemptsTo(
                startOrangeHRM(),
                Login(user, pass),
                Ensure.that(Text.of(validAccess()), equals('Dashboard')),
                Logout(),
                Ensure.that(Text.of(
                            Page.current().locate(By.role('heading', { name: 'Login' })).describedAs('first page')),
                            equals('Login'),
                ),
            );
        });
    });


    
});


