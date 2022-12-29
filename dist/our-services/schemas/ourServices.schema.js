"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ourServicesSchema = void 0;
const mongoose = require("mongoose");
exports.ourServicesSchema = new mongoose.Schema({
    serviceName: String,
    servicePrice: Number,
    serviceDescription: String,
});
//# sourceMappingURL=ourServices.schema.js.map