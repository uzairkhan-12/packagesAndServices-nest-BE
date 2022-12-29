import { Module } from '@nestjs/common';
import { OurServicesController } from './our-services.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ourServicesSchema } from './schemas/ourServices.schema';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { OurServicesController } from './our-services/our-services.controller';
import { OurServiceService } from './our-service/our-service.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Services', schema: ourServicesSchema }])],
  controllers: [OurServicesController],
  providers: [ OurServiceService],
})
export class OurServicesModule {}
