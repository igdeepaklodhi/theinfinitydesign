gsap.registerPlugin(ScrollTrigger);


const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main-container"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);


ScrollTrigger.scrollerProxy("#main-container", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },

  pinType: document.querySelector("#main-container").style.transform ? "transform" : "fixed"
});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

var tl = gsap.timeline()
gsap.to(".query .btn-loop", {
    x: "-200%",              
    duration: 20,             
    repeat: -1,             
    ease: "linear",          
            
  });


 




var ts = gsap.timeline({ repeat: -1, repeatDelay: 0 });


ts.to(".logo-icon", {
  rotation: 90,
  duration: 2
})
.to(".logo-icon", {
  rotation: 180,
  duration: 2
})
.to(".logo-icon", {
  rotation: 270,
  duration: 2
})
.to(".logo-icon", {
  rotation: 360,
  duration: 2
});



// Select the arrow line and arrowhead
const arrowLine = document.querySelector(".about-arrow-line ");
const arrowHead = document.querySelector(".about-arrow-angle");

// Get the total length of the path
const lineLength = arrowLine.getTotalLength();

// Set initial stroke-dasharray and stroke-dashoffset values for the line
arrowLine.style.strokeDasharray = lineLength;
arrowLine.style.strokeDashoffset = lineLength;

// GSAP animation for the line
gsap.to(arrowLine, {
  strokeDashoffset: 0, // Animate to reveal the line
  duration: 3, // Animation duration
  scrollTrigger: {
    trigger: ".about-arrow-line",
    scroller:"#main-container", // Element to trigger the animation
    start: "top 20%", // Start when the SVG enters the viewport
    end: "top 0%", 
    scrub: true,
    
   
    
  },
});

// GSAP animation for the arrowhead (fade in)
gsap.fromTo(
  arrowHead,
  { opacity: 0, scale: 0.5 }, // Start with transparency and smaller size
  {
    opacity: 1,
    scale: 1,
    duration: 0.5,
    scrollTrigger: {
      trigger: ".about-arrow-angle",
      scroller:"#main-container",
      
      start: "top 20%", // Arrowhead appears after the line is mostly drawn
      end: "top 0%",
      scrub: true,
      
      
    },
  }
);


// dont-touch-previous-code

document.querySelectorAll('.step-boxes-design').forEach(box => {
  const staticImage = box.querySelector('.static');
  const gifImage = box.querySelector('.gif');

  let timeoutId; // Store the timeout ID

  box.addEventListener('mouseenter', () => {
    clearTimeout(timeoutId); // Clear any previous timeout
    gifImage.src = `${gifImage.dataset.src}?t=${Date.now()}`; // Restart GIF
    staticImage.style.display = 'none';
    gifImage.style.display = 'block';

    // Hide GIF after its duration
    const duration = parseInt(gifImage.dataset.duration, 10) || 3000;
    timeoutId = setTimeout(() => {
      gifImage.style.display = 'none';
      staticImage.style.display = 'block';
    }, duration);
  });

  box.addEventListener('mouseleave', () => {
    clearTimeout(timeoutId); // Stop the timeout
    gifImage.style.display = 'none';
    staticImage.style.display = 'block';
  });
});


  // Create a GSAP timeline for the animation sequence
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#process",
      scroller: "#main-container",
      start: "top top",
      end: "+=5000",
      scrub: true, // Smooth scrubbing effect
      pin: true, // Pin the section during the animation
      
     
    }
  });

  // Animate Page 2 to slide in from right
  timeline.to("#website-process2", {
    y: "-100%", // Move #page2 into view from the right
    duration: 3,

  });

  // Animate Page 3 to slide in after Page 2
  timeline.to("#website-process3", {
    x: "-100%", // Move #page3 into view from the right
    duration: 3,
  });

  timeline.to("#website-process4", {
    y: "100%", // Move #page3 into view from the right
    duration: 3, 
  });
  timeline.to("#website-process5", {
    x: "100%", 
    duration: 3,
  });
  timeline.to("#website-process6", {
    y: "-100%", // Move #page3 into view from the right
    duration: 3,
  });
  timeline.to("#website-process7", {
    x: "-100%", // Move #page3 into view from the right
    duration: 3,
  
  });
  timeline.to("#website-process8", {
    y: "100%", // Move #page3 into view from the right
    duration: 3,
 
  });
  timeline.to("#website-process9", {
    x: "100%", // Move #page3 into view from the right
    duration: 3,
    
  });


