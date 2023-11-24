import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  create(createUserDto:CreateUserDto){
    const {firstName,lastName, password,email} = createUserDto;
    if(!firstName || !lastName || !password || !email){
        return {errorMessage: "Invalid user details."}
    }
    const user = this.userModel({
        firstName,
        lastName,
        email,
        password
    })

    return user.save();
  }
}
