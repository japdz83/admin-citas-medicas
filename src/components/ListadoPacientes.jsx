import React from "react";
import Paciente from "./Paciente";

const Listadopacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {
    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
            {pacientes && pacientes.length ? (
                <>
                    <h1 className="font-black text-3xl text-center">
                        Listado de pacientes
                    </h1>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Administra {""}
                        <span className="text-indigo-600 font-bold">
                            Pacientes y Citas
                        </span>
                    </p>
                    {pacientes.map((paciente) => (
                        <Paciente
                            key={paciente.id}
                            paciente={paciente}
                            setPaciente={setPaciente}
                            eliminarPaciente={eliminarPaciente}
                        />
                    ))}
                </>
            ) : (
                <>
                    <h1 className="font-black text-3xl text-center">
                        No hay pacientes
                    </h1>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Comienza Agregando pacientes {""}
                        <span className="text-indigo-600 font-bold">
                            y apareceran en este lugar
                        </span>
                    </p>
                </>
            )}
        </div>
    );
};

export default Listadopacientes;
