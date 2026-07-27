let upload = document.getElementById("upload");
let files = document.getElementById("files");

upload.addEventListener("change", () => {

    for (let file of upload.files) {

        let card = document.createElement("div");
        card.className = "card";

        let size = (file.size / 1024 / 1024).toFixed(2);

        let url = URL.createObjectURL(file);

        let preview = "";

        if (file.type.startsWith("image/")) {

            preview = `
            <a href="${url}" target="_blank">
                <img class="preview" src="${url}">
            </a>
            `;

        }

        else if (file.type.startsWith("video/")) {

            preview = `
            <a href="${url}" target="_blank">
                <video class="preview" controls>
                    <source src="${url}">
                </video>
            </a>
            `;

        }

        else if (file.type.startsWith("audio/")) {

            preview = `
            <audio controls style="width:100%; margin-bottom:15px;">
                <source src="${url}">
            </audio>
            `;

        }

        else if (file.type === "application/pdf") {

            preview = `
            <a href="${url}" target="_blank">
                <iframe class="preview" src="${url}"></iframe>
            </a>
            `;

        }

        else {

            preview = `
            <a href="${url}" target="_blank" class="fileLink">
                <div class="fileIcon">📄</div>
            </a>
            `;

        }

        card.innerHTML = `

        ${preview}

        <div class="success">
            ✔ File Added
        </div>

        <h3>${file.name}</h3>

        <p>📂 Type : ${file.type || "Unknown"}</p>

        <p>📦 Size : ${size} MB</p>

        `;

        files.appendChild(card);

    }

});