import { Module, HttpModule } from '@nestjs/common';
import { TickersModule } from './tickers/tickers.module';


@Module({
  imports: [
    TickersModule, 
    HttpModule.register({
    baseURL: 'http://api.marketstack.com/v1/eod',
    params: {
      access_key: '500369d7c0a94f30304d508048d122f6',
    },
  }),],
})
export class AppModule {}
