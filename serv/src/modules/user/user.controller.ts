import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { filterUserDto } from './dto/filterUser.dto';
import { createUserDto } from './dto/createUser.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get('/getAll')
  getAll(@Query() data: filterUserDto) {
    return this.userService.getAll(data);
  }

  @Post('/create')
  create(@Body() data: createUserDto) {
    return this.userService.create(data);
  }
}
