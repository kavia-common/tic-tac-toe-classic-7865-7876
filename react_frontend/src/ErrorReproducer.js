import React from "react";

/**
 * ErrorReproducer component
 * This component intentionally triggers a runtime error when rendered.
 * The error: "Cannot read property 'foo' of undefined"
 * This simulates common React JS runtime or build errors for debugging purposes.
 * 
 * To trigger the error, render <ErrorReproducer /> within the app.
 */
// PUBLIC_INTERFACE
function ErrorReproducer() {
  // Intentionally triggers: Cannot read property 'foo' of undefined
  // (or similar error depending on environment/React version)
  // This line is designed to match a common JS runtime problem.
  // eslint-disable-next-line
  const willThrow = undefined.foo;

  return (
    <div>
      <h2>ErrorReproducer</h2>
      <p>If you see this, the error did NOT trigger. (But it always should!)</p>
    </div>
  );
}

export default ErrorReproducer;
