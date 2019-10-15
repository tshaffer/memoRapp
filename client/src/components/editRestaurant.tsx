import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { RestaurantForm } from './restaurantForm';
import { saveRestaurant } from '../controller/restaurant';

import { getRestaurantById, getCurrentRestaurantId, getRestaurantCategory } from '../selector';
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
import { RestaurantSummary } from '../type';

export interface EditRestaurantsProp {
  restaurantId: string;
  restaurantName: string;
  restaurantCategory: number;
  restaurantOverallRating: number;
  restaurantFoodRating: number;
  restaurantServiceRating: number;
  restaurantAmbienceRating: number;
  restaurantOutdoorSeating: boolean;
  restaurantComments: string;
  restaurantWouldVisitAgain: boolean;
  onSaveRestaurant: (restaurantSummary: RestaurantSummary) => any;
}

class EditRestaurantComponent extends React.Component<EditRestaurantsProp> {

  constructor(props: EditRestaurantsProp) {
    super(props);
    this.handleOnSaveRestaurantEdits = this.handleOnSaveRestaurantEdits.bind(this);
    this.handleOnCancelEditRestaurant = this.handleOnCancelEditRestaurant.bind(this);
  }

  handleOnCancelEditRestaurant() {
    console.log('poo');
  }

  handleOnSaveRestaurantEdits() {
    console.log('handleOnSaveRestaurantEdits');
    console.log('invoke onSaveRestaurant');

    const restaurantSummary: RestaurantSummary = {
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
    this.props.onSaveRestaurant(restaurantSummary);
  }

  render() {
    return (
      <div>
        <RestaurantForm
          onSave={this.handleOnSaveRestaurantEdits}
          onCancel={this.handleOnCancelEditRestaurant}
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
    onSaveRestaurant: saveRestaurant,
  }, dispatch);
};

export const EditRestaurant = connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditRestaurantComponent);


