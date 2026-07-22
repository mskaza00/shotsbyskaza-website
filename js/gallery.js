// =================================
// SHOTSBYSKAZA AUTO PHOTO GALLERY
// =================================

const username = "mskaza00";
const repository = "shotsbyskaza-website";

// Gallery folders
const galleries = [
    {
        folder: "photos/sports",
        element: "sports-gallery"
    },
    {
        folder: "photos/portraits",
        element: "portraits-gallery"
    },
    {
        folder: "photos/graphics",
        element: "graphics-gallery"
    }
];

// Load each gallery
galleries.forEach(loadGallery);

function loadGallery(galleryData) {

    const gallery = document.getElementById(galleryData.element);

    fetch(`https://api.github.com/repos/${username}/${repository}/contents/${galleryData.folder}`)
        .then(response => response.json())
        .then(files => {

            files.forEach(file => {

                if (
                    file.name.endsWith(".jpg") ||
                    file.name.endsWith(".jpeg") ||
                    file.name.endsWith(".png") ||
                    file.name.endsWith(".webp")
                ) {

                    const photo = document.createElement("div");

                    photo.className = "photo";

                    photo.innerHTML = `
                        <img
                            src="${file.download_url}"
                            alt="${file.name}"
                            loading="lazy">
                    `;

                    gallery.appendChild(photo);

                }

            });

        })
        .catch(error => {
            console.log("Gallery loading error:", error);
        });

}

// Dropdown navigation
const select = document.getElementById("gallery-select");

select.addEventListener("change", function () {

    if (!this.value) return;

    document.getElementById(this.value).scrollIntoView({
        behavior: "smooth"
    });

});
