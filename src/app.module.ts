import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OurServicesController } from './our-services/our-services.controller';
import { OurServicesModule } from './our-services/ourServices.module';
import { PackagesController } from './packages/packages.controller';
import config from './config/keys'
import { PackagesModule } from './packages/packages.module';
@Module({
  imports: [ MongooseModule.forRoot(config.mongoURI), OurServicesModule, PackagesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
