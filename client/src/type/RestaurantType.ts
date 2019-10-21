export interface RestaurantsState {
  restaurants: RestaurantsMap;
  restaurantVisits: RestaurantVisitsMap;
  restaurantMenuItems: RestaurantMenuItemMap;
}

export interface Restaurant {
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

export interface RestaurantMenuItem {
  restaurantMenuItemId: string;
  restaurantId: string;
  rating: number;
}

export interface RestaurantsMap {
  [id: string]: Restaurant;
}

export interface RestaurantVisitsMap {
  [id: string]: RestaurantVisit;
}

export interface RestaurantMenuItemMap {
  [id: string]: RestaurantMenuItem;
}

export enum RestaurantCategory {
  pizza = 'Pizza',
  burrito = 'Burrito',
  burgers = 'Burgers',
  other = 'Other',
}

