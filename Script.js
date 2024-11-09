function filterLinks() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const navLinks = document.querySelectorAll("#navbarLinks .nav-item");

    navLinks.forEach(link => {
      const linkText = link.textContent.toLowerCase();
      link.style.display = linkText.includes(input) ? "" : "none";
    });
  }

