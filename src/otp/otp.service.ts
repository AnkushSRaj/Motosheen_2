/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { OTP } from './otp.model';

@Injectable()
export class OTPService {
  constructor(@InjectModel(OTP.name) private otpModel: Model<OTP>) {}

  async generateOTP() {
    const otpValue = Math.floor(100000 + Math.random() * 900000).toString();

    const expiration = new Date();
    expiration.setMinutes(expiration.getMinutes() + 10);

    const otp = new this.otpModel({
      value: otpValue,
      expiration,
    });

    return otp.save();
  }

  async validateOTP(otpValue: string) {
    const otp = await this.otpModel.findOne({
      value: otpValue,
      expiration: { $gt: new Date() },
    });

    if (otp) {
      return true;
    }

    return false;
  }
}

