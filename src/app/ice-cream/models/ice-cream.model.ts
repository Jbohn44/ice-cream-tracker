import {Rating} from './rating.model';

export class IceCream {
    IceCreamId: number;
    Name: string;
    Location: string;
    Business: string;
    Flavor: string;
    OverAllRating = new Rating("OverAllRating", 0);
    FlavorRating = new Rating("FlavorRating", 0);
    MouthFeelRating = new Rating("MouthFeelRating", 0);
    DensityRating = new Rating("DensityRating", 0);
    Comments: string;
}