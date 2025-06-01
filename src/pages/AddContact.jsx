import React, {useState} from "react";
import { json, Link, useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/UseGlobalReducer";

const AddContact = () => {
    const navigate = useNavigate();
    const {store, dispatch} = useGlobalReducer();
    const [nameValue, setNameValue] = useState(null);
    const [emailValue, setEmailValue] = useState(null);
    const [phoneValue, setPhoneValue] = useState(null);
    const [addressValue, setAddressValue] = useState(null);

    function grabber1 (e) {
        setNameValue(e.target.value)
    }
    function grabber2 (e) {
        setPhoneValue(e.target.value)
    }
    function grabber3 (e) {
        setEmailValue(e.target.value)
    }
    function grabber4 (e) {
        setAddressValue(e.target.value)
    }

    function adder() {
        let newContact = {name: nameValue, phone: phoneValue, email: emailValue, address: addressValue}
        fetch("https://playground.4geeks.com/contact/agendas/jeremi_gonzalez/contacts", {
            method: 'POST',
            body: JSON.stringify(newContact),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((response) => {
            if (response.ok === false) {
                throw new Error("Error al llevar datos")
            }
            return response.json();
        })
        .then((data) => {
            dispatch({type: "add_contact", payload: data});
            navigate("/");
        }) 
        .catch((error) => {
            alert(error)
        })
    }

    return (
        <div className="container-fluid text-center mt-4 gap-3 d-flex flex-column">
            <h1>Add a new contact</h1>
            <div id="add-box" className="text-start">
                <form className="ps-4 pt-2">
                    <div className="mb-3">
                        <h5 className="self-align-start">Name</h5>
                        <input type="text"className="form-control" onChange={grabber1} />
                    </div>
                    <div className="mb-3">
                        <h5>Name</h5>
                        <input type="text" className="form-control" onChange={grabber3} />
                    </div>
                    <div className="mb-3">
                        <h5>Phone</h5>
                        <input type="text" className="form-control" onChange={grabber2} />
                    </div>
                    <div className="mb-3">
                        <h5>Address</h5>
                        <input type="text" className="form-control" onChange={grabber4} />
                    </div>
                </form>
            </div>
            <div className="row" >
                <div className="col text-start">
                    <Link to="/">
                        <button type="button" className="btn btn-secondary">Go Back</button>
                    </Link>
                </div>
                <div className="col text-end">
                    <button type="button" className="btn btn-primary" onClick={adder}>Add Contact</button>
                </div>
            </div>
        </div>
    )
}

export default AddContact;