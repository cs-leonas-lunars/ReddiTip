let start = 0;
let end = 0;
allUsers = [];
allPosts = [];

function findPosts(startStatus) {
  start = end;
  allPosts = Array.from(
    document.getElementsByClassName("_3-miAEojrCvx_4FQ8x3P-s")
  );
  allUsers = Array.from(
    document.querySelectorAll(
      "div[class='_3AStxql1mQsrZuUIFP9xSg nU4Je7n-eSXStTBAPMYt8']"
    )
  );
  end = allPosts.length;

  if (startStatus)
    Array.from(allPosts).map((post, idx) => injectButton(post, idx));
  else {
    let posts = Array.from(allPosts).slice(start, end);
    posts.map((post, idx) => injectButton(post, idx + start));
  }
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

document.addEventListener("scroll", () => findPosts(false));

findPosts(true);
