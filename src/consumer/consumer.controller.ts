import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PrismaService } from 'src/database/client';

@Controller()
export class ConsumerController {

  constructor(private readonly prisma: PrismaService) {}

  @MessagePattern('logger')
  async Login(@Payload() message) {
    const [emailUser, action] = message.value.split(':');
    await this.prisma.logger.create({
      data: {
        action,
        emailUser
      }
    });
    return 'Success';
  }
}
