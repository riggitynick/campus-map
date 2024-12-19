
////////////////// LITERALLY JUST ADDED THIS TO REMOVE A CONSOLE ERROR
// const user = document.querySelector("a-camera");
// const center = new THREE.Vector3();
// user.getCenter( center );


//AFRAME.registerComponent('make-dynamic', {
   
  
  //init: function () {
   // var data = this.data;
   // var el = this.el;  // <a-box>
    // var defaultColor = el.getAttribute('material').color;
    //var el = this.el;

   //var test = document.querySelectorAll('a-entity');

    //const boundingBox = new THREE.Box3('');
    //const center = boundingBox.getCenter('test');

    //console.log(center);
    // get bounding box of object - this will be used to setup controls and camera
  //  boundingBox.setFromObject(center);
    
   
    
    //const size = boundingBox.getSize();


    
    //var center = this.el.getCenter(target);
   //console.log(center);
     // el.setAttribute('dynamic-body', '');
   
    

  //}
//});


// const b = new THREE.Vector3( );
// this.getCenter();
// console.log(b);







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



//getCenterPoint(mesh);

// let center = new THREE.Vector3(); 
// geometry.boundingBox.getCenter(center);



/////////////////////////////////////////////// THIS WILL NEED TO GO IN THE MODEL CREATION/RENDER
// var centerTrash = new THREE.Vector3();
//          modelTrash.getCenter( centerTrash );



//require('aframe-physics-system');
//MAKES OBJECT THAT YOU COLLIDE WITH DISAPPEAR, PLAYS A RING SOUND, AND ADDS 1 POINT TO YOUR SCORE      
AFRAME.registerComponent('collect-disappear', {
  // schema: {
  //   color: {default: 'red'}
  // },



  init: function () {
    
   

    var el = this.el;  // <a-box>
    // var defaultColor = el.getAttribute('material').color;

   



    var ringSound = document.getElementById('ringSound');

    el.addEventListener('collide', function () {

      ringSound.play();

     // el.setAttribute('scale', '0 0 0');
      el.remove();
     
      console.log('collect disappear fired');
      count +=1;
      button.innerHTML = "Score: " + count;

     




    });



  }
});

// pads.forEach((pad, index) =>{

//   pad.addEventListener('click', function(){
                       
//       sounds[index].currentTime = 0;
//       sounds[index].play();

