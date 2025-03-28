document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".sidebar ul li");
    
    menuItems.forEach(item => {
        item.addEventListener("click", function () {
            alert("You clicked " + this.textContent);
        });
    });
});
