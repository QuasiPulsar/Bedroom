// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(0, 2, 5); // Set camera position

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add floor
const floorGeometry = new THREE.PlaneGeometry(10, 10);
const floorMaterial = new THREE.MeshBasicMaterial({ color: 0xaaaaaa, side: THREE.DoubleSide });
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.rotation.x = -Math.PI / 2;
scene.add(floor);

// Add walls
const wallGeometry = new THREE.BoxGeometry(10, 15, 0.2);
const wallMaterial = new THREE.MeshPhongMaterial({ color: 0x2DEFFD });

const backWall = new THREE.Mesh(wallGeometry, wallMaterial);
backWall.position.z = -5;
scene.add(backWall);

const leftWall = new THREE.Mesh(wallGeometry, wallMaterial);
leftWall.position.x = -5;
leftWall.rotation.y = Math.PI / 2;
scene.add(leftWall);

const rightWall = new THREE.Mesh(wallGeometry, wallMaterial);
rightWall.position.x = 5;
rightWall.rotation.y = -Math.PI / 2;
scene.add(rightWall);

const frontWall = new THREE.Mesh(wallGeometry, wallMaterial);
frontWall.position.z = 5;
scene.add(frontWall);

// Lighting
const ambientLight = new THREE.AmbientLight(0x404040); // Ambient light to provide some base illumination
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(0, 1, 0);
directionalLight.castShadow = true; // Enable shadow casting
scene.add(directionalLight);

// Set up shadow properties for the light
directionalLight.shadow.mapSize.width = 1024;
directionalLight.shadow.mapSize.height = 1024;
directionalLight.shadow.camera.near = 0.5;
directionalLight.shadow.camera.far = 10;

// Set up shadow properties for the walls
backWall.receiveShadow = true;
leftWall.receiveShadow = true;
rightWall.receiveShadow = true;
frontWall.receiveShadow = true;

// Add a window
const windowGeometry = new THREE.PlaneGeometry(3, 3);
const windowMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0 });
const windowMesh = new THREE.Mesh(windowGeometry, windowMaterial);
windowMesh.position.set(0, 3.5, 5);
windowMesh.rotation.y = Math.PI / 2;
scene.add(windowMesh);

// Add a bed
const bedGeometry = new THREE.BoxGeometry(2, 0.5, 3);
const bedMaterial = new THREE.MeshPhongMaterial({ color: 0xFF8000 }); // Using MeshPhongMaterial for better shading
const bed = new THREE.Mesh(bedGeometry, bedMaterial);
bed.position.set(0, 0.25, -1.5);
scene.add(bed);
// Add headboard
const headboardGeometry = new THREE.BoxGeometry(2, 1.4, 0.1); // Adjust size as needed
const headboardMaterial = new THREE.MeshPhongMaterial({ color: 0xFF8000 }); // Same color as the bed frame
const headboard = new THREE.Mesh(headboardGeometry, headboardMaterial);
headboard.position.set(0, 1, -2.5); // Position above the bed
scene.add(headboard);
// Add footboard
const footboardGeometry = new THREE.BoxGeometry(2, 0.5, 0.1); // Adjust size as needed
const footboardMaterial = new THREE.MeshPhongMaterial({ color: 0xFF8000 }); // Same color as the bed frame
const footboard = new THREE.Mesh(footboardGeometry, footboardMaterial);
footboard.position.set(0, 0.25, -0.5); // Position at the end of the bed
scene.add(footboard);
// Add bedding (sheets)
const sheetsGeometry = new THREE.BoxGeometry(1.8, 0.1, 2.8); // Adjust size as needed to fit the bed
const sheetsMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff }); // White color for sheets
const sheets = new THREE.Mesh(sheetsGeometry, sheetsMaterial);
sheets.position.set(0, 0.6, -1.5); // Position on top of the bed frame
scene.add(sheets);



// Define the pillow parameters
const pillowRadius = 0.3; // Adjust the radius of the pillow
const pillowSegments = 32; // Number of segments for smoother curvature

// Create the pillow geometry
const pillowGeometry = new THREE.SphereGeometry(pillowRadius, pillowSegments, pillowSegments);

// Create the material for the pillows
const pillowMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff }); // White color for pillows

// Create the pillow mesh
const pillow1 = new THREE.Mesh(pillowGeometry, pillowMaterial);
const pillow2 = new THREE.Mesh(pillowGeometry, pillowMaterial);

// Position the pillows
pillow1.position.set(-0.4, 0.72, -2); // Position first pillow
pillow2.position.set(0.4, 0.72, -2); // Position second pillow

// Scale the pillows to adjust their shape
pillow1.scale.set(0.7, 0.4, 0.8); // Adjust the scale as needed to shape the pillow
pillow2.scale.set(0.7, 0.4, 0.8); // Adjust the scale as needed to shape the pillow

// Add the pillows to the scene
scene.add(pillow1);
scene.add(pillow2);



// Add a blue carpet
const carpetGeometry = new THREE.PlaneGeometry(8, 8); // Adjust the size as needed
const carpetMaterial = new THREE.MeshBasicMaterial({ color: 0x000082 }); // Blue color
const carpet = new THREE.Mesh(carpetGeometry, carpetMaterial);
carpet.rotation.x = -Math.PI / 2; // Lay the carpet flat on the floor
carpet.position.y = 0.01; // Set a small offset to avoid z-fighting with the floor
scene.add(carpet);


// Add a chair
const chairGeometry = new THREE.BoxGeometry(1, 1, 1);
const chairMaterial = new THREE.MeshBasicMaterial({ color: 0x333333 });
const chair = new THREE.Mesh(chairGeometry, chairMaterial);
chair.position.set(3, 0.5, -2);
scene.add(chair);

// Render loop
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();


//I used GPT for the bed pillows and the frame thing.