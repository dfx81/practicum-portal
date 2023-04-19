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

    fetch("https://649f-103-5-183-43.ngrok-free.app/contacts", {mode: "cors"}).then(
        (res) => {
            if (!res.ok) {
                throw new Error(`HTTP error ${res.status}`);
            }

            return res.json();
        }
    ).then(
        (data) => {
            let mail = document.querySelector("#email");
            mail.innerText = data.email;
            mail.href = `mailto:${data.email}`;
            
            document.querySelector("#address").innerText = data.addresses.base;
            document.querySelector("#office").innerText = data.addresses.office;
            
            let cas = document.querySelector("#cas");
            cas.innerText = data.phone.cas;
            cas.href = `tel:${data.phone.cas}`;

            let colgis = document.querySelector("#colgis");
            colgis.innerText = data.phone.colgis;
            colgis.href = `tel:${data.phone.colgis}`;

            let cob = document.querySelector("#cob");
            cob.innerText = data.phone.cob;
            cob.href = `tel:${data.phone.cob}`;
        }
    )
};
