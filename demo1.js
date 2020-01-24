// demo1.js

var camera, scene, renderer;
var geometry, material, box;


init();
animate();

function init() {

	scene = new THREE.Scene();

	geometry = new THREE.BoxGeometry();
	material = new THREE.MeshNormalMaterial();
	box = new THREE.Mesh( geometry, material );
    scene.add( box );
    
    var fov = 70;
    var aspect = window.innerWidth / window.innerHeight;
    var near = 0.10;
    var far = 100;
    camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
	camera.position.z = 4;

	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );

}

function animate() {
	requestAnimationFrame( animate );
    autoRotate();
	renderer.render( scene, camera );
}

function autoRotate() {
	box.rotation.x += 0.01;
	box.rotation.y += 0.02;
}