gsap.to("#projects .project-details",{
  x:"-110%",
  scrollTrigger: {
      trigger: "#projects",
      scroller: "#main-container",
      start: "top top",
      end: "+=1000",
      scrub: true, 
      pin: true, 
      duration:2,
      
     
    }
});


var main = document.querySelector("body")
var cursor = document.querySelector("#cursor")



main.addEventListener("mousemove", function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:1,
        ease: "back.out",
        
        
    })
})


const imgDivs = document.querySelectorAll(".imaget");
imgDivs.forEach((imgDiv) => {
    imgDiv.addEventListener("mouseenter", function () {
        cursor.innerHTML = "View More";
        gsap.to(cursor, {
            scale: 6,
            padding:5,
            lineHeight:1,
            
        });
    });

    imgDiv.addEventListener("mouseleave", function () {
        cursor.innerHTML = "";
        gsap.to(cursor, {
            scale: 1,
            padding:0,
        });
    });
});

const navAnimated = document.querySelectorAll(".nav-animated");
navAnimated.forEach((navAnimated) => {
  navAnimated.addEventListener("mouseenter", function () {
      gsap.to(cursor, {
          scale: 8,
          backgroundColor:"white",
             mixBlendMode: 'difference'
          
   
      });
    
  });

  navAnimated.addEventListener("mouseleave", function () {
      gsap.to(cursor, {
          scale: 1,
          backgroundColor:"black",
          mixBlendMode: 'normal'
         
      });
  });
});


function addVideoHoverEffect(elements, videoSrc) {
  elements.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      // Create a video element dynamically
      const videoElement = document.createElement("video");
      videoElement.src = videoSrc; // Video source passed as an argument
      videoElement.autoplay = true;
      videoElement.loop = true;
      videoElement.muted = true;
      videoElement.style.width = "100%"; // Match the size of the cursor
      videoElement.style.height = "100%";
      videoElement.style.objectFit = "cover"; // Ensures the video fits within the cursor
      videoElement.id = "cursor-video"; // Add an ID for easy reference

      // Clear any existing content in the cursor and append the video
      cursor.innerHTML = "";
      cursor.appendChild(videoElement);

      // Animate the cursor on hover
      gsap.to(cursor, {
        scale: 12,
        backgroundColor: "transparent", // Make background transparent for the video
         // Optional blend mode
      });
    });

    item.addEventListener("mouseleave", function () {
      // Remove the video from the cursor
      const videoElement = document.querySelector("#cursor-video");
      if (videoElement) {
        videoElement.remove();
      }

      // Clear the cursor content and reset its styles
      cursor.innerHTML = "";
      gsap.to(cursor, {
        scale: 1,
        backgroundColor: "black", // Reset background color
       // Reset blend mode
      });
    });
  });
}

// Add hover effect for .brand-text with its video
const brandTextElements = document.querySelectorAll(".brand-text");
addVideoHoverEffect(brandTextElements, "video/cursor-brands.mp4");

// Add hover effect for .experience-text with its video
const experienceTextElements = document.querySelectorAll(".experience");
addVideoHoverEffect(experienceTextElements, "video/cursor-websites.mp4");


const texts = document.querySelectorAll(".hover-text");

texts.forEach((text) => {
  text.addEventListener("mousemove", (event) => {
    const rect = text.getBoundingClientRect(); // Get the position and size of the element
    const offsetX = (event.clientX - rect.left - rect.width / 2) / 5; // Horizontal movement
    const offsetY = (event.clientY - rect.top - rect.height / 2) / 5; // Vertical movement

    // Apply GSAP animation for smooth movement
    gsap.to(text, {
      x: offsetX,
      y: offsetY,
      duration: 0.3,
      ease: "power2.out",
    });
  });

  text.addEventListener("mouseleave", () => {
    
    gsap.to(text, {
      x: 0,
      y: 0,
      duration: 0.3,
      ease: "power2.out",
    });
  });
});


gsap.to("#testimonials .testimonials-compliment",{
  x:"-100%",
  scrollTrigger: {
      trigger: "#testimonials",
      scroller: "#main-container",
      start: "top top",
      end: "+=700",
      scrub: true, 
      pin: true, 
      duration:1,
      
     
    }
});

