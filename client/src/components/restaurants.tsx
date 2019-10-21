import * as React from 'react';
import { connect } from 'react-redux';
import {
  hashHistory
} from 'react-router';

import { MuiThemeProvider } from 'material-ui/styles';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';

import { MemoRappModelState } from '../type';
import { Restaurant, RestaurantsState } from '../type';

import {
  loadRestaurants,
} from '../controller';

import { bindActionCreators } from 'redux';
import { getCurrentRestaurantId } from '../selector';
import { setRestaurantId } from '../controller';

export interface RestaurantsProps {
  restaurantId: string;
  restaurants: RestaurantsState;
  loadRestaurants: () => void;
  setRestaurantId: (id: string) => any;
  // onSaveRestaurant: (restaurant: RestaurantSummary) => any;
  onAddDefaultRestaurant: () => any;
  onAddNewRestaurant: () => any;
}

class RestaurantsComponent extends React.Component<RestaurantsProps> {

  constructor(props: RestaurantsProps) {
    super(props);

    this.handleNewRestaurant = this.handleNewRestaurant.bind(this);
    this.handleRestaurantChange = this.handleRestaurantChange.bind(this);
  }

  componentDidMount() {
    // console.log('get all restaurants');
    this.props.setRestaurantId('-1');
    // this.props.loadRestaurants();
  }

  getPlaceHolderRestaurant(): any {
    return (
      <MenuItem key={-1} value={'-1'} primaryText={'----------------------------------'} />
    );
  }

  getRestaurants(): any {

    const restaurantsState: RestaurantsState = this.props.restaurants;

    const restaurantDescriptions: Restaurant[] = [];
    const restaurantIds: string[] = [];
    for (const restaurantId of Object.keys(restaurantsState.restaurants)) {
      if (restaurantsState.restaurants.hasOwnProperty(restaurantId)) {
        const restaurantDataState = restaurantsState.restaurants[restaurantId];
        restaurantDescriptions.push(restaurantDataState);
        restaurantIds.push(restaurantId);
      }
    }

    const restaurants = restaurantDescriptions.map((restaurantDescription: Restaurant, index: number) => {
      return (
        <MenuItem key={index} value={restaurantIds[index]} primaryText={restaurantDescription.name} />
      );
    });

    restaurants.unshift(this.getPlaceHolderRestaurant());

    return restaurants;
  }

  handleNewRestaurant() {
    console.log('handleNewRestaurant invoked');
    hashHistory.push('/newRestaurant');
  }

  handleRestaurantChange(event: any, index: any, restaurantId: string) {
    this.props.setRestaurantId(restaurantId);
    hashHistory.push('/editRestaurant');
  }

  getRestaurantAddEditRestaurantForm() {
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
          value={this.props.restaurantId}
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

  renderRestaurants() {
    return (
      <div>
        {this.getRestaurantAddEditRestaurantForm()}
      </div>
    );
  }

  render() {
    console.log('Restaurants render()');
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
    restaurantId: getCurrentRestaurantId(state),
    restaurants: state.restaurants,
  };
}

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
    loadRestaurants,
    setRestaurantId,
  }, dispatch);
};

export const Restaurants = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RestaurantsComponent);
