import { Injectable, HttpService } from '@nestjs/common';
import axios from 'axios';


@Injectable()
export class TickersService {
    constructor() { }
    private params = {
        access_key: '500369d7c0a94f30304d508048d122f6'
    }


    // For obtaining all the data of the tickers
    async getAllTickers(): Promise<Record<string, any>> {
        return new Promise((resolve, reject) => {
            (async () => {
                try {
                    const res = await axios('http://api.marketstack.com/v1/tickers', { params: this.params });
                    resolve(res.data)
                } catch (err) {
                    if (err.code === 'Api error') {

                    }
                    reject(err);
                }
            })()
        })
    }

    // For obtaining End of day data of specific ticker
    async getEodRes(
        id: Record<string, any>
    ): Promise<Record<string, any>> {
        const symbol: string = id["symbol"]


        return new Promise((resolve, reject) => {
            (async () => {
                try {
                    const res = await axios(`http://api.marketstack.com/v1/eod?access_key=${this.params.access_key}&symbols=${symbol}`);
                    resolve(res.data)
                } catch (err) {
                    if (err.code === 'Api error') {
                    }
                    reject(err);
                }
            })()
        })
    }


    async getEodDate(
        date: Record<string, any>,
        id: Record<string, any>
    ): Promise<Record<string, any>> {
        const symbol: string = id["symbol"];
        const qDate: string = date["date"];
        console.log(qDate)


        return new Promise((resolve, reject) => {
            (async () => {
                try {
                    const res = await axios(`http://api.marketstack.com/v1/eod/${qDate}?access_key=${this.params.access_key}&symbols=${symbol}`);
                    resolve(res.data)
                } catch (err) {
                    if (err.code === 'Api error') {
                    }
                    reject(err);
                }
            })()
        })
    }

}