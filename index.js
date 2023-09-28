document.getElementById("boton").addEventListener("click",(e) => {
    
    const datos = {
        nombre: document.getElementById("nombre").value,
        apellido: document.getElementById("apellido").value,
        fecha: document.getElementById("fecha").value
    }

    console.log(datos)

    const options = {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(datos),
        };

        fetch('https://jsonplaceholder.typicode.com/users', options)
        .then(data => {
            if (!data.ok) {
              throw Error(data.status);
             }
             return data.json();
            }).then(update => {
            console.log(update);
            })
})