import React from "react";
import { useState } from "react";

function Loader() {
  return <div>loading....</div>;
}

function Content() {
  return (
    <div className="content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
    </div>
  );
}

function Condition() {
  const [isLoading, setIsLoading] = useState(true);
  setTimeout(() => {
      setIsLoading(false);
    },
    5000);

  return (
    <section className="MainPage">
      {isLoading ? <Loader /> : <Content />}
    </section>
  );
}

export default Condition;
