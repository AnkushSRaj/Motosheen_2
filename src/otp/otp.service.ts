/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { OTP } from './otp.model';
import { CreateOtpDto, UpdateOtpDto } from './dtos/otp.dto';
import { Twilio } from 'twilio';

@Injectable()
export class OTPService {
  private twilioClient: Twilio;
  constructor(@InjectModel(OTP.name) private otpModel: Model<OTP>) {
    console.log(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN)
    this.twilioClient = new Twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN)
  }

  async generateOTP(createOtpDto: CreateOtpDto) {
    // const otpValue = Math.floor(100000 + Math.random() * 900000).toString();

    // const expiration = new Date();
    // expiration.setMinutes(expiration.getMinutes() + 10);

    let msg = ''

    console.log(process.env, process.env.TWILIO_VERIFICATION_SID)
    await this.twilioClient.verify.v2
      .services(process.env.TWILIO_VERIFICATION_SID)
      .verifications.create({ to: createOtpDto.phoneNo, channel: 'sms' })
      .then((verification: { status: any; }) => (msg = verification.status));

    // const otp = new this.otpModel({
    //   phoneNo: createOtpDto.phoneNo,
    //   value: otpValue,
    //   expiration,
    // });

    // otp.save();
    return { msg: msg };
  }

  async validateOTP( updateOtpDto: UpdateOtpDto) {
    let msg = '';
    await this.twilioClient.verify.v2
      .services(process.env.TWILIO_VERIFICATION_SID)
      .verificationChecks.create({ to: updateOtpDto.phoneNo, code: updateOtpDto.code })
      .then((verification) => (msg = verification.status));
    return { msg: msg };
  }
}

