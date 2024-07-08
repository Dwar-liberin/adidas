
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
  

  
    
      const target_imageundefi7cf42_iconGeometry = new THREE.PlaneGeometry(1, 0.6185567010309279);
   const target_imageundefi7cf42_texture = await loadTexture("assets/asfdgh.png");
  const target_imageundefi7cf42_image = new THREE.MeshBasicMaterial({
      map: target_imageundefi7cf42_texture,
    });
    const target_imageundefi7cf42 = new THREE.Mesh(target_imageundefi7cf42_iconGeometry, target_imageundefi7cf42_image);
    target_imageundefi7cf42.scale.set(1, 1, 1);
    target_imageundefi7cf42.position.set(0.01, -0.01, 0.01);
    target_imageundefi7cf42.rotation.set(-0.001, 0, 0);
    
    
    

    const video_asset_8ffbb0c78f6_planeGeometry = new THREE.PlaneGeometry(1, 0.5625);

    const video_asset_8ffbb0c78f6_Item0Video = await loadVideo("assets/T20 Cricket World Cup _ adidas x BCCI.mp4");

    const video_asset_8ffbb0c78f6_Item0VideoTexture = new THREE.VideoTexture(
      video_asset_8ffbb0c78f6_Item0Video
    );

    let video_asset_8ffbb0c78f6_Item0VideoMaterial

      video_asset_8ffbb0c78f6_Item0VideoMaterial = new THREE.MeshBasicMaterial({
          map: video_asset_8ffbb0c78f6_Item0VideoTexture,
        })
    
     const video_asset_8ffbb0c78f6 = new THREE.Mesh(
      video_asset_8ffbb0c78f6_planeGeometry,
      video_asset_8ffbb0c78f6_Item0VideoMaterial
    );

  video_asset_8ffbb0c78f6.position.set(0, 0, 0.021);



  if (isIOS) {
    video_asset_8ffbb0c78f6_Item0Video.muted=isIOS
    muteIconMesh = await loadUnmuteLogo();
    anchor.group.add(muteIconMesh);
  }

  video_asset_8ffbb0c78f6_Item0Video.loop=true;
  
  video_asset_8ffbb0c78f6.scale.set(1.2, 1.2, 1.2);

    video_asset_8ffbb0c78f6.rotation.set(-0.005, 0, 0);

    
  
const image_a73508ff_1d91d9bb_iconGeometry = new THREE.PlaneGeometry(1, 1);
   const image_a73508ff_1d91d9bb_texture = await loadTexture("assets/amazon-logo.png");
  const image_a73508ff_1d91d9bb_image = new THREE.MeshBasicMaterial({
      map: image_a73508ff_1d91d9bb_texture,
    });
    const image_a73508ff_1d91d9bb = new THREE.Mesh(image_a73508ff_1d91d9bb_iconGeometry, image_a73508ff_1d91d9bb_image);
    image_a73508ff_1d91d9bb.scale.set(0.3, 0.3, 0.3);
    image_a73508ff_1d91d9bb.position.set(0.3, -0.6, 0);
    image_a73508ff_1d91d9bb.rotation.set(-0.001, 0, 0);
    image_a73508ff_1d91d9bb.userData.clickable = true
    
    image_a73508ff_1d91d9bb.userData.eventName ="Amazon"
const image_ac1b37c2_ca9ca995_iconGeometry = new THREE.PlaneGeometry(1, 1);
   const image_ac1b37c2_ca9ca995_texture = await loadTexture("assets/ajio-logo.jpg");
  const image_ac1b37c2_ca9ca995_image = new THREE.MeshBasicMaterial({
      map: image_ac1b37c2_ca9ca995_texture,
    });
    const image_ac1b37c2_ca9ca995 = new THREE.Mesh(image_ac1b37c2_ca9ca995_iconGeometry, image_ac1b37c2_ca9ca995_image);
    image_ac1b37c2_ca9ca995.scale.set(0.3, 0.3, 0.3);
    image_ac1b37c2_ca9ca995.position.set(-0.3, -0.6, 0.04);
    image_ac1b37c2_ca9ca995.rotation.set(-0.001, 0, 0);
    image_ac1b37c2_ca9ca995.userData.clickable = true
    
    image_ac1b37c2_ca9ca995.userData.eventName ="Ajio"
      
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
            video_asset_8ffbb0c78f6_Item0Video.muted=false
    
            anchor.group.remove(muteIconMesh);
            return true;
          }
        }


      // if button is clickable then loading screen is show. And when user redirect to the screen loader automatically gone because script is change.
      
      if (o.userData.clickable) window.showLoadingScreen();

      
      if (o.userData.clickable && o === image_a73508ff_1d91d9bb) {
        setTimeout(()=>{
          window.location.href = "https://www.amazon.in/Adidas-Geometric-Regular-T-Shirt-JI6696_Bright/dp/B0CJFMS39T/ref=sr_1_1?crid=3U9FJQGWB0VU5&dib=eyJ2IjoiMSJ9.EusWyQFF7OnrDeapJQWhhlcTJm7iyaTQkDfbzVXc9pedgs5spbK1jBxBb74f23ExYSTB6jFZvsMaBQaFHDbq48KLZ7XJpegCWC8DB_o6ugAL0HJSRJ33ekXeSVP0WihWdlmdY9XOGUAhjozcTQ8vJnsrkYOPTPjs1dO1Bf00NpadxoK5vgsU2_ogOw0RO3THZ8rfvjFGSJyIrAjiU8px9OLmhMXkBh4SGH0DnGVeMVGoidRPqLC3sBWneBnF7dcaAEFPAqEbjluEFyBlzuDPYxjBFyl0aX--SZCE_lD-xl0.4tw9u1GOVoMXtxAGzMAMF4EK3GsL-VKoPcK2ma2x2_k&dib_tag=se&keywords=adidas%2Bcricket%2Bjersey&qid=1720436108&sprefix=adidas%2Bcricket%2B%2Caps%2C285&sr=8-1&th=1&psc=1"
        },100)
        }
      

      if (o.userData.clickable && o === image_ac1b37c2_ca9ca995) {
        setTimeout(()=>{
          window.location.href = "https://www.ajio.com/shop/brand-adidas"
        },100)
        }
      
      }

    })
    
      
    
anchor.group.add(video_asset_8ffbb0c78f6)
anchor.group.add(image_a73508ff_1d91d9bb)
anchor.group.add(image_ac1b37c2_ca9ca995)


    anchor.onTargetFound = () => {
      try {
        if(analytics){
          analytics.trackMarkerScanned();
        }
      } catch(e) {
        console.log("Err", e)
      }

            

                  executeAnimation({"name":"none","state":"none","value":0,"duration":2000,"delay":1000,"event":"load"}, video_asset_8ffbb0c78f6)

                  executeAnimation({"name":"scale","state":"scale","value":-1.5,"duration":0,"delay":0,"event":"load"}, image_a73508ff_1d91d9bb)

                  executeAnimation({"name":"scale","state":"scale","value":-1.5,"duration":0,"delay":0,"event":"load"}, image_ac1b37c2_ca9ca995)

     
      video_asset_8ffbb0c78f6_Item0Video.play();
    };


    anchor.onTargetLost = () => {
       video_asset_8ffbb0c78f6_Item0Video.pause();

        
animationManager.resetObject(name)
animationManager.resetObject(name)
animationManager.resetObject(name)
    }
    
    
      
    await mindThree.start();
    renderer.setAnimationLoop(() => {
      renderer.render(scene, camera);
       TWEEN.update();
    });
    
    }
    start();
    })
    
    