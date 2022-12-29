import * as mongoose from 'mongoose';
const {ObjectId} = mongoose.Schema.Types
export const packageSchema = new mongoose.Schema({
    packageName:String,
    packagePrice:Number,
    services: [
        {
            service: {type: ObjectId, ref: "Services"},
            quantity: {type: Number, default: 1}
        }
    ]
});