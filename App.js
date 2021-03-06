// @flow

import * as React from "react";
import { Router, Route, browserHistory } from "react-router";
import { createApp, renderApp } from "@phenomic/preset-react-app/lib/client";
import { withPhenomicApi } from "@phenomic/preset-react-app/lib/es6/src/phenomicPresetReactApp.bs.js";

import * as Home from "./lib/es6/src/components/Home.bs.js";
import * as Posts from "./lib/es6/src/components/Posts.bs.js";
import * as Post from "./lib/es6/src/components/Post.bs.js";
import * as About from "./lib/es6/src/components/About.bs.js";
import * as Awesome from "./lib/es6/src/components/Awesome.bs.js";
import * as Conference from "./lib/es6/src/components/Conference.bs.js";
import * as ConferenceDetails from "./lib/es6/src/components/ConferenceDetails.bs.js";

import * as ErrorPage from "./lib/es6/src/components/ErrorPage.bs.js";

import "normalize.css";
import "./global.css";

const routes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={Home.make} />
    <Route path="/about" component={About.make} />
    <Route path="/awesome" component={Awesome.make} />
    <Route path="/conference" component={Conference.make} />
    <Route
      path="conference/*"
      component={withPhenomicApi(
        ConferenceDetails.make,
        ConferenceDetails.queries
      )}
    />
    <Route
      path="/blog"
      component={withPhenomicApi(Posts.make, Posts.queries)}
    />
    <Route
      path="/blog/after/:after"
      component={withPhenomicApi(Posts.make, Posts.queries)}
    />
    <Route path="blog/*" component={withPhenomicApi(Post.make, Post.queries)} />
    <Route path="*" component={ErrorPage.make} />
    <Route path="404.html" component={ErrorPage.make} />
  </Router>
);

export default createApp(routes);

if (module.hot) {
  module.hot.accept(() => renderApp(routes));
}
