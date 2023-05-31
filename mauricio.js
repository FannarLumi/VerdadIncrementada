const loader = new THREE.GLTFLoader();

loader.load('./mauricio.glb', function(gltf) {
  const model = gltf.scene;
  // Haz las transformaciones necesarias al modelo, como escalarlo o rotarlo
  // Añade el modelo a la escena
  scene.add(model);
});

const material = new THREE.MeshPhongMaterial({
    color: new THREE.Color("rgb(255,128,0)"), 
    shininess: 6,
    flatShading: true,
    transparent: true,
    opacity: 0.8
  });
  
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);