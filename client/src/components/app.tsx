import * as React from 'react';
import { connect } from 'react-redux';

import { Restaurants } from './restaurants';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import { loadRestaurants, loadRestaurantVisits } from '../controller';
import { bindActionCreators } from 'redux';

export interface AppProps {
  loadRestaurants: () => void;
  loadRestaurantVisits: () => void;
}

class App extends React.Component<AppProps> {

  state: any = {
    mrCategory: 1,
  };

  style = {
    margin: 12,
  };

  constructor(props: any) {
    super(props);

    this.handleMRCategoryChange = this.handleMRCategoryChange.bind(this);
  }

  componentDidMount() {
    this.props.loadRestaurants();
    this.props.loadRestaurantVisits();
  }

  handleMRCategoryChange(event: any, index: any, mrCategory: any) {
    this.setState(
      {
        mrCategory,
      }
    );
  }

  renderMRCategory() {
    return (
      <div>
        <SelectField
          floatingLabelText='Memo Rapp Category'
          value={this.state.mrCategory}
          onChange={this.handleMRCategoryChange}
        >
          <MenuItem key={1} value={1} primaryText='Food / Beverages' />
          <MenuItem key={2} value={2} primaryText='Mtb Trails' />
        </SelectField>
      </div>
    );
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <h2>MemoRapp</h2>
          {this.renderMRCategory()}
          <Restaurants/>
        </div>
      </MuiThemeProvider>
    );
  }
}

function mapStateToProps(state: any) {
  return {
  };
}

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
    loadRestaurants,
    loadRestaurantVisits,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
