// import { Injectable } from '@nestjs/common';

// @Injectable()
// export class OurServiceService {}


import { Injectable } from '@nestjs/common';
import { OurServices } from '../interfaces/ourServices.interface'
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class OurServiceService {

  constructor(@InjectModel('Services') private readonly servicesModel: Model<OurServices>) { }

  async findAll(): Promise<OurServices[]> {
    return await this.servicesModel.find();
  }

  async findOne(id: string): Promise<OurServices> {
    return await this.servicesModel.findOne({ _id: id });
  }

  async create(serviceInterface: OurServices): Promise<OurServices> {
    const newService = new this.servicesModel(serviceInterface);
    return newService.save();
  }

  async delete(id: string): Promise<OurServices> {
    return this.servicesModel.findByIdAndRemove(id);
  }

  async update(id: string, service: OurServices): Promise<OurServices> {
    return await this.servicesModel.findByIdAndUpdate(id, service, { new: true });
  }

}