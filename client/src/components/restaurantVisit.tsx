import * as React from 'react';
import { connect } from 'react-redux';

import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

interface RestaurantVisitProps {
  restaurantId: string;
  restaurantVisitId: string;
  onSaveVisit: () => void;
  onCancel: () => void;
}

interface RestaurantVisitComponentState {
  visitDate: Date;
  comments: string;
}

class RestaurantVisitComponent extends React.Component<RestaurantVisitProps, RestaurantVisitComponentState> {

  state: RestaurantVisitComponentState = {
    visitDate: null,
    comments: '',
  };
  initialState: RestaurantVisitComponentState;

  constructor(props: RestaurantVisitProps) {
    super(props);
  }

  componentDidMount() {
    this.setState({
      visitDate: new Date(),
    });
  }

  handleSetVisitDate = (event: any, date: Date) => {
    this.setState({
      visitDate: date,
    });
  }

  renderVisitDate() {
    return (
      <div>
        Visit Date
        <DatePicker
          value={this.state.visitDate}
          onChange={this.handleSetVisitDate}
        />
      </div>
    );
  }

  renderVisitComments() {
    return (
      <div>
        Comments:
        <br/>
        <TextField
          multiLine={true}
          rows={4}
          rowsMax={4}
        />
      </div>
    );
  }

  handleSaveVisit() {
    this.props.onSaveVisit();
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
      <div>
        Enter information about this restaurant visit to {this.props.restaurantId}
        <br />
        <br />
        {this.renderVisitDate()}
        <br/>
        {this.renderVisitComments()}
        {this.renderEditingCompleteButtons()}
      </div>
    );
  }
}

function mapStateToProps(state: any, ownProps: RestaurantVisitProps) {
  return {
    restaurantId: ownProps.restaurantId,
    restaurantVisitId: ownProps.restaurantVisitId,
  };
}

export const RestaurantVisit = connect(
  mapStateToProps,
)(RestaurantVisitComponent);


