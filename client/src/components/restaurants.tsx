import * as React from 'react';
import { connect } from 'react-redux';
import { MuiThemeProvider } from 'material-ui/styles';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';

import { RestaurantForm } from './restaurantForm';
import { RestaurantVisit } from './restaurantVisit';

import { MemoRappModelState } from '../type';
import { RestaurantSummary, RestaurantsState } from '../type';

import {
  loadRestaurants,
  saveRestaurant,
} from '../controller';

import { isFunction } from 'lodash';
import { bindActionCreators } from 'redux';
import { guid } from '../utilities/utils';

export interface RestaurantsProps {
  restaurants: RestaurantsState;
  loadRestaurants: () => void;
  onSaveRestaurant: (restaurant: RestaurantSummary) => any;
  onAddRestaurant: () => any;
}

interface RestaurantsReactState {
  viewingRestaurantForm: boolean;
  viewingRestaurantVisitForm: boolean;
  currentRestaurantId: string;
}

class RestaurantsComponent extends React.Component<RestaurantsProps, RestaurantsReactState> {

  state: RestaurantsReactState = {
    viewingRestaurantForm: false,
    viewingRestaurantVisitForm: false,
    currentRestaurantId: '-1',
  };

  constructor(props: any) {
    super(props);

    this.handleNewRestaurant = this.handleNewRestaurant.bind(this);
    this.handleOnSaveRestaurantEdits = this.handleOnSaveRestaurantEdits.bind(this);
    this.handleDismissEditRestaurantForm = this.handleDismissEditRestaurantForm.bind(this);
    this.handleRestaurantChange = this.handleRestaurantChange.bind(this);
  }

  componentDidMount() {
    console.log('get all restaurants');
    this.props.loadRestaurants();
  }

  getPlaceHolderRestaurant(): any {
    return (
      <MenuItem key={-1} value={'-1'} primaryText={'----------------------------------'} />
    );
  }

  getRestaurants(): any {

    const restaurantsState: RestaurantsState = this.props.restaurants;

    const restaurantDescriptions: RestaurantSummary[] = [];
    const restaurantIds: string[] = [];
    for (const restaurantId of Object.keys(restaurantsState)) {
      if (restaurantsState.hasOwnProperty(restaurantId)) {
        const restaurantDataState = restaurantsState[restaurantId];
        restaurantDescriptions.push(restaurantDataState.restaurantSummary as RestaurantSummary);
        restaurantIds.push(restaurantId);
      }
    }

    const restaurants = restaurantDescriptions.map((restaurantDescription: RestaurantSummary, index: number) => {
      return (
        <MenuItem key={index} value={restaurantIds[index]} primaryText={restaurantDescription.name} />
      );
    });

    restaurants.unshift(this.getPlaceHolderRestaurant());

    return restaurants;
  }

  handleNewRestaurant() {
    console.log('handleNewRestaurant invoked');
    this.setState({
      currentRestaurantId: '',
      viewingRestaurantForm: true,
      viewingRestaurantVisitForm: false,
    });
  }

  handleRestaurantChange(event: any, index: any, currentRestaurantId: string) {
    this.setState(
      {
        currentRestaurantId,
        viewingRestaurantForm: true,
        viewingRestaurantVisitForm: false
      }
    );
  }

  getRestaurantAddEditRestaurantForm() {
    if (!this.state.viewingRestaurantForm && !this.state.viewingRestaurantVisitForm) {
      return (
        <div>
          <h4>Add a new restaurant or edit an existing restaurant</h4>
          <RaisedButton
            label='New Restaurant'
            onClick={this.handleNewRestaurant}
            style={{
              verticalAlign: 'top',
              marginTop: '18px'
            }}
          />
          <SelectField
            floatingLabelText='Restaurants'
            value={this.state.currentRestaurantId}
            onChange={this.handleRestaurantChange}
            style={{
              verticalAlign: 'top',
              marginLeft: '32px'
            }}
          >
            {this.getRestaurants()}
          </SelectField>
        </div>
      );
    }
    else {
      return null;
    }
  }

  handleDismissEditRestaurantForm() {
    this.setState({
      viewingRestaurantForm: false,
      viewingRestaurantVisitForm: false,
    });
  }

  handleOnSaveRestaurantEdits(
    restaurantId: string,
    restaurantName: string,
    newRestaurantCategory: number,
    overallRestaurantRating: number,
    restaurantFoodRating: number,
    restaurantServiceRating: number,
    restaurantAmbienceRating: number,
    restaurantOutdoorSeating: boolean,
    restaurantComments: string,
    restaurantWouldVisitAgain: boolean,
  ) {
    if (isFunction(this.props.onSaveRestaurant)) {
      this.props.onSaveRestaurant({
        restaurantId,
        name: restaurantName,
        category: newRestaurantCategory,
        overallRating: overallRestaurantRating,
        foodRating: restaurantFoodRating,
        serviceRating: restaurantServiceRating,
        ambienceRating: restaurantAmbienceRating,
        outdoorSeating: restaurantOutdoorSeating,
        comments: restaurantComments,
        wouldVisitAgain: restaurantWouldVisitAgain,
      });
    }

    this.setState({
      currentRestaurantId: restaurantId,
      viewingRestaurantForm: false,
      viewingRestaurantVisitForm: true,
    });
  }

  getRestaurantForm() {
    if (this.state.viewingRestaurantForm && !this.state.viewingRestaurantVisitForm) {
      return (
        <div>
          <h4>Restaurant Details</h4>
          <RestaurantForm
            restaurantId={guid()}
            restaurantName={''}
            newRestaurantCategory={1}
            overallRestaurantRating={5}
            restaurantFoodRating={5}
            restaurantServiceRating={5}
            restaurantAmbienceRating={5}
            restaurantOutdoorSeating={false}
            restaurantComments={''}
            restaurantWouldVisitAgain={false}
            onSave={this.handleOnSaveRestaurantEdits}
            onCancel={null}
          />
        </div>
      );
    }
    else if (this.state.viewingRestaurantVisitForm) {
      return (
        <div>
          <RestaurantVisit
            restaurantId={this.state.currentRestaurantId}
            restaurantVisitId={'-1'}
          />
        </div>
      );
    } else {
      return null;
    }
  }

  renderRestaurants() {
    return (
      <div>
        {this.getRestaurantAddEditRestaurantForm()}
        {this.getRestaurantForm()}
      </div>
    );
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <h3>Restaurants</h3>
          {this.renderRestaurants()}
        </div>
      </MuiThemeProvider>
    );
  }
}

function mapStateToProps(state: MemoRappModelState) {
  return {
    restaurants: state.restaurants,
  };
}

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
    loadRestaurants,
    onSaveRestaurant: saveRestaurant,
  }, dispatch);
};

export const Restaurants = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RestaurantsComponent);
