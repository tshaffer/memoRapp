import * as React from 'react';
import { connect } from 'react-redux';

import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';

interface RestaurantVisitProps {
  restaurantId: string;
  restaurantVisitId: string;
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

  render() {
    return (
      <div>
        Enter information about this restaurant visit to {this.props.restaurantId}
        <br />
        <br />
        {this.renderVisitDate()}
        <br/>
        {this.renderVisitComments()}
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


