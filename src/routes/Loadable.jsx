import React, { Suspense } from "react";
import ErrorBoundary from "../components/ErrorBoundary";
import LoadingComponent from "../components/LoadingComponent";

// Loadable function to wrap components in ErrorBoundary and Suspense
const Loadable = (Component) => (props) =>
  (
    <ErrorBoundary>
      <Suspense fallback={<LoadingComponent />}>
        <Component {...props} />
      </Suspense>
    </ErrorBoundary>
  );

export default Loadable;
