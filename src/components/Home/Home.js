import React from "react";

function Home() {
  return (
    <div>
      <div class="jumbotron text-center">
        <h1 class="display-3">Welcome, Folks!</h1>
        <p class="lead">
          Find your random group by clicking the magic button below!
        </p>
        <hr class="my-4" />
        <p class="lead">
          <button class="btn btn-outline-primary btn-extra-lg">
            RANDOMIZE
          </button>
        </p>
      </div>
    </div>
  );
}

export default Home;
