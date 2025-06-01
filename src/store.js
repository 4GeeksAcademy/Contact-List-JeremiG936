export const initialStore = () => {
    return {
        message: null,
        contacts: [
            {
            name: "Alberto Guerra",
            phone: "6748-3924",
            email: "albertitog@gmail.com",
            address: "Avenida 123",
            id: 0
            },
        ],
    }
}

export default function storeReducer (store, action = {}) {
    switch (action.type) {
        case "get_contacts": 
            return {
            ...store,
            contacts: action.payload
            };
        case "add_contact":
            return {
                contacts: [...store.contacts, action.payload]
            };
        case "delete_contact":
            return {
                contacts: store.contacts.filter(contact => contact.id !== action.payload)
            }
        case "edit_contact":
            return {
                ...store,
            contacts: store.contacts.map(contact => 
            contact.id === action.payload.id ? action.payload : contact)
            }        
        default:
            throw Error("Unknown Action!")
    }
}