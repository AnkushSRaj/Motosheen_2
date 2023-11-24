/* eslint-disable prettier/prettier */

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OTP, OTPSchema } from './otp.model';
import { OTPController } from './otp.controller';
import { OTPService } from './otp.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: OTP.name, schema: OTPSchema }]),
  ],
  controllers: [OTPController],
  providers: [OTPService],
})
export class OTPModule {}

