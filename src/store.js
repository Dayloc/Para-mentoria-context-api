export const initialStore = () => {
  return {
    message: null,
    agendas:[],
    contacts: [],
  };
};

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case "add_task":
      const { id, color } = action.payload;

      return {
        ...store,
        todos: store.todos.map((todo) =>
          todo.id === id ? { ...todo, background: color } : todo
        ),
      };
    case "Guardar_Agendas":
      return {
        ...store,
        agendas:  action.payload,
      };
    case "agregar_agenda": // Nuevo caso para agregar una sola agenda
      return {
        ...store,
        agendas:  action.payload, // Agrega la nueva agenda al estado
      };
      case "guardar_contactos":
        return {
          ...store,
          contacts: action.payload, // Guarda los contactos en el estado
        };
  
      case "agregar_contacto":
        return {
          ...store,
          contacts: [...store.contacts, action.payload], // Agrega un nuevo contacto
        };
  
      case "actualizar_contacto":
        return {
          ...store,
          contacts: store.contacts.map((contact) =>
            contact.id === action.payload.id ? action.payload : contact
          ), // Actualiza un contacto existente
        };
  
      case "eliminar_contacto":
        return {
          ...store,
          contacts: store.contacts.filter(
            (contact) => contact.id !== action.payload
          ), 
        };
    default:
      throw Error("Unknown action.");
  }
}
