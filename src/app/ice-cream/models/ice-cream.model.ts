import {Rating} from './rating.model';
import { Service } from './service.model';

export class IceCream {
    IceCreamId: number;
    UserId: number;
    Location: string;
    Business: string;
    FlavorName: string;
    OverAllRating = new Rating(1, "OverAll", 0);
    FlavorRating = new Rating(2, "Flavor", 0);
    CreaminessRating = new Rating(3, "Creaminess", 0);
    IcinessRating = new Rating(4, "Iciness", 0);
    DensityRating = new Rating(5, "Density", 0);
    ValueRating = new Rating(6, "Value", 0);
    Services: Service[] = [];
    Comments: string;
}