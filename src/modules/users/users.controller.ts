import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get()

    getInfo() {
        console.log("Alik")
    
    @Get()
    getHello(): string {
        return 'Hello World!';
    }
}
