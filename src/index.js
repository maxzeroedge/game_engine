// require('./gengine');
var THREE = window.THREE = require('three');
require('three/examples/js/loaders/GLTFLoader');
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 25, window.innerWidth / window.innerHeight, 0.1, 20000 );
camera.position.set(1, 1, 20);
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth*0.8, window.innerHeight*0.8 );
addEvents()
document.getElementById('mainBody').appendChild( renderer.domElement );

function load3DModel(){
    var loader = new THREE.GLTFLoader();

    // https://sketchfab.com/3d-models/pony-cartoon-885d9f60b3a9429bb4077cfac5653cf9

    loader.load( 'assets/models/pony_cartoon_car/scene.gltf', 
        function ( gltf ) {
            scene.add( gltf.scene );
            console.log(gltf.animations); // Array<THREE.AnimationClip>
            console.log(gltf.scene); // THREE.Scene
            console.log(gltf.scenes); // Array<THREE.Scene>
            console.log(gltf.cameras); // Array<THREE.Camera>
            console.log(gltf.asset); // Object
            renderer.render( scene, camera );
        },
        function ( xhr ) { // called while loading is progressing
            console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
        }, 
        function ( error ) {
            console.error( error );
    } );
}

function drawCube(scene, camera, i, color){
    // Draw the cube
    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var material = new THREE.MeshBasicMaterial( { color: color } );
    var cube = new THREE.Mesh( geometry, material );
    cube.rotation.x += 0.25;
    cube.rotation.y += 0.75;
    cube.position.x += i*0.25;
    // cube.position.y += i*0.75;
    // cube.position.z += i*0.25;
    // cube.rotation.z += 0.5;
    scene.add( cube );
}

var colors = [0xc06674, 0x00ff00, 0xfaebd7, 0x5db8b0, 0xc1c7d0, 0xad2f38, 0x363b48, 0x360888];

function animate() {
    requestAnimationFrame( animate );
    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;
    // cube.rotation.z += 0.01;
	renderer.render( scene, camera );
}
load3DModel();
animate();
// for(var i = -5; i <= 5; i++){
//     drawCube(scene, camera, i, colors[ (i+10) % colors.length ]);
// }

function addEvents(){
    window.addEventListener('resize', function(){
        renderer.setSize( window.innerWidth*0.8, window.innerHeight*0.8 );
        animate();
    });
    window.addEventListener('wheel', function(e){
        if(camera.position.z > e.deltaY){
            camera.position.z -= e.deltaY;
        }
        console.log(e.deltaY);
    });
}