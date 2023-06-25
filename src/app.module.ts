import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductSchema } from './products/schema/product.schema';
import { ProductsService } from './products/products.service';
import { ProductsResolver } from './products/products.resolver';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: `.env` }),
    MongooseModule.forRoot(
      process.env.DB_URL + process.env.DB_HOST + ':' + process.env.DB_PORT,
      {
        dbName: process.env.DB_NAME,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    ),
    MongooseModule.forFeature([{ name: 'Products', schema: ProductSchema }]),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, ProductsService, ProductsResolver],
})
export class AppModule {}
