import * as React from 'react';
import { connect } from 'react-redux';
import { MuiThemeProvider } from 'material-ui/styles';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';

import { Restaurant } from './restaurant';

class RestaurantsComponent extends React.Component<any, object> {

  state: any = {
    currentRestaurantIndex: 0,
    restaurants: [
      'La Costena',
      'Pizza Chicago'
    ],
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
    const restaurants = this.state.restaurants.map((restaurantName: string, index: number) => {
      return (
        <MenuItem key={index} value={index} primaryText={restaurantName} />
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

function mapStateToProps(state: any) {
  return {
  };
}

export const Restaurants = connect(
  mapStateToProps,
)(RestaurantsComponent);
