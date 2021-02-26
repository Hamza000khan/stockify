import { Module } from '@nestjs/common';
import { TickersController } from './tickers.controller';
import { TickersService } from './tickers.service';

@Module({
  controllers: [TickersController],
  providers: [TickersService]
})
export class TickersModule { }
