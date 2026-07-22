// =================================
// SHOTSBYSKAZA AUTO PHOTO GALLERY
// =================================


// Your GitHub information

const username = "mskaza00";
const repository = "shotsbyskaza-website";
const folder = "photos";



const gallery = document.getElementById("photo-gallery");



// Get all photos from GitHub folder

fetch(
`https://api.github.com/repos/${username}/${repository}/contents/${folder}`
)


.then(response => response.json())


.then(files => {


    files.forEach(file => {


        // Only load image files

        if(
            file.name.endsWith(".jpg") ||
            file.name.endsWith(".jpeg") ||
            file.name.endsWith(".png") ||
            file.name.endsWith(".webp")
        ){


            const photo = document.createElement("div");

            photo.className = "photo";


            photo.innerHTML = `

            <img 
            src="${file.download_url}" 
            alt="ShotsBySkaza Photography"
            loading="lazy">

            `;


            gallery.appendChild(photo);


        }


    });


})


.catch(error => {

console.log(
"Gallery loading error:",
error
);

});
