console.log("JS funcionando");

function consultar() {
    const producto = document.getElementById("producto").value;
    const resultado = document.getElementById("resultado");
    const spinner = document.getElementById("spinner");

    resultado.innerText = "";
    spinner.style.display = "block";

    fetch("https://cadena-frio-web.onrender.com/?producto=" + producto)
        .then(res => res.text())
        .then(data => {
            spinner.style.display = "none";

            if (data.includes("OK")) {
                resultado.innerText = "✅ " + data;
                resultado.className = "ok";
            } else {
                resultado.innerText = "⚠️ " + data;
                resultado.className = "error";
            }
        })
        .catch(() => {
            spinner.style.display = "none";
            resultado.innerText = "❌ Error de conexión";
        });
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("producto").addEventListener("keypress", function(e) {
        if (e.key === "Enter") {
            consultar();
        }
    });
});