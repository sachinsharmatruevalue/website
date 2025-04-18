import Pagetitle from "./pagetitle";
import { Link } from "react-router-dom";
import Userservices from "../../services/userservices";
import HelpTogal from "../Togal/HelpTogal";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faSearch } from "@fortawesome/free-solid-svg-icons";
import useAsync from "../../Hooks/useAsync";
import Modal from "react-modal";
import UserUpdate from "../update/UserUpdate";  // Updated Name
import DeleteButton from "../delete/deleteButton"; // Updated Name

Modal.setAppElement("#root");

function UserManager() {
  const { data, run } = useAsync(Userservices.getAllUser);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleEditDetails = (user) => {
    setSelectedUser(user);
    setIsEditModalOpen(true);
  };

  const handleDelete = (user) => {
    setSelectedUser(user);
    setIsDeleteModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedUser(null);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setSelectedUser(null);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter data based on the search term
  const filteredUsers = data?.users?.filter((user) =>
    user?.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="right_col" role="main">
      <Pagetitle />
      <div className="container-box px-0">
        <div className="container-box-top-header px-4">
          <div className="container-box-top-header-left-2">
            <input
              type="search"
              name="search"
              placeholder="Search by User Name"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <button className="search-btn">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
       
        </div>

        <div className="container-box-inner">
          <table className="table" style={{ width: "100%" }}>
            <thead>
              <tr className="trs">
                <th>#</th>
              
                <th>Name</th>
                <th>Email</th>
                <th>Mobile No</th>
                <th>Status</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers?.map((user, i) => (
                <tr key={user._id}>
                  <td>{i + 1}</td>
                 
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.mobileNo}</td>
                  <td className="status-toggle">
                    <HelpTogal help={user} page="user" onSuccess={run} />
                  </td>
                  <td>
                    <button
                      className="view-details-btn"
                      onClick={() => handleEditDetails(user)}
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                  </td>
                  <td>
                    <button
                      className="viewdelete"
                      onClick={() => handleDelete(user)}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Edit User Modal */}
      <Modal
        isOpen={isEditModalOpen}
        onRequestClose={closeEditModal}
        contentLabel="User Details"
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <UserUpdate user={selectedUser} closeModal={closeEditModal} onSuccess={run} />
      </Modal>

      {/* Delete User Modal */}
      <Modal
        isOpen={isDeleteModalOpen}
        onRequestClose={closeDeleteModal}
        contentLabel="Delete Confirmation"
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <DeleteButton data={selectedUser} page="user" closeModal={closeDeleteModal} onSuccess={run} />
      </Modal>
    </div>
  );
}

export default UserManager;
