import { Injectable } from '@nestjs/common';
import { LoginAuthDto } from './dto/login-auth.dto';

@Injectable()
export class AuthService {

    constructor(private jwService: JwtService){}
    login(credenciales: LoginAuthDto){

    }
}
