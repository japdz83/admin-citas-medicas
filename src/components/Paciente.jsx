import React from "react";

const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
    const { nombre, propietario, email, fecha, sintomas, id } = paciente;

    const handleEliminar = () => {
        const respuesta = confirm("¿Estás seguro de eliminar este paciente?");

        if (respuesta) {
            eliminarPaciente(id);
        }
    };
    return (
        <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 uppercase text-gray-700">
                Nombre de Mascota: {""}
                <span className="font-normal text-case">{nombre}</span>
            </p>

            <p className="font-bold mb-3 uppercase text-gray-700">
                Nombre de Propietario: {""}
                <span className="font-normal text-case">{propietario}</span>
            </p>

            <p className="font-bold mb-3 uppercase text-gray-700">
                Email: {""}
                <span className="font-normal text-case">{email}</span>
            </p>

            <p className="font-bold mb-3 uppercase text-gray-700">
                Fecha Alta: {""}
                <span className="font-normal text-case">{fecha}</span>
            </p>

            <p className="font-bold mb-3 uppercase text-gray-700">
                Sintomas: {""}
                <span className="font-normal text-case">{sintomas}</span>
            </p>

            <div className="flex justify-between mt-10">
                <button
                    type="button"
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
                    onClick={() => setPaciente(paciente)}
                >
                    Editar
                </button>

                <button
                    type="button"
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
                    onClick={handleEliminar}
                >
                    Eliminar
                </button>
            </div>
        </div>
    );
};

export default Paciente;