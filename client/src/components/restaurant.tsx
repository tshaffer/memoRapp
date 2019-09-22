import * as React from 'react';
import { connect } from 'react-redux';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Slider from 'material-ui/Slider';
import Checkbox from 'material-ui/Checkbox';

import {
  addNewRestaurant, updateName
} from '../controller';
import { RestaurantDescription, RestaurantDataState } from '../type';
import { isFunction } from 'lodash';
import { bindActionCreators } from 'redux';
import { getRestaurantById } from '../selector';

export interface RestaurantEditProps {
  id: string;
  restaurant: RestaurantDataState;
  onAddNewRestaurant: (restaurant: RestaurantDescription) => any;
  onUpdateName: (restaurantId: string, name: string) => any;
  onDismissEditRestaurantForm: () => void;
  onSaveRestaurantEdits: () => void;
}

interface RestaurantComponentState {
  restaurantName: string;
  newRestaurantCategory: number;
  overallRestaurantRating: number;
  restaurantFoodRating: number;
  restaurantServiceRating: number;
  restaurantAmbienceRating: number;
  restaurantOutdoorSeating: boolean;
  restaurantComments: string;
  restaurantWouldVisitAgain: boolean;
}

export class RestaurantComponent extends React.Component<RestaurantEditProps, RestaurantComponentState> {

  state: RestaurantComponentState = {
    restaurantName: '',
    newRestaurantCategory: 1,
    overallRestaurantRating: 5,
    restaurantFoodRating: 5,
    restaurantServiceRating: 5,
    restaurantAmbienceRating: 5,
    restaurantOutdoorSeating: false,
    restaurantComments: '',
    restaurantWouldVisitAgain: false,
  };
  initialState: RestaurantComponentState;

  constructor(props: RestaurantEditProps) {
    super(props);

    this.initialState = Object.assign({}, this.state);

    this.handleRestaurantNameChange = this.handleRestaurantNameChange.bind(this);
    this.handleRestaurantCategoryChange = this.handleRestaurantCategoryChange.bind(this);
    this.handleRestaurantRatingChange = this.handleRestaurantRatingChange.bind(this);
    this.handleRestaurantFoodRatingChange = this.handleRestaurantFoodRatingChange.bind(this);
    this.handleSaveRestaurant = this.handleSaveRestaurant.bind(this);
    this.handleCancelRestaurant = this.handleCancelRestaurant.bind(this);

    this.handleRestaurantNameChange = this.handleRestaurantNameChange.bind(this);
    this.handleRestaurantServiceRatingChange = this.handleRestaurantServiceRatingChange.bind(this);
    this.handleRestaurantAmbienceRatingChange = this.handleRestaurantAmbienceRatingChange.bind(this);
    this.handleRestaurantOutdoorSeatingChange = this.handleRestaurantOutdoorSeatingChange.bind(this);
    this.handleRestaurantCommentsChange = this.handleRestaurantCommentsChange.bind(this);
    this.handleRestaurantWouldVisitAgainChange = this.handleRestaurantWouldVisitAgainChange.bind(this);
  }

  componentDidMount() {
    this.resetState();
  }

  componentDidUpdate(prevProps: RestaurantEditProps, prevState: any) {
    if (this.props.id !== prevProps.id) {
      this.resetState();
    }
  }

  resetState() {
    if (this.props.id !== '-1') {
      const restaurant: RestaurantDescription = this.props.restaurant.restaurant as RestaurantDescription;
      this.setState(
        {
          restaurantName: restaurant.name,
          newRestaurantCategory: restaurant.category,
          overallRestaurantRating: restaurant.overallRating,
          restaurantFoodRating: restaurant.foodRating,
          restaurantServiceRating: restaurant.serviceRating,
          restaurantAmbienceRating: restaurant.ambienceRating,
          restaurantOutdoorSeating: restaurant.outdoorSeating,
          restaurantComments: restaurant.comments,
          restaurantWouldVisitAgain: restaurant.wouldVisitAgain,
        }
      );
    }
    else {
      this.setState(this.initialState);
    }
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

  handleSaveRestaurant() {

    if (isFunction(this.props.onAddNewRestaurant)) {
      this.props.onAddNewRestaurant({
        name: this.state.restaurantName,
        category: this.state.newRestaurantCategory,
        overallRating: this.state.overallRestaurantRating,
        foodRating: this.state.restaurantFoodRating,
        serviceRating: this.state.restaurantServiceRating,
        ambienceRating: this.state.restaurantAmbienceRating,
        outdoorSeating: this.state.restaurantOutdoorSeating,
        comments: this.state.restaurantComments,
        wouldVisitAgain: this.state.restaurantWouldVisitAgain,
      });
    }

    if (isFunction(this.props.onSaveRestaurantEdits)) {
      this.props.onSaveRestaurantEdits();
    }
  }

  handleCancelRestaurant() {
    if (isFunction(this.props.onDismissEditRestaurantForm)) {
      this.props.onDismissEditRestaurantForm();
    }
  }

  renderEditingCompleteButtons() {
    return (
      <div>
        <RaisedButton
          label='Submit'
          onClick={this.handleSaveRestaurant}
        />
        <RaisedButton
          label='Cancel'
          onClick={this.handleCancelRestaurant}
        />
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderRestaurantName()}
        {this.renderRestaurantCategory()}
        {this.renderRestaurantRatings()}
        {this.renderRestaurantComments()}
        {this.renderWouldVisitAgain()}
        {this.renderEditingCompleteButtons()}
      </div>
    );
  }
}

function mapStateToProps(state: any, ownProps?: any) {
  const { id } = ownProps;
  return {
    restaurant: getRestaurantById(state, id)
  };
}

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
    onAddNewRestaurant: addNewRestaurant,
    onUpdateName: updateName,
  }, dispatch);
};

export const Restaurant = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RestaurantComponent);
