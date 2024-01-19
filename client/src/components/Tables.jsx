import React from "react";

function Tables() {
  return (
    <div>
      <div class="col col-md-12">
        <div class="table-responsive text-center">
          <table class="table table-striped">
            <thead class="text-center table-light">
              <tr>
                <td>Date</td>
                <td>Collab server</td>
                <td>Allocation</td>
                <td>Entries</td>
                <td>Collab Manager</td>
                <td>Platform</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {/* create a for loop for each data */}
              <tr>
                <td className="text-white">10/10/10</td>
                <td className="text-white">10/10/10</td>
                <td className="text-white">10/10/10</td>
                <td className="text-white">10/10/10</td>
                <td className="text-white">10/10/10</td>
                <td className="text-white">10/10/10</td>
                <td className="text-white">10/10/10</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Tables;
