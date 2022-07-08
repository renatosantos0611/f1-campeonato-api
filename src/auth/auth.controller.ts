import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
    ) {}

    @Get()
    @UseGuards(AuthGuard('google'))
    async googleAuth(
        @Req() req: any,
    ) {
       
    }

    @Get('google/callback')
    @UseGuards(AuthGuard('google'))
    async googleCallback(
        @Req() req: any,
    ) {
        return this.authService.googleCallBack(req);
    }
}
