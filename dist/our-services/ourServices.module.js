"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OurServicesModule = void 0;
const common_1 = require("@nestjs/common");
const our_services_controller_1 = require("./our-services.controller");
const mongoose_1 = require("@nestjs/mongoose");
const ourServices_schema_1 = require("./schemas/ourServices.schema");
const our_service_service_1 = require("./our-service/our-service.service");
let OurServicesModule = class OurServicesModule {
};
OurServicesModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: 'Services', schema: ourServices_schema_1.ourServicesSchema }])],
        controllers: [our_services_controller_1.OurServicesController],
        providers: [our_service_service_1.OurServiceService],
    })
], OurServicesModule);
exports.OurServicesModule = OurServicesModule;
//# sourceMappingURL=ourServices.module.js.map