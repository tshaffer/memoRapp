import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';

import {
  saveRestaurantVisit,
} from '../controller';

import {
  getCurrentRestaurantId,
  getCurrentRestaurantVisitId,
  getRestaurantVisitComments,
  getRestaurantVisitDate,
} from '../selector';

import { RestaurantVisit } from '../type';

import { RestaurantVisitForm } from './restaurantVisitForm';

export interface EditRestaurantVisitProps {
  restaurantVisitId: string;
  restaurantId: string;
  date: Date;
  restaurantVisitComments: string;
  restaurantVisitDate: Date;
  onSaveRestaurantVisit: (restaurantVisit: RestaurantVisit) => any;
}

export class EditRestaurantVisitComponent extends React.Component<any> {

  constructor(props: EditRestaurantVisitProps) {

    super(props);

    this.handleOnSaveRestaurantVisit = this.handleOnSaveRestaurantVisit.bind(this);
    this.handleOnCancelEditRestaurantVisit = this.handleOnCancelEditRestaurantVisit.bind(this);
  }

  handleOnCancelEditRestaurantVisit() {
    hashHistory.push('/editRestaurant');
  }

  handleOnSaveRestaurantVisit() {

    const restaurantVisit: RestaurantVisit = {
      restaurantVisitId: this.props.restaurantVisitId,
      restaurantId: this.props.restaurantId,
      visitDate: this.props.restaurantVisitDate,
      comments: this.props.restaurantVisitComments,
    }
    this.props.onSaveRestaurantVisit(restaurantVisit);
    hashHistory.push('/editRestaurant');
  }

  render() {
    return (
      <div>
        <RestaurantVisitForm
          onSave={this.handleOnSaveRestaurantVisit}
          onCancel={this.handleOnCancelEditRestaurantVisit}
        />
      </div>
    );
  }
}

function mapStateToProps(state: any) {
  const restaurantVisitId = getCurrentRestaurantVisitId(state);
  return {
    restaurantVisitId,
    restaurantId: getCurrentRestaurantId(state),
    restaurantVisitDate: getRestaurantVisitDate(state, restaurantVisitId),
    restaurantVisitComments: getRestaurantVisitComments(state, restaurantVisitId),
  };
}

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return bindActionCreators({
    onSaveRestaurantVisit: saveRestaurantVisit,
  }, dispatch);
};

export const EditRestaurantVisit = connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditRestaurantVisitComponent);