//       accentColor1(index);
//   })   
// });











         // SCRIPT FOR SCORING
          // AFRAME.registerComponent("points", {
         
          //   init: function() {
          //     var button = document.getElementById("clickme"), //can remove for more specificity
          //     count = -0.5; //can remove for more specificity
              
          //    this.el.addEventListener("click", () => { 
          //        count +=0.5;
          //        button.innerHTML = "Score: " + count;
                 

          //        if (count === 20){
          //         document.getElementById("winPopup").style.display ="unset";
          //        }});
          //   }
          // });




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





  

             

          // AFRAME.registerComponent('collect-remove', {
   
  
          //   init: function () {
          //    // var data = this.data;
          //    // var el = this.el;  // <a-box>
          //     // var defaultColor = el.getAttribute('material').color;
          
          //     this.addEventListener('click', function () {
          //       this.setAttribute('scale', '3 3 3');
             
          //     });
          
          //   }
          // });
                   
      
      
      function mapView(){
        //make this the legend page
            window.open("legend.html");
        }
      
      AFRAME.registerComponent('rotation-reader', {
      
          tick: (function () {
            var position = new THREE.Vector3();
            var quaternion = new THREE.Quaternion();

           // var target = new THREE.Vector3();




            // var target = 1;
            // let bBox = new THREE.Box3().setFromObject(this.selected)
            //     // const center = new THREE.Vector3();
            //       bBox.getCenter( position );


            // quaternion.getCenter(position);

           

        
            return function () {
              this.el.object3D.getWorldPosition(position);
              this.el.object3D.getWorldQuaternion(quaternion);
          
              
              
          
   
          
              //   this.el.object3D.getCenter( position );

          
//  function getCenterPoint(mesh) {
           // var geometry = this.geometry;
           // geometry.computeBoundingBox();
           // var center = new THREE.Vector3();
            //mesh.localToWorld( center );
           // return center;
     //   }
      

// getCenterPoint();



              // position and rotation now contain vector and quaternion in world space.
            };
          })
        });
          
        
        
            // here we register che 'clickhandler' component
            AFRAME.registerComponent("clickhandler2", {
              init: function() {
                // we add the click event listener to any instance of this component
                this.el.addEventListener("click", () => {  
                // this.el.setAttribute('animation__2', 'property: position; to: 4 -2 0; duration:1000'),
                  
                this.el.remove();
                  
        
                  });
              }
            });
      
      
     



      
      
      
            //Leprino
        //     AFRAME.registerComponent("leprino", {
        //       init: function() {
        //        this.el.addEventListener("click", () => {  
        //        window.open("https://www.cuanschutz.edu/", "Leprino");
        //        });
        //       }
        //     });
         
        //        //New next to AO1
        //          AFRAME.registerComponent("mysteryao1", {
        //          init: function() {
        //           this.el.addEventListener("click", () => {  
        //           window.open("https://www.cuanschutz.edu/", "New bldg");
        //           });}});
        // //biotech1
        // AFRAME.registerComponent("biotech1", {
        //   init: function() {
        //    this.el.addEventListener("click", () => {  
        //    window.open("https://www.cuanschutz.edu/", "Bioengineering 1");
        //       });}});
      
      
      
      
      
      
      
      
                    //testcorner  - THIS ONE OPENS THE POPUP.
                // AFRAME.registerComponent("testcorner", {
                //   init: function() {
                //    this.el.addEventListener("click", () => {  
                //   document.getElementById("hwPopup").style.display ="unset";
                //       });}});
      
      
      
      
      //SHOWS AND REMOVES THE POPUPS
      
      
      
      
      
          //healthandwellness  - THIS ONE OPENS THE POPUP.
      
      
      
      
      
      
      
      //     AFRAME.registerComponent("healthandwellness", {
      //       init: function() {
      //        this.el.addEventListener("click", () => {  
      //       //  window.open("http://www.google.com", "new win");     - this opens a new window w/ no popup
      //        document.getElementById("hwPopup").style.display ="unset";
      //           });}});
      
                
      // function removeHwPopup(){
      //   document.getElementById("hwPopup").style.display = "none";
      
      
      
      
        // this.style.display = "none";
      
        // this.el.addEventListener("click", () => {  
          // this.el.setAttribute('animation__2', 'property: position; to: 4 -2 0; duration:1000'),
            
          // this.el.style.display(none);
            
      
            // });
        //document.getElementsByClassName("testPopup").style.display = "none";
        // this.remove();
      //};
      
      
      
      
      // //402 
      //     AFRAME.registerComponent("b402", {
      //       init: function() {
      //        this.el.addEventListener("click", () => {  
      //        document.getElementById("b402Popup").style.display ="unset";
      //           });}});
         
      // function remove402Popup(){
      //   document.getElementById("b402Popup").style.display = "none";
      // };
      
      // //401 
      // AFRAME.registerComponent("b401", {
      //   init: function() {
      //    this.el.addEventListener("click", () => {  
      //    document.getElementById("b401Popup").style.display ="unset";
      //       });}});
      
      // function remove401Popup(){
      // document.getElementById("b401Popup").style.display = "none";
      // };
      
      // //400 
      // AFRAME.registerComponent("b400", {
      //   init: function() {
      //    this.el.addEventListener("click", () => {  
      //    document.getElementById("b400Popup").style.display ="unset";
      //       });}});
      
      // function remove400Popup(){
      // document.getElementById("b400Popup").style.display = "none";
      // };
      
      // //RC2 
      // AFRAME.registerComponent("rc2", {
      //   init: function() {
      //    this.el.addEventListener("click", () => {  
      //    document.getElementById("rc2Popup").style.display ="unset";
      //       });}});
      
      // function removeRc2Popup(){
      // document.getElementById("rc2Popup").style.display = "none";
      // };
      
      // //AO1
      // AFRAME.registerComponent("ao1", {
      //   init: function() {
      //    this.el.addEventListener("click", () => {  
      //    document.getElementById("ao1Popup").style.display ="unset";
      //       });}});
      
      // function removeAo1Popup(){
      // document.getElementById("ao1Popup").style.display = "none";
      // };
      
      // //rc1n
      // AFRAME.registerComponent("rc1n", {
      //   init: function() {
      //    this.el.addEventListener("click", () => {  
      //    document.getElementById("rc1nPopup").style.display ="unset";
      //       });}});
      
      // function removeRc1nPopup(){
      // document.getElementById("rc1nPopup").style.display = "none";
      // };
      
      // //rc1s
      // AFRAME.registerComponent("rc1s", {
      //   init: function() {
      //    this.el.addEventListener("click", () => {  
      //    document.getElementById("rc1sPopup").style.display ="unset";
      //       });}});
      
      // function removeRc1sPopup(){
      // document.getElementById("rc1sPopup").style.display = "none";
      // };
      
      // //pharmacy
      // AFRAME.registerComponent("pharmacy", {
      //   init: function() {
      //    this.el.addEventListener("click", () => {  
      //    document.getElementById("pharmacyPopup").style.display ="unset";
      //       });}});
      
      // function removePharmacysPopup(){
      // document.getElementById("pharmacyPopup").style.display = "none";
      // };
      
      // //b500
      // AFRAME.registerComponent("b500", {
      //   init: function() {
      //    this.el.addEventListener("click", () => {  
      //    document.getElementById("b500Popup").style.display ="unset";
      //       });}});
      
      // function removeB500Popup(){
      // document.getElementById("b500Popup").style.display = "none";
      // };
      
      // //barbdavis
      // AFRAME.registerComponent("barbdavis", {
      //   init: function() {
      //    this.el.addEventListener("click", () => {  
      //    document.getElementById("barbdavisPopup").style.display ="unset";
      //       });}});
      
      // function removeBarbdavisPopup(){
      // document.getElementById("barbdavisPopup").style.display = "none";
      // };
      
      // //library
      // AFRAME.registerComponent("library", {
      //   init: function() {
      //    this.el.addEventListener("c lick", () => {  
      //    document.getElementById("libraryPopup").style.display ="unset";
      //       });}});
      
      // function removeLibraryPopup(){
      // document.getElementById("libraryPopup").style.display = "none";
      // };
      
      // //nighthorse
      // AFRAME.registerComponent("nighthorse", {
      //   init: function() {
      //    this.el.addEventListener("click", () => {  
      //    document.getElementById("nighthorsePopup").style.display ="unset";
      //       });}});
      
      // function removeNighthorsePopup(){
      // document.getElementById("nighthorsePopup").style.display = "none";
      // };
      
      // //ed1
      // AFRAME.registerComponent("ed1", {
      //   init: function() {
      //    this.el.addEventListener("click", () => {  
      //    document.getElementById("ed1Popup").style.display ="unset";
      //       });}});
      
      // function removeEd1Popup(){
      // document.getElementById("ed1Popup").style.display = "none";
      // };
      
      // //dental 
      // AFRAME.registerComponent("dental", {
      //   init: function() {
      //    this.el.addEventListener("click", () => {  
      //    document.getElementById("dentalPopup").style.display ="unset";
      //       });}});
      
      // function removeDentalPopup(){
      // document.getElementById("dentalPopup").style.display = "none";
      // };
      
      // //fulgeneti
      // AFRAME.registerComponent("fulgeneti", {
      //   init: function() {
      //    this.el.addEventListener("click", () => {  
      //    document.getElementById("fulgenetiPopup").style.display ="unset";
      //       });}});
      
      // function removeFulgenetiPopup(){
      // document.getElementById("fulgenetiPopup").style.display = "none";
      // };
      
      // //ed2n
      // AFRAME.registerComponent("ed2n", {
      //   init: function() {
      //    this.el.addEventListener("click", () => {  
      //    document.getElementById("ed2nPopup").style.display ="unset";
      //       });}});
      
      // function removeEd2nPopup(){
      // document.getElementById("ed2nPopup").style.display = "none";
      // };
      
      // //ed2s
      // AFRAME.registerComponent("ed2s", {
      //   init: function() {
      //    this.el.addEventListener("click", () => {  
      //    document.getElementById("ed2sPopup").style.display ="unset";
      //       });}});
      
      // function removeEd2sPopup(){
      // document.getElementById("ed2sPopup").style.display = "none";
      // };
      
      // //campserve
      // AFRAME.registerComponent("campserve", {
      //   init: function() {
      //    this.el.addEventListener("click", () => {  
      //    document.getElementById("campservePopup").style.display ="unset";
      //       });}});
      
      // function removeCampservePopup(){
      // document.getElementById("campservePopup").style.display = "none";
      // };
      
      
      
                
                      
      
                        //test2

                // AFRAME.registerComponent("test2", {
                //   init: function() {
                //    this.el.addEventListener("click", () => {  
                //    window.open("http://www.safeway.com", "new win");
                //       });}});
               
               
      
      
      
          
          
           
          // SCRIPT FOR SCORING
            //  AFRAME.registerComponent("points", {
               
            //   init: function() {
            //     // we add the click event listener to any instance of this component
            //     var button = document.getElementById("clickme"),
            //     count = 0;
                
                
            //     this.el.addEventListener("click", () => { 
                  
                              
            //       count +=0.5;
            //       button.innerHTML = "Score: " + count;
            //         if (count === 30){
            //         window.alert("You win!");
            //       }
                  
        
            //       });
            //   }
            // });




        
        
          
        
        //    AFRAME.registerComponent('vanish', {
        //   // ...
        //   pause: function () {
            
        //     this.removeEventListener();
        //   }
        //   // ...
        // });
         
      
           
              window.onload = () => {navigator.geolocation.getCurrentPosition((position) => {
                document.querySelector('a-entity').setAttribute('gps-entity-place', `latitude: ${position.coords.latitude}; longitude: ${position.coords.longitude};`)
             
                   
              });
             }
            
      
      
            //  TEST FOR ADDING MULTIPLE STARBUCKS LOCATIONS of one object type
        
        
      window.onload = () => {
        //THE LOCATION ARRAYS OF WHERE OUR DIFFERENT BUSINESSES WILL BE
        // let placesParking = staticLoadPlacesParking();
        let placesTrash = staticLoadPlacesTrash();
        let placesWaterFeat = staticLoadPlacesWaterFeat();
        let placesTrees = staticLoadPlacesTrees();
        let placesRestroom = staticLoadPlacesRestroom();
        let placesShelter = staticLoadPlacesShelter();
        let placesGate = staticLoadPlacesGate();
        let placesMenu = staticLoadPlacesMenu();
       //RENDER THOSE LOCATIONS
        // renderPlacesParking(placesParking);  
        renderPlacesTrash(placesTrash);
        renderPlacesWaterFeat(placesWaterFeat);
         renderPlacesTrees(placesTrees);
         renderPlacesRestroom(placesRestroom);
         renderPlacesShelter(placesShelter);
         renderPlacesGate(placesGate);
         renderPlacesMenu(placesMenu);

      };
      
      
      
      
       //THE FIRST BUSINESS' LOCATIONS
      function staticLoadPlacesParking() {
       return [
      
   
      //       // home
             {location: {lat: 39.476687,  lng: -105.081950 ,},},
      
      
      
      
      
      
      
              ];
              }
              
      
      /////////////////////////////// Gathers coords of user, for comparison of object coords
      
              function locationSize()  {}
              if(navigator.geolocation) {
               navigator.geolocation.getCurrentPosition((position) => {
                 location.lat = position.coords.latitude;
                 location.long = position.coords.longitude;
                     console.log(location.lat); 
                })};
      
      
      
      //RENDER THE FIRST BUSINESS' 3D MODEL OR LOGO - AND SET THE OBJECTS ATTRIBUTES
      function renderPlacesParking(placesParking) {
       let scene = document.querySelector('a-scene');
      
       placesParking.forEach((place) => {
           let latitude = place.location.lat;
           let longitude = place.location.lng;
      
           let modelPark = document.createElement('a-entity');
      
      ////////////////////
      
      
           let p = location.lat + latitude;
           let t = location.long - longitude;
      
      let modelHeight = [(p + t) * 0.3];
      
         console.log(location.long);
      
      
         
           modelPark.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
           modelPark.setAttribute('gltf-model', 'models/dogParkParking2.gltf');
         
           //allows to rotate
           modelPark.setAttribute('animation', 'property: rotation; to: 0 360 0; loop:true; dur: 9000; easing: linear');
          modelPark.setAttribute('scale', `25 25 25;`);
          modelPark.addEventListener('loaded', () => {
          window.dispatchEvent(new CustomEvent('gps-entity-place-loadedPark'))
      
          modelPark.setAttribute('position', `0 ${modelHeight} 0;`);  
        
           });
      
      //removes model when clicked
      modelPark.addEventListener('click', () => {
        // modelPark.remove();
        //window.open("https://www.starbucks.com/menu?_branch_match_id=713537451166389183", "Starbucks Order");
        document.getElementById("parkingPopup").style.display ="unset";
             
           });
      
          scene.appendChild(modelPark);
       });
      }
      

    

      
      
      //THE TRASH CAN LOCATIONS
      function staticLoadPlacesTrash() {
       
        return [
                  

//Loveland

{location: {lat: 39.68032690012029,  lng:  -105.89797516967572},},    //chair2











      
               ];
               
                 
               }
           
           
      //RENDER THE SECOND(CU) BUSINESS' 3D MODEL OR LOGO - AND SET THE OBJECTS ATTRIBUTES
       function renderPlacesTrash(placesTrash) {
        
     
        let sceneTrash = document.querySelector('a-scene');
        

          placesTrash.forEach((placeTrash) => {
       

            let latitudeTrash = placeTrash.location.lat;
            let longitudeTrash = placeTrash.location.lng;
          
            

              let modelTrash = document.createElement('a-entity');

              
              
             
              let p = location.lat + latitudeTrash;
              let t = location.long - longitudeTrash;
         
         let modelHeight = [(p + t) * 0.33];

            modelTrash.setAttribute('gps-entity-place', `latitude: ${latitudeTrash}; longitude: ${longitudeTrash};`);
          
            modelTrash.setAttribute('gltf-model', 'models/dogParkTrash.gltf');
         
            // modelCU.setAttribute('gltf-model', 'models/dogParkParking.gltf');
            modelTrash.setAttribute('scale', '20 20 20');
          
                 //allows to rotate
            modelTrash.setAttribute('animation', 'property: rotation; to: 0 360 0; loop:true; dur: 6000; easing: linear');
            
           
           modelTrash.setAttribute('static-body','');
            //modelTrash.setAttribute('dynamic-body','');
           //modelTrash.setAttribute('kinematic-body','');


      
           



            modelTrash.addEventListener('loaded', () => {

             

              
              
  



           //   modelTrash.setAttribute('dynamic-body','');

              // modelTrash.setAttribute('static-body','');
              

           window.dispatchEvent(new CustomEvent('gps-entity-place-loadedTrash'))
          
          //  modelTrash.setAttribute('position', `0 2 0;`);
          modelTrash.setAttribute('position', `0 ${modelHeight} 0;`);
           
//           var center = boundingBox.getCenter(modelTrash);
// console.log(center);













 
 
       
            });
         
//Collision




// function getCenterPoint(mesh) {
//    var geometry = mesh.geometry;
//   geometry.computeBoundingBox();
//   var center = new THREE.Vector3();  
//   geometry.boundingBox.getCenter( center );
//   mesh.localToWorld( center );
  
//   return center;
// }

//  getCenterPoint(modelTrash);




        
        
   
   


////////////////////////////
//modelTrash.setAttribute('dynamic-body','');


  
   
   
   //modelTrash.setAttribute('dynamic-body','');


  //   modelTrash.setAttribute('kinematic-body','');

 // modelTrash.getCenter('dynamic-body','');
 
 // modelTrash.setAttribute('kinematic-body','');
// modelTrash.setAttribute('physics-collider','');

//modelTrash.setAttribute('make-dynamic', '');

  //modelTrash.setAttribute('points', '');

 // modelTrash.setAttribute('change-color-on-hover', '');
  
 



    
     

          //  modelTrash.addEventListener('collide', () => {
          //   //modelTrash.remove();
          //   modelTrash.setAttribute('scale', '10 10 10');
          //      });
    



   //THIS WORKS WITH CLICK
      // modelTrash.addEventListener('click', function () {
      // modelTrash.setAttribute('scale', '0 0 0');
      // console.log('you a jerk');
      // });



  // modelTrash.append(dynamic-body);

 
 
 
  // modelTrash.setAttribute('collect-disappear', '');
  // modelTrash.setAttribute('getCenterPoint', '');


      
sceneTrash.appendChild(modelTrash);


         


        });
          
       }
      
    
      
      
      //THE WATER FEATURE LOCATIONS
      function staticLoadPlacesWaterFeat() {
        return [
        
// JANESVILLE BRIAR CREST
{location: {lat: 42.72652189433353,  lng:   -88.98137987068479},},
{location: {lat: 42.72614710822972,  lng:   -88.98136090663259},},


      
               ];
               }
          
      //RENDER THE SECOND(CU) BUSINESS' 3D MODEL OR LOGO - AND SET THE OBJECTS ATTRIBUTES
       function renderPlacesWaterFeat(placesWaterFeat) {
        let sceneWaterFeat = document.querySelector('a-scene');
          placesWaterFeat.forEach((placeWaterFeat) => {
            let latitudeWaterFeat = placeWaterFeat.location.lat;
            let longitudeWaterFeat = placeWaterFeat.location.lng;
              let modelWaterFeat = document.createElement('a-entity');
      /////////////////
      
              let p = location.lat + latitudeWaterFeat;
              let t = location.long - longitudeWaterFeat;
         
         let modelHeight = [(p + t) * 0.4];
      //////////////////
      
            modelWaterFeat.setAttribute('gps-entity-place', `latitude: ${latitudeWaterFeat}; longitude: ${longitudeWaterFeat};`);
            modelWaterFeat.setAttribute('gltf-model', 'models/dogParkWaterFeature.gltf');
            // modelCU.setAttribute('gltf-model', 'models/dogParkParking.gltf');
            modelWaterFeat.setAttribute('scale', '25 25 25');
                 //allows to rotate
            modelWaterFeat.setAttribute('animation', 'property: rotation; to: 0 360 0; loop:true; dur: 18000; easing: linear');
            //light
            modelWaterFeat.setAttribute('light', "type: hemisphere; color: blue; intensity:0.3");
            //second animation
           // modelWaterFeat.setAttribute('animation__2', 'property: scale; to: 32 32 32; loop:true; dur: 11000; easing: linear');

           // modelWaterFeat.setAttribute('animation__3', 'property: opacity; from: 0; to: 1 ;loop:true; dur: 10000');

            modelWaterFeat.setAttribute('static-body','');

            modelWaterFeat.addEventListener('loaded', () => {
           window.dispatchEvent(new CustomEvent('gps-entity-place-loadedWaterFeat'))
           modelWaterFeat.setAttribute('position', `0 ${modelHeight} 0;`);
       
            });
      
       //removes model when clicked
       modelWaterFeat.addEventListener('click', () => {
        //  modelTrash.remove();
         //window.open("https://www.starbucks.com/menu?_branch_match_id=713537451166389183", "Starbucks Order");
         document.getElementById("waterFeatPopup").style.display ="unset";
      
            });
       
            // modelWaterFeat.setAttribute('collect-disappear', '');
            // modelWaterFeat.setAttribute('getCenterPoint', '');

            sceneWaterFeat.appendChild(modelWaterFeat);
        });
       }
      
      
      
      
      

      //THE TREE AND SHADE LOCATIONS
      function staticLoadPlacesTrees() {
        return [
            {location: {lat: 39.484604,  lng: -105.074975,},},
            {location: {lat: 39.484071, lng: -105.075172,},},
   
      
      
           //500
             {location: {lat: 39.744859,  lng: -104.836816,},},
      {location: {lat: 39.744995,  lng: -104.836609,},},
      //home
      {location: {lat: 39.477747,  lng: -105.081129 ,},}
      
      
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
      
      
            modelTrees.setAttribute('gps-entity-place', `latitude: ${latitudeTrees}; longitude: ${longitudeTrees};`);
            modelTrees.setAttribute('gltf-model', 'models/dogParkTrees.gltf');
            // modelCU.setAttribute('gltf-model', 'models/dogParkParking.gltf');
            modelTrees.setAttribute('scale', '25 25 25');
                 //allows to rotate
            modelTrees.setAttribute('animation', 'property: rotation; to: 0 360 0; loop:true; dur: 6000; easing: linear');
            modelTrees.addEventListener('loaded', () => {
           window.dispatchEvent(new CustomEvent('gps-entity-place-loadedTrees'))
           modelTrees.setAttribute('position', `0 ${modelHeight} 0;`);
       
            });
      
       //removes model when clicked
       modelTrees.addEventListener('click', () => {
        //  modelTrash.remove();
         //window.open("https://www.starbucks.com/menu?_branch_match_id=713537451166389183", "Starbucks Order");
         document.getElementById("treesPopup").style.display ="unset";
      
            });
       
            sceneTrees.appendChild(modelTrees);
        });
       }
      
      
      
      
      //Restrooms
      function staticLoadPlacesRestroom() {
        return [
            {location: {lat: 39.484604,  lng: -105.074975,},},
            {location: {lat: 39.484071, lng: -105.075172,},},
          
      
               ];
               }
          
      
       function renderPlacesRestroom(placesRestroom) {
        let sceneRestroom = document.querySelector('a-scene');
          placesRestroom.forEach((placeRestroom) => {
            let latitudeRestroom = placeRestroom.location.lat;
            let longitudeRestroom = placeRestroom.location.lng;
              let modelRestroom = document.createElement('a-entity');
      
      
              let p = location.lat + latitudeRestroom;
              let t = location.long - longitudeRestroom;
         
         let modelHeight = [(p + t) * 0.4];
      
      
      
            modelRestroom.setAttribute('gps-entity-place', `latitude: ${latitudeRestroom}; longitude: ${longitudeRestroom};`);
            modelRestroom.setAttribute('gltf-model', 'models/GreenDiamond.gltf');
          
            
            modelRestroom.setAttribute('scale', '10 10 10');

                             
            modelRestroom.setAttribute('animation', 'property: rotation; to: 0 360 0; loop:true; dur: 6000; easing: linear');
            modelRestroom.setAttribute('static-body','');
            
            modelRestroom.addEventListener('loaded', () => {
           window.dispatchEvent(new CustomEvent('gps-entity-place-loadedRestroom'))
           modelRestroom.setAttribute('position', `0 ${modelHeight} 0;`);
       
            });
      
      
       modelRestroom.addEventListener('click', () => {
       
         document.getElementById("restroomPopup").style.display ="unset";
      
            });
       
          //  modelRestroom.setAttribute('collect-disappear', '');
          //  modelRestroom.setAttribute('getCenterPoint', '');

            sceneRestroom.appendChild(modelRestroom);
        });
       }
      
      
      //SHELTER
      function staticLoadPlacesShelter() {
        return [
            {location: {lat: 39.484604,  lng: -105.074975,},},
            {location: {lat: 39.484071, lng: -105.075172,},},
         
      
               ];
               }
          
      
       function renderPlacesShelter(placesShelter) {
        let sceneShelter = document.querySelector('a-scene');
          placesShelter.forEach((placeShelter) => {
            let latitudeShelter = placeShelter.location.lat;
            let longitudeShelter = placeShelter.location.lng;
              let modelShelter = document.createElement('a-entity');
      
      
      
              let p = location.lat + latitudeShelter;
              let t = location.long - longitudeShelter;
         
         let modelHeight = [(p + t) * 0.3];
      
      
            modelShelter.setAttribute('gps-entity-place', `latitude: ${latitudeShelter}; longitude: ${longitudeShelter};`);
            modelShelter.setAttribute('gltf-model', 'models/dogParkShelter.gltf');
            
            modelShelter.setAttribute('scale', '25 25 25');
                 
            modelShelter.setAttribute('animation', 'property: rotation; to: 0 360 0; loop:true; dur: 6000; easing: linear');
            modelShelter.addEventListener('loaded', () => {
           window.dispatchEvent(new CustomEvent('gps-entity-place-loadedshelter'))
           modelShelter.setAttribute('position', `0 ${modelHeight} 0;`);
       
            });
      
      
       modelShelter.addEventListener('click', () => {
       
         document.getElementById("shelterPopup").style.display ="unset";
      
            });
       
            sceneShelter.appendChild(modelShelter);
        });
       }
      
      
      
      
      
      
      
      
      //GATES - ENTRANCES
      function staticLoadPlacesGate() {
        return [
          {location: {lat: 39.477122410343625,  lng:  -105.08203099873181},},
          {location: {lat: 39.47740677166334,  lng:  -105.08203418739164},},
         

          
               ];
               }
          
      
       function renderPlacesGate(placesGate) {
        let sceneGate = document.querySelector('a-scene');
          placesGate.forEach((placeGate) => {
            let latitudeGate = placeGate.location.lat;
            let longitudeGate = placeGate.location.lng;
              let modelGate = document.createElement('a-entity');
      
      
      
              let p = location.lat + latitudeGate;
              let t = location.long - longitudeGate;
         
         let modelHeight = [(p + t) * 0.34 ];
      
      
      
            modelGate.setAttribute('gps-entity-place', `latitude: ${latitudeGate}; longitude: ${longitudeGate};`);
            modelGate.setAttribute('gltf-model', 'models/BlueDiamond.gltf');
            
            modelGate.setAttribute('scale', '10 14 10');
                 
            modelGate.setAttribute('animation', 'property: rotation; to: 0 360 0; loop:true; dur: 6000; easing: linear');
            modelGate.setAttribute('static-body', '');
            modelGate.addEventListener('loaded', () => {
           window.dispatchEvent(new CustomEvent('gps-entity-place-loadedGate'))
           modelGate.setAttribute('position', `0 ${modelHeight} 0;`);
       
            });
      
      
      //  modelGate.addEventListener('click', () => {
       
      //    document.getElementById("gatePopup").style.display ="unset";
      
      //       });
       
            modelGate.setAttribute('collect-disappear', '');
            modelGate.setAttribute('getCenterPoint', '');

            sceneGate.appendChild(modelGate);
        });
       }






 //MENU ICON


      function staticLoadPlacesMenu() {
        return [
          {location: {lat: 39.477122410343625,  lng:  -105.08203099873181},},
        

          
               ];
               }
          
      
      function renderPlacesMenu(placesMenu) {
        let sceneMenu = document.querySelector('a-camera');
          placesMenu.forEach((placeMenu) => {
            let latitudeMenu = placeMenu.location.lat;
            let longitudeMenu = placeMenu.location.lng;
              let modelMenu = document.createElement('a-entity');
      
      
      
             
      
      
      
            // modelMenu.setAttribute('gps-entity-place', `latitude: ${latitudeGate}; longitude: ${longitudeGate};`);
            modelMenu.setAttribute('gltf-model', 'models/MenuIcon2.gltf');
            
            modelMenu.setAttribute('scale', '0.04 0.04 0.04');
                 
            // modelMenu.setAttribute('animation', 'property: rotation; to: 0 360 0; loop:true; dur: 6000; easing: linear');
            modelMenu.setAttribute('static-body', '');
            modelMenu.addEventListener('loaded', () => {
           window.dispatchEvent(new CustomEvent('gps-entity-place-loadedMenu'))
           modelMenu.setAttribute('position', `0 -0.23 -0.8;`);
           modelMenu.setAttribute('z-index', `100`);
       
            });
      
      
    


            modelMenu.addEventListener('click', () => {
             
               document.getElementById("filters").style.display ="unset";
            
                  });


            sceneMenu.appendChild(modelMenu);
        });
       }

      
      
                
      // function removeHwPopup(){
      //   document.getElementById("hwPopup").style.display = "none";
      
      // }
      
      // function removeCuPopup(){
      //   document.getElementById("cuPopup").style.display = "none";
      
      // }
      
      
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
      
      
      // function removeLegendPopup(){
      //   document.getElementById("legendPopup").style.display = "none";
      
      // }
      
      // //document.getElementById("restroomPopup").style.display ="unset";
      
      // function legendView(){
      //   document.getElementById("legendPopup").style.display ="unset";
      // }
      
      
      //TESTS OF NEW MODELS
      
      
      
      // var els = sceneEl.querySelectorAll('a-entity');
      // for (var i = 0; i < els.length; i++) {
      //   a-entity.setAttribute('scale','10 10 10')
      //   console.log(els[i]);
      // }
      
      
      
      
      
      
