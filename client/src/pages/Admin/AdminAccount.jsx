import React, { useState } from "react";
import Modal from "../../components/AddModal";
import NavigationBar from "../../components/NavigationBar";
import AddModal from "../../components/AddModal";
import EditModal from "../../components/EditModal";
import DeleteAdmin from "../../components/DeleteAdmin";

function AdminAccount() {
  const [isModalOpen, setModalOpen] = useState(false);

  // const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  return (
    <div>
      <NavigationBar />

      <div className="container-fluid my-5 w-50">
        <AddModal />
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <div className="d-flex justify-content-between align-items-center">
              <p>ADMIN NAME</p>
              <div className="d-flex gap-2">
                <EditModal />
                <DeleteAdmin />
              </div>
            </div>
          </li>
          <li class="list-group-item">Item</li>
          <li class="list-group-item">Item</li>
          <li class="list-group-item">Item</li>
          <li class="list-group-item">Item</li>
        </ul>
      </div>
    </div>
  );
}

export default AdminAccount;
