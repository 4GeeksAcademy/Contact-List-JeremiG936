import React from "react";
import useGlobalReducer from "../hooks/UseGlobalReducer";
import { useNavigate, useParams, Link } from "react-router-dom";


const SingleContact = ({ contact }) => {
    const { id } = useParams();
    const { store, dispatch } = useGlobalReducer();
    function deleter () {
        fetch(`https://playground.4geeks.com/contact/agendas/jeremi_gonzalez/contacts/${contact.id}`, {
            method: 'DELETE',
        }) 
        .then((response) => {
            if (response.ok === false) {
                throw new Error("Error al borrar datos") 
            };
        }) 
        .then((data) => {
            dispatch({type: "delete_contact", payload: contact.id})
        }) 
        .catch((error) => {
            alert(error)
        })
    }

    return (
        <div id="contact-box">
            <div className="row contact-list-row">
                <div className="col-2 d-flex align-items-center pt-4 ms-3">
                    <img src="https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg" />
                </div>
                <div className="col">
                    <div>
                        <h4>{contact.name}</h4>
                    </div>
                    <div className="d-flex align-items-center gap-2 mb-1 text-muted">
                        <i className="fa-solid fa-location-dot"></i>
                        <span>{contact.address}</span>
                    </div>
                    <div className="d-flex align-items-center gap-2 mb-1 text-muted">
                        <i className="fa-solid fa-phone"></i>
                        <span>{contact.phone}</span>
                    </div>
                    <div className="d-flex align-items-center gap-2 mb-1 text-muted">
                        <i className="fa-solid fa-envelope"></i>
                        <span>{contact.email}</span>
                    </div>
                </div>
                <div className="col-2 d-flex align-items-center gap-2">
                    <Link to={`/edit-contact/${contact.id}`}>
                        <button type="button" className="btn">
                            <i className="fa-solid fa-user-pen"></i>
                        </button>
                    </Link>
                    <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <i className="fa-solid fa-trash"></i>
                    </button>
                    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Are you sure you want to delete the contact?</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    Once deleted it will be lost
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-danger" onClick={deleter}>Delete Contact</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleContact;