import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/UseGlobalReducer";

const EditContact = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { store, dispatch } = useGlobalReducer();
    const [nameValue, setNameValue] = useState(null);
    const [emailValue, setEmailValue] = useState(null);
    const [phoneValue, setPhoneValue] = useState(null);
    const [addressValue, setAddressValue] = useState(null);

    useEffect(() => {
        const contact = store.contacts.find(c => c.id === parseInt(id));
        if (contact) {
            setNameValue(contact.name);
            setPhoneValue(contact.phone);
            setEmailValue(contact.email);
            setAddressValue(contact.address);
        }
    }, [id, store.contacts]);

    function grabber1(e) {
        setNameValue(e.target.value);
    }
    function grabber2(e) {
        setEmailValue(e.target.value);
    }
    function grabber3(e) {
        setPhoneValue(e.target.value);
    }
    function grabber4(e) {
        setAddressValue(e.target.value);
    }

    function editer() {
        fetch(`https://playground.4geeks.com/contact/agendas/jeremi_gonzalez/contacts/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: nameValue,
                phone: phoneValue,
                email: emailValue,
                address: addressValue,
                agenda_slug: "jeremi_gonzalez",
                id: parseInt(id)
            })
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Error al editar datos");
                }
                return response.json();
            })
            .then((data) => {
                dispatch({ type: "edit_contact", payload: data });
                navigate("/");
            })
            .catch((error) => {
                alert("Error al editar datos");
            });
    }

    return (
        <div className="container-fluid text-center mt-4 gap-3 d-flex flex-column">
            <h1>Edit Contact Information</h1>
            <div id="add-box" className="text-start">
                <form className="ps-4 pt-2">
                    <div className="mb-3">
                        <h5 className="self-align-start">Name</h5>
                        <input type="text" value={nameValue || ''} className="form-control" onChange={grabber1} />
                    </div>
                    <div className="mb-3">
                        <h5>Email</h5>
                        <input type="text" value={emailValue || ''} className="form-control" onChange={grabber2} />
                    </div>
                    <div className="mb-3">
                        <h5>Phone</h5>
                        <input type="text" value={phoneValue || ''} className="form-control" onChange={grabber3} />
                    </div>
                    <div className="mb-3">
                        <h5>Address</h5>
                        <input type="text" value={addressValue || ''} className="form-control" onChange={grabber4} />
                    </div>
                </form>
            </div>
            <div className="row">
                <div className="col text-start">
                    <Link to="/">
                        <button type="button" className="btn btn-secondary">Go Back</button>
                    </Link>
                </div>
                <div className="col text-end">
                    <button type="button" className="btn btn-primary" onClick={editer}>Edit Contact</button>
                </div>
            </div>
        </div>
    );
};

export default EditContact;