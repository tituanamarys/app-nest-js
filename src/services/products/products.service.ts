import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import {Product}  from 'src/entities/product.entity'
@Injectable()
export class ProductsService {
    private countIdProduct=1;

    private products: Product[]=[{
        id:1,
        name: "Producto 1",
        description:" nuevo producto",
        price:560,
        stock:55,
        status:"Activo"
    }]
    /** Buscar todo */
    findAll(){

        return this.products;
    }

    /**Buscar por id */

    findOne(id:number){

        return this.products.find((item) => item.id);
    }
    /**Create */

    create(payload:any){

        this.countIdProduct=this.countIdProduct+1;
        const newProduct={
            id:this.countIdProduct,
            ...payload,
        };
         this.products.push(newProduct);
         return newProduct;
        
    }

    /**UPDATE */

    update(id:number,payload:any){
        const updateProduct=this.products.findIndex((item)=> item.id ===id);
        return updateProduct;
    }
    /**DELETE  */

    delete(id:number){
        const deleteProduct=this.products.findIndex((item)=> item.id ===id);
        return deleteProduct;
    }

}
