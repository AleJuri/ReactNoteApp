import React from 'react'



export const DeleteData = props => {

    function ResetFunction() {
        localStorage.removeItem("tasks");
        window.location.reload();

    }




    return (
        <div>

            <button className="Boton-Borrar"
                onClick={ResetFunction}
            >Borrar Todo</button>
        </div>
    )
}