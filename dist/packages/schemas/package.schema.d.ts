import * as mongoose from 'mongoose';
export declare const packageSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    services: {
        quantity: number;
        service?: mongoose.Types.ObjectId;
    }[];
    packageName?: string;
    packagePrice?: number;
}>;
