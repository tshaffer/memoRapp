import * as React from 'react';
import { connect } from 'react-redux';

import { Restaurants } from './restaurants';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class App extends React.Component<any, object> {

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
          <h3>MemoRapp</h3>
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

export default connect(mapStateToProps)(App);
