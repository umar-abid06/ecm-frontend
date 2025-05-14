import React, { Suspense } from "react";
import ErrorBoundary from "../components/ErrorBoundary";
import InitialLoadingInterface from "../components/InitialLoadingInterface";

// Loadable function to wrap components in ErrorBoundary and Suspense
const Loadable = (Component) => (props) =>
  (
    <ErrorBoundary>
      <Suspense fallback={<InitialLoadingInterface />}>
        <Component {...props} />
      </Suspense>
    </ErrorBoundary>
  );

export default Loadable;
