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
  viewingRestaurantForm: boolean;
  currentRestaurantId: string;
}

class RestaurantsComponent extends React.Component<RestaurantsProps, RestaurantsReactState> {

  state: RestaurantsReactState = {
    viewingRestaurantForm: false,
    currentRestaurantId: '-1',
  };

  constructor(props: any) {
    super(props);

    this.handleNewRestaurant = this.handleNewRestaurant.bind(this);
    this.handleDismissEditRestaurantForm = this.handleDismissEditRestaurantForm.bind(this);
    this.handleRestaurantChange = this.handleRestaurantChange.bind(this);
  }

  handleRestaurantChange(event: any, index: any, currentRestaurantId: string) {
    this.setState(
      {
        currentRestaurantId,
        viewingRestaurantForm: true,
      }
    );
  }

  getPlaceHolderRestaurant(): any {
    return (
      <MenuItem key={-1} value={'-1'} primaryText={'----------------------------------'} />
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

  handleNewRestaurant() {
    console.log('handleNewRestaurant invoked');
    this.setState({
      viewingRestaurantForm: true,
    });
  }

  // style={{ display: 'inline-block' }}

  getRestaurantAddEditRestaurantForm() {
    if (!this.state.viewingRestaurantForm) {
      return (
        <div>
          <h4>Add a new restaurant or edit an existing restaurant</h4>
          <RaisedButton
            label='New Restaurant'
            onClick={this.handleNewRestaurant}
            style={{
              verticalAlign: 'top',
              marginTop: '18'
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
    });
  }

  getRestaurantForm() {
    if (this.state.viewingRestaurantForm) {
      return (
        <div>
          <h4>Restaurant Details</h4>
          <Restaurant
            id={this.state.currentRestaurantId}
            onDismissEditRestaurantForm={this.handleDismissEditRestaurantForm}
          />
        </div>
      );
    }
    else {
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

export const Restaurants = connect(
  mapStateToProps,
)(RestaurantsComponent);
