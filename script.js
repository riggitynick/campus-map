




// window.onload = () => {
//     let testEntityAdded = false;

//     const el = document.querySelector("[gps-new-camera]");

//     el.addEventListener("gps-camera-update-position", e => {
//         if(!testEntityAdded) {
//             alert(`Got first GPS position: lon ${e.detail.position.longitude} lat ${e.detail.position.latitude}`);
//             // Add a box to the north of the initial GPS position
//             /////////////////////////////////////////////////
//             const entity = document.createElement("a-box");
//             entity.setAttribute("scale", {
//                 x: 20, 
//                 y: 20,
//                 z: 20
//             });
//             entity.setAttribute('material', { color: 'purple' } );
//             entity.setAttribute('gps-new-entity-place', {
//                 latitude: e.detail.position.latitude + 0.001,
//                 longitude: e.detail.position.longitude
//             });
//             document.querySelector("a-scene").appendChild(entity);
//         }
//         testEntityAdded = true;
//     });
// };
  





// window.onload = () => {
  
//              let newModels = staticLoadNewModels();
//              renderNewModel(newModels);

//             function staticLoadNewModels() {
//                  return [
              
//             // //        //JANESVILLE
//              {location: {lat: 42.72652189433353,  lng:   -88.98137987068479},},
//              {location: {lat: 42.72614710822972,  lng:   -88.98136090663259},},
            
//                         ];
//                         }

//                        function renderNewModel(newModels) {

//                         newModels.forEach((newModel) => {
//                              let latitudeNewModel = newModel.location.lat;
//                              let longitudeNewModel = newModel.location.lng;

//             const modelNewModel = document.createElement("a-entity");
//             modelNewModel.setAttribute('gltf-model', 'models/dogParkWaterFeature.gltf');
//             modelNewModel.setAttribute("scale", '25 25 25');

//             modelNewModel.setAttribute('gps-new-entity-place', `latitude: ${latitudeNewModel}; longitude: ${longitudeNewModel};`);

//             document.querySelector("a-scene").appendChild(newModels);
          
//         });
//     }
//         };









// ///////////////////////////////////////////////////////////////
    
  





        


// import * as THREE from 'three';
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// const controls = new OrbitControls( camera, renderer.domElement );
// const loader = new GLTFLoader();






// window.onload = () => {navigator.geolocation.getCurrentPosition((position) => {
//     document.querySelector('a-camera').setAttribute('gps-entity-place', `latitude: ${position.coords.latitude}; longitude: ${position.coords.longitude};`)
 
       
//   });
//  }

AFRAME.registerComponent('getCenterPoint',{ 

    init: function () {
  
  var el = this.el;
     // el.setAttribute('dynamic-body','');
  
    const geometry = mesh.geometry;
    geometry.computeBoundingBox();
    var center = new THREE.Vector3();
    geometry.boundingBox.getCenter(center);
    mesh.localToWorld(center);
    
  
  
    
  
    return center;
  }
  });




///////////////////////////////////////////////////////////////////////////////////////////////
AFRAME.registerComponent('rotation-reader', {
   
    tick: (function () {
      var position = new THREE.Vector3();
      var quaternion = new THREE.Quaternion();
  
      return function () {
        this.el.object3D.getWorldPosition(position);
        this.el.object3D.getWorldQuaternion(quaternion);
        // position and rotation now contain vector and quaternion in world space.
      };
    })
  });

  AFRAME.registerComponent('rotation-reader', {
   
    tick: (function () {
      var position = new THREE.Vector3();
      var quaternion = new THREE.Quaternion();
  
      return function () {
        this.el.object3D.getWorldPosition(position);
        this.el.object3D.getWorldQuaternion(quaternion);
        // position and rotation now contain vector and quaternion in world space.
      };
    })
  });

    
  window.onload = () => {navigator.geolocation.getCurrentPosition((position) => {
    document.querySelector('a-camera').setAttribute('gps-entity-place', `latitude: ${position.coords.latitude}; longitude: ${position.coords.longitude};`)
 
       
  });
  };
 


  window.onload = () => {
    // setTimeout(() => {
    let places = staticLoadPlaces();
    return renderPlaces(places);
    // }, 3000)

    function staticLoadPlaces() {
      return [{
        name: "Your place name",
        location: {
          lat: 43.903165, // change here latitude if using static data
          lng: -78.947519, // change here longitude if using static data
        }
      }];
    }

    function renderPlaces(places) {
      let scene = document.querySelector('a-scene');

      places.forEach((place) => {
        let latitude = place.location.lat;
        let longitude = place.location.lng;

        // add place name
        let text = document.createElement('a-link');
        text.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
        text.setAttribute('title', place.name);
        text.setAttribute('href', 'http://www.example.com/');
        text.setAttribute('scale', '15 15 15');

        text.addEventListener('loaded', () => {
          window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
        });

         scene.appendChild(text);
      });
    }}

  





