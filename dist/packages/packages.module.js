"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackagesModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const packages_controller_1 = require("./packages.controller");
const packages_service_1 = require("./packages/packages.service");
const package_schema_1 = require("./schemas/package.schema");
let PackagesModule = class PackagesModule {
};
PackagesModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: 'Packages', schema: package_schema_1.packageSchema }])],
        controllers: [packages_controller_1.PackagesController],
        providers: [packages_service_1.PackagesService],
    })
], PackagesModule);
exports.PackagesModule = PackagesModule;
//# sourceMappingURL=packages.module.js.map