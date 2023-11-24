/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {  Document } from 'mongoose';

@Schema({timestamps: true, collection: 'user'})
export class User extends Document {
  @Prop({required: true})
  firstName: string;

  @Prop({required: true})
  lastName: string;

  @Prop({required: true})
  email: string; 
  
  @Prop({required: true})
  password: string; 
}

export const UserSchema = SchemaFactory.createForClass(User);
