const sections = document.querySelectorAll(".clickable-section")!;
        
sections.forEach(section => {
    section.addEventListener("click", () => {
        const id = section.getAttribute("data-id");
        window.location.href = `post.html?id=${id}`;
    });
});