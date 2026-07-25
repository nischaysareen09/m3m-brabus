import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import App from "../src/App.jsx";

export function renderRoute(routePath) {
  return renderToString(
    React.createElement(StaticRouter, { location: routePath }, React.createElement(App))
  );
}
