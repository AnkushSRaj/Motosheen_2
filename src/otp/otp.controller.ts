/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body } from '@nestjs/common';
import { OTPService } from './otp.service';

@Controller('otp')
export class OTPController {
  constructor(private readonly otpService: OTPService) {}

  @Get('/generate')
   async generateOTP() {
    const otp = await this.otpService.generateOTP();
    return { otp: otp.value };
  }

  @Post('/validate')
  async validateOTP(@Body('otp') otpValue: string) {
    const isValid = await this.otpService.validateOTP(otpValue);
    return { isValid };
  }
}

