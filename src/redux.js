import { configureStore, createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: [
    { id: 1, text: "Faire les courses", done: false },
    { id: 2, text: "Ménage !", done: true },
  ],

  reducers: {
    adddTask: (state, action) => {
      const newTask = {
        id: Date.now(),
        done: false,
        text: action.payload,
      };

      state.push(newTask);
    },
    toggleTask: (state, action) => {
      const task = state.find((t) => t.id === action.payload);

      task.done = !task.done;
    },
    deleteTask: (state, action) => {

        state = state.filter((t)=>t.id !==action.payload)

        return state;
      

    },
  },
});


export const { adddTask, toggleTask, deleteTask } = todoSlice.actions;





export const store = configureStore({
  reducer: { todo: todoSlice.reducer },
});
