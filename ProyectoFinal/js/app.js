var btnMenuOpen = document.getElementById("btnMenuOpen"),
    btnMenuClose = document.getElementById("btnMenuClose"),
    menuResponsive = document.getElementById("menuBar");

btnMenuOpen.addEventListener("click", function () {
    menuResponsive.classList.add("active");
});

btnMenuClose.addEventListener("click", function () {
    menuResponsive.classList.remove("active");
});

function calcular() {
    var servicioSelect = document.getElementById("servicio");
    var cantidadInput = document.getElementById("cantidad");
    
    var precioServicio = parseInt(servicioSelect.value);
    var cantidad = parseInt(cantidadInput.value);
    
    var total = precioServicio * cantidad;

    document.getElementById("resultado").value = total || 0; // Muestra el total
}