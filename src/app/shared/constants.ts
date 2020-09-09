/* file containts constants used through-out applications */

import { IceCream } from '../ice-cream/models/ice-cream.model'
import { Rating } from '../ice-cream/models/rating.model';

export const RatingTypes = {

  RatingTypes: ["FlavorRating", "TextureRating", "ValueRating"]
}
export const apiUrls = {
  GET_ICE_CREAMS: "icecream/{0}",
  POST_ICE_CREAM: "icecream/post",
  PUT_ICE_CREAM: "icecream/put",
  DELETE_ICE_CREAM: "icecream/delete/{0}",
  GET_ALL_USERS_NAMES: "user/getall",
  CREATE_USER: "user/signup",
  LOGIN_USER: "user/login",
  POST_IMAGE: "image/post"
}
