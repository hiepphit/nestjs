import { Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/common/decorators/auth.decorator';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    const data = await this.authService.login(req.user);
    return { message: 'Login success', data };
  }

  @Auth()
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @Auth()
  @Get('refreshToken')
  async refreshToken(@Request() req) {
    const data = await this.authService.login(req.user);
    return { message: 'Refresh Token success', data };
  }
}
