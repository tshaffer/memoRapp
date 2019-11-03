import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';

import {
  addDefaultRestaurantData,
  saveRestaurant,
} from '../controller';

import {
  getCurrentRestaurantId,
  getRestaurantName,
  getRestaurantCategory,
  getRestaurantOverallRating,
  getRestaurantFoodRating,
  getRestaurantServiceRating,
  getRestaurantAmbienceRating,
  getRestaurantOutdoorSeating,
  getRestaurantComments,
  getRestaurantWouldVisitAgain,
} from '../selector';

import { Restaurant, RestaurantCategory } from '../type';

import { RestaurantForm } from './restaurantForm';

export interface NewRestaurantsProps {
  restaurantId: string;
  restaurantName: string;
  restaurantCategory: RestaurantCategory;
  restaurantOverallRating: number;
  restaurantFoodRating: number;
  restaurantServiceRating: number;
  restaurantAmbienceRating: number;
  restaurantOutdoorSeating: boolean;
  restaurantComments: string;
  restaurantWouldVisitAgain: boolean;
  onSaveRestaurant: (restaurant: Restaurant) => any;
  onAddDefaultRestaurant: () => any;
}

class NewRestaurantComponent extends React.Component<NewRestaurantsProps> {

  constructor(props: NewRestaurantsProps) {

    super(props);

    this.handleOnSaveRestaurant = this.handleOnSaveRestaurant.bind(this);
    this.handleOnCancelNewRestaurant = this.handleOnCancelNewRestaurant.bind(this);
  }

  componentDidMount() {
    this.props.onAddDefaultRestaurant();
  }

  handleOnCancelNewRestaurant() {
    hashHistory.push('/restaurants');
  }

  handleOnSaveRestaurant() {

    const restaurant: Restaurant = {
      restaurantId: this.props.restaurantId,
      name: this.props.restaurantName,
      category: this.props.restaurantCategory,
      overallRating: this.props.restaurantOverallRating,
      foodRating: this.props.restaurantFoodRating,
      serviceRating: this.props.restaurantServiceRating,
      ambienceRating: this.props.restaurantAmbienceRating,
      outdoorSeating: this.props.restaurantOutdoorSeating,
      comments: this.props.restaurantComments,
      wouldVisitAgain: this.props.restaurantWouldVisitAgain,
    };
    this.props.onSaveRestaurant(restaurant);

    // hashHistory.push('/restaurants');
    hashHistory.push('/newRestaurantVisit');
  }

  render() {
    return (
      <div>
        <RestaurantForm
          displayAddEditVisitFormPrompts={false}
          onSave={this.handleOnSaveRestaurant}
          onCancel={this.handleOnCancelNewRestaurant}
        />
      </div>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    restaurantId: getCurrentRestaurantId(state),
    restaurantName: getRestaurantName(state),
    restaurantCategory: getRestaurantCategory(state),
    restaurantOverallRating: getRestaurantOverallRating(state),
    restaurantFoodRating: getRestaurantFoodRating(state),
    restaurantServiceRating: getRestaurantServiceRating(state),
    restaurantAmbienceRating: getRestaurantAmbienceRating(state),
    restaurantOutdoorSeating: getRestaurantOutdoorSeating(state),
    restaurantComments: getRestaurantComments(state),
    restaurantWouldVisitAgain: getRestaurantWouldVisitAgain(state),
  };
}

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return bindActionCreators({
    onAddDefaultRestaurant: addDefaultRestaurantData,
    onSaveRestaurant: saveRestaurant,
  }, dispatch);
};

export const NewRestaurant = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewRestaurantComponent);


