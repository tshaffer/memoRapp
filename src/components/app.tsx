import * as React from 'react';
import { connect } from 'react-redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends React.Component<any, object> {

  render() {
    return (
      <MuiThemeProvider>
        <div>
          Eat more pizza!
        </div>
      </MuiThemeProvider>
    );
  }
}

function mapStateToProps(state : any) {
  return {
  };
}

export default connect(mapStateToProps)(App);
