import { Module } from '@nestjs/common';
import { VehicleService } from './vehicle.service';
import { VehicleController } from './vehicle.controller';
import { Vehicle, VehicleSchema } from './entities/vehicle.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [VehicleController],
  providers: [VehicleService],
  imports: [
    MongooseModule.forFeature([{ name: Vehicle.name, schema: VehicleSchema }]),
  ],
})
export class VehicleModule {}
