export interface RestaurantsState { // BaPeUiLiveTextDataFeedsState
  restaurants: RestaurantsStateById;
  pastRestaurants: RestaurantsStateById;
}

export interface RestaurantsStateById {
  [id: string]: RestaurantState;
}

export interface RestaurantState { // BaPeUiLiveTextDataFeedsDataState
  restaurantSummary: RestaurantSummary;
  visits: RestaurantVisitMap;
  menuItems: RestaurantMenuItemMap;
}

export interface RestaurantSummary {
  restaurantId: string;
  name: string;
  category: RestaurantCategory;
  overallRating: number;
  foodRating: number;
  serviceRating: number;
  ambienceRating: number;
  outdoorSeating: boolean;
  comments: string;
  wouldVisitAgain: boolean;
}

export interface RestaurantVisit {
  restaurantVisitId: string;
  restaurantId: string;
  visitDate: Date;
  comments: string;
}

export interface RestaurantVisitMap {
  [restaurantVisitId: string]: RestaurantVisit;
}

export interface RestaurantMenuItem {
  restaurantMenuItemId: string;
  rating: number;
}

export interface RestaurantMenuItemMap {
  [restaurantMenuItemId: string]: RestaurantMenuItem;
}

export enum RestaurantCategory {
  pizza = 'Pizza',
  burrito = 'Burrito',
  burgers = 'Burgers',
  other = 'Other',
}

