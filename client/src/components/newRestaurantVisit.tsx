import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';

import {
  addDefaultRestaurantVisitData,
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

export interface NewRestaurantVisitProps {
  restaurantVisitId: string;
  restaurantId: string;
  date: Date;
  restaurantVisitComments: string;
  restaurantVisitDate: Date;
  onSaveRestaurantVisit: (restaurantVisit: RestaurantVisit) => any;
  onAddDefaultRestaurantVisit: (restaurantId: string) => any;
}

export class NewRestaurantVisitComponent extends React.Component<any> {

  constructor(props: NewRestaurantVisitProps) {

    super(props);

    this.handleOnSaveRestaurantVisit = this.handleOnSaveRestaurantVisit.bind(this);
    this.handleOnCancelNewRestaurantVisit = this.handleOnCancelNewRestaurantVisit.bind(this);
  }

  componentDidMount() {
    this.props.onAddDefaultRestaurantVisit(this.props.restaurantId);
  }

  handleOnCancelNewRestaurantVisit() {
    hashHistory.push('/restaurants');
  }

  handleOnSaveRestaurantVisit() {

    const restaurantVisit: RestaurantVisit = {
      restaurantVisitId: this.props.restaurantVisitId,
      restaurantId: this.props.restaurantId,
      visitDate: this.props.restaurantVisitDate,
      comments: this.props.restaurantVisitComments,
    }
    this.props.onSaveRestaurantVisit(restaurantVisit);
    hashHistory.push('/restaurants');
  }

  render() {
    return (
      <div>
        <RestaurantVisitForm
          onSave={this.handleOnSaveRestaurantVisit}
          onCancel={this.handleOnCancelNewRestaurantVisit}
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
    onAddDefaultRestaurantVisit: addDefaultRestaurantVisitData,
    onSaveRestaurantVisit: saveRestaurantVisit,
  }, dispatch);
};

export const NewRestaurantVisit = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewRestaurantVisitComponent);


