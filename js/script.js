document.addEventListener("DOMContentLoaded", function() {

    const filterButtons = document.querySelectorAll(".nav-link");
    const projectItems = document.querySelectorAll(".project-item");

    filterButtons.forEach(button => {
        button.addEventListener("click", function() {
            const filterValue = this.getAttribute("data-filter");

            filterButtons.forEach(btn => {
                btn.classList.remove("active");
            });
            this.classList.add("active");

            projectItems.forEach(item => {
                if (filterValue === "all") {
                    item.style.display = "block";
                } else {
                    if (item.classList.contains(filterValue)) {
                        item.style.display = "block";
                    } else {
                        item.style.display = "none";
                    }
                }
            });
        });
    });

});
