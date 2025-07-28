const params = new URLSearchParams(window.location.search);
const q = params.get("q")
// XSS Vulnerability
document.getElementById("output").innerHtml = q;