// for-image

function addImageHoverEffect(elements, imageSrc) {
  elements.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      // Create an image element dynamically
      const imageElement = document.createElement("img");
      imageElement.src = imageSrc; // Image source passed as an argument
      imageElement.style.width = "100%"; // Match the size of the cursor
      imageElement.style.height = "100%";
      imageElement.style.objectFit = "cover";
      imageElement.id = "cursor-image"; // Add an ID for easy reference

      // Clear any existing content in the cursor and append the image
      cursor.innerHTML = "";
      cursor.appendChild(imageElement);

      // Animate the cursor on hover
      gsap.to(cursor, {
        scale: 28,
        backgroundColor: "transparent",
        borderRadius:0, // Make background transparent for the image
      });
    });

    item.addEventListener("mouseleave", function () {
      // Remove the image from the cursor
      const imageElement = document.querySelector("#cursor-image");
      if (imageElement) {
        imageElement.remove();
      }

      cursor.innerHTML = "";
      gsap.to(cursor, {
        scale: 1,
        backgroundColor: "black",
        borderRadius:"50%", 
      });
    });
  });
}


const webTextElements = document.querySelectorAll(".web-element");
addImageHoverEffect(webTextElements, "images/web-elem.png");


const graphicTextElements = document.querySelectorAll(".graphic-element");
addImageHoverEffect(graphicTextElements, "images/web-ele.png");

const wordpressTextElements = document.querySelectorAll(".woedpress-element");
addImageHoverEffect(wordpressTextElements, "images/wordpress-ele.png");

const seoTextElements = document.querySelectorAll(".seo-element");
addImageHoverEffect(seoTextElements, "images/seo-ele.png");

const hostTextElements = document.querySelectorAll(".hosting-element");
addImageHoverEffect(hostTextElements, "images/hosting-ele.png");

gsap.to(".design-purpose .btn-loop", {
  x: "-130%",              
  duration: 20,             
  repeat: -1,             
  ease: "linear",          
          
});




const vidDivs = document.querySelectorAll(".video-pl");

vidDivs.forEach((vidDiv) => {
  vidDiv.addEventListener("mouseenter", function () {
    cursor.innerHTML = "Play";
    gsap.to(cursor, {
      scale: 6,
      padding: 5,
      lineHeight: 1,
    });
  });

  vidDiv.addEventListener("mouseleave", function () {
    cursor.innerHTML = "";
    gsap.to(cursor, {
      scale: 1,
      padding: 0,
    });
  });

  // Toggle fullscreen on click
  vidDiv.addEventListener("click", function (event) {
    // Prevent default play/pause behavior
    event.preventDefault();

    // Toggle fullscreen
    if (!document.fullscreenElement) {
      vidDiv.requestFullscreen()
        .then(() => console.log("Entered fullscreen"))
        .catch((err) => console.error("Error entering fullscreen:", err));
    } else {
      document.exitFullscreen()
        .then(() => console.log("Exited fullscreen"))
        .catch((err) => console.error("Error exiting fullscreen:", err));
    }
  });
});




// Create a timeline with ScrollTrigger
const riseUpTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: "#rise-up", // Element to trigger the timeline
    scroller: "#main-container", // Custom scroller (use "body" if not applicable)
    start: "top top", // Start animation when #rise-up hits the center of the viewport
    end: "+=1000", // Continue animation for 700px of scrolling
    scrub: true, // Smooth scrubbing effect
    pin: true, // Pins the section during the scroll
  },
});

// Add animations to the timeline
riseUpTimeline
  .to("#rise-up .video-scale", {
    scale:1,
    duration: 1,
  })

  .to("#rise-up .colabrat", {
    opacity:1,
    duration: 1,
  })
  .to("#rise-up .left-mask", {
    x: 0, // Move left mask to its original position
    duration: 1, // Duration of the animation
    ease: "power4.out", // Smooth easing for the movement
  })
  .to(
    "#rise-up .right-mask",
    {
      x: 0, // Move right mask to its original position
      duration: 1,
      ease: "power4.out",
    },
    "<" // Start this animation at the same time as the left-mask animation
  )
  .to(
    "#rise-up .logo-textanimate h2",
    {
      y: 0, // Move the text into view
      duration: 1,
      ease: "bounce.out", // Bounce easing for the text
    },
    "-=0.5" 
  );









