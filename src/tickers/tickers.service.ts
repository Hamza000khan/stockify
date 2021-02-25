import { Injectable, HttpService } from '@nestjs/common';
import axios from 'axios';
import { response } from 'express';


@Injectable()
export class TickersService {
    constructor(){}
    private params  = {
        access_key: '500369d7c0a94f30304d508048d122f6'
    }


    // For obtaining all the data of the tickers
    async getAllTickers(): Promise<Record<string, any>> {
        return new Promise((resolve, reject) => {
            (async () => {
                try {
                   const res = await axios('http://api.marketstack.com/v1/tickers', {params: this.params});
                   resolve(res.data['data'])
                } catch(err){
                    if(err.code === 'Api error'){
                        
                    }
                    reject(err);
                }
            })()
        })
    }

    async getEodRes(
        symbol: string
    ): Promise<Record<string, any>> {
        return new Promise((resolve, reject) => {
            (async () => {
                try {
                   const res = await axios(`http://api.marketstack.com/v1/eod`, {params: {this.params,symbol:symbolya}  });
                   resolve(res.data['data'])
                } catch(err){
                    if(err.code === 'Api error'){
                        
                    }
                    reject(err);
                }
            })()
        })
    }




}