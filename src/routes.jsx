import { createBrowserRouter, createRoutesFromElements, Route, } from "react-router-dom";
import Home from "./pages/Home";
import AddContact from "./pages/AddContact";
import EditContact from "./pages/EditContact";

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" errorElement={<h1>Not found!</h1>} >
        <Route path="/" element={<Home />} />
        <Route path="/add-contact" element={<AddContact />} />
        <Route path="/edit-contact/:id" element={<EditContact />} />
      </Route>
    )
);

export default router;