import { createSlice, nanoid} from "@reduxjs/toolkit";

const contactsInitialState = { array: [] };

const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInitialState,
    reducers: {
        addContact: {
            reducer(state, action) {
                state.array.push(action.payload);
            },
        },
        // prepare(name, number) {
        //     return {
        //         payload: {
        //             name,
        //             number,
        //             id: nanoid(),
            
        //         },
        //     };
        // },
        handleDelete(state, action) {
            const index = state.array.findIndex(contact => contact.id === action.payload);
            state.array.splice(index, 1);
        },
    }
}
);

export const { addContact, handleDelete } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;