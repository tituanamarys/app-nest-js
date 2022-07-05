import { Injectable,Inject } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor (@Inject('valorConstante') private valor:string){}
  getHello(): string {
    return `Hola Mundo ${this.valor}`;
  }
  
}
