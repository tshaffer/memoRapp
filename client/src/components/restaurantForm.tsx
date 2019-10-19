import * as React from 'react';
import { connect } from 'react-redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Slider from 'material-ui/Slider';
import Checkbox from 'material-ui/Checkbox';
import uuid = require('uuid');
import { bindActionCreators } from 'redux';
import { getCurrentRestaurantId, getRestaurantCategory } from '../selector';

import {
  updateName,
  updateCategory,
  updateRating,
  updateFoodRating,
  updateServiceRating,
  updateAmbienceRating,
  updateOutdoorSeating,
  updateComments,
  updateWouldVisitAgain,
} from '../controller';

import {
  getRestaurantName,
  getRestaurantOverallRating,
  getRestaurantFoodRating,
  getRestaurantServiceRating,
  getRestaurantAmbienceRating,
  getRestaurantOutdoorSeating,
  getRestaurantComments,
  getRestaurantWouldVisitAgain,
} from '../selector';

export interface RestaurantFormProps {
  restaurantId: string;
  restaurantName: string;
  restaurantCategory: number;
  restaurantOverallRating: number;
  restaurantFoodRating: number;
  restaurantServiceRating: number;
  restaurantAmbienceRating: number;
  restaurantOutdoorSeating: boolean;
  restaurantComments: string;
  restaurantWouldVisitAgain: boolean;
  onRestaurantNameChange: (name: string) => void;
  onRestaurantCategoryChange: (category: string) => void;
  onRestaurantRatingChange: (rating: number) => void;
  onRestaurantFoodRatingChange: (rating: number) => void;
  onRestaurantServiceRatingChange: (rating: number) => void;
  onRestaurantAmbienceRatingChange: (rating: number) => void;
  onRestaurantOutdoorSeatingChange: (outdoorSeating: boolean) => void;
  onRestaurantCommentsChange: (comments: string) => void;
  onRestaurantWouldVisitAgainChange: (wouldVisitAgain: boolean) => void;
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

export class RestaurantFormComponent extends React.Component<RestaurantFormProps> {

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

  handleRestaurantNameChange(event: any) {
    this.props.onRestaurantNameChange(event.target.value);
  }

  getRestaurantName() {
    return this.props.restaurantName;
  }

