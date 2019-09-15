/** @internal */
/** @private */
export interface RestaurantsState { // BaPeUiLiveTextDataFeedsState
  [restaurantStateId: string]: RestaurantDataState;
}

/** @internal */
/** @private */
export interface RestaurantDataState { // BaPeUiLiveTextDataFeedsDataState
  restaurant: RestaurantDescription;
  visits: RestaurantVisitMap;
  menuItems: RestaurantMenuItem;
}

/** @internal */
/** @private */
export interface RestaurantDescription {
  id: string;
  name: string;
  category: number; // change to string?
  overallRating: number;
  foodRating: number;
  serviceRating: number;
  ambienceRating: number;
  outdoorSeating: boolean;
  comments: string;
  wouldVisitAgain: boolean;
}

/** @internal */
/** @private */
export interface RestaurantVisit {
  id: string;
  restaurantId: string;
  visitDate: Date;
}

export interface RestaurantVisitMap {
  [id: string]: RestaurantVisit;
}

/** @internal */
/** @private */
export interface RestaurantMenuItem {
  id: string;
  rating: number;
}

export interface RestaurantMenuItemMap {
  [id: string]: RestaurantMenuItem;
}