function removeSplash(){
  document.getElementById("splashscreen").remove();
};

function removeWinPopup(){
document.getElementById("winPopup").style.display = "none";
};

function newPopup(){
  document.getElementById("newPopup").style.display = "block";
};

function showFilters(){
  document.getElementById("filters").style.display = "block";
};

function exit_filter_screen(){
  document.getElementById("filters").style.display = "none";
};

// function addMenuIcon(){
//   document.getElementById("menuIcon").setAttribute('gltf-model', 'models/MenuIcon2.gltf');
// };
 

//Checkbox filters

//ELEMENTS TIED TO CHECKBOX
var greenBox = document.getElementById("greenBox");
var purpleBox = document.getElementById("purpleBox");
var blueSphere = document.getElementById("blueSphere");

var checkBox = document.getElementById("checkbox1");


//CHILD CHECKBOX
function filter1() {

   // If the checkbox is checked, change element size

  if (checkBox.checked == true){

    greenBox.setAttribute('scale', '0.05 0.05 0.05');

  } else {

    greenBox.setAttribute('scale', '0 0 0');

  }

}

//MASTER CHECK BOX
var checkBox2 = document.getElementById("checkbox2");

function filter2() {

  // If the checkbox is checked, change element size

  if (checkBox2.checked == true){    
    purpleBox.setAttribute('scale', '0.05 0.05 0.05');
    greenBox.setAttribute('scale', '0.05 0.05 0.05');
    blueSphere.setAttribute('scale', '1');

  } else {
    purpleBox.setAttribute('scale', '0 0 0');
    greenBox.setAttribute('scale', '0 0 0');
    blueSphere.setAttribute('scale', '0 0 0');
  }

}

//IF MASTER CHECKBOX IS CHECKED/UNCHECKED, CHECK/UNCHECK CHILD BOXES
// Add an event listener to the master checkbox
checkBox2.addEventListener("change", () => {
  // Set the checked state of the dependent checkbox 
  // to match the master checkbox
  checkBox.checked = checkbox2.checked;
});


  
      // here we register che 'clickhandler' component to allow clicking
      // AFRAME.registerComponent("clickhandler2", {
      //   init: function() {
      //     this.el.addEventListener("click", () => {         
      //     this.el.remove();
      //    });
      //   }
      // });
    
    
     


      
     
      

