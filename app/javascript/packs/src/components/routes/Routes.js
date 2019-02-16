import {
  Route,
  Redirect,
  Switch,
  BrowserRouter as Router
} from "react-router-dom";
import React from "react";
import QuotationCharts from "../../containers/QuotationCharts";

const RouterBase = ({ component: Component, path, secure, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        return <Component {...rest} {...props} />;
      }}
    />
  );
};

/*
  const Router = connect(mapStateToProps)(RouterBase);
  */

export default () => (
  <Router>
    <Switch>
      <Route path="/" exact component={QuotationCharts} />
    </Switch>
  </Router>
);
