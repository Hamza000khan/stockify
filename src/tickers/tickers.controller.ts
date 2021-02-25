import { Controller, Get, Param } from '@nestjs/common';
import { TickersService } from './tickers.service';

@Controller('tickers')
export class TickersController {
    constructor( private tickerService: TickersService) {}

        @Get('/')
        getTickers(): Promise<Record<string, any>> {
            return this.tickerService.getAllTickers()
        }

        @Get('/eod/:symbol')
        getTickerEod(
            @Param('symbol') symbol:string,
            ): Promise<Record<string, any>> {
            return this.tickerService.getEodRes(symbol)
        }



        
}