  renderRestaurantName() {
    this.getRestaurantName();
    return (
      <div>
        <TextField
          id='restaurantName'
          hintText='Name'
          value={this.getRestaurantName()}
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

  // renderRestaurantAddEditVisitForm() {
  //   return (
  //     <div>
  //       <h4>Add a visit or view an existing visit</h4>
  //       <RaisedButton
  //         label='New Visit'
  //         onClick={this.handleNewVisit}
  //         style={{
  //           verticalAlign: 'top',
  //           marginTop: '18px'
  //         }}
  //       />
  //       <SelectField
  //         floatingLabelText='Visits'
  //         value={this.props.currentRestaurantVisitId}
  //         onChange={this.handleEditVisit}
  //         style={{
  //           verticalAlign: 'top',
  //           marginLeft: '32px'
  //         }}
  //       >
  //         {this.getVisits()}
  //       </SelectField>
  //     </div>
  //   );
  // }

  handleRestaurantCategoryChange(event: any, index: any, newRestaurantCategory: any) {
    this.props.onRestaurantCategoryChange(newRestaurantCategory);
  }

  renderRestaurantCategory() {
    return (
      <div>
        <SelectField
          floatingLabelText='Restaurant Category'
          value={this.props.restaurantCategory}
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
    this.props.onRestaurantRatingChange(restaurantRating);
  }

  renderOverallRestaurantRating() {
    return (
      <div>
        <p>
          <span>{'Overall rating: '}</span>
          <span>{this.props.restaurantOverallRating}</span>
          <span>{' on a scale of 0 to 10'}</span>
        </p>
        <Slider
          min={0}
          max={10}
          step={0.1}
          value={this.props.restaurantOverallRating}
          onChange={this.handleRestaurantRatingChange}>
        </Slider>
      </div>
    );
  }

  handleRestaurantFoodRatingChange(event: any, restaurantFoodRating: any) {
    console.log('restaurantFoodRating: ' + restaurantFoodRating);
    this.props.onRestaurantFoodRatingChange(restaurantFoodRating);
  }

  renderFoodRating() {
    return (
      <div>
        <p>
          <span>{'Food rating: '}</span>
          <span>{this.props.restaurantFoodRating}</span>
          <span>{' on a scale of 0 to 10'}</span>
        </p>
        <Slider
          min={0}
          max={10}
          step={0.1}
          value={this.props.restaurantFoodRating}
          onChange={this.handleRestaurantFoodRatingChange}>
        </Slider>
      </div>
    );
  }

  handleRestaurantServiceRatingChange(event: any, restaurantServiceRating: any) {
    console.log('restaurantRating: ' + restaurantServiceRating);
    this.props.onRestaurantServiceRatingChange(restaurantServiceRating);
  }

  renderServiceRating() {
    return (
      <div>
        <p>
          <span>{'Service rating: '}</span>
          <span>{this.props.restaurantServiceRating}</span>
          <span>{' on a scale of 0 to 10'}</span>
        </p>
        <Slider
          min={0}
          max={10}
          step={0.1}
          value={this.props.restaurantServiceRating}
          onChange={this.handleRestaurantServiceRatingChange}>
        </Slider>
      </div>
    );
  }

  handleRestaurantAmbienceRatingChange(event: any, restaurantAmbienceRating: any) {
    console.log('restaurantAmbienceRating: ' + restaurantAmbienceRating);
    this.props.onRestaurantAmbienceRatingChange(restaurantAmbienceRating);
  }

  renderAmbienceRating() {
    return (
      <div>
        <p>
          <span>{'Ambience rating: '}</span>
          <span>{this.props.restaurantAmbienceRating}</span>
          <span>{' on a scale of 0 to 10'}</span>
        </p>
        <Slider
          min={0}
          max={10}
          step={0.1}
          value={this.props.restaurantAmbienceRating}
          onChange={this.handleRestaurantAmbienceRatingChange}>
        </Slider>
      </div>
    );
  }

  handleRestaurantOutdoorSeatingChange() {
    console.log('restaurantOutdoorSeatingRating');
    this.props.onRestaurantOutdoorSeatingChange(!this.props.restaurantOutdoorSeating);
  }

  renderOutdoorSeating() {
    return (
      <div>
        <Checkbox
          label='Outdoor seating?'
          checked={this.props.restaurantOutdoorSeating}
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
    this.props.onRestaurantCommentsChange(event.target.value);
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
          value={this.props.restaurantComments}
          onChange={this.handleRestaurantCommentsChange}
        /><br />
      </div>
    );
  }

  handleRestaurantWouldVisitAgainChange() {
    console.log('restaurantWouldVisitAgainRating');
    this.props.onRestaurantWouldVisitAgainChange(!this.props.restaurantWouldVisitAgain);
  }

  renderWouldVisitAgain() {
    return (
      <div>
        <Checkbox
          label='Would visit again?'
          checked={this.props.restaurantWouldVisitAgain}
          onCheck={this.handleRestaurantWouldVisitAgainChange.bind(this)}
        />
      </div>
    );
  }

  handleSave() {

    let restaurantId = this.props.restaurantId;
    if (restaurantId === '') {
      restaurantId = uuid();
    }
    this.props.onSave(
      restaurantId,
      this.props.restaurantName,
      this.props.restaurantCategory,
      this.props.restaurantOverallRating,
      this.props.restaurantFoodRating,
      this.props.restaurantServiceRating,
      this.props.restaurantAmbienceRating,
      this.props.restaurantOutdoorSeating,
      this.props.restaurantComments,
      this.props.restaurantWouldVisitAgain,
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

  /*
        {this.renderRestaurantAddEditVisitForm()}
  */

  render() {
    return (
      <MuiThemeProvider>
        <div>
          {this.renderRestaurantName()}
          {this.renderRestaurantCategory()}
          {this.renderRestaurantRatings()}
          {this.renderRestaurantComments()}
          {this.renderWouldVisitAgain()}
          {this.renderEditingCompleteButtons()}
        </div>
      </MuiThemeProvider>
    );
  }
}

function mapStateToProps(state: any, ownProps: RestaurantFormProps) {
  return {
    onSave: ownProps.onSave,
    onCancel: ownProps.onCancel,
    restaurantId: getCurrentRestaurantId(state),
    restaurantName: getRestaurantName(state),
    newRestaurantCategory: getRestaurantCategory(state),
    restaurantOverallRating: getRestaurantOverallRating(state),
    restaurantFoodRating: getRestaurantFoodRating(state),
    restaurantServiceRating: getRestaurantServiceRating(state),
    restaurantAmbienceRating: getRestaurantAmbienceRating(state),
    restaurantOutdoorSeating: getRestaurantOutdoorSeating(state),
    restaurantComments: getRestaurantComments(state),
    restaurantWouldVisitAgain: getRestaurantWouldVisitAgain(state),
  };
}

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return bindActionCreators({
    onRestaurantNameChange: updateName,
    onRestaurantCategoryChange: updateCategory,
    onRestaurantRatingChange: updateRating,
    onRestaurantFoodRatingChange: updateFoodRating,
    onRestaurantServiceRatingChange: updateServiceRating,
    onRestaurantAmbienceRatingChange: updateAmbienceRating,
    onRestaurantOutdoorSeatingChange: updateOutdoorSeating,
    onRestaurantCommentsChange: updateComments,
    onRestaurantWouldVisitAgainChange: updateWouldVisitAgain,

  
    // onCancel: ownProps.;
    // onNewVisit: () => void;
    // onEditVisit: () => void;
  }, dispatch);
};


export const RestaurantForm = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RestaurantFormComponent);
