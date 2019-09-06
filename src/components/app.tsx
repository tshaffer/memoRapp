import * as React from 'react';
import { connect } from 'react-redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class App extends React.Component<any, object> {

  state = {
    mrCategory: 1,
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
          <MenuItem value={1} primaryText='Food / Beverages' />
          <MenuItem value={2} primaryText='Mtb Trails' />
        </SelectField>
      </div>
    );
  }

  render() {
    return (
      <MuiThemeProvider>
        {this.renderMRCategory()}
      </MuiThemeProvider>
    );
  }
}

function mapStateToProps(state: any) {
  return {
  };
}

export default connect(mapStateToProps)(App);
