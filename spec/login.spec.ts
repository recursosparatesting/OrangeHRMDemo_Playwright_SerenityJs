import { Ensure, equals } from '@serenity-js/assertions';
import { describe, it } from '@serenity-js/playwright-test';
import { isVisible, Text } from '@serenity-js/web';
import { startOrangeHRM, Login } from './login/task';
import { invalidCredentialsmsn,validAccess } from './login/questions';


describe('Orange HRM Login', () => {

    const user = process.env.TEST_USER || 'Admin'; 
    const pass = process.env.TEST_PASS || 'admin123';

    describe('Login', () => {
        it('@loginExitoso Deberia ingresar con exito con credenciales Correctas', async ({ actor }) => {
            await actor.attemptsTo(
                startOrangeHRM(),
                Login(user, pass),
                Ensure.that(Text.of(validAccess()), equals('Dashboard')),
            );
        });

        it('@mensajeError Deberia obtener mensaje de error con Credenciales Incorrectas', async ({ actor }) => {
            await actor.attemptsTo(
                startOrangeHRM(),
                Login(user, pass),
                Ensure.that(Text.of(invalidCredentialsmsn()), equals('Invalid credentials')),

            );
        });
    });


    
});
