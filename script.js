function loadPage() {
    document.getElementById("loading").style.display = "flex";

    // Wait 2 seconds before opening the page
    setTimeout(() => {
        window.location.href = "page2.html";
    }, 2000);
}
