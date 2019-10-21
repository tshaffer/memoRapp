import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';

import { RestaurantForm } from './restaurantForm';
import { saveRestaurant } from '../controller/restaurant';

import { getCurrentRestaurantId, getRestaurantCategory } from '../selector';
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
import { RestaurantCategory, Restaurant } from '../type';

export interface EditRestaurantsProps {
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
  // onSaveRestaurant: (restaurantSummary: RestaurantSummary) => any;
  onResetToSnapshot: () => any;
  onSnapshotRestaurants: () => any;
}

class EditRestaurantComponent extends React.Component<EditRestaurantsProps> {

  constructor(props: EditRestaurantsProps) {
    super(props);
    this.handleOnSaveRestaurant = this.handleOnSaveRestaurant.bind(this);
    this.handleOnCancelEditRestaurant = this.handleOnCancelEditRestaurant.bind(this);
    this.handleAddNewVisit = this.handleAddNewVisit.bind(this);
  }

  componentDidMount() {
    this.props.onSnapshotRestaurants();
  }

  handleOnCancelEditRestaurant() {
    console.log('handleOnCancelEditRestaurant');
    this.props.onResetToSnapshot();
    hashHistory.push('/restaurants');
  }

  handleOnSaveRestaurant() {
    console.log('handleOnSaveRestaurantEdits');
    console.log('invoke onSaveRestaurant');

    const restaurantSummary: Restaurant = {
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
    // const promise: Promise<any> = this.props.onSaveRestaurant(restaurantSummary);
    // console.log(promise);

    // promise.then((response) => {
    //   console.log('promise fulfilled: ', response);
    //   hashHistory.push('/restaurants');
    // });
  }

  handleAddNewVisit() {
    console.log('handleNewVisit');
    hashHistory.push('/restaurantVisit');
  }

  render() {
    console.log('EditRestaurant render()');
    return (
      <div>
        <RestaurantForm
          onSave={this.handleOnSaveRestaurant}
          onCancel={this.handleOnCancelEditRestaurant}
          onAddNewVisit={this.handleAddNewVisit}
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

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
    // onSaveRestaurant: saveRestaurant,
  }, dispatch);
};

export const EditRestaurant = connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditRestaurantComponent);


