import * as React from 'react';
import { connect } from 'react-redux';

import { Restaurant } from './restaurant';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

class App extends React.Component<any, object> {

  state: any = {
    mrCategory: 1,
    restaurants: [
      'La Costena',
      'Pizza Chicago'
    ],
    currentRestaurantIndex: 0,
  };

  style = {
    margin: 12,
  };

  constructor(props: any) {
    super(props);

    this.handleMRCategoryChange = this.handleMRCategoryChange.bind(this);
    this.handleRestaurantChange = this.handleRestaurantChange.bind(this);
    this.handleAddRestaurant = this.handleAddRestaurant.bind(this);
  }

  handleMRCategoryChange(event: any, index: any, mrCategory: any) {
    this.setState(
      {
        mrCategory,
      }
    );
  }

  renderMRCategory() {
    return (
      <div>
        <SelectField
          floatingLabelText='Memo Rapp Category'
          value={this.state.mrCategory}
          onChange={this.handleMRCategoryChange}
        >
          <MenuItem key={1} value={1} primaryText='Food / Beverages' />
          <MenuItem key={2} value={2} primaryText='Mtb Trails' />
        </SelectField>
      </div>
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

  handleRestaurantChange(event: any, index: any, currentRestaurantIndex: any) {
    this.setState(
      {
        currentRestaurantIndex,
      }
    );
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
          {this.renderMRCategory()}
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

export default connect(mapStateToProps)(App);
