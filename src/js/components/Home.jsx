import React, { useState } from "react";

// Crear tu primer componente
const Home = () => {
    const [newTarea, setNewTarea] = useState("");
    const [tareas, setTareas] = useState([]);
    const [hoverIndex, setHoverIndex] = useState(null); // Para mostrar el botón al pasar el mouse

    function agregarTarea() {
        if (newTarea.trim() === "") return; // Evita agregar tareas vacías
        setTareas([...tareas, newTarea]);
        setNewTarea(""); // Limpiar el input después de agregar
    }

    function eliminarTarea(index) {
        const nuevasTareas = tareas.filter((_, i) => i !== index);
        setTareas(nuevasTareas);
    }

    function eliminarTodas() {
        setTareas([]); // Vacía la lista de tareas
    }

    return (
        <div className="m-auto text-center w-50">
            <h1>Mis tareas</h1>
            
            <input
                type="text"
                value={newTarea}
                onChange={(e) => setNewTarea(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && agregarTarea()} // Agregar tarea al presionar Enter
                placeholder="Escribe tu tarea"
                className="form-control mb-2"
            />
            <button onClick={agregarTarea} className="btn btn-primary">Agregar Tarea</button>

            <h2>{newTarea ? newTarea : ""}</h2>

            <ul className="list-group">
                {tareas.map((tarea, index) => (
                    <li
                        key={index}
                        className="list-group-item d-flex justify-content-between align-items-center"
                        onMouseEnter={() => setHoverIndex(index)}
                        onMouseLeave={() => setHoverIndex(null)}
                    >
                        {tarea}
                        {hoverIndex === index && (
                            <button
                                className="btn btn-danger btn-sm"
                                onClick={() => eliminarTarea(index)}
                            >
                                DELETE
                            </button>
                        )}
                    </li>
                ))}
            </ul>
            <p></p>
            <span className="mb-3">Total: {tareas.length}</span>
               
            <button onClick={eliminarTodas} className="btn btn-danger">
               Eliminar todas
            </button>
        </div>
    );
};

export default Home;
