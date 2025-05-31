import React from "react"; 
import useGlobalReducer from "../hooks/UseGlobalReducer";
import { useNavigate, useParams, Link } from "react-router-dom";


const SingleContact = ({contact}) => {
    const {id} = useParams();
    const {store, dispatch} = useGlobalReducer();

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
                            <i class="fa-solid fa-user-pen"></i>
                        </button>
                    </Link>
                    <button type="button" className="btn">
                        <i className="fa-solid fa-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SingleContact;