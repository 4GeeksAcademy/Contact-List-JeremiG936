import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditContact = () => {
    const {id} = useParams();
    return (
        <div className="container-fluid text-center mt-4">
            <Link to="/">
                <button type="button" className="btn btn-primary">Volver al inicio</button>
            </Link>
        </div>
    )
}

export default EditContact;