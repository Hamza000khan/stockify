import { Module, HttpModule } from '@nestjs/common';
import { TickersModule } from './tickers/tickers.module';


@Module({
  imports: [
    TickersModule,
  ],
})
export class AppModule { }
