import { useState } from "react";
import { useDispatch } from "react-redux";
import { adddTask } from "./redux";

const TaskForm = () => {

  const [text, setText] = useState('');


  


const dispatch = useDispatch();

  return (
    <form onSubmit= {()=>dispatch(adddTask(text))}>
      <input
        type="text"
        placeholder="Ajouter une tâche"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </form>
  );
};

export default TaskForm;
