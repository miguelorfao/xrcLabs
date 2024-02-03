import React from "react";

function ListData() {
  return (
    <div>
      <div class="table-responsive w-100">
        <table class="table  table-hover table-borderless align-middle">
          <thead class="">
            <p className="p-3">Text Data</p>
            <tr>
              <th>Column 1</th>
              <th>Column 2</th>
              <th>Column 3</th>
            </tr>
          </thead>
          <tbody class="table-group-divider">
            <tr class="border-bottom shadow-bottom">
              <td scope="row">Item</td>
              <td>Item</td>
              <td>Item</td>
            </tr>
            <tr class="">
              <td scope="row">Item</td>
              <td>Item</td>
              <td>Item</td>
            </tr>
          </tbody>
          <tfoot></tfoot>
        </table>
      </div>
    </div>
  );
}

export default ListData;
