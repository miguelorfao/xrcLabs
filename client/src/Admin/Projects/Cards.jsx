import React from "react";

function Cards() {
  return (
    <div>
      <main>
        <div class="container text-center mt-4">
          <div class="row">
            <div class="col-12 col-md-4 mb-4">
              <div class="card border-primary">
                <div class="card-body text-center">
                  <h4 class="card-title">Project Name</h4>
                  <div>
                    <span>Project Price: £100</span>
                  </div>
                  <div>
                    <span>Created Date: 10/10/10</span>
                  </div>
                  <hr></hr>
                  <div class="d-flex justify-content-around gap-2 align-items-center">
                    <span>Due Date: 10/10/10</span>
                    <span>Completed Date: 10/10/10</span>
                  </div>
                </div>
                <div class="card-footer">
                  <span>
                    Status: <span class="text-success">Completed</span>{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Cards;
