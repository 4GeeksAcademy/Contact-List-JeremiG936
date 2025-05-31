import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/UseGlobalReducer";
import SingleContact from "../components/SingleContact";

const Home = () => {
	const { store, dispatch } = useGlobalReducer();
	function loaded () {
		fetch("https://playground.4geeks.com/contact/agendas/jeremi_gonzalez/contacts")
		.then((response) => {
			if (response.ok === false) {
				throw new Error("Error al traer datos")
			}
			return response.json();

		}) 
		.then((data) => {
			dispatch({type: "get_contacts", payload: data.contacts})
		})
		.catch((error) => {
			alert(error)
		})
	}
	useEffect(() => {
		loaded()
	}, [])
	return (
		<div className="container text-center mt-3">
			<div className="d-flex flex-column gap-3">
				<h1>Contact List</h1>
				<Link to="/add-contact">
					<button type="button" className="btn btn-success">Add Contact</button>
				</Link>
				{
					store.contacts.map((element, index) => {
						return 	<SingleContact key={index} contact={element}/>
					})
				}
			</div>
		</div>
	);
}; 

export default Home;