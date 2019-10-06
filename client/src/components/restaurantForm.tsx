import * as React from 'react';
import { connect } from 'react-redux';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Slider from 'material-ui/Slider';
import Checkbox from 'material-ui/Checkbox';
import uuid = require('uuid');
import { bindActionCreators } from 'redux';

export interface RestaurantFormProps {
  restaurantId: string;
  restaurantName: string;
  newRestaurantCategory: number;
  overallRestaurantRating: number;
  restaurantFoodRating: number;
  restaurantServiceRating: number;
  restaurantAmbienceRating: number;
  restaurantOutdoorSeating: boolean;
  restaurantComments: string;
  restaurantWouldVisitAgain: boolean;
  onSave: (
    restaurantId: string,
    restaurantName: string,
    newRestaurantCategory: number,
    overallRestaurantRating: number,
    restaurantFoodRating: number,
    restaurantServiceRating: number,
    restaurantAmbienceRating: number,
    restaurantOutdoorSeating: boolean,
    restaurantComments: string,
    restaurantWouldVisitAgain: boolean,
  ) => void;
  onCancel: () => void;
  // onSaveVisit: () => void;
  // onCancelVisit: () => void;
}

interface RestaurantFormComponentState {
  restaurantId: string;
  restaurantName: string;
  newRestaurantCategory: number;
  overallRestaurantRating: number;
  restaurantFoodRating: number;
  restaurantServiceRating: number;
  restaurantAmbienceRating: number;
  restaurantOutdoorSeating: boolean;
  restaurantComments: string;
  restaurantWouldVisitAgain: boolean;
  currentVisitId: string;
}

export class RestaurantFormComponent extends React.Component<RestaurantFormProps, RestaurantFormComponentState> {
  state: RestaurantFormComponentState = {
    restaurantId: '',
    restaurantName: '',
    newRestaurantCategory: 1,
    overallRestaurantRating: 5,
    restaurantFoodRating: 5,
    restaurantServiceRating: 5,
    restaurantAmbienceRating: 5,
    restaurantOutdoorSeating: false,
    restaurantComments: '',
    restaurantWouldVisitAgain: false,
    currentVisitId: '',
  };

