import { InputType, Field, Float, Int } from '@nestjs/graphql';

@InputType()
export class CreateProductInput {
  @Field(() => String, { description: 'The name of the product' })
  name: string;
  @Field(() => String, { description: 'The description of the product' })
  description: string;
  @Field(() => String, {
    description:
      'The principal image of the product, minimum 320px width and 200px height',
  })
  image: string;
  @Field(() => Int, { description: 'The quantity of the product' })
  quantity: number;
  @Field(() => Float, { description: 'The price of the product' })
  price: number;
}
