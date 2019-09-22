import * as React from 'react';
import { connect } from 'react-redux';

export interface RestaurantFormProps {
}

interface RestaurantFormComponentState {
}

export class RestaurantFormComponent extends React.Component<RestaurantFormProps, RestaurantFormComponentState> {
  state: RestaurantFormComponentState = {
  }

  constructor(props: RestaurantFormProps) {
    super(props);
  }
}

function mapStateToProps(state: any, ownProps: RestaurantFormProps) {
  return {
  };
}

export const RestaurantForm = connect(
  mapStateToProps,
)(RestaurantFormComponent);
