import React from "react";

function Home() {
  return (
    <div>
      <div className="jumbotron text-center">
        <h1 className="display-3">Welcome, Folks!</h1>
        <p className="lead">
          Find your random group by clicking the magic button below!
        </p>
        <hr className="my-4" />
        <p className="lead">
          <button className="btn btn-outline-primary btn-extra-lg">
            RANDOMIZE
          </button>
        </p>
      </div>
      <div className="row container-fluid">
        <div className="col">
          <div class="card mb-3">
            <h3 class="card-header">Active Meetings</h3>
            <div class="card-body">
              <h5 class="card-title">11 June 2020</h5>
              <h6 class="card-subtitle text-muted">Week 1</h6>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <b>Jayadeep KM</b> <i>I12345</i> (Host)
                <span class="badge badge-success float-right">Accepted</span>
              </li>
              <li class="list-group-item">
                Tarun Kumar Mishra <i>I454545</i>
                <span class="badge badge-secondary float-right">Pending</span>
              </li>
              <li class="list-group-item">
                Sajal Gupta <i>I565644</i>
                <span class="badge badge-warning float-right">Rejected</span>
              </li>
            </ul>
            <div class="card-body">
              <a href="/" class="card-link">
                Reschedule
              </a>
              <a href="/" class="card-link">
                Reminder
              </a>
            </div>
            <div class="card-footer text-muted">1 Active meeting</div>
          </div>
        </div>
        <div className="col">
          <div class="card mb-3">
            <h3 class="card-header">History</h3>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <h5 class="card-title">31 May 2020</h5>
                <h6 class="card-subtitle text-muted">3 Members Participated</h6>
              </li>
              <li class="list-group-item">
                <h5 class="card-title">21 May 2020</h5>
                <h6 class="card-subtitle text-muted">4 Members Participated</h6>
              </li>
              <li class="list-group-item">
                <h5 class="card-title">07 April 2020</h5>
                <h6 class="card-subtitle text-muted">2 Members Participated</h6>
              </li>
              <li class="list-group-item">
                <h5 class="card-title">01 April 2020</h5>
                <h6 class="card-subtitle text-muted">4 Members Participated</h6>
              </li>
            </ul>
            <div class="card-footer text-muted">4 completed meetings</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
