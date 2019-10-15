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
  onSaveRestaurant: (
    id: string,
    name: string,
    category: number,
    overallRating: number,
    foodRating: number,
    serviceRating: number,
    ambienceRating: number,
    outdoorSeating: boolean,
    comments: string,
    wouldVisitAgain: boolean,
  ) => any;
}

class EditRestaurantComponent extends React.Component<EditRestaurantsProp> {

  constructor(props: EditRestaurantsProp) {
    super(props);
    this.handleOnSaveRestaurantEdits = this.handleOnSaveRestaurantEdits.bind(this);
  }

  handleOnSaveRestaurantEdits() {
    console.log('handleOnSaveRestaurantEdits');
    console.log('invoke onSaveRestaurant');
    this.props.onSaveRestaurant(
      this.props.restaurantId,
      this.props.restaurantName,
      this.props.restaurantCategory,
      this.props.restaurantOverallRating,
      this.props.restaurantFoodRating,
      this.props.restaurantServiceRating,
      this.props.restaurantAmbienceRating,
      this.props.restaurantOutdoorSeating,
      this.props.restaurantComments,
      this.props.restaurantWouldVisitAgain,
    );
  }

  render() {
    return (
      <div>
        <RestaurantForm
          onSave={this.handleOnSaveRestaurantEdits}
        />
      </div>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    restaurantId: getCurrentRestaurantId(state),
    restaurantName: getRestaurantName(state),
    newRestaurantCategory: getRestaurantCategory(state),
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
    onSaveRestaurant: saveRestaurant,
  }, dispatch);
};

export const EditRestaurant = connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditRestaurantComponent);