  constructor(props: RestaurantFormProps) {
    super(props);

    this.handleRestaurantNameChange = this.handleRestaurantNameChange.bind(this);
    this.handleRestaurantServiceRatingChange = this.handleRestaurantServiceRatingChange.bind(this);
    this.handleRestaurantAmbienceRatingChange = this.handleRestaurantAmbienceRatingChange.bind(this);
    this.handleRestaurantOutdoorSeatingChange = this.handleRestaurantOutdoorSeatingChange.bind(this);
    this.handleRestaurantCommentsChange = this.handleRestaurantCommentsChange.bind(this);
    this.handleRestaurantWouldVisitAgainChange = this.handleRestaurantWouldVisitAgainChange.bind(this);
    this.handleRestaurantCategoryChange = this.handleRestaurantCategoryChange.bind(this);
    this.handleRestaurantRatingChange = this.handleRestaurantRatingChange.bind(this);
    this.handleRestaurantFoodRatingChange = this.handleRestaurantFoodRatingChange.bind(this);

    this.handleNewVisit = this.handleNewVisit.bind(this);
    this.handleEditVisit = this.handleEditVisit.bind(this);

    this.handleSave = this.handleSave.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  componentDidMount() {
    this.setState(
      {
        restaurantId: this.props.restaurantId,
        restaurantName: this.props.restaurantName,
        newRestaurantCategory: this.props.newRestaurantCategory,
        overallRestaurantRating: this.props.overallRestaurantRating,
        restaurantFoodRating: this.props.restaurantFoodRating,
        restaurantServiceRating: this.props.restaurantServiceRating,
        restaurantAmbienceRating: this.props.restaurantAmbienceRating,
        restaurantOutdoorSeating: this.props.restaurantOutdoorSeating,
        restaurantComments: this.props.restaurantComments,
        restaurantWouldVisitAgain: this.props.restaurantWouldVisitAgain,
      }
    );
  }

  handleRestaurantNameChange(event: any) {
    this.setState(
      {
        restaurantName: event.target.value,
      }
    );
  }

  renderRestaurantName() {
    return (
      <div>
        <TextField
          id='newRestaurantName'
          hintText='Name'
          value={this.state.restaurantName}
          onChange={this.handleRestaurantNameChange}
        /> <br />
      </div>
    );
  }

  handleNewVisit() {
    console.log('handleNewVisit invoked');
  }

  handleEditVisit() {
    console.log('handleVisitChange invoked');
  }

  getVisits(): any[] {
    return [];
  }

  renderRestaurantAddEditVisitForm() {
    return (
      <div>
        <h4>Add a visit or view an existing visit</h4>
        <RaisedButton
          label='New Visit'
          onClick={this.handleNewVisit}
          style={{
            verticalAlign: 'top',
            marginTop: '18px'
          }}
        />
        <SelectField
          floatingLabelText='Visits'
          value={this.state.currentVisitId}
          onChange={this.handleEditVisit}
          style={{
            verticalAlign: 'top',
            marginLeft: '32px'
          }}
        >
          {this.getVisits()}
        </SelectField>
      </div>
    );
}

  handleRestaurantCategoryChange(event: any, index: any, newRestaurantCategory: any) {
    this.setState(
      {
        newRestaurantCategory,
      }
    );
  }

  renderRestaurantCategory() {
    return (
      <div>
        <SelectField
          floatingLabelText='Restaurant Category'
          value={this.state.newRestaurantCategory}
          onChange={this.handleRestaurantCategoryChange}
        >
          <MenuItem key={1} value={1} primaryText='Pizza' />
          <MenuItem key={2} value={2} primaryText='Burritos' />
          <MenuItem key={3} value={3} primaryText='Burgers' />
        </SelectField>
      </div>
    );
  }

  handleRestaurantRatingChange(event: any, restaurantRating: any) {
    console.log('restaurantRating: ' + restaurantRating);
    this.setState(
      {
        overallRestaurantRating: restaurantRating,
      }
    );
  }

  renderOverallRestaurantRating() {
    return (
      <div>
        <p>
          <span>{'Overall rating: '}</span>
          <span>{this.state.overallRestaurantRating}</span>
          <span>{' on a scale of 0 to 10'}</span>
        </p>
        <Slider
          min={0}
          max={10}
          step={0.1}
          value={this.state.overallRestaurantRating}
          onChange={this.handleRestaurantRatingChange}>
        </Slider>
      </div>
    );
  }

  handleRestaurantFoodRatingChange(event: any, restaurantFoodRating: any) {
    console.log('restaurantFoodRating: ' + restaurantFoodRating);
    this.setState(
      {
        restaurantFoodRating,
      }
    );
  }

  renderFoodRating() {
    return (
      <div>
        <p>
          <span>{'Food rating: '}</span>
          <span>{this.state.restaurantFoodRating}</span>
          <span>{' on a scale of 0 to 10'}</span>
        </p>
        <Slider
          min={0}
          max={10}
          step={0.1}
          value={this.state.restaurantFoodRating}
          onChange={this.handleRestaurantFoodRatingChange}>
        </Slider>
      </div>
    );
  }

  handleRestaurantServiceRatingChange(event: any, restaurantServiceRating: any) {
    console.log('restaurantRating: ' + restaurantServiceRating);
    this.setState(
      {
        restaurantServiceRating,
      }
    );
  }

  renderServiceRating() {
    return (
      <div>
        <p>
          <span>{'Service rating: '}</span>
          <span>{this.state.restaurantServiceRating}</span>
          <span>{' on a scale of 0 to 10'}</span>
        </p>
        <Slider
          min={0}
          max={10}
          step={0.1}
          value={this.state.restaurantServiceRating}
          onChange={this.handleRestaurantServiceRatingChange}>
        </Slider>
      </div>
    );
  }

  handleRestaurantAmbienceRatingChange(event: any, restaurantAmbienceRating: any) {
    console.log('restaurantAmbienceRating: ' + restaurantAmbienceRating);
    this.setState(
      {
        restaurantAmbienceRating,
      }
    );
  }

  renderAmbienceRating() {
    return (
      <div>
        <p>
          <span>{'Ambience rating: '}</span>
          <span>{this.state.restaurantAmbienceRating}</span>
          <span>{' on a scale of 0 to 10'}</span>
        </p>
        <Slider
          min={0}
          max={10}
          step={0.1}
          value={this.state.restaurantAmbienceRating}
          onChange={this.handleRestaurantAmbienceRatingChange}>
        </Slider>
      </div>
    );
  }

  handleRestaurantOutdoorSeatingChange() {
    console.log('restaurantOutdoorSeatingRating');
    this.setState(
      {
        restaurantOutdoorSeating: !this.state.restaurantOutdoorSeating,
      }
    );
  }

  renderOutdoorSeating() {
    return (
      <div>
        <Checkbox
          label='Outdoor seating?'
          checked={this.state.restaurantOutdoorSeating}
          onCheck={this.handleRestaurantOutdoorSeatingChange.bind(this)}
        />
      </div>
    );
  }

  renderRestaurantRatings() {
    return (
      <div>
        Restaurant Ratings:
        {this.renderOverallRestaurantRating()}
        {this.renderFoodRating()}
        {this.renderServiceRating()}
        {this.renderAmbienceRating()}
        {this.renderOutdoorSeating()}
      </div>
    );
  }

  handleRestaurantCommentsChange(event: any) {
    this.setState(
      {
        restaurantComments: event.target.value
      }
    );
  }

  renderRestaurantComments() {
    return (
      <div>
        Comments:
        <br />
        <TextField
          id='restaurantComments'
          hintText='Enter comments here....'
          multiLine={true}
          rows={4}
          rowsMax={4}
          value={this.state.restaurantComments}
          onChange={this.handleRestaurantCommentsChange}
        /><br />
      </div>
    );
  }

  handleRestaurantWouldVisitAgainChange() {
    console.log('restaurantWouldVisitAgainRating');
    this.setState(
      {
        restaurantWouldVisitAgain: !this.state.restaurantWouldVisitAgain,
      }
    );
  }

  renderWouldVisitAgain() {
    return (
      <div>
        <Checkbox
          label='Would visit again?'
          checked={this.state.restaurantWouldVisitAgain}
          onCheck={this.handleRestaurantWouldVisitAgainChange.bind(this)}
        />
      </div>
    );
  }

  handleSave() {

    let restaurantId = this.state.restaurantId;
    if (restaurantId === '') {
      restaurantId = uuid();
    }
    this.props.onSave(
      restaurantId,
      this.state.restaurantName,
      this.state.newRestaurantCategory,
      this.state.overallRestaurantRating,
      this.state.restaurantFoodRating,
      this.state.restaurantServiceRating,
      this.state.restaurantAmbienceRating,
      this.state.restaurantOutdoorSeating,
      this.state.restaurantComments,
      this.state.restaurantWouldVisitAgain,
    );
  }

  handleCancel() {
    this.props.onCancel();
  }

  renderEditingCompleteButtons() {
    return (
      <div>
        <RaisedButton
          label='Submit'
          onClick={this.handleSave}
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
        {this.renderRestaurantName()}
        {this.renderRestaurantAddEditVisitForm()}
        {this.renderRestaurantCategory()}
        {this.renderRestaurantRatings()}
        {this.renderRestaurantComments()}
        {this.renderWouldVisitAgain()}
        {this.renderEditingCompleteButtons()}
      </div>
    );
  }
}

function mapStateToProps(state: any, ownProps: RestaurantFormProps) {
  return {
    restaurantId: ownProps.restaurantId,
    restaurantName: ownProps.restaurantName,
    newRestaurantCategory: ownProps.newRestaurantCategory,
    overallRestaurantRating: ownProps.overallRestaurantRating,
    restaurantFoodRating: ownProps.restaurantFoodRating,
    restaurantServiceRating: ownProps.restaurantServiceRating,
    restaurantAmbienceRating: ownProps.restaurantAmbienceRating,
    restaurantOutdoorSeating: ownProps.restaurantOutdoorSeating,
    restaurantComments: ownProps.restaurantComments,
    restaurantWouldVisitAgain: ownProps.restaurantWouldVisitAgain,
  };
}

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return bindActionCreators({
    // onCancel: ownProps.;
    // onNewVisit: () => void;
    // onEditVisit: () => void;
  }, dispatch);
};


export const RestaurantForm = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RestaurantFormComponent);
