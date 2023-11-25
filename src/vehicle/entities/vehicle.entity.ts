/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {  Document } from 'mongoose';
import {v4 as uuidv4} from 'uuid'
import { User } from 'src/users/entities/user.entity';

@Schema({timestamps: true, collection: 'vehicle'})
export class Vehicle extends Document {
  @Prop({
    required: true,
    refPath: "user",
    type : uuidv4
  })
  userId: User;

  @Prop({required: true})
  brand: string;

  @Prop({required: true})
  vehicleModel: string;

  @Prop({required: true})
  registrationNo: string;  
}

export const VehicleSchema = SchemaFactory.createForClass(Vehicle);
