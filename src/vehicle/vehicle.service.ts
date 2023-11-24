import { Injectable } from '@nestjs/common';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';
import { Vehicle } from './entities/vehicle.entity';

@Injectable()
export class VehicleService {
  constructor(@InjectModel(Vehicle.name) private vehicleModel: Model<Vehicle>) {}

  create(createVehicleDto: CreateVehicleDto) {
    const {brand, registrationNo, model} = createVehicleDto;
    if(!brand || !registrationNo || !model){
      return {errorMessage: "Invalid request format."}
    }
    const vehicle = new this.vehicleModel({
      brand,
      model,
      registrationNo
    });
    return vehicle.save();
  }
}
