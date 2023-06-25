import { ObjectType, Field, Int, Float } from '@nestjs/graphql';

@ObjectType()
export class Product {
  @Field(() => String, { description: 'ID of the Product' })
  _id: string;
  @Field(() => String, { description: 'Name of the Product' })
  name: string;
  @Field(() => String, { description: 'Description of the Product' })
  description: string;
  @Field(() => String, {
    description:
      'Main image URL of the Product,size minimun 320px width and 200px height',
  })
  image: string;
  @Field(() => Int, { description: 'Quantity of the Product' })
  quantity: number;
  @Field(() => Float, { description: 'Price of the Product' })
  price: number;
}
