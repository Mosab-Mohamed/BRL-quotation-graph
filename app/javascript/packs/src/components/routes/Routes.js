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
      <Route
        path="/"
        exact
        render={props => (
          <QuotationCharts {...props} fromCurrency="BRL" toCurrency="USD" />
        )}
      />
      <Route
        path="/brl-to-eur"
        exact
        render={props => (
          <QuotationCharts {...props} fromCurrency="BRL" toCurrency="EUR" />
        )}
      />
      <Route
        path="/brl-to-aud"
        exact
        render={props => (
          <QuotationCharts {...props} fromCurrency="BRL" toCurrency="AUD" />
        )}
      />
    </Switch>
  </Router>
);
