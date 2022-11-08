const { configureStore } = require("@reduxjs/toolkit");
const { contactsReducer } = require("./contactsSlice");
const { filterReducer } = require("./filterSlice");

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
  
});