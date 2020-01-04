import React from "react";

import Counter from "./Counter";

const App = () => {
  return <Counter />;
};

export default App;

/* <Counter
      counter={store.getState()}
      inc={inc}
      dec={dec}
      rnd={() => {
        const value = Math.floor(Math.random() * 10);
        rnd(value);
      }}
    />, */
