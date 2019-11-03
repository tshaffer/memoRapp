import * as React from 'react';
import { connect } from 'react-redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { getCurrentRestaurantId, getCurrentRestaurantVisitId, getRestaurantVisitDate, getRestaurantVisitComments } from '../selector';
import { bindActionCreators } from 'redux';

import {
  updateRestaurantVisitComments,
  updateRestaurantVisitDate,
} from '../controller';

interface RestaurantVisitFormProps {
  restaurantId: string;
  restaurantVisitId: string;
  restaurantVisitDate: Date;
  restaurantVisitComments: string;
  onRestaurantVisitCommentsChange: (comments: string) => void;
  onRestaurantVisitDateChange: (date: Date) => void;
  onSave: () => void;
  onCancel: () => void;
}

export class RestaurantVisitFormComponent extends React.Component<RestaurantVisitFormProps> {

  constructor(props: RestaurantVisitFormProps) {
    super(props);

    this.handleRestaurantVisitCommentsChange = this.handleRestaurantVisitCommentsChange.bind(this);
    this.handleRestaurantVisitDateChange = this.handleRestaurantVisitDateChange.bind(this);

    this.handleSaveVisit = this.handleSaveVisit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleRestaurantVisitCommentsChange(event: any) {
    this.props.onRestaurantVisitCommentsChange(event.target.value);
  }

  handleRestaurantVisitDateChange = (event: any, date: Date) => {
    this.props.onRestaurantVisitDateChange(date);
  }

  renderVisitDate() {
    return (
      <div>
        Visit Date
        <DatePicker
          value={this.props.restaurantVisitDate}
          onChange={this.handleRestaurantVisitDateChange}
        />
      </div>
    );
  }

  renderVisitComments() {
    return (
      <div>
        Comments:
        <br />
        <TextField
          id='restaurantVisitComments'
          hintText='Enter comments here....'
          value={this.props.restaurantVisitComments}
          onChange={this.handleRestaurantVisitCommentsChange}
          multiLine={true}
          rows={1}
          rowsMax={4}
        />
      </div>
    );
  }

  handleSaveVisit() {
    this.props.onSave();
  }

  handleCancel() {
    this.props.onCancel();
  }

  renderEditingCompleteButtons() {
    return (
      <div>
        <RaisedButton
          label='Submit'
          onClick={this.handleSaveVisit}
        />
        <RaisedButton
          label='Cancel'
          onClick={this.handleCancel}
        />
      </div>
    );
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          Enter information about this restaurant visit to {this.props.restaurantId}
          <br />
          <br />
          {this.renderVisitDate()}
          <br />
          {this.renderVisitComments()}
          {this.renderEditingCompleteButtons()}
        </div>
      </MuiThemeProvider>
    );
  }
}

function mapStateToProps(state: any, ownProps: RestaurantVisitFormProps) {
  const restaurantVisitId = getCurrentRestaurantVisitId(state);
  return {
    onSave: ownProps.onSave,
    onCancel: ownProps.onCancel,
    restaurantId: getCurrentRestaurantId(state),
    restaurantVisitId,
    restaurantVisitDate: getRestaurantVisitDate(state, restaurantVisitId),
    restaurantVisitComments: getRestaurantVisitComments(state, restaurantVisitId),
  };
}

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return bindActionCreators({
    onRestaurantVisitCommentsChange: updateRestaurantVisitComments,
    onRestaurantVisitDateChange: updateRestaurantVisitDate,
  }, dispatch);
};

export const RestaurantVisitForm = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RestaurantVisitFormComponent);


