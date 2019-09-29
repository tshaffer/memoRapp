/** @internal */
/** @private */
export interface RestaurantsState { // BaPeUiLiveTextDataFeedsState
  [id: string]: RestaurantState;
}

/** @internal */
/** @private */
export interface RestaurantState { // BaPeUiLiveTextDataFeedsDataState
  restaurantSummary: RestaurantSummary;
  visits: RestaurantVisitMap;
  menuItems: RestaurantMenuItemMap;
}

/** @internal */
/** @private */
export interface RestaurantSummary {
  restaurantId: string;
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
  restaurantVisitId: string;
  restaurantId: string;
  visitDate: Date;
}

export interface RestaurantVisitMap {
  [restaurantVisitid: string]: RestaurantVisit;
}

/** @internal */
/** @private */
export interface RestaurantMenuItem {
  restaurantMenuItemId: string;
  rating: number;
}

export interface RestaurantMenuItemMap {
  [restaurantMenuItemId: string]: RestaurantMenuItem;
}

