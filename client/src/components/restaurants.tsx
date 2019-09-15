import * as React from 'react';
import { connect } from 'react-redux';
import { MuiThemeProvider } from 'material-ui/styles';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';

import { Restaurant } from './restaurant';
import { MemoRappModelState, RestaurantDataState } from '../type';
import { RestaurantDescription, RestaurantsState } from '../type';

interface RestaurantsProps {
  restaurants: RestaurantsState;
}

interface RestaurantsReactState {
  currentRestaurantIndex: number;
};

class RestaurantsComponent extends React.Component<RestaurantsProps> {

  state: RestaurantsReactState = {
    currentRestaurantIndex: 0,
  };

  constructor(props: any) {
    super(props);

    this.handleAddRestaurant = this.handleAddRestaurant.bind(this);
    this.handleRestaurantChange = this.handleRestaurantChange.bind(this);
  }

  handleRestaurantChange(event: any, index: any, currentRestaurantIndex: any) {
    this.setState(
      {
        currentRestaurantIndex,
      }
    );
  }

  getRestaurants(): any {

    const restaurantsState: RestaurantsState = this.props.restaurants;

    const restaurantDescriptions: RestaurantDescription[] = [];
    for (const restaurantId of Object.keys(restaurantsState)) {
      if (restaurantsState.hasOwnProperty(restaurantId)) {
        const restaurantDataState = restaurantsState[restaurantId];
        restaurantDescriptions.push(restaurantDataState.restaurant as RestaurantDescription);
      }
    }

    const restaurants = restaurantDescriptions.map((restaurantDescription: RestaurantDescription, index: number) => {
      return (
        <MenuItem key={index} value={index} primaryText={restaurantDescription.name} />
      );
    });
    return restaurants;
  }

  handleAddRestaurant() {
    console.log('handleAddRestaurant invoked');
  }

  renderRestaurants() {
    return (
      <div>
        <SelectField
          floatingLabelText='Restaurant'
          value={this.state.currentRestaurantIndex}
          onChange={this.handleRestaurantChange}
        >
          {this.getRestaurants()}
        </SelectField>
        <br />
        <RaisedButton
          label='New Restaurant'
          onClick={this.handleAddRestaurant}
          style={{ display: 'inline-block' }}
        />
        <Restaurant/>
      </div>
    );
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
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

export const Restaurants = connect(
  mapStateToProps,
)(RestaurantsComponent);
