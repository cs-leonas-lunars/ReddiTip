
let posts = document.getElementsByClassName("_3-miAEojrCvx_4FQ8x3P-s");
let end = 0;
let start = 0;

function wrapper() {
  if ("IntersectionObserver" in window) {
    // IntersectionObserver Supported
    let tempStart = start;
    let tempEnd = end;
    start = end;
    posts = document.getElementsByClassName("_3-miAEojrCvx_4FQ8x3P-s");
    end = posts.length;
    if (start === end) {
      start = tempStart;
      end = tempEnd;
      wrapper();
    } else {
      console.log("START AND END VARIABLES: ", start, end);
      posts = Array.from(posts);
      posts = posts.slice(start, end);
      console.log("POSTS ARRAY", posts);
      let config = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      };

      let observer = new IntersectionObserver(onChange, config);
      Array.from(posts).forEach((post) => observer.observe(post));

      function onChange(changes, observer) {
        changes.map((change, index) => {
          if (change.intersectionRatio > 0) {
            // Stop watching and load the image
            console.log("CHANGE.TARGET !!!", change.target);
            injectButton(change.target);
            observer.unobserve(change.target);
            if (index == changes.length - 1) {
              return wrapper();
            }
          }
        });
      }
    }
  } else {
    // IntersectionObserver NOT Supported
    posts = document.getElementsByClassName("_3-miAEojrCvx_4FQ8x3P-s");
    Array.from(posts).forEach((post) => injectButton(post));
  }
}

wrapper();
// function loadImage(image) {
//   image.classList.add("fade-in");
//   if (image.dataset && image.dataset.src) {
//     image.src = image.dataset.src;
//   }
//   if (image.dataset && image.dataset.srcset) {
//     image.srcset = image.dataset.srcset;
//   }
// }

function injectButton(post) {
  let btn = document.createElement("BUTTON");
  btn.innerHTML = "TIP 0.1 ETH";
  post.appendChild(btn);
  console.log("WHAT THE HECK");
  //   element.style["background-color"] = "#FF00FF";
  // }

}
