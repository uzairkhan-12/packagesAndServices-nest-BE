import { Body, Controller, Delete, Get, Param, Post,Put } from '@nestjs/common';
import { PackagesService } from './packages/packages.service';
import { Packages } from './interfaces/packages.interface';
import { PackagesDto } from './dto/packages.dto';
@Controller('packages')
export class PackagesController {
    constructor(private readonly packagesService: PackagesService) { }
@Get('get-all-pkgs')
findAll(): Promise<Packages[]> {
  return this.packagesService.findAll()
}
@Post('create-package')
create(@Body() pkgsDto: PackagesDto): Promise<Packages> {
  return this.packagesService.create(pkgsDto);
}
@Delete(':id')
delete(@Param('id') id: string): Promise<Packages> {
  return this.packagesService.delete(id);
}
@Put(':id')
update(@Body() pkgsDto: PackagesDto, @Param('id') id: string): Promise<Packages> {
  return this.packagesService.update(id, pkgsDto);
}
@Get('get-pkg/:id')
fineOne(@Param('id') id:string):Promise<Packages> {
  return this.packagesService.findOne(id)
}
}
