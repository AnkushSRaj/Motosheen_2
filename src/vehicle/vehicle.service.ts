import { Injectable } from '@nestjs/common';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { Vehicle } from './entities/vehicle.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class VehicleService {
  constructor(
    @InjectModel(Vehicle.name) private vehicleModel: Model<Vehicle>,
  ) {}

  create(createVehicleDto: CreateVehicleDto) {
    const { brand, registrationNo, vehicleModel } = createVehicleDto;
    if (!brand || !registrationNo || !vehicleModel) {
      return { errorMessage: 'Invalid request format.' };
    }
    const vehicle = new this.vehicleModel({
      brand,
      vehicleModel,
      registrationNo,
    });
    return vehicle.save();
  }
}
