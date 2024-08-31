document.addEventListener("DOMContentLoaded", function () {
  // Cargar contenido inicial de home.html
  loadContent("pages/home.html");
});

function loadContent(page) {
  fetch(page) // Hacer la solicitud al archivo HTML
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.text(); // Obtener el contenido como texto
    })
    .then((data) => {
      document.getElementById("content").innerHTML = data; // Insertar el contenido en el div
    })
    .catch((error) => {
      console.error("Error al cargar la página:", error);
      document.getElementById("content").innerHTML =
        "<p>Error al cargar el contenido.</p>";
    });
}
document.addEventListener("DOMContentLoaded", function () {
  loadContent("pages/home.html");

  // Manejo de clicks en la navbar
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const page = this.getAttribute("href");
      loadContent(page);
    });
  });
});
