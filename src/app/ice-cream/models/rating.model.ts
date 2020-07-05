export class Rating {
    RatingType: string;
    RatingValue: number;

    constructor(ratingType: string, ratingValue: number){
        this.RatingType = ratingType,
        this.RatingValue = ratingValue
    }
}