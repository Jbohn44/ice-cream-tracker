/* file containts constants used through-out applications */

import { IceCream } from '../ice-cream/models/ice-cream.model'
import { Rating } from '../ice-cream/models/rating.model';

export const RatingTypes = {

   RatingTypes: ["FlavorRating", "TextureRating", "ValueRating"]
}
export const apiUrls = {
  GET_ICE_CREAMS: "icecream/{0}",
  POST_ICE_CREAM: "icecream/post"
}
// for testing
  export const iceCreamList: IceCream[] = [{
      IceCreamId: 1,
      UserId: 1,
      Business: "Business One",
      Location: "Location One",
      FlavorName: "Vanilla",
      OverAllRating: <Rating>{
        RatingValue: 3,
        RatingType: "OverAllRating"
      },
      FlavorRating: <Rating>{
        RatingValue: 4,
        RatingType: "FlavorRating"
      },
      MouthFeelRating: <Rating>{
        RatingValue: 4,
        RatingType: "MouthFeelRating"
      },
      DensityRating: <Rating>{ 
        RatingValue: 3,
        RatingType: "DensityRating"
      },
      Comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }];

    export const MouthFeelArray = [
        "Very Icey",
        "Some What Icey",
        "Standard",
        "Creamy",
        "Very Creamy"]


    export const FlavorArray = [
      "Very Poor",
      "Poor",
      "Standard",
      "Good",
      "Very Good"
    ]

    export const DensityArray = [
      "Very Airy",
      "Airy",
      "Standard",
      "Some What Dense",
      "Very Dense"
    ]