var banner = new hoverEffect({
    parent: document.querySelector(".distortion"),
    intensity: 0.4,
    image1: "./images/rand-12.jpg",
    image2: "./images/rand-14.jpg",
    //displacementImage: "./images/halftone.jpg"
    displacementImage: "./images/heightMap.png",
    angle: Math.PI/8,
    //speedIn: 1,
    //speedOut: 2
    
});

var photo1 = new hoverEffect({
    parent: document.querySelector("#photo-1"),
    intensity: 0.4,
    image1: "./images/pic-3.jpg",
    image2: "./images/pic-3.jpg",
    displacementImage: "./images/heightMap.png",
    angle: Math.PI/8,
});

var photo2 = new hoverEffect({
    parent: document.querySelector("#photo-2"),
    intensity: 0.4,
    image1: "./images/pic-2.jpg",
    image2: "./images/pic-2.jpg",
    displacementImage: "./images/heightMap.png",
    angle: Math.PI/8,
});

var photo3 = new hoverEffect({
    parent: document.querySelector("#photo-3"),
    intensity: 0.4,
    image1: "./images/pic-1.jpg",
    image2: "./images/pic-1.jpg",
    displacementImage: "./images/heightMap.png",
    angle: Math.PI/8,
});

var photo4 = new hoverEffect({
    parent: document.querySelector("#photo-4"),
    intensity: 0.4,
    image1: "./images/pic-4.jpg",
    image2: "./images/pic-4.jpg",
    displacementImage: "./images/heightMap.png",
    angle: Math.PI/8,
});
