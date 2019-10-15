import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { RestaurantForm } from './restaurantForm';

// export interface EditRestaurantsProp {
// }

class EditRestaurantComponent extends React.Component {

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
  }, dispatch);
};

export const EditRestaurant = connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditRestaurantComponent);


