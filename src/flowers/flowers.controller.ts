import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { FlowersService } from './flowers.service';
import { ParseIntPipe } from 'src/conception/parseInt.pipe';
import { AuthGuard } from 'src/conception/auth.guard';

@Controller('flowers')
export class FlowersController {
  constructor(private readonly flowersService: FlowersService) {}

  @Get()
  @UseGuards(AuthGuard)
  findAll(@Query('pageNumber', ParseIntPipe) pageNumber: number) {
    console.log('pageNumber', pageNumber);
    console.log('flowers findAll controller');
    return this.flowersService.findAll();
  }
}
