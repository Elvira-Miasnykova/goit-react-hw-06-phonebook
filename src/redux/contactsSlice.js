import { createSlice, nanoid} from "@reduxjs/toolkit";

const contactsInitialState = [];

const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInitialState,
    reducers: {
        addContact: {
            reducer(state, action) {
                state.push(action.payload);
            },
        },
        prepare(name, number) {
            return {
                payload: {
                    name,
                    number,
                    id: nanoid(),
            
                },
            };
        },
        handleDelete(state, action) {
            const index = state.findIndex(contact => contact.id === action.payload);
            state.contactsArr.splice(index, 1);
        },
    }
}
);

export const { addContact, handleDelete } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;