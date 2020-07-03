/* file containts constants used through-out applications */

import { IceCream } from '../ice-cream/models/ice-cream.model'
import { Rating } from '../ice-cream/models/rating.model';

export const RatingTypes = {

   RatingTypes: ["FlavorRating", "TextureRating", "ValueRating"]
}
export const apiUrls = {
  TEST_URL: 'icecreams/{0}'
}
// for testing
  export const iceCreamList: IceCream[] = [{
      IceCreamId: 1,
      Name: "Plain Vanilla",
      Business: "Business One",
      Location: "Location One",
      Flavor: "Vanilla",
      OverAllRating: <Rating>{
        RatingValue: 3,
        RatingType: "OverAllRating"
      },
      FlavorRating: <Rating>{
        RatingValue: 4,
        RatingType: "FlavorRating"
      },
      MouthFeelRating: <Rating>{
        RatingValue: 1,
        RatingType: "MouthFeelRating"
      },
      DensityRating: <Rating>{ 
        RatingValue: 2,
        RatingType: "DensityRating"
      },
      Comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }];