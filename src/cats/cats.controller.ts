import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Redirect,
  Req,
} from '@nestjs/common';
import { Request } from '@nestjs/common';

import { CreateCatDto } from './create.cat.dto';

@Controller('cats')
// export class CatsController {
//   @Get()
//   findAll(@Req() request: Request): string {
//     return 'This action return all cats';
//   }
// }
export class CatsController {
  @Post()
  async create(@Body() CreateCatDto: CreateCatDto) {
    return 'This action adds a new cat';
  }

  @Get()
  findAll(): string {
    return 'This action return all cats';
  }

  @Get('ab*cd')
  findoneapth(): string {
    return 'This action return astrik cats';
  }

  @Get(':id')
  findOne(@Param() params): string {
    console.log(params.id);
    return `this action return a #${params.id} cat`;
  }
}
