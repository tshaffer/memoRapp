import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  addDefaultRestaurantData,
} from '../controller';

import { RestaurantForm } from './restaurantForm';

export interface NewRestaurantsProp {
  restaurantId: string;
  onAddDefaultRestaurant: () => any;
}

class NewRestaurantComponent extends React.Component<NewRestaurantsProp> {

  componentDidMount() {
    // duplicated call
    this.props.onAddDefaultRestaurant();
  }

  render() {
    return (
      <div>
        <RestaurantForm/>
      </div>
    );
  }
}

function mapStateToProps(state: any) {
  return {
  };
}

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return bindActionCreators({
    onAddDefaultRestaurant: addDefaultRestaurantData,
  }, dispatch);
};

export const NewRestaurant = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewRestaurantComponent);


