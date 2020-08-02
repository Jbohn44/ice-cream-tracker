export class Rating {
    RatingTypeId: number;
    RatingType: string;
    RatingValue: number;

    constructor(ratingTypeId: number, ratingType: string, ratingValue: number){
        this.RatingTypeId = ratingTypeId,
        this.RatingType = ratingType,
        this.RatingValue = ratingValue
    }
}