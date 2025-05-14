import { LoginUserAuthRequestDto } from '@application/dto/request/auth/login-user-auth-request.dto';
import { IController } from '@domain/interfaces/common/controller.interface';
import { ILoginUserAuthService } from '@domain/interfaces/service/auth/login-user-auth-service.interface';

export class LoginUserAuthController
  implements IController<LoginUserAuthRequestDto, { token: string }>
{
  constructor(private readonly loginUserAuthService: ILoginUserAuthService) {}

  async handle(dto: LoginUserAuthRequestDto): Promise<{ token: string }> {
    return await this.loginUserAuthService.execute(dto);
  }
}
