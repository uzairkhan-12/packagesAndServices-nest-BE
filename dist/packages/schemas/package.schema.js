"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.packageSchema = void 0;
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
exports.packageSchema = new mongoose.Schema({
    packageName: String,
    packagePrice: Number,
    services: [
        {
            service: { type: ObjectId, ref: "Services" },
            quantity: { type: Number, default: 1 }
        }
    ]
});
//# sourceMappingURL=package.schema.js.map