import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConsumerModule } from './consumer/consumer.module';
import { Constants, KafkaConfig } from './kafka.config';

const kafkaImport = ClientsModule.register([
  KafkaConfig(Constants.KafkaClientToken),
]);

@Module({
  imports: [ kafkaImport,ConsumerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
