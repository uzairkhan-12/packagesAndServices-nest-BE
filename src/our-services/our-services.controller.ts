import { Body, Controller, Delete, Get, Param, Post,Put } from '@nestjs/common';
import { CreateServiceDto } from './dto/ourServices.dto';
import { OurServices } from './interfaces/ourServices.interface'
import { OurServiceService } from './our-service/our-service.service';
@Controller('our-services')
export class OurServicesController {
constructor(private readonly service: OurServiceService) { }
@Get('get-all-services')
findAll(): Promise<OurServices[]> {
  return this.service.findAll();
}
@Get('get-service/:id')
fineOne(@Param('id') id:string):Promise<OurServices> {
  return this.service.findOne(id)
}
@Post('create-service')
create(@Body() createServiceDto: CreateServiceDto): Promise<OurServices> {
  return this.service.create(createServiceDto);
}
@Delete('delete-service/:id')
delete(@Param('id') id:string):Promise<OurServices> {
    return this.service.delete(id)
}
@Put('update-service/:id')
updateService(@Body() createServiceDto:CreateServiceDto , @Param('id') id:string): Promise<OurServices> {
    return this.service.update(id,createServiceDto)
}
}