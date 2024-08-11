const loginForm = document.getElementById("login-form");
const authSection = document.getElementById("auth-section");
const postsSection = document.getElementById("posts_section");
const postForm = document.getElementById("postForm");
const addPostform = document.getElementById("addPostform");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const userName = e.target.username.value;
  const password = e.target.password.value;

  displaypost();
  if (userName && password) {
    localStorage.setItem("username", userName);
    authSection.style.display = "none";
    postsSection.style.display = "flex";
    displaypost();
  }
});
if (localStorage.getItem("username")) {
  authSection.style.display = "none";
  postsSection.style.display = "flex";
}

const posts = [];
postForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = e.target.title.value;
  const image = e.target.postImage.files[0];

  const newPost = {
    id: posts.length + 1,
    username: localStorage.getItem("username"),
    content: title,
    image: image ? URL.createObjectURL(image) : null,
    timestamp: new Date().toLocaleString(),
    likes: 0,
    comments: [],
  };

  posts.push(newPost);
  postForm.reset();
  console.log(posts);
  displaypost();
});

function displaypost() {
  postsSection.innerHTML = ` <h2 style="width: 100%;">Posts</h2>
            <hr style="width: 100vw; margin: 30px 0;">
`;
  if (posts.length === 0) {
    postsSection.innerHTML = ` <h2 style="width: 100%;">Posts</h2>
  <hr style="width: 100vw; margin: 30px 0;">
  <h2 style='color:aqua'>No post to show</h2>
`;
  }
  posts.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.className = "post";
    postElement.innerHTML = `
      <div class="post-author">${post.username}</div>
      <div class="post-timestamp">${post.timestamp}</div>
      <div class="post-content">${post.content}</div>
      ${
        post.image
          ? `<img src="${post.image}" alt="Post Image" style="max-width: 100%;">`
          : ""
      }
      <div class="post-actions">
        <span class="like-button" onclick="likePost(${
          post.id
        })"><svg fill="#7fffd4" height="40px" width="40px" id='like_svg' version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M498.323,297.032c0-7.992-1.901-15.683-5.553-22.635c12.034-9.18,19.23-23.438,19.23-38.914 c0-27.037-21.996-49.032-49.032-49.032H330.206c11.434-29.24,17.665-64.728,17.665-101.419c0-23.266-18.928-42.194-42.194-42.194 s-42.193,18.928-42.193,42.194c0,83.161-58.012,145.389-144.355,154.844c-0.592,0.065-1.159,0.197-1.7,0.38 C111.752,235.129,104.235,232,96,232H32c-17.645,0-32,14.355-32,32v152c0,17.645,14.355,32,32,32h64 c9.763,0,18.513-4.4,24.388-11.315c20.473,2.987,33.744,9.534,46.568,15.882c16.484,8.158,33.53,16.595,63.496,16.595h191.484 c27.037,0,49.032-21.996,49.032-49.032c0-7.991-1.901-15.683-5.553-22.635c12.034-9.18,19.23-23.438,19.23-38.914 c0-7.991-1.901-15.683-5.553-22.635C491.126,326.766,498.323,312.507,498.323,297.032z M465.561,325.727H452c-4.418,0-8,3.582-8,8 s3.582,8,8,8h11.958c3.061,5.1,4.687,10.847,4.687,16.854c0,12.106-6.56,23.096-17.163,28.919h-14.548c-4.418,0-8,3.582-8,8 s3.582,8,8,8h13.481c2.973,5.044,4.553,10.71,4.553,16.629c0,18.214-14.818,33.032-33.032,33.032H230.452 c-26.223,0-40.207-6.921-56.398-14.935c-12.358-6.117-26.235-12.961-46.56-16.594c0.326-1.83,0.506-3.71,0.506-5.632V295 c0-4.418-3.582-8-8-8s-8,3.582-8,8v121c0,8.822-7.178,16-16,16H32c-8.822,0-16-7.178-16-16V264c0-8.822,7.178-16,16-16h64 c8.822,0,16,7.178,16,16c0,4.418,3.582,8,8,8s8-3.582,8-8c0-3.105-0.453-6.105-1.282-8.947 c44.778-6.106,82.817-25.325,110.284-55.813c27.395-30.408,42.481-70.967,42.481-114.208c0-14.443,11.75-26.194,26.193-26.194 c14.443,0,26.194,11.75,26.194,26.194c0,39.305-7.464,76.964-21.018,106.04c-1.867,4.004-0.134,8.764,3.871,10.631 c1.304,0.608,2.687,0.828,4.025,0.719c0.201,0.015,0.401,0.031,0.605,0.031h143.613c18.214,0,33.032,14.818,33.032,33.032 c0,11.798-6.228,22.539-16.359,28.469h-14.975c-4.418,0-8,3.582-8,8s3.582,8,8,8h12.835c3.149,5.155,4.822,10.984,4.822,17.079 C482.323,308.985,475.927,319.848,465.561,325.727z"></path> <path d="M422.384,325.727h-8.525c-4.418,0-8,3.582-8,8s3.582,8,8,8h8.525c4.418,0,8-3.582,8-8S426.802,325.727,422.384,325.727z"></path> <path d="M436.934,263.953h-8.525c-4.418,0-8,3.582-8,8s3.582,8,8,8h8.525c4.418,0,8-3.582,8-8S441.352,263.953,436.934,263.953z"></path> <path d="M407.833,387.5h-8.525c-4.418,0-8,3.582-8,8s3.582,8,8,8h8.525c4.418,0,8-3.582,8-8S412.252,387.5,407.833,387.5z"></path> <path d="M80,264c-8.822,0-16,7.178-16,16s7.178,16,16,16s16-7.178,16-16S88.822,264,80,264z"></path> </g> </g></svg> (${
      post.likes
    })</span>
        <span class="comment-button" onclick="showCommentBox(${
          post.id
        })">Comment (${post.comments.length})</span>
      </div>
      <div class="comments" id="comments-${post.id}">
      
      ${post.comments
        .map(
          (comment) => `
          <div class="comment">
            <strong>${comment.username}</strong>: <p>${comment.text}</p>
          </div>
        `
        )
        .join("")}
      </div>
      <div class="comment-box" id="comment-box-${
        post.id
      }" style="display: none;">
        <input type="text" id="comment-input-${
          post.id
        }" placeholder="Add a comment">
        <button onclick="addComment(${post.id})">Add</button>
      </div>
    `;
    postsSection.appendChild(postElement);
  });
}
displaypost();
function likePost(postId) {
  const post = posts.find((p) => p.id === postId);
  post.likes =+ post.likes == 1 ? 0 : 1;
  if(post.likes===1){
  
    document.getElementById('like_svg').style.display='none';

  }
  displaypost();
}

function showCommentBox(postId) {
  const commentBox = document.getElementById(`comment-box-${postId}`);
  if (commentBox.style.display === "none") {
    commentBox.style.display = "block";
  } else {
    commentBox.style.display = "none";
  }
}

function addComment(postId) {
  const commentInput = document.getElementById(`comment-input-${postId}`);
  const commentText = commentInput.value.trim();
  if (commentText) {
    const post = posts.find((p) => p.id === postId);
    if (post) {
      post.comments.push({
        username: localStorage.getItem("username"),
        text: commentText,
      });
      commentInput.value = "";
      displaypost();
    }
  }
}

function showAddPost() {
  addPostform.style.display = "block";
}
