import * as React from 'react';
import { connect } from 'react-redux';

interface RestaurantVisitProps {
  restaurantId: string;
  restaurantVisitId: string;
}

interface RestaurantVisitComponentState {
  comments: string;
}

class RestaurantVisitComponent extends React.Component<RestaurantVisitProps, RestaurantVisitComponentState> {

  state: RestaurantVisitComponentState = {
    comments: '',
  };
  initialState: RestaurantVisitComponentState;

  constructor(props: RestaurantVisitProps) {
    super(props);
  }

  render() {
    return (
      <div>
        Enter information about this restaurant visit
      </div>
    );
  }
}

function mapStateToProps(state: any, ownProps: RestaurantVisitProps) {
  const { restaurantId, restaurantVisitId } = ownProps;
  console.log('mapStateToProps');
  console.log(restaurantId);
  console.log(restaurantVisitId);
  return {
  };
}

export const RestaurantVisit = connect(
  mapStateToProps,
)(RestaurantVisitComponent);


