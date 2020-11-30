let start = 0;
let allPosts = Array.from(
  document.getElementsByClassName("_3-miAEojrCvx_4FQ8x3P-s")
);

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
}

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
  let btn = document.createElement("BUTTON");
  btn.id = idx.toString();
  btn.innerHTML = "TIP 0.1 ETH";
  btn.onclick = () => {
    let recipient = allUsers[btn.id].children[3].innerText.split("/")[1];
    console.log(recipient);
    //initiateTransaction(recipient);
  };
  post.appendChild(btn);
}

document.addEventListener("scroll", () => findPosts());
