import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from '@prisma/client';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() req: { email: string; password: string }) {
    return this.authService.login(await this.authService.validateUser(req.email, req.password));
  }

  @Post('signup')
  async signup(@Body() req: User) {
    return this.authService.signup(req);
  }
}