//GET GEOLOCATION ON LOAD
//   window.onload = () => {navigator.geolocation.getCurrentPosition((position) => {
//     document.querySelector('a-entity').setAttribute('gps-entity-place', `latitude: ${position.coords.latitude}; longitude: ${position.coords.longitude};`)     
//   });
//  }








//  AFRAME.registerComponent('rotation-reader', {
        
//     tick: (function () {
//       var position = new THREE.Vector3();
//       var quaternion = new THREE.Quaternion();

//       return function () {
//         this.el.object3D.getWorldPosition(position);
//         this.el.object3D.getWorldQuaternion(quaternion);
   
    
//       };
//     })
//   });







 
//  /////MAY DELETE AND REDO ALLLL OF THIS:::

//  AFRAME.registerComponent('collect-disappear', {
//     // schema: {
 
//     init: function () {
  
//       var el = this.el;  // <a-box>
//       // var defaultColor = el.getAttribute('material').color;
  
//       var ringSound = document.getElementById('ringSound');
  
//       el.addEventListener('collide', function () {
  
//         ringSound.play();
  
//        // el.setAttribute('scale', '0 0 0');
//         el.remove();
       
//         console.log('collect disappear fired');
//         count +=1;
//         button.innerHTML = "Score: " + count;
  
  
//       });
 
//     }
//   });
  

  
  
        
             
            //     window.onload = () => {navigator.geolocation.getCurrentPosition((position) => {
            //       document.querySelector('a-camera').setAttribute('gps-new-entity-place', `latitude: ${position.coords.latitude}; longitude: ${position.coords.longitude};`)
               
                     
            //     });
            //    }
              
        




            
            //MAKES IT MORE SPECIFIC, AND CAN BE DUBLICATED FOR MULTIPLE OBJECTS
            var button = document.getElementById("clickme"),
            count = 0;
  
            AFRAME.registerComponent("points", {
           
              init: function() {
              
               this.el.addEventListener("collide", () => { 
                  // count +=0.5;
                  //  button.innerHTML = "Score: " + count;
                   
                   if (count === 10){
                    document.getElementById("winPopup").style.display ="unset";
                   }});
              }
            });
////////////////////////////////////////////////////////


// window.onload = () => {
//     let testEntityAdded = false;

//     const el = document.querySelector("[gps-new-camera]");

//     el.addEventListener("gps-camera-update-position", e => {
//         if(!testEntityAdded) {
//             alert(`Got first GPS position: lon ${e.detail.position.longitude} lat ${e.detail.position.latitude}`);
//             // Add a box to the north of the initial GPS position
//             /////////////////////////////////////////////////
//             const entity = document.createElement("a-box");
//             entity.setAttribute("scale", {
//                 x: 20, 
//                 y: 20,
//                 z: 20
//             });
//             entity.setAttribute('material', { color: 'red' } );
//             entity.setAttribute('gps-new-entity-place', {
//                 latitude: e.detail.position.latitude + 0.001,
//                 longitude: e.detail.position.longitude
//             });
            
//         }
//         testEntityAdded = true;
//     });
// };

