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
  currentRestaurantId: string;
}

class RestaurantsComponent extends React.Component<RestaurantsProps> {

  state: RestaurantsReactState = {
    currentRestaurantId: '-1',
  };

  constructor(props: any) {
    super(props);

    this.handleAddRestaurant = this.handleAddRestaurant.bind(this);
    this.handleRestaurantChange = this.handleRestaurantChange.bind(this);
  }

  handleRestaurantChange(event: any, index: any, currentRestaurantId: string) {
    this.setState(
      {
        currentRestaurantId,
      }
    );
  }

  getPlaceHolderRestaurant(): any {
    return (
      <MenuItem key={-1} value={'-1'} primaryText={'----'} />
    );
  }
  getRestaurants(): any {

    const restaurantsState: RestaurantsState = this.props.restaurants;

    const restaurantDescriptions: RestaurantDescription[] = [];
    const restaurantIds: string[] = [];
    for (const restaurantId of Object.keys(restaurantsState)) {
      if (restaurantsState.hasOwnProperty(restaurantId)) {
        const restaurantDataState = restaurantsState[restaurantId];
        restaurantDescriptions.push(restaurantDataState.restaurant as RestaurantDescription);
        restaurantIds.push(restaurantId);
      }
    }

    const restaurants = restaurantDescriptions.map((restaurantDescription: RestaurantDescription, index: number) => {
      return (
        <MenuItem key={index} value={restaurantIds[index]} primaryText={restaurantDescription.name} />
      );
    });

    restaurants.unshift(this.getPlaceHolderRestaurant());

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
          value={this.state.currentRestaurantId}
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
        <Restaurant
          id={this.state.currentRestaurantId}
        />
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
