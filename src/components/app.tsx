import * as React from 'react';
import { connect } from 'react-redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class App extends React.Component<any, object> {

  state: any = {
    mrCategory: 1,
    restaurants: [
      'La Costena',
      'Pizza Chicago'
    ],
    currentRestaurantIndex: 0,
    newRestaurantCategory: 1,
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

  renderRestaurantName() {
    return (
      <div>
        <TextField
          id='newRestaurantName'
          hintText='Name'
        /> <br />
      </div>
    );
  }

  renderRestaurantAddress() {
    return (
      <div>
        <TextField
          id='newRestaurantAddress'
          hintText='Address'
        /><br />
      </div>
    );
  }

  handleRestaurantCategoryChange(event: any, index: any, newRestaurantCategory: any) {
    this.setState(
      {
        newRestaurantCategory,
      }
    );
  }

  renderRestaurantCategory() {
    return (
      <div>
        <SelectField
          floatingLabelText='Restaurant Category'
          value={this.state.newRestaurantCategory}
          onChange={this.handleRestaurantCategoryChange}
        >
          <MenuItem key={1} value={1} primaryText='Pizza' />
          <MenuItem key={2} value={2} primaryText='Burritos' />
          <MenuItem key={3} value={3} primaryText='Burgers' />
        </SelectField>
      </div>
    );
  }

  renderRestaurantRating() {
    return (
      <div>

      </div>
    );
  }

  renderRestaurantComments() {
    return (
      <div>

      </div>
    );
  }

  renderRestaurantWouldVisitAgain() {
    return (
      <div>

      </div>
    );
  }

  renderNewRestaurantForm() {
    return (
      <div>
        {this.renderRestaurantName()}
        {this.renderRestaurantAddress()}
        {this.renderRestaurantCategory()}
      </div>
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
        {this.renderNewRestaurantForm()}
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
