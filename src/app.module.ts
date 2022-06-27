import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConsumerModule } from './consumer/consumer.module';
import { Constants, KafkaConfig } from './kafka.config';
import { LoggerModule } from './logger/logger.module';

const kafkaImport = ClientsModule.register([
  KafkaConfig(Constants.KafkaClientToken),
]);

@Module({
  imports: [LoggerModule, kafkaImport,ConsumerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
