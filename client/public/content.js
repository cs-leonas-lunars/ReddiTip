let start = 0;
let allPosts = Array.from(
  document.getElementsByClassName("_3-miAEojrCvx_4FQ8x3P-s")
);

let topBroadcast = Array.from(
  document.querySelectorAll("div[class='_25K6Ujp7eqOAHEdYuHm3pY']")
)[0];

let allUsers = Array.from(
  document.querySelectorAll(
    "div[class='_3AStxql1mQsrZuUIFP9xSg nU4Je7n-eSXStTBAPMYt8']"
  )
);
let allHeaders = Array.from(
  document.querySelectorAll("div[class='cZPZhMe-UCZ8htPodMyJ5']")
);
let end = allPosts.length;

window.onload = () => {
  allPosts.map((post, idx) => {
    let tag = allHeaders[idx].children[0].children[0].innerText;
    if (tag.toLowerCase() !== "promoted") injectButton(post, idx);
  });
  console.log(topBroadcast);
  injectButton(topBroadcast, "broadcast");
};

function findPosts() {
  start = end;
  allPosts = Array.from(
    document.getElementsByClassName("_3-miAEojrCvx_4FQ8x3P-s")
  );
  allUsers = Array.from(
    document.querySelectorAll(
      "div[class='_3AStxql1mQsrZuUIFP9xSg nU4Je7n-eSXStTBAPMYt8']"
    )
  );
  allHeaders = Array.from(
    document.querySelectorAll("div[class='cZPZhMe-UCZ8htPodMyJ5']")
  );
  end = allPosts.length;

  let posts = allPosts.slice(start, end);
  posts.map((post, idx) => {
    let tag = allHeaders[idx + start].children[0].children[0].innerText;
    if (tag.toLowerCase() !== "promoted") injectButton(post, idx + start);
  });
}

function injectButton(post, idx) {
  console.log("POST", post);
  let btn = document.createElement("BUTTON");
  let image = document.createElement("IMG");
  let text = document.createElement("P");
  btn.onmouseover = () => {
    btn.style.cssText =
      "border-radius: 4px; position: absolute; width: 90px; height: 25px; right: 1px; border-width: 0; cursor: pointer; outline: none; transition: background-color 0.35s, box-shadow 0.35s; background-color: #E8E8E8; z-index: 2;";
    text.style.cssText =
      "position: absolute; width: 75%; top: 17.5%; right: 0%; fontSize: 0.9rem; fontFamily: Montserrat-Bold; textAlign: center; color: #878A8C; cursor: pointer; zIndex: 3;";
  };

  btn.onmouseout = () => {
    btn.style.cssText =
      "border-radius: 4px; position: absolute; width: 90px; height: 25px; right: 1px; border-width: 0; cursor: pointer; outline: none; transition: background-color 0.35s, box-shadow 0.35s; background-color: white; z-index: 2;";
    text.style.cssText =
      "position: absolute; width: 75%; top: 17.5%; right: 0%; fontSize: 0.9rem; fontFamily: Montserrat-Bold; textAlign: center; color: #878A8C; cursor: pointer; zIndex: 3;";
  };
  image.src = "https://i.imgur.com/iQz1gwF.png";
  btn.style.cssText =
    "border-radius: 4px; position: absolute; width: 90px; height: 25px; right: 1px; border-width: 0; cursor: pointer; outline: none; transition: background-color 0.35s, box-shadow 0.35s; background-color: white; z-index: 2;";

  image.style.cssText =
    "position: absolute; height: 20px; width: 20px; top: 2.5px; left: 5px; zIndex: 3;";

  text.style.cssText =
    "position: absolute; width: 75%; top: 17.5%; right: 0%; fontSize: 0.9rem; fontFamily: Montserrat-Bold; textAlign: center; color: #878A8C; cursor: pointer; zIndex: 3;";

  btn.id = idx.toString();
  text.innerHTML = "Tip ETH";
  btn.appendChild(image);
  btn.appendChild(text);
  btn.onclick = () => {
    let recipient = allUsers[btn.id].children[3].innerText.split("/")[1];
    console.log(recipient);
    //initiateTransaction(recipient);
  };
  post.appendChild(btn);
}

document.addEventListener("scroll", () => findPosts());
