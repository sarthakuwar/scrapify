
'use server'
import {scrapedAmazonProduct} from '../scraper';
 export async function scrapeAndStoreProduct(productUrl:String){
    if(!productUrl) return;

    try{
        const scrapedProduct = await scrapedAmazonProduct(productUrl);

    } catch(error:any){
        throw new Error(`failed to create/update product:${error.message}`);
    }

 }