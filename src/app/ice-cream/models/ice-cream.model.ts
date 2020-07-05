import {Rating} from './rating.model';

export class IceCream {

    constructor(
    IceCreamId: number,
    Name: string,
    Location: string,
    Business: string,
    Flavor: string,
    OverAllRating: Rating,
    FlavorRating: Rating,
    MouthFeelRating: Rating,
    DensityRating: Rating,
    Comments: string){}
}