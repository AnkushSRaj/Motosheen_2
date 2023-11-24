/* eslint-disable prettier/prettier */

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {  Document } from 'mongoose';



@Schema({timestamps: true, collection: 'otp'})
export class OTP extends Document {
  @Prop({required: true})
  value: string;
  

  @Prop({required: true})
  expiration: Date;

  
}

export const OTPSchema = SchemaFactory.createForClass(OTP);
