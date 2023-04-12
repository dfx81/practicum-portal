window.onload = () => {
    document.querySelector(".mobile-toggler").addEventListener("click",
        (evt) => {
            evt.preventDefault();

            let sidebar = document.querySelector(".sidebar");
            sidebar.classList.add("toggled");

            if (!sidebar.classList.contains("triggered")) {
                sidebar.classList.add("triggered");
            }

            document.body.classList.add("no-scroll");
        }
    );

    document.querySelector(".mobile-hider").addEventListener("click",
        (evt) => {
            evt.preventDefault();

            document.querySelectorAll(".toggled").forEach(
                (item) => {
                    item.classList.remove("toggled");
                }
            );

            document.body.classList.remove("no-scroll");
        }
    );
};
