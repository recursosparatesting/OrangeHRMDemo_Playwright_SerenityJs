import { Task, the} from '@serenity-js/core';
import { Click} from '@serenity-js/web';

import { actualUser,logoutOption } from './questions';

export const Logout = (): Task => 
    Task.where(the `#actor realiza logout }`,
        Click.on(actualUser()),
        Click.on(logoutOption()),
    );