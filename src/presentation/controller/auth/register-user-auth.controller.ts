import { RegisterUserAuthRequestDto } from '@application/dto/request/auth/register-user-auth-request.dto';
import { UserResponseDto } from '@application/dto/response/user/user-response.dto';
import { IController } from '@domain/interfaces/common/controller.interface';
import { IRegisterUserAuthService } from '@domain/interfaces/service/auth/register-user-auth-service.interface';

export class RegisterUserAuthController
  implements IController<RegisterUserAuthRequestDto, UserResponseDto>
{
  constructor(
    private readonly registerUserAuthService: IRegisterUserAuthService
  ) {}
  async handle(dto: RegisterUserAuthRequestDto): Promise<UserResponseDto> {
    return await this.registerUserAuthService.execute(dto).then(user => {
      return UserResponseDto.toJson(user);
    });
  }
}
