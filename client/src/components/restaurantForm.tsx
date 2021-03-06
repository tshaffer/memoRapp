import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Slider from 'material-ui/Slider';
import Checkbox from 'material-ui/Checkbox';

import {
  setRestaurantVisitId,
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
  getCurrentRestaurantId,
  getCurrentRestaurantVisitId,
  getRestaurantName,
  getRestaurantCategory,
  getRestaurantOverallRating,
  getRestaurantFoodRating,
  getRestaurantServiceRating,
  getRestaurantAmbienceRating,
  getRestaurantOutdoorSeating,
  getRestaurantComments,
  getRestaurantWouldVisitAgain,
  getRestaurantVisitsByRestaurant,
} from '../selector';
import { RestaurantCategory, RestaurantsState, RestaurantVisitsMap, RestaurantVisit, Restaurant } from '../type';
import { isString } from 'lodash';

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
  restaurantVisitId: string;
  // restaurantVisits: RestaurantVisitsMap;
  restaurantVisits: RestaurantVisit[];
  displayAddEditVisitFormPrompts: boolean;
  onRestaurantNameChange: (name: string) => void;
  onRestaurantCategoryChange: (category: RestaurantCategory) => void;
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
    restaurantCategory: number,
    overallRestaurantRating: number,
    restaurantFoodRating: number,
    restaurantServiceRating: number,
    restaurantAmbienceRating: number,
    restaurantOutdoorSeating: boolean,
    restaurantComments: string,
    restaurantWouldVisitAgain: boolean,
  ) => void;
  onCancel: () => void;
  onAddNewVisit: () => void;
  onEditVisit: () => void;
  setRestaurantVisitId: (id: string) => any;
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
    this.handleRestaurantVisitChange = this.handleRestaurantVisitChange.bind(this);
    this.handleEditVisit = this.handleEditVisit.bind(this);

    this.handleSave = this.handleSave.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleRestaurantNameChange(event: any) {
    this.props.onRestaurantNameChange(event.target.value);
  }

  handleRestaurantCategoryChange(event: any, index: any, restaurantCategory: RestaurantCategory) {
    this.props.onRestaurantCategoryChange(restaurantCategory);
  }

  getRestaurantName() {
    return this.props.restaurantName;
  }

  getRestaurantVisits(): any {

    const restaurantVisitDescriptions: RestaurantVisit[] = [];
    const restaurantVisitIds: string[] = [];

    for (const restaurantVisit of this.props.restaurantVisits) {
      restaurantVisitDescriptions.push(restaurantVisit);
      restaurantVisitIds.push(restaurantVisit.restaurantVisitId);
    }

    const restaurantVisits =
      restaurantVisitDescriptions.map((restaurantVisitDescription: RestaurantVisit, index: number) => {

        let dateString: string = '';
        if (isString(restaurantVisitDescription.visitDate)) {
          const date = new Date(restaurantVisitDescription.visitDate);
          dateString = date.toDateString();
        }
        else {
          dateString = restaurantVisitDescription.visitDate.toDateString();
        }

        return (
          <MenuItem
            key={index}
            value={restaurantVisitIds[index]}
            primaryText={dateString}
          />
        );
      });

    return restaurantVisits;
  }

  handleNewVisit() {
    this.props.onAddNewVisit();
  }

  handleRestaurantVisitChange(event: any, index: any, restaurantVisitId: string) {
    this.props.setRestaurantVisitId(restaurantVisitId);
  }

  handleEditVisit() {
    console.log('handleEditVisit invoked');
    this.props.onEditVisit();
  }

  handleRestaurantRatingChange(event: any, restaurantRating: any) {
    this.props.onRestaurantRatingChange(restaurantRating);
  }

  handleRestaurantFoodRatingChange(event: any, restaurantFoodRating: any) {
    this.props.onRestaurantFoodRatingChange(restaurantFoodRating);
  }

  handleRestaurantServiceRatingChange(event: any, restaurantServiceRating: any) {
    this.props.onRestaurantServiceRatingChange(restaurantServiceRating);
  }

  handleRestaurantAmbienceRatingChange(event: any, restaurantAmbienceRating: any) {
    this.props.onRestaurantAmbienceRatingChange(restaurantAmbienceRating);
  }

  handleRestaurantOutdoorSeatingChange() {
    this.props.onRestaurantOutdoorSeatingChange(!this.props.restaurantOutdoorSeating);
  }

  handleRestaurantCommentsChange(event: any) {
    this.props.onRestaurantCommentsChange(event.target.value);
  }

  handleRestaurantWouldVisitAgainChange() {
    this.props.onRestaurantWouldVisitAgainChange(!this.props.restaurantWouldVisitAgain);
  }

  handleSave() {

    this.props.onSave(
      this.props.restaurantId,
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

  renderRestaurantVisits() {
    return (
      <SelectField
        floatingLabelText='Visit Date'
        value={this.props.restaurantVisitId}
        onChange={this.handleRestaurantVisitChange}
        style={{
          verticalAlign: 'top',
          marginLeft: '32px'
        }}
      >
        {this.getRestaurantVisits()}
      </SelectField>
    );
  }

  renderRestaurantAddEditVisitForm() {
    if (!this.props.displayAddEditVisitFormPrompts) {
      return null;
    }
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
        {this.renderRestaurantVisits()}
        <RaisedButton
          label='Edit Visit'
          onClick={this.handleEditVisit}
          style={{
            verticalAlign: 'top',
            marginTop: '18px'
          }}
        />
      </div>
    );
  }

  renderRestaurantCategory() {

    const restaurantCategories: string[] =
      Object.keys(RestaurantCategory).map((key) => (RestaurantCategory as any)[key]);

    return (
      <div>
        <SelectField
          floatingLabelText='Restaurant Category'
          value={this.props.restaurantCategory}
          onChange={this.handleRestaurantCategoryChange}
        >
          {restaurantCategories.map((categoryName, index) => {
            return (
              <MenuItem key={index} value={categoryName} primaryText={categoryName} />
            );
          })}
        </SelectField>
      </div>
    );
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

  renderRestaurantComments() {
    return (
      <div>
        Comments:
        <br />
        <TextField
          id='restaurantComments'
          hintText='Enter comments here....'
          multiLine={true}
          rows={1}
          rowsMax={4}
          value={this.props.restaurantComments}
          onChange={this.handleRestaurantCommentsChange}
        /><br />
      </div>
    );
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
      <MuiThemeProvider>
        <div>
          {this.renderRestaurantName()}
          {this.renderRestaurantAddEditVisitForm()}
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
  const restaurantId: string = getCurrentRestaurantId(state);
  return {
    onSave: ownProps.onSave,
    onCancel: ownProps.onCancel,
    onAddNewVisit: ownProps.onAddNewVisit,
    onEditVisit: ownProps.onEditVisit,
    restaurantId,
    restaurantVisitId: getCurrentRestaurantVisitId(state),
    restaurantName: getRestaurantName(state),
    restaurantCategory: getRestaurantCategory(state),
    restaurantOverallRating: getRestaurantOverallRating(state),
    restaurantFoodRating: getRestaurantFoodRating(state),
    restaurantServiceRating: getRestaurantServiceRating(state),
    restaurantAmbienceRating: getRestaurantAmbienceRating(state),
    restaurantOutdoorSeating: getRestaurantOutdoorSeating(state),
    restaurantComments: getRestaurantComments(state),
    restaurantWouldVisitAgain: getRestaurantWouldVisitAgain(state),
    restaurantVisits: getRestaurantVisitsByRestaurant(state, restaurantId),
    displayAddEditVisitFormPrompts: ownProps.displayAddEditVisitFormPrompts,
  };
}

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return bindActionCreators({
    setRestaurantVisitId,
    onRestaurantNameChange: updateName,
    onRestaurantCategoryChange: updateCategory,
    onRestaurantRatingChange: updateRating,
    onRestaurantFoodRatingChange: updateFoodRating,
    onRestaurantServiceRatingChange: updateServiceRating,
    onRestaurantAmbienceRatingChange: updateAmbienceRating,
    onRestaurantOutdoorSeatingChange: updateOutdoorSeating,
    onRestaurantCommentsChange: updateComments,
    onRestaurantWouldVisitAgainChange: updateWouldVisitAgain,
  }, dispatch);
};


export const RestaurantForm = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RestaurantFormComponent);
