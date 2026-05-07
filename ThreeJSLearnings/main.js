import * as THREE from 'three';

//copy paste code for first animation

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

function animate( time ) {

  cube.rotation.x = time / 2000;
  cube.rotation.y = time / 1000;

  renderer.render( scene, camera );

  requestAnimationFrame(animate)

}

animate()


// Scene the virtual world created 

// camera --> view
// FOV field of view 
// aspect ratio
// near or far  // kitne pass ki chije and kitne door ki chize camera dikha sakta hai

// mess -> object ( mesh in 3 js language)-- > it have shape and material

// Light -> world ( scene ) mai light
// directional light ( do not spread like light bulbs )
// Point bulb -> spreads like a bulb

