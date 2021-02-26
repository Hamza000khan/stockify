import { Controller, Get, Param, Query } from '@nestjs/common';
import { TickersService } from './tickers.service';

@Controller('tickers')
export class TickersController {
    constructor(private tickerService: TickersService) { }

    @Get('/')
    getTickers(): Promise<Record<string, any>> {
        return this.tickerService.getAllTickers()
    }

    @Get('/eod')
    getTickerEod(
        @Query() id: Record<string, any>, //Query is the symbol of the Respective company stock ?
    ): Promise<Record<string, any>> {
        return this.tickerService.getEodRes(id)
    }

    @Get('/eod/:date')
    getTickerEodDate(
        @Param() date: Record<string, any>,
        @Query() id: Record<string, any>
    ): Promise<Record<string, any>> {
        return this.tickerService.getEodDate(date, id)
    }

    @Get('/eod/latest')
    getTickerEodLatest(
        @Query() id: Record<string, any>, //Query is the symbol of the Respective company stock ?
    ): Promise<Record<string, any>> {
        return this.tickerService.getEodLatest(id)
    }

    @Get('/intraday/:date')
    getIntradayDate(
        @Param() date: Record<string, any>,
        @Query() id: Record<string, any>
    ): Promise<Record<string, any>> {
        return this.tickerService.getIntradayDate(date, id)
    }

    @Get('/intraday/latest')
    getIntradayLatest(
        @Query() id: Record<string, any>, //Query is the symbol of the Respective company stock ?
    ): Promise<Record<string, any>> {
        return this.tickerService.getIntradayLatest(id)
    }


}
