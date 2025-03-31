// import AdminServices from "../services/Adminservices"
import Pagetitle from "./pagetitle";
import { Link } from "react-router-dom";
import BrandServices from "../../services/brandServices";
import HelpTogal from "../Togal/HelpTogal";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import useAsync from "../../Hooks/useAsync";
import Modal from "react-modal";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import BrandUpdate from "../update/brandUpdate";
import BrandButton from "../delete/deleteButton";

Modal.setAppElement("#root");
function Brand() {
  const { data, run } = useAsync(BrandServices.getbrand);
  const count = data?.data?.length;
  const [activeIndex, setActiveIndex] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedEdit, setSelectedEdit] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleEditDetails = (brand) => {
    setSelectedEdit(brand);
    setIsEditModalOpen(true);
  };

  const handleDelete = (brand) => {
    setSelectedEdit(brand);
    setIsDeleteModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedEdit(null);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setSelectedEdit(null);
  };

  const toggleActionMenu = (index) => {
    setActiveIndex(index === activeIndex ? null : index); // Toggle the active index
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  // Filter data based on the search term
  const filteredData = data?.data?.filter((brand) =>
    brand?.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="right_col" role="main">
      <Pagetitle></Pagetitle>
      <div className="container-box px-0">
        <div className="container-box-top-header px-4">
          <div className="container-box-top-header-left-2">
            <input
              type="search"
              name="search"
              placeholder="Search by  Brand name"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <button className="search-btn">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
          <div className="sub-title-box-right">
            <Link className="Add-new-btn site-btn-green me-5" to="/add-brand">
              <img src="img/add-plus.svg" alt="" />
              <span className="ms-2">Add New</span>
            </Link>
          </div>
        </div>

        <div className="container-box-inner">
          <table id="example" className="table " style={{ width: "100%" }}>
            <thead>
              <tr class="trs">
                <th scope="col">#</th>
                <th scope="col">IMAGE</th>
                <th scope="col">Name</th>
                <th scope="col">STATUS</th>
                <th scope="col">EDIT</th>
                <th scope="col">DELETE</th>
              </tr>
            </thead>
            <tbody>
              {filteredData?.map((brand, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>

                  <td>
                    <div className="product-img">
                      <img
                        src={`${process.env.REACT_APP_API_BASE_URL}/${brand?.image}`}
                        alt="image"
                        style={{
                          height: "70px",
                          width: "70px",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                  </td>
                  <td>{brand.name}</td>

                  <td className="status-toggle">
                    <HelpTogal
                      help={brand}
                      page="brand"
                      onSuccess={() => run()}
                    />
                  </td>
                  <td>
                    <button
                      className="view-details-btn"
                      onClick={() => handleEditDetails(brand)}
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                  </td>
                  <td>
                    <button
                      className="viewdelete"
                      onClick={() => handleDelete(brand)}
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
        <BrandUpdate
          brand={selectedEdit}
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
        <BrandButton
          data={selectedEdit}
          page="brand"
          closeModal={closeDeleteModal}
          onSuccess={run}
        />
      </Modal>
    </div>
  );
}

export default Brand;
