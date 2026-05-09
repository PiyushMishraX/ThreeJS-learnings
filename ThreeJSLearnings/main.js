// import * as THREE from 'three';

// //copy paste code for first animation

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize( window.innerWidth, window.innerHeight );
// renderer.setAnimationLoop( animate );
// document.body.appendChild( renderer.domElement );

// const geometry = new THREE.BoxGeometry( 1, 1, 1 );
// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// const cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

// camera.position.z = 5;

// function animate( time ) {

//   cube.rotation.x = time / 2000;
//   cube.rotation.y = time / 1000;

//   renderer.render( scene, camera );

//   requestAnimationFrame(animate)

// }

// animate()


// Scene the virtual world created 

// camera --> view
// FOV field of view 
// aspect ratio
// near or far  // kitne pass ki chije and kitne door ki chize camera dikha sakta hai

// mess -> object ( mesh in 3 js language)-- > it have shape and material

// Light -> world ( scene ) mai light
// directional light ( do not spread like light bulbs )
// Point bulb -> spreads like a bulb





//  DOING THE CODE ------------------------------>>>>

import * as THREE from "three" // import everything from three package 
import { objectGroup } from "three/src/nodes/core/UniformGroupNode.js"


//  scene creation
const scene = new THREE.Scene()

// camera for the view ( currently using perspective camer)
const camera = new THREE.PerspectiveCamera(75, innerWidth/innerHeight, 0.1, 1000)
// Perspective camers demands fov( default 75 degree ( use 75 as default one change only when created something unnique)), aspect ratio (innerWidth/innerHeight),  near ( min ditance from the camera if object goes lower than this diatance than camera ignores do not sees it), far ( obj if gone out of the maxdistance will be hidden)

// three js mai unit nahi hoti , numbers hote hai bas

// innerWidth and Height are the width and height of what browser allows , aspect ratio is ration of width and height


//  add camera in scene
scene.add(camera)


// console.log(camera.position) // both camera and cube are at 0,0,0 so have to change the diatances to really see the object

camera.position.z = 5

console.log(camera.position)




/* MESH => {Shape & Material} */

// creating cobe
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1)
// cobe have height width and depth 1, 1, 1
// const cubeMaterial = new THREE.MeshBasicMaterial({
const cubeMaterial = new THREE.MeshStandardMaterial({
     color: 0x00FF00  // genrally in three js given in hex value
    // 0x00FF00 green
})

const cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
scene.add(cube)

console.log(cube.position);



/* light ( needed to see the mesh in scene) */

const light = new THREE.DirectionalLight(0xFFFFFF, 1) // color( white ) and intensity
scene.add(light)

// console.log(light.position);

light.position.y = 4; // light just above the cube so only highlights the top part which so not see at the start // in early stage so we have to set z of it too // camera do not see the top , it sees front but lght do not higlight to front
light.position.z = 4;
console.log(light.position);



/* Rederer */

// light will fall on the mesh(object ) and the camera captures it , we have to calulate everything such as angles, directions , intensity extra for rendering , this work is done by renderer ( renderer does calculation , create image) and use html element to show


const renderer = new THREE.WebGLRenderer()
renderer.setSize(innerWidth, innerHeight)

document.body.appendChild(renderer.domElement) // renderer creates a domElement with the image and we can show the image by adding this element in document ( we see the world of threeJS scene thorugh this)

// renderer have to render multiple times because the position size lighting etc changes overtime which have to be renderered again so we use  webGLrenderer which renders 16 times every second  and do the calculation and show in image 

// for this we have to create a function 
// caluclate how light interacts with  the object and rerenders
function animate() {
    renderer.render(scene,camera) 

}

renderer.setAnimationLoop(animate)// calls the function repeatedily
