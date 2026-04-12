function consultar() {
    const producto = document.getElementById("producto").value;

    fetch(`http://localhost:8080/?producto=${producto}`)
        .then(res => res.text())
        .then(data => {
            const resultado = document.getElementById("resultado");

            resultado.innerText = data;

            if (data.includes("OK")) {
                resultado.className = "ok";
            } else {
                resultado.className = "error";
            }
        })
        .catch(error => {
            document.getElementById("resultado").innerText = "Error de conexión";
        });
}