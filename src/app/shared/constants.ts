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
  GET_ALL_USERS: "user/getall",
  CREATE_USER: "user/create"
}

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