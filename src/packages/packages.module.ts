import { Module } from '@nestjs/common';
// import { OurServicesController } from './our-services.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PackagesController } from './packages.controller';
import { PackagesService } from './packages/packages.service';
import { packageSchema } from './schemas/package.schema';
// import { ourServicesSchema } from './schemas/ourServices.schema';
// import { OurServiceService } from './our-service/our-service.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Packages', schema: packageSchema }])],
  controllers: [PackagesController],
  providers: [ PackagesService],
})
export class PackagesModule {}
