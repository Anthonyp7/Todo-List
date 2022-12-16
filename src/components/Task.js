import { useState } from "react";

export default function Task() {

    const locals = localStorage;
    const [task, setTask] = useState("");

    

    const ajouterTask = () => {
        locals.setItem("Task", task);
        alert("Votre task a bien été ajoutée");
        // this.setState({
        //     items: [...this.state.items, task],
        // });

    };

    const deleteTask = () => {
        locals.removeItem("Task");
        alert("Votre task a bien été supprimée");
        

    };

    


    

    return (
        <div>
            <h1>Todo List</h1>
        
            <ul>
                {Object.keys(locals).map((key) => (
                    <li>
                        {locals.getItem(key)}
                        <button onClick={deleteTask}>Supprimer Task</button>
                        
                    </li>
                ))}
            </ul>
            {/* <p>valeur de key3 : {locals.getItem("Task")}</p> */}

            <input type="text" value={task} onChange={(e) => setTask(e.target.value)}></input>
            <button onClick={ajouterTask}>Ajouter Task</button>
            
        </div>
    )
}