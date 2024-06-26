
    import {
      loadGLTF,
      loadTexture,
      loadTextures,
      loadVideo,
    } from "https://cdn.jsdelivr.net/gh/Dwar-liberin/dwar-lib/libs/loader.js";

    import { createChromaMaterial } from "https://cdn.jsdelivr.net/gh/Dwar-liberin/dwar-lib/libs/chroma-video.js" 
    import TWEEN from "https://cdn.jsdelivr.net/npm/@tweenjs/tween.js@18.6.4/dist/tween.esm.js";
      let analytics=null
  const animationManager = new AnimationManager();

      const isIOS = navigator.appVersion.indexOf("Mac") != -1 ? true : false;
      try {

        analytics = new Analytics(
          {
              appName: "DwAR",
              customerId: "4",
              campaignName: "Adidas",
              serverUrl: "https://staging.lttl.in/event"
          }
       );

      Analytics.active = true;

      } catch(e) {
        console.log("Err", e.message)
      }
      
  

    const THREE = window.MINDAR.IMAGE.THREE;

    
    async function loadUnmuteLogo() {
      const muteIconGeo = new THREE.CircleGeometry(0.5, 32);
      const muteIconTexture = await loadTexture("assets/mute.png");
      const muteIconMaterial = new THREE.MeshBasicMaterial({
        map: muteIconTexture,
      });
    
      const muteIconMesh = new THREE.Mesh(muteIconGeo, muteIconMaterial);
      muteIconMesh.scale.set(0.1, 0.1);
      muteIconMesh.position.set(0, -0.5, 0.3);
    
      muteIconMesh.userData.clickable = true;
    
      return muteIconMesh;
    }

    

    
 function executeAnimation(animation, mesh) {
  console.log('animation', animation)
  const { name, state, value, duration, delay } = animation;

  switch (name) {
    case "slide":
      if (state === "left") {
        animationManager.animateSlide(mesh, null, duration, null, value, delay);
      }
      else if (state === "right") {
        animationManager.animateSlide(mesh, null, duration, value, state, delay);
      } else if (state === "up") {
        animationManager.animateSlideUp(mesh, duration, value, delay);
      } else {
        animationManager.animateSlideDown(mesh, duration, value, delay);

      }
      break;
    case "fade":
      if (state == "in") {
        animationManager.animateFadeIn(mesh, duration, delay);
      } else {
        animationManager.animateFadeOut(mesh, duration, delay);
      }
      break;
    case "scale":
      if (state == "up") animationManager.animateScaleUp(mesh, value, duration, null, delay);
      else animationManager.animateScaleDown(mesh, value, duration, null, delay);
      break;
    case "bounce":
      animationManager.animateBounce(mesh, "z", value, duration, delay); // Assuming "z" axis for bounce
      break;
    default:
      console.error("Unknown animation");
      break;
  }
}
    

    document.addEventListener("DOMContentLoaded", () => {

    // DwAR Analytics
    try {
      console.log("ana", analytics)
      if(analytics){
        console.log("ana", analytics)
        analytics.trackPageLoad({
          eventType: 'load',
          payload: true,
        });
  
        analytics.sendQueryParam()
      }
     
    } catch(e) {
      console.log("e", e.message)
    }


    async function start(){

      let muteIconMesh;
      
      
 
  const mindThree =  new window.MINDAR.IMAGE.MindARThree({
    container: document.body,
    imageTargetSrc: "assets/target.mind",
    uiLoading: "#scanning-overlay",
  });

  const { renderer, scene, camera } = mindThree;
  const anchor = mindThree.addAnchor(0);

  const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
  scene.add(light);

  const loadFont = () => {
    return new Promise((resolve, reject) => {
      const loader = new THREE.FontLoader();

      loader.load(
        "https://cdn.jsdelivr.net/gh/mrdoob/three.js/examples/fonts/helvetiker_regular.typeface.json",
        (font) => {
          resolve(font); // Resolve the promise with the loaded font
        },
        undefined, // Progress callback (optional)
        (error) => {
          reject(error); // Reject the promise with the error
        }
      );
    });
  };

  const font = await loadFont();
  

  
    
      const image_be19488a_f8d1161a_iconGeometry = new THREE.PlaneGeometry(1, 0.52);
   const image_be19488a_f8d1161a_texture = await loadTexture("assets/Group 1261156645.png");
  const image_be19488a_f8d1161a_image = new THREE.MeshBasicMaterial({
      map: image_be19488a_f8d1161a_texture,
    });
    const image_be19488a_f8d1161a = new THREE.Mesh(image_be19488a_f8d1161a_iconGeometry, image_be19488a_f8d1161a_image);
    image_be19488a_f8d1161a.scale.set(0.4, 0.4, 1);
    image_be19488a_f8d1161a.position.set(0.38, -0.574, 0.05);
    image_be19488a_f8d1161a.rotation.set(-0.001, 0, 0);
    image_be19488a_f8d1161a.userData.clickable = true
    
    image_be19488a_f8d1161a.userData.eventName ="Buy Now"
const image_44af366a_f16a323c_iconGeometry = new THREE.PlaneGeometry(1, 0.52);
   const image_44af366a_f16a323c_texture = await loadTexture("assets/Group 1261156644.png");
  const image_44af366a_f16a323c_image = new THREE.MeshBasicMaterial({
      map: image_44af366a_f16a323c_texture,
    });
    const image_44af366a_f16a323c = new THREE.Mesh(image_44af366a_f16a323c_iconGeometry, image_44af366a_f16a323c_image);
    image_44af366a_f16a323c.scale.set(0.4, 0.4, 1);
    image_44af366a_f16a323c.position.set(-0.38, -0.57, 0.05);
    image_44af366a_f16a323c.rotation.set(-0.001, 0, 0);
    image_44af366a_f16a323c.userData.clickable = true
    
    image_44af366a_f16a323c.userData.eventName ="Adidas Website"
const target_imageundefi70bc8_iconGeometry = new THREE.PlaneGeometry(1, 0.6185567010309279);
   const target_imageundefi70bc8_texture = await loadTexture("assets/asfdgh.png");
  const target_imageundefi70bc8_image = new THREE.MeshBasicMaterial({
      map: target_imageundefi70bc8_texture,
    });
    const target_imageundefi70bc8 = new THREE.Mesh(target_imageundefi70bc8_iconGeometry, target_imageundefi70bc8_image);
    target_imageundefi70bc8.scale.set(1, 1, 1);
    target_imageundefi70bc8.position.set(0.01, -0.01, 0.01);
    target_imageundefi70bc8.rotation.set(-0.001, 0, 0);
    
    
    

    const video_asset_8ffbb0fd91c_planeGeometry = new THREE.PlaneGeometry(1, 0.5625);

    const video_asset_8ffbb0fd91c_Item0Video = await loadVideo("assets/T20 Cricket World Cup _ adidas x BCCI.mp4");

    const video_asset_8ffbb0fd91c_Item0VideoTexture = new THREE.VideoTexture(
      video_asset_8ffbb0fd91c_Item0Video
    );

    let video_asset_8ffbb0fd91c_Item0VideoMaterial

      video_asset_8ffbb0fd91c_Item0VideoMaterial = new THREE.MeshBasicMaterial({
          map: video_asset_8ffbb0fd91c_Item0VideoTexture,
        })
    
     const video_asset_8ffbb0fd91c = new THREE.Mesh(
      video_asset_8ffbb0fd91c_planeGeometry,
      video_asset_8ffbb0fd91c_Item0VideoMaterial
    );

  video_asset_8ffbb0fd91c.position.set(0, 0, 0.021);



  if (isIOS) {
    video_asset_8ffbb0fd91c_Item0Video.muted=isIOS
    muteIconMesh = await loadUnmuteLogo();
    anchor.group.add(muteIconMesh);
  }

  video_asset_8ffbb0fd91c_Item0Video.loop=true;
  
  video_asset_8ffbb0fd91c.scale.set(1.2, 1.2, 1.2);

    video_asset_8ffbb0fd91c.rotation.set(-0.004, 0, 0);

    
  
      
       document.body.addEventListener("click", (e) => {
    const mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    const mouseY = -(e.clientY / window.innerHeight) * 2 + 1;

    const mouse = new THREE.Vector2(mouseX, mouseY);
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children, true);

    if (intersects.length > 0) {
      let o = intersects[0].object;

      while (o.parent && !o.userData?.clickable) {
        o = o.parent;
      }

      if(o.userData.clickable && analytics){
        
        try {
          analytics.trackClick({
            eventType: "click",
            payload: o.userData.eventName
          })
        } catch (err){
          console.log("Err", err)
        }
       
      }

        if(isIOS){ 
          if (o.userData.clickable && o === muteIconMesh) {
            video_asset_8ffbb0fd91c_Item0Video.muted=false
    
            anchor.group.remove(muteIconMesh);
            return true;
          }
        }


      // if button is clickable then loading screen is show. And when user redirect to the screen loader automatically gone because script is change.
      
      if (o.userData.clickable) window.showLoadingScreen();

      
      if (o.userData.clickable && o === image_be19488a_f8d1161a) {
        setTimeout(()=>{
          window.location.href = "https://www.adidas.co.in/fw24-india-cricket-t20-international-jersey/JN0886.html"
        },100)
        }
      

      if (o.userData.clickable && o === image_44af366a_f16a323c) {
        setTimeout(()=>{
          window.location.href = "https://www.adidas.co.in/"
        },100)
        }
      
      }

    })
    
      
    anchor.group.add(image_be19488a_f8d1161a)
anchor.group.add(image_44af366a_f16a323c)

anchor.group.add(video_asset_8ffbb0fd91c)


    anchor.onTargetFound = () => {
      try {
        if(analytics){
          analytics.trackMarkerScanned();
        }
      } catch(e) {
        console.log("Err", e)
      }

            




     
      video_asset_8ffbb0fd91c_Item0Video.play();
    };


    anchor.onTargetLost = () => {
       video_asset_8ffbb0fd91c_Item0Video.pause();

        



    }
    
    
      
    await mindThree.start();
    renderer.setAnimationLoop(() => {
      renderer.render(scene, camera);
       TWEEN.update();
    });
    
    }
    start();
    })
    
    