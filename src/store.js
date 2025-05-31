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
        default:
            throw Error("Unknown Action!")
    }
}