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





//  DOING THE CODE

import * as THREE from "three" // import everything from three package 


//  scene creation
const scene = new THREE.Scene()

// camera for the view ( currently using perspective camer)
const camera = new THREE.PerspectiveCamera(75, innerWidth/innerHeight, 0.1, 1000)
// Perspective camers demands fov( default 75 degree ( use 75 as default one change only when created something unnique)), aspect ratio (innerWidth/innerHeight),  near ( min ditance from the camera if object goes lower than this diatance than camera ignores do not sees it), far ( obj if gone out of the maxdistance will be hidden)

// three js mai unit nahi hoti , numbers hote hai bas

// innerWidth and Height are the width and height of what browser allows , aspect ratio is ration of width and height


//  add camera in scene
scene.add(camera)


/* MESH => {Shape & Material} */

// creating cobe
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1)
// cobe have height width and depth 1, 1, 1
const cubeMaterial = new THREE.MeshStandardMaterial({
     color: 0x00FF00  // genrally in three js given in hex value
    // 0x00FF00 green
})

const cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
scene.add(cube)






