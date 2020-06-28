/* file containts constants used through-out applications */

import { IceCream } from '../ice-cream/models/ice-cream.model'

export const RatingTypes = {

   RatingTypes: ["FlavorRating", "TextureRating", "ValueRating"]
}

// for testing
export const IceCreamsForTesting = {
   iceCreamList: [{
      IceCreamId: 1,
      Name: "Plain Vanilla",
      Business: "Business One",
      Location: "Location One",
      Flavor: "Vanilla",
      FlavorRating: {
        RatingValue: 3,
        RatingType: "FlavorRating"
      },
      TextureRating: {
        RatingValue: 4,
        RatingType: "TextureRating"
      },
      ValueRating: {
        RatingValue: 1,
        RatingType: "ValueRating"
      },
      Comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      IceCreamId: 2,
      Name: "Vanilla Blast",
      Business: "Business Two",
      Location: "Location Two",
      Flavor: "Vanilla",
      FlavorRating: {
        RatingValue: 5,
        RatingType: "FlavorRating"
      },
      TextureRating: {
        RatingValue: 3,
        RatingType: "TextureRating"
      },
      ValueRating: {
        RatingValue: 2,
        RatingType: "ValueRating"
      },
      Comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      IceCreamId: 3,
      Name: "Generic Vanilla",
      Business: "Business Three",
      Location: "Location Three",
      Flavor: "Vanilla",
      FlavorRating: {
        RatingValue: 1,
        RatingType: "FlavorRating"
      },
      TextureRating: {
        RatingValue: 2,
        RatingType: "TextureRating"
      },
      ValueRating: {
        RatingValue: 2,
        RatingType: "ValueRating"
      },
      Comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      IceCreamId: 4,
      Name: "Vanilla From Ted's",
      Business: "Business Four",
      Location: "Location Four",
      Flavor: "Vanilla",
      FlavorRating: {
        RatingValue: 4,
        RatingType: "FlavorRating"
      },
      TextureRating: {
        RatingValue: 5,
        RatingType: "TextureRating"
      },
      ValueRating: {
        RatingValue: 3,
        RatingType: "ValueRating"
      },
      Comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      IceCreamId: 5,
      Name: "Vanilla Soft Serve",
      Business: "Business Five",
      Location: "Location Five",
      Flavor: "Vanilla",
      FlavorRating: {
        RatingValue: 2,
        RatingType: "FlavorRating"
      },
      TextureRating: {
        RatingValue: 4,
        RatingType: "TextureRating"
      },
      ValueRating: {
        RatingValue: 2,
        RatingType: "ValueRating"
      },
      Comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }]
}