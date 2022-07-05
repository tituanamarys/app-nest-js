import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './user/user.module';
import { ProductsModule } from './products/products.module';


const valorConstante='12345AV';
const valorConstanteVariable='quinto';
@Module({
  imports: [UsersModule, ProductsModule],
  controllers: [AppController],
  providers: [AppService,
  {
    provide:'valorConstante',
    //useValue:valorConstante
    useValue:process.env.NODE_ENV=='paraleloA'?valorConstanteVariable:valorConstante,
  },
]
})
export class AppModule {}
