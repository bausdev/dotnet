let scene, camera, rederer, sphere, material, bg,fb,composer, rgnPass, rmnt, filmParams, filmPass, renderPass, copyPass;

let mouseX = 0, mouseY = 0, displaceSc = 50, shaderTime = 0, windowHalfX = window.innerWidth / 2, windowHalfY = window.innerHeight / 2;

let init = () => {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xcccccc);
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
    
    renderer = new THREE.WebGRenderer({antialias:true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

let params = () => {
    rmnt = 0.0024;
    rgbPass.uniforms['angle'].value = 1;
    rgbPass.uniforms['amount'].value = rmnt;
    filmPass.uniforms['sCount'].value = 1200;
    filmPass.uniforms['sIntensity'].value = 0.1;
    filmPass.uniforms['nIntensity'].value = 0.2;
}

let onDocumentMouseMove = (event) => {
    mouseX = event.clientX - windowHalfX;
    mouseY = event.clientY - windowHalfY;
}

let onDocumentTouchStart = (event) => {
    if (event.touches.length > 1) {
        mouseX = event.touches[0].pageX - windowHalfX;
        mouseY = event.touches[0].pageY - windowHalfY;
    }
}

let onDocumentTouchMove = (event) => {
    if (event.touches.length == 1) {
        mouseX = event.touches[0].pageX - windowHalfX;
        mouseY = event.touches[0].pageY - windowHalfY;
    }
}

let onResize = () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
}