// document.querySelector("a-scene").appendChild(entity);






        
              //  TEST FOR ADDING MULTIPLE STARBUCKS LOCATIONS of one object type
          
          
        window.onload = () => {
          //THE LOCATION ARRAYS OF WHERE OUR DIFFERENT BUSINESSES WILL BE
          
          let placesWaterFeat = staticLoadPlacesWaterFeat();
          let placesTrees = staticLoadPlacesTrees();
          let placesRestroom = staticLoadPlacesRestroom();
          
         //RENDER THOSE LOCATIONS
         
          renderPlacesWaterFeat(placesWaterFeat);
           renderPlacesTrees(placesTrees);
           renderPlacesRestroom(placesRestroom);
           
  
        };
        
        
        
        
        /////////////////////////////// Gathers coords of user, for comparison of object coords
        
                function locationSize()  {}
                if(navigator.geolocation) {
                 navigator.geolocation.getCurrentPosition((position) => {
                   location.lat = position.coords.latitude;
                   location.long = position.coords.longitude;
                       console.log(location.lat); 
                  })};
        







                  




            ///////////////////////////////////////






        
      //////////////////////////////////////// 
        
        //THE WATER FEATURE LOCATIONS
        function staticLoadPlacesWaterFeat() {
          return [
          
             //JANESVILLE
                   {location: {lat: 42.72652189433353,  lng:   -88.98137987068479},},
  {location: {lat: 42.72614710822972,  lng:   -88.98136090663259},},

//   {position: {x: 0, y: 0, z: 0},},
        
                 ];
                 }
            
        //RENDER THE SECOND(CU) BUSINESS' 3D MODEL OR LOGO - AND SET THE OBJECTS ATTRIBUTES
         function renderPlacesWaterFeat(placesWaterFeat) {
          let sceneWaterFeat = document.getElementById('scene');
            placesWaterFeat.forEach((placeWaterFeat) => {
              let latitudeWaterFeat = placeWaterFeat.location.lat;
              let longitudeWaterFeat = placeWaterFeat.location.lng;
                let modelWaterFeat = document.createElement('a-entity');
        /////////////////
        
          
        //////////////////
        
              modelWaterFeat.setAttribute('gps-entity-place', `latitude: ${latitudeWaterFeat}; longitude: ${longitudeWaterFeat};`);
              modelWaterFeat.setAttribute('gltf-model', 'models/dogParkWaterFeature.gltf');
              // modelCU.setAttribute('gltf-model', 'models/dogParkParking.gltf');
              modelWaterFeat.setAttribute('scale', '25 25 25');
                   //allows to rotate
              modelWaterFeat.setAttribute('animation', 'property: rotation; to: 0 360 0; loop:true; dur: 18000; easing: linear');
              //light
              modelWaterFeat.setAttribute('light', "type: hemisphere; color: blue; intensity:0.3");
              
  
              modelWaterFeat.setAttribute('static-body','');
  
              modelWaterFeat.addEventListener('loaded', () => {
             window.dispatchEvent(new CustomEvent('gps-entity-place-loadedWaterFeat'))
             modelWaterFeat.setAttribute('position', `0 0 0;`);
         
              });
        
         //removes model when clicked
         modelWaterFeat.addEventListener('click', () => {
         

           document.getElementById("waterFeatPopup").style.display ="unset";
        
              });
         
            
  
              sceneWaterFeat.appendChild(modelWaterFeat);
          });
         }
        
        
        
        
        
  
        //THE TREE AND SHADE LOCATIONS
        function staticLoadPlacesTrees() {
          return [
            {location: {lat: 42.72652189433353,  lng:   -88.98137987068479},},
            {location: {lat: 42.72614710822972,  lng:   -88.98136090663259},},
       
        
        
                 ];
                 }
            
        //RENDER THE SECOND(CU) BUSINESS' 3D MODEL OR LOGO - AND SET THE OBJECTS ATTRIBUTES
         function renderPlacesTrees(placesTrees) {
          let sceneTrees = document.querySelector('a-scene');
            placesTrees.forEach((placeTrees) => {
              let latitudeTrees = placeTrees.location.lat;
              let longitudeTrees = placeTrees.location.lng;
                let modelTrees = document.createElement('a-entity');
        
        
                let p = location.lat + latitudeTrees;
                let t = location.long - longitudeTrees;
           
           let modelHeight = [(p + t) * 0.3];
        
        
              modelTrees.setAttribute('gps-new-entity-place', `latitude: ${latitudeTrees}; longitude: ${longitudeTrees};`);
              modelTrees.setAttribute('gltf-model', 'models/dogParkTrees.gltf');
              // modelCU.setAttribute('gltf-model', 'models/dogParkParking.gltf');
              modelTrees.setAttribute('scale', '25 25 25');
                   //allows to rotate
              modelTrees.setAttribute('animation', 'property: rotation; to: 0 360 0; loop:true; dur: 6000; easing: linear');
              modelTrees.addEventListener('loaded', () => {
             window.dispatchEvent(new CustomEvent('gps-new-entity-place-loadedTrees'))
             modelTrees.setAttribute('position', `0 ${modelHeight} 0;`);
         
              });
        
         //removes model when clicked
         modelTrees.addEventListener('click', () => {
        
           document.getElementById("treesPopup").style.display ="unset";
        
              });
         
              sceneTrees.appendChild(modelTrees);
          });
         }
        
        
        
        
        //Restrooms
        function staticLoadPlacesRestroom() {
          return [
            {location: {lat: 42.72652189433353,  lng:   -88.98137987068479},},
            {location: {lat: 42.72614710822972,  lng:   -88.98136090663259},},
            {location: {lat: 42.726269387373684,  lng:   -88.98129971260452},},
         
                 ];
                 }
            
        
         function renderPlacesRestroom(placesRestroom) {
          let sceneRestroom = document.querySelector('a-scene');
            placesRestroom.forEach((placeRestroom) => {
              let latitudeRestroom = placeRestroom.location.lat;
              let longitudeRestroom = placeRestroom.location.lng;
                let modelRestroom = document.createElement('a-entity');
        
        
        
              modelRestroom.setAttribute('gps-entity-place', `latitude: ${latitudeRestroom}; longitude: ${longitudeRestroom};`);
              modelRestroom.setAttribute('gltf-model', 'models/GreenDiamond.gltf');
            
              modelRestroom.setAttribute('scale', '50 50 50');
   
              modelRestroom.setAttribute('animation', 'property: rotation; to: 0 360 0; loop:true; dur: 6000; easing: linear');
               modelRestroom.setAttribute('static-body','');
              
              modelRestroom.addEventListener('loaded', () => {
             window.dispatchEvent(new CustomEvent('gps-entity-place-loadedRestroom'))
          
         
              });
        
        
         modelRestroom.addEventListener('click', () => {
         
           document.getElementById("restroomPopup").style.display ="unset";
        
              });
         
          
  
              sceneRestroom.appendChild(modelRestroom);
          });
         }
        
        
    
        
  
        function removeParkingPopup(){
          document.getElementById("parkingPopup").style.display = "none";
        
        }
        
        function removeTrashPopup(){
          document.getElementById("trashPopup").style.display = "none";
        
        }
        
        
        function removeWaterFeatPopup(){
          document.getElementById("waterFeatPopup").style.display = "none";
        
        }
        
        function removeTreesPopup(){
          document.getElementById("treesPopup").style.display = "none";
        
        }
        
        function removeRestroomPopup(){
          document.getElementById("restroomPopup").style.display = "none";
        
        }
        
        function removeShelterPopup(){
          document.getElementById("shelterPopup").style.display = "none";
        
        }
        
        function removeGatePopup(){
          document.getElementById("gatePopup").style.display = "none";
        
        }
        
        
        
        
        
        
        
        
  function removeSplash(){
    document.getElementById("splashscreen").remove();
  };
  
  function removeWinPopup(){
  document.getElementById("winPopup").style.display = "none";
  };
