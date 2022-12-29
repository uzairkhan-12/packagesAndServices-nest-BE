import * as mongoose from 'mongoose';

export const ourServicesSchema = new mongoose.Schema({
  serviceName: String,
  servicePrice: Number,
  serviceDescription: String,
});