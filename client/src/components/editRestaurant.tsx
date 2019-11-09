import { isNil, isArray } from 'lodash';

import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';

import { RestaurantForm } from './restaurantForm';
import { saveRestaurant } from '../controller/restaurant';
import { setRestaurantVisitId } from '../controller';

import { getCurrentRestaurantId, getRestaurantCategory, getRestaurantById, getRestaurantVisitsByRestaurant } from '../selector';
import {
  getRestaurantName,
  getRestaurantOverallRating,
  getRestaurantFoodRating,
  getRestaurantServiceRating,
  getRestaurantAmbienceRating,
  getRestaurantOutdoorSeating,
  getRestaurantComments,
  getRestaurantWouldVisitAgain,
} from '../selector';
import { RestaurantCategory, Restaurant, RestaurantVisit } from '../type';

export interface EditRestaurantsProps {
  restaurant: Restaurant;
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
  restaurantVisits: RestaurantVisit[];
  onSaveRestaurant: (restaurant: Restaurant) => any;
  setRestaurantVisitId: (restaurantId: string) => any;
}

class EditRestaurantComponent extends React.Component<EditRestaurantsProps> {

  constructor(props: EditRestaurantsProps) {
    super(props);
    this.handleOnSaveRestaurant = this.handleOnSaveRestaurant.bind(this);
    this.handleOnCancelEditRestaurant = this.handleOnCancelEditRestaurant.bind(this);
    this.handleAddNewVisit = this.handleAddNewVisit.bind(this);
  }

  componentDidMount() {
    if (isArray(this.props.restaurantVisits) && this.props.restaurantVisits.length > 0) {
      this.props.setRestaurantVisitId(this.props.restaurantVisits[0].restaurantVisitId);
    }
  }

  handleOnCancelEditRestaurant() {

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
    const promise: Promise<any> = this.props.onSaveRestaurant(restaurant);
    promise.then((response) => {
      hashHistory.push('/restaurants');
    });
  }

  handleAddNewVisit() {
    hashHistory.push('/newRestaurantVisit');
  }

  handleEditVisit() {
    hashHistory.push('/editRestaurantVisit');
  }
  
  render() {
    return (
      <div>
        <RestaurantForm
          displayAddEditVisitFormPrompts={true}
          onSave={this.handleOnSaveRestaurant}
          onCancel={this.handleOnCancelEditRestaurant}
          onAddNewVisit={this.handleAddNewVisit}
          onEditVisit={this.handleEditVisit}
        />
      </div>
    );
  }
}

function mapStateToProps(state: any) {
  const restaurantId = getCurrentRestaurantId(state);
  return {
    restaurantId,
    restaurant: getRestaurantById(state, restaurantId),
    restaurantName: getRestaurantName(state),
    restaurantCategory: getRestaurantCategory(state),
    restaurantOverallRating: getRestaurantOverallRating(state),
    restaurantFoodRating: getRestaurantFoodRating(state),
    restaurantServiceRating: getRestaurantServiceRating(state),
    restaurantAmbienceRating: getRestaurantAmbienceRating(state),
    restaurantOutdoorSeating: getRestaurantOutdoorSeating(state),
    restaurantComments: getRestaurantComments(state),
    restaurantWouldVisitAgain: getRestaurantWouldVisitAgain(state),
    restaurantVisits: getRestaurantVisitsByRestaurant(state, restaurantId),
  };
}

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
    onSaveRestaurant: saveRestaurant,
    setRestaurantVisitId,
  }, dispatch);
};

export const EditRestaurant = connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditRestaurantComponent);


