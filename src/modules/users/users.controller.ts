import { Controller } from '@nestjs/common';

@Controller('users')
export class UsersController {
    getHello(): string {
        return 'Hello World!';
    }
}
