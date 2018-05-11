// @flow

import React from "react";
import arc from "./arc";

const { Archer, Bullseye } = arc({
  load: _ =>
    new Promise(resolve => {
      setTimeout(() => resolve({ foo: "bar" }), 1000);
    })
});

const Target = () => (
  <Bullseye>
    {arc => arc.data && <h2>I can also say {arc.data.foo}</h2>}
  </Bullseye>
);

const Greeting = ({ message }) => <h1>{message}</h1>;

const App = () => (
  <Archer initialState={{ foo: "quux" }}>
    {arc =>
      arc.data && (
        <React.Fragment>
          <Greeting message={arc.data.foo} />
          <Target />
        </React.Fragment>
      )
    }
  </Archer>
);

export default App;
