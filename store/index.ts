import { createSlice, configureStore } from "@reduxjs/toolkit"
import { INITIAL_STATE } from "./state"

// Create Slice = Reducers+actions
const basketSlice = createSlice({
  name: "basket",
  initialState: INITIAL_STATE,
  reducers: {
    add: (state, action) => {
      return state.map((item) => {
        // Find the item
        if (item.id !== action.payload.id) {
          return item
        }

        // Add the item
        return {
          ...item,
          added: true
        }
      })
    },
    remove: (state, action) => {
      return state.map((item) => {
        // Find the item
        if (item.id !== action.payload.id) {
          return item
        }

        // Delete the item
        return {
          ...item,
          added: false
        }
      })
    }
  }
})

// Create store and add reducer
const store = configureStore({ reducer: basketSlice.reducer })

// Export the reducer
export const { add, remove } = basketSlice.actions

// Export store and slice
export { basketSlice, store }
