import React, { useEffect, useState } from "react";
import NavigationBar from "../../components/NavigationBar";
import AddModal from "../../components/AddModal";
import EditModal from "../../components/EditModal";
import DeleteAdmin from "../../components/DeleteAdmin";

function AdminAccount() {
  return (
    <div>
      <NavigationBar />

      <div className="container-fluid my-5 w-50">
        <AddModal />
        <ul class="list-group list-group-flush">
          <li>text</li>
        </ul>
      </div>
    </div>
  );
}

export default AdminAccount;
