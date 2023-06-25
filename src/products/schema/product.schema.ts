import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Product extends Document {
  @Prop({
    type: String,
  })
  name: string;
  @Prop({
    type: String,
  })
  description: string;
  @Prop({
    type: String,
  })
  image: string;
  @Prop({
    type: Number,
  })
  price: number;
  @Prop({
    type: Number,
  })
  quantity: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
