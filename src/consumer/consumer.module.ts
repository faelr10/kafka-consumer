import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/client';
import { ConsumerController } from './consumer.controller';

@Module({
  controllers: [ConsumerController],
  providers: [PrismaService],
})
export class ConsumerModule {}
                                                                                        