/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body } from '@nestjs/common';
import { OTPService } from './otp.service';
import { CreateOtpDto, UpdateOtpDto } from './dtos/otp.dto';

@Controller('otp')
export class OTPController {
  constructor(private readonly otpService: OTPService) {}

  @Post('/generate')
   async generateOTP(@Body() createOtpDto: CreateOtpDto) {
    const otp = await this.otpService.generateOTP(createOtpDto);
    return { otp: otp};
  }

  @Post('/validate')
  async validateOTP(@Body() updateOtpDto: UpdateOtpDto) {
    const isValid = await this.otpService.validateOTP(updateOtpDto);
    return { isValid };
  }
}

