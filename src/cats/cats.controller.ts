import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Query,
  Redirect,
  Req,
} from '@nestjs/common';
import { Request } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './create.cat.dto';
import { Cat } from './interface/cat.interface';

@Controller('cats')
// export class CatsController {
//   @Get()
//   findAll(@Req() request: Request): string {
//     return 'This action return all cats';
//   }
// }
export class CatsController {
  constructor(private catsService: CatsService) {}
  @Post()
  async create(@Body() CreateCatDto: CreateCatDto) {
    this.catsService.create(CreateCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  //   @Get('ab*cd')
  //   findoneapth(): string {
  //     return 'This action return astrik cats';
  //   }

  //   @Get(':id')
  //   findOne(@Param() params): string {
  //     console.log(params.id);
  //     return `this action return a #${params.id} cat`;
  //   }
}
