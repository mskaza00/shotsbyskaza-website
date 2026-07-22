// ===============================
// SHOTSBYSKAZA AUTO GALLERY
// ===============================


// Add your photos here
// No aspect ratios needed
// Just upload photos and add the filename


const photos = [

    "photo1.jpg",
    "photo2.jpg",
    "photo3.jpg",
    "photo4.jpg",
    "photo5.jpg"

];



const gallery = document.getElementById("photo-gallery");



photos.forEach(function(photo){


    const container = document.createElement("div");

    container.className = "photo";


    const image = document.createElement("img");

    image.src = "photos/" + photo;

    image.alt = "ShotsBySkaza Photography";


    container.appendChild(image);


    gallery.appendChild(container);


});
