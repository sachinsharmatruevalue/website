// import AdminServices from "../services/Adminservices"
import Pagetitle from "./pagetitle";
import { Link } from "react-router-dom";
import HomesliderServices from "../../services/homesliderservices ";
import HelpTogal from "../Togal/HelpTogal";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import useAsync from "../../Hooks/useAsync";
import Modal from "react-modal";
import DeleteButton from "../delete/deleteButton";
import BannerUpdate from "../update/bannerUpdate";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

Modal.setAppElement("#root");
function Banner() {
  const { data, run } = useAsync(HomesliderServices.getBanner);
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedEdit, setSelectedEdit] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  console.log(data);
  const filteredData = data?.data?.filter((slider) =>
    slider.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const toggleActionMenu = (index) => {
    setActiveIndex(index === activeIndex ? null : index); // Toggle the active index
  };
  function formatDateTime(isoString) {
    const date = new Date(isoString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setSelectedEdit(null);
  };
  const handleDelete = (slider) => {
    setSelectedEdit(slider);
    setIsDeleteModalOpen(true);
  };
  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedEdit(null);
  };

  const handleEditDetails = (slider) => {
    setSelectedEdit(slider);
    setIsEditModalOpen(true);
  };
  return (
    <div className="right_col" role="main">
      <Pagetitle></Pagetitle>
      <div className="container-box px-0">
        <div className="container-box-top-header px-4">
          <div className="container-box-top-header-left-2">
            <input
              type="search"
              name="search"
              placeholder="Search by Banner Title"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <button className="search-btn">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>

          <div className="sub-title-box-right">
            <Link className="Add-new-btn site-btn-green me-5" to="/add-banner">
              <img src="img/add-plus.svg" alt="" />
              <span className="ms-2">Add New</span>
            </Link>
          </div>
        </div>

        <div className="container-box-inner">
          <table id="example" className="table " style={{ width: "100%" }}>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">IMAGE</th>
                <th scope="col">STARTDATE</th>
                <th scope="col">ENDDATE</th>
                <th scope="col">TITLE</th>
                <th scope="col">MESSAGE</th>
                <th scope="col">STATUS</th>
                <th scope="col">EDIT</th>
                <th scope="col">DELETE</th>
              </tr>
            </thead>
            <tbody>
              {filteredData?.map((slider, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>
                    <div className="product-img">
                      <img
                        src={`${process.env.REACT_APP_API_BASE_URL}/${slider?.image}`}
                        alt="image"
                        style={{
                          height: "70px",
                          width: "70px",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                  </td>

                  <td>{formatDateTime(slider.startDate)}</td>
                  <td>{formatDateTime(slider.endDate)}</td>
                  <td>{slider.title}</td>
                  <td>{slider.message}</td>
                  <td className="status-toggle">
                    <HelpTogal
                      help={slider}
                      page="Banner"
                      onSuccess={() => run()}
                    />
                  </td>
                  <td>
                    <button
                      className="view-details-btn"
                      onClick={() => handleEditDetails(slider)}
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                  </td>
                  <td>
                    <button
                      className="viewdelete"
                      onClick={() => handleDelete(slider)}
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
      <Modal
        isOpen={isEditModalOpen}
        onRequestClose={closeEditModal}
        contentLabel="User Details"
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <BannerUpdate
          Banner={selectedEdit}
          closeModal={closeEditModal}
          onSuccess={run}
        />
      </Modal>
      <Modal
        isOpen={isDeleteModalOpen}
        onRequestClose={closeDeleteModal}
        contentLabel="Delete Confirmation"
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <DeleteButton
          data={selectedEdit}
          page="banner"
          closeModal={closeDeleteModal}
          onSuccess={run}
        />
      </Modal>
    </div>
  );
}

export default Banner;
