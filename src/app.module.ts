/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { OTPModule } from './otp/otp.module';
import { MongooseModule } from '@nestjs/mongoose';
import {ConfigModule} from '@nestjs/config'
import { VehicleModule } from './vehicle/vehicle.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot('mongodb://localhost:27017'),
    UsersModule,
    OTPModule,
    VehicleModule
  ],
  providers: [],
})
export class AppModule {}
