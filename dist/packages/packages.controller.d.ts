import { PackagesService } from './packages/packages.service';
import { Packages } from './interfaces/packages.interface';
import { PackagesDto } from './dto/packages.dto';
export declare class PackagesController {
    private readonly packagesService;
    constructor(packagesService: PackagesService);
    findAll(): Promise<Packages[]>;
    create(pkgsDto: PackagesDto): Promise<Packages>;
    delete(id: string): Promise<Packages>;
    update(pkgsDto: PackagesDto, id: string): Promise<Packages>;
    fineOne(id: string): Promise<Packages>;
}
