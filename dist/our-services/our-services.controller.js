"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OurServicesController = void 0;
const common_1 = require("@nestjs/common");
const ourServices_dto_1 = require("./dto/ourServices.dto");
const our_service_service_1 = require("./our-service/our-service.service");
let OurServicesController = class OurServicesController {
    constructor(service) {
        this.service = service;
    }
    findAll() {
        return this.service.findAll();
    }
    fineOne(id) {
        return this.service.findOne(id);
    }
    create(createServiceDto) {
        return this.service.create(createServiceDto);
    }
    delete(id) {
        return this.service.delete(id);
    }
    updateService(createServiceDto, id) {
        return this.service.update(id, createServiceDto);
    }
};
__decorate([
    (0, common_1.Get)('get-all-services'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OurServicesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('get-service/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OurServicesController.prototype, "fineOne", null);
__decorate([
    (0, common_1.Post)('create-service'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ourServices_dto_1.CreateServiceDto]),
    __metadata("design:returntype", Promise)
], OurServicesController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)('delete-service/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OurServicesController.prototype, "delete", null);
__decorate([
    (0, common_1.Put)('update-service/:id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ourServices_dto_1.CreateServiceDto, String]),
    __metadata("design:returntype", Promise)
], OurServicesController.prototype, "updateService", null);
OurServicesController = __decorate([
    (0, common_1.Controller)('our-services'),
    __metadata("design:paramtypes", [our_service_service_1.OurServiceService])
], OurServicesController);
exports.OurServicesController = OurServicesController;
//# sourceMappingURL=our-services.controller.js.map