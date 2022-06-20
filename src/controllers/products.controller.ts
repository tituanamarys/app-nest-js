import { Controller, Param, Query, Get, Post, Body, Put, Delete } from '@nestjs/common';
import {ProductsService} from 'src/services/products/products.service'
@Controller('products')
export class ProductsController {

    constructor (private productsService:ProductsService){

    }

    /**RUTAS  NO DINAMICAS */
    @Get('filter')//@Get('products/filter')
    getProductFilter() {
        return `Hola Mundo `;

    }

    /**RUTAS   DINAMICAS */
    @Get('productId')//@Get('products/:productId')
    getProduct(@Param(`productId`) productId: any) {
        // return `product ${productId}`;
        return this.productsService.findOne(+productId);

    }

    @Get('')//    @Get('products')
    getProducts(
        // @Query(`limit`) limit: number =10,
        @Query(`limit`) limit = 10,
        @Query(`offset`) offset = 0,
        @Query(`brand`) brand: string,) {
        // const{limit,offset}=params;){
        // return `products:=>${limit} offset=${offset}`;
        // return `products limit=>${limit} offset=${offset} brand=>${brand}`
        // return {
        //     message: `products limit=>${limit} offset=${offset} brand=>${brand}`
        // }

        return this.productsService.findAll()

    }

  
    //crear*******************
@Post()
    create (@Body() payload: any ){
        // return {
        //     message:'accion de crear',
        //     payload,
        // }
        return this.productsService.create(payload);
    }

    //************* update******************
    @Put(':id')
    update(@Param('id')  id:number, @Body() payload: any){
        // return {
        //     id,
        //     payload,
        // }
        return this.productsService.update(+id,payload);
    }
    /***DELETE */
    @Delete(':id')
    delete(@Param('id') id:number)
    {
        // return id;
        return this.productsService.delete(+id);
    }



}

