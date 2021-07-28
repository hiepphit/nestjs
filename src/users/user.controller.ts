import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto, EditUserDto } from './dto';
import { UsersService } from './user.service';

@ApiTags('Users')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UsersService) {}
  @Get()
  async getMany() {
    const data = await this.userService.getMany();
    return { data };
  }

  @Get(':id')
  async getOne(@Param() id: number) {
    const data = await this.userService.getOne(id);
    return { data };
  }

  @Post()
  async creatOne(@Body() dto: CreateUserDto) {
    const data = await this.userService.createOne(dto);
    return { message: 'Created User', data };
  }

  @Put(':id')
  async editOne(@Param() id: number, @Body() dto: EditUserDto) {
    const data = await this.userService.editOne(id, dto);
    return { message: 'User edited', data };
  }

  @Delete(':id')
  async deleteOne(@Param() id: string) {
    const data = await this.userService.deleteOne(+id);
    return { message: 'User deleted', data };
  }
}
