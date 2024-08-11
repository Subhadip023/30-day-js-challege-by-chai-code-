const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
const authSection = document.getElementById("auth-section");
const regSection = document.getElementById("reg-section");
const postsSection = document.getElementById("posts_section");
const postForm = document.getElementById("postForm");
const addPostform = document.getElementById("addPostform");
const userImageUpdate = document.getElementById("userImageUpdate");
const userInfo = document.getElementById("userInfo");

const regError=document.getElementById('erromessage_reg')

const unlikeSvg = `<svg fill="#7fffd4" height="40px" width="40px"  version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" stroke="#ffffff">
<g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M498.323,297.032c0-7.992-1.901-15.683-5.553-22.635c12.034-9.18,19.23-23.438,19.23-38.914 c0-27.037-21.996-49.032-49.032-49.032H330.206c11.434-29.24,17.665-64.728,17.665-101.419c0-23.266-18.928-42.194-42.194-42.194 s-42.193,18.928-42.193,42.194c0,83.161-58.012,145.389-144.355,154.844c-0.592,0.065-1.159,0.197-1.7,0.38 C111.752,235.129,104.235,232,96,232H32c-17.645,0-32,14.355-32,32v152c0,17.645,14.355,32,32,32h64 c9.763,0,18.513-4.4,24.388-11.315c20.473,2.987,33.744,9.534,46.568,15.882c16.484,8.158,33.53,16.595,63.496,16.595h191.484 c27.037,0,49.032-21.996,49.032-49.032c0-7.991-1.901-15.683-5.553-22.635c12.034-9.18,19.23-23.438,19.23-38.914 c0-7.991-1.901-15.683-5.553-22.635C491.126,326.766,498.323,312.507,498.323,297.032z M465.561,325.727H452c-4.418,0-8,3.582-8,8 s3.582,8,8,8h11.958c3.061,5.1,4.687,10.847,4.687,16.854c0,12.106-6.56,23.096-17.163,28.919h-14.548c-4.418,0-8,3.582-8,8 s3.582,8,8,8h13.481c2.973,5.044,4.553,10.71,4.553,16.629c0,18.214-14.818,33.032-33.032,33.032H230.452 c-26.223,0-40.207-6.921-56.398-14.935c-12.358-6.117-26.235-12.961-46.56-16.594c0.326-1.83,0.506-3.71,0.506-5.632V295 c0-4.418-3.582-8-8-8s-8,3.582-8,8v121c0,8.822-7.178,16-16,16H32c-8.822,0-16-7.178-16-16V264c0-8.822,7.178-16,16-16h64 c8.822,0,16,7.178,16,16c0,4.418,3.582,8,8,8s8-3.582,8-8c0-3.105-0.453-6.105-1.282-8.947 c44.778-6.106,82.817-25.325,110.284-55.813c27.395-30.408,42.481-70.967,42.481-114.208c0-14.443,11.75-26.194,26.193-26.194 c14.443,0,26.194,11.75,26.194,26.194c0,39.305-7.464,76.964-21.018,106.04c-1.867,4.004-0.134,8.764,3.871,10.631 c1.304,0.608,2.687,0.828,4.025,0.719c0.201,0.015,0.401,0.031,0.605,0.031h143.613c18.214,0,33.032,14.818,33.032,33.032 c0,11.798-6.228,22.539-16.359,28.469h-14.975c-4.418,0-8,3.582-8,8s3.582,8,8,8h12.835c3.149,5.155,4.822,10.984,4.822,17.079 C482.323,308.985,475.927,319.848,465.561,325.727z"></path> <path d="M422.384,325.727h-8.525c-4.418,0-8,3.582-8,8s3.582,8,8,8h8.525c4.418,0,8-3.582,8-8S426.802,325.727,422.384,325.727z"></path> <path d="M436.934,263.953h-8.525c-4.418,0-8,3.582-8,8s3.582,8,8,8h8.525c4.418,0,8-3.582,8-8S441.352,263.953,436.934,263.953z"></path> <path d="M407.833,387.5h-8.525c-4.418,0-8,3.582-8,8s3.582,8,8,8h8.525c4.418,0,8-3.582,8-8S412.252,387.5,407.833,387.5z">
</path> <path d="M80,264c-8.822,0-16,7.178-16,16s7.178,16,16,16s16-7.178,16-16S88.822,264,80,264z"></path> </g> </g></svg>`;
const likeSvg = `<svg fill="#439825" height="40px" width="40px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-51.2 -51.2 614.40 614.40" xml:space="preserve" stroke="#439825" stroke-width="0.00512">
<g id="SVGRepo_bgCarrier" stroke-width="0" transform="translate(0,0), scale(1)"><rect x="-51.2" y="-51.2" width="614.40" height="614.40" rx="307.2" fill="#302390" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="1.024"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M498.323,297.032c0-7.992-1.901-15.683-5.553-22.635c12.034-9.18,19.23-23.438,19.23-38.914 c0-27.037-21.996-49.032-49.032-49.032H330.206c11.434-29.24,17.665-64.728,17.665-101.419c0-23.266-18.928-42.194-42.194-42.194 s-42.193,18.928-42.193,42.194c0,83.161-58.012,145.389-144.355,154.844c-0.592,0.065-1.159,0.197-1.7,0.38 C111.752,235.129,104.235,232,96,232H32c-17.645,0-32,14.355-32,32v152c0,17.645,14.355,32,32,32h64 c9.763,0,18.513-4.4,24.388-11.315c20.473,2.987,33.744,9.534,46.568,15.882c16.484,8.158,33.53,16.595,63.496,16.595h191.484 c27.037,0,49.032-21.996,49.032-49.032c0-7.991-1.901-15.683-5.553-22.635c12.034-9.18,19.23-23.438,19.23-38.914 c0-7.991-1.901-15.683-5.553-22.635C491.126,326.766,498.323,312.507,498.323,297.032z M465.561,325.727H452c-4.418,0-8,3.582-8,8 s3.582,8,8,8h11.958c3.061,5.1,4.687,10.847,4.687,16.854c0,12.106-6.56,23.096-17.163,28.919h-14.548c-4.418,0-8,3.582-8,8 s3.582,8,8,8h13.481c2.973,5.044,4.553,10.71,4.553,16.629c0,18.214-14.818,33.032-33.032,33.032H230.452 c-26.223,0-40.207-6.921-56.398-14.935c-12.358-6.117-26.235-12.961-46.56-16.594c0.326-1.83,0.506-3.71,0.506-5.632V295 c0-4.418-3.582-8-8-8s-8,3.582-8,8v121c0,8.822-7.178,16-16,16H32c-8.822,0-16-7.178-16-16V264c0-8.822,7.178-16,16-16h64 c8.822,0,16,7.178,16,16c0,4.418,3.582,8,8,8s8-3.582,8-8c0-3.105-0.453-6.105-1.282-8.947 c44.778-6.106,82.817-25.325,110.284-55.813c27.395-30.408,42.481-70.967,42.481-114.208c0-14.443,11.75-26.194,26.193-26.194 c14.443,0,26.194,11.75,26.194,26.194c0,39.305-7.464,76.964-21.018,106.04c-1.867,4.004-0.134,8.764,3.871,10.631 c1.304,0.608,2.687,0.828,4.025,0.719c0.201,0.015,0.401,0.031,0.605,0.031h143.613c18.214,0,33.032,14.818,33.032,33.032 c0,11.798-6.228,22.539-16.359,28.469h-14.975c-4.418,0-8,3.582-8,8s3.582,8,8,8h12.835c3.149,5.155,4.822,10.984,4.822,17.079 C482.323,308.985,475.927,319.848,465.561,325.727z"></path> <path d="M422.384,325.727h-8.525c-4.418,0-8,3.582-8,8s3.582,8,8,8h8.525c4.418,0,8-3.582,8-8S426.802,325.727,422.384,325.727z"></path> <path d="M436.934,263.953h-8.525c-4.418,0-8,3.582-8,8s3.582,8,8,8h8.525c4.418,0,8-3.582,8-8S441.352,263.953,436.934,263.953z">
</path> <path d="M407.833,387.5h-8.525c-4.418,0-8,3.582-8,8s3.582,8,8,8h8.525c4.418,0,8-3.582,8-8S412.252,387.5,407.833,387.5z"></path> <path d="M80,264c-8.822,0-16,7.178-16,16s7.178,16,16,16s16-7.178,16-16S88.822,264,80,264z"></path> </g> </g></svg>`;

const users = [];


function showReg(signal) {
  if (signal) {
    regSection.style.display = "flex";
    showLogin(false)
  }
  else{
    regSection.style.display = "none";

  }
}
function showLogin(signal) {
  if (signal) {
    authSection.style.display = "flex";
    showReg(false)
  }else{
    authSection.style.display = "none";

  }
}


if (localStorage.getItem("username")) {
  showLogin(false);
  showReg(false);
  postsSection.style.display = "flex";
} else {
  showReg(true)
  showLogin(false)
}


registerForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = e.target.username.value;
  const email = e.target.email.value;
  const password = e.target.password.value;
  const confirmPassword = e.target.confirm_password.value;
  
  if (users.find((user) => user.username === username || user.email === email)) {
    showErrorNotification("User Already exists");
    return;
  }

  if (password !== confirmPassword) {
    showErrorNotification("Password Not Matched");
    return;
  }

  const userInfo = { username, email, password };
  users.push(userInfo);
  localStorage.setItem(`${username}`, JSON.stringify(userInfo));
  console.log(userInfo);
  showSuccessNotification("Registration successful");
  showLogin(true);
});

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const userName = e.target.username.value;
  const password = e.target.password.value;

  // Get user data from localStorage
  const user = JSON.parse(localStorage.getItem(userName));
  
  // Clear previous error message
  const errorMessage = document.getElementById("erromessage_login");
  errorMessage.style.display = "none";
  errorMessage.innerHTML = "";

  // Check if user exists
  if (!user) {
    showErrorNotification('User Not Found');
    return;
  }

  // Check if password matches
  if (user.password === password) {
    showLogin(false);
    postsSection.style.display = "flex";
    displaypost(user.username);
    displayUser(user);
    showSuccessNotification("Login successful");
  } else {
    showErrorNotification('Incorrect Password');
  }
});




const posts = [
  {
    id: 1,
    username: "subhadip",
    content: "This is an interesting post about technology.",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    timestamp: "2024-08-11 08:00:00",
    likes: ["Alice", "Bob", "subhadip"], // Example of likes
    comments: [],
  },
  {
    id: 2,
    username: "Bob",
    content: "I just went on a great hike today!",
    image:
      "https://images.unsplash.com/photo-1501554728187-ce583db33af7?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    timestamp: "2024-08-11 09:00:00",
    likes: ["Bob", "Charlie"], // Example of likes
    comments: [],
  },
  {
    id: 3,
    username: "Charlie",
    content: "Here's a picture of my new puppy!",
    image:
      "https://images.unsplash.com/photo-1560807707-8cc77767d783?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    timestamp: "2024-08-11 10:00:00",
    likes: ["Charlie", "Diana"], // Example of likes
    comments: [],
  },
  {
    id: 4,
    username: "Diana",
    content: "Check out this amazing recipe I tried.",
    image:
      "https://images.unsplash.com/photo-1528712306091-ed0763094c98?q=80&w=1040&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    timestamp: "2024-08-11 11:00:00",
    likes: ["Diana", "Eve"], // Example of likes
    comments: [],
  },
  {
    id: 5,
    username: "Eve",
    content: "Had a wonderful day at the beach.",
    image:
      "https://images.unsplash.com/photo-1494459940152-1e911caa8cc5?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    timestamp: "2024-08-11 12:00:00",
    likes: ["Eve", "Alice"], // Example of likes
    comments: [],
  },
  {
    id: 6,
    username: "Alice",
    content: "Just finished reading a fantastic book.",
    image:
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    timestamp: "2024-08-11 13:00:00",
    likes: ["Alice"], // Example of likes
    comments: [],
  },
  {
    id: 7,
    username: "Bob",
    content: "Can't wait for the upcoming movie release!",
    image:
      "https://images.unsplash.com/photo-1486693326701-1ea88c6e2af3?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    timestamp: "2024-08-11 14:00:00",
    likes: ["Bob", "Charlie"], // Example of likes
    comments: [],
  },
  {
    id: 8,
    username: "Charlie",
    content: "Spent the day working on a cool project.",
    image:
      "https://images.unsplash.com/photo-1579389083395-4507e98b5e67?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    timestamp: "2024-08-11 15:00:00",
    likes: ["Charlie", "Diana"], // Example of likes
    comments: [],
  },
  {
    id: 9,
    username: "Diana",
    content: "Here's a sneak peek of my latest artwork.",
    image:
      "https://images.unsplash.com/photo-1561647858-b160d9c17885?q=80&w=989&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    timestamp: "2024-08-11 16:00:00",
    likes: ["Diana", "Eve"], // Example of likes
    comments: [],
  },
  {
    id: 10,
    username: "Eve",
    content: "Enjoying a relaxing day with family.",
    image:
      "https://images.unsplash.com/photo-1622600417356-0a26479306b5?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    timestamp: "2024-08-11 17:00:00",
    likes: ["Eve", "Alice"], // Example of likes
    comments: [],
  },
  {
    id: 11,
    username: "Alice",
    content: "Trying out a new workout routine!",
    image:
      "https://images.unsplash.com/photo-1618688862225-ac941a9da58f?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    timestamp: "2024-08-11 18:00:00",
    likes: ["Alice", "Bob"], // Example of likes
    comments: [],
  },
  {
    id: 12,
    username: "Bob",
    content: "Caught up with some old friends today.",
    image:
      "https://images.unsplash.com/photo-1466695108335-44674aa2058b?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    timestamp: "2024-08-11 19:00:00",
    likes: ["Bob", "Charlie"], // Example of likes
    comments: [],
  },
];

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
    likes: [],
    comments: [],
  };

  posts.push(newPost);
  postForm.reset();
  displaypost();
});

function displaypost(username=null) {
  
  // Ensure userInfo and postsSection are defined and valid
  if (!userInfo || !postsSection) return;

  userInfo.style.display = 'flex';
  postsSection.innerHTML = `
    <h2 style="width: 100%;">Posts</h2>
  `;

  if (posts.length === 0) {
    postsSection.innerHTML += `
      <hr style="width: 100vw; margin: 30px 0;">
      <h2 style="color: aqua;">No posts to show</h2>
    `;
    return; // Exit if there are no posts
  }
  posts.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.className = "post";
    postElement.innerHTML = `
      <div class="post-author">${post.username}</div>
      <div class="post-timestamp">${post.timestamp.split(" ")[0]}</div>
      <div class="post-content">${post.content}</div>
      <div class="post_img">
        ${post.image ? `<img src="${post.image}" alt="Post Image" style="max-width: 100%;">` : ""}
      </div>
      <div class="post-actions">
        <span class="like-button" onclick="likePost(${post.id},'${username}')"> 
          ${post.likes.includes(username) ? likeSvg : unlikeSvg}
        </span>
        <span class="comment-button" onclick="showCommentBox(${post.id})">Comment (${post.comments.length})</span>
      </div>
      <div class="comments" id="comments-${post.id}">
        ${post.comments.map(comment => `
          <div class="comment">
            <strong>${comment.username}</strong>: <p>${comment.text}</p>
          </div>
        `).join("")}
      </div>
      <div class="comment-box" id="comment-box-${post.id}" style="display: none;">
        <input type="text" id="comment-input-${post.id}" placeholder="Add a comment">
        <button onclick="addComment(${post.id},'${username}')">Add</button>
      </div>
    `;
    postsSection.appendChild(postElement);
  });
}
function displayUser(user) {
  userInfo.innerHTML = `
      <h3>${user.username}</h3>
      ${user.avater ? 
          `<img src=${user.avater} alt="${user.username}'s avatar">` :
          `<img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Default avatar">`
      }
      <form id="userImageUpdate">
          <input name="userImage" id="userImage" type="file" accept="image/*" >
          <input name="username" id="username" type="text" hidden value="${user.username}">
          <button type="submit">Change</button>
      </form>
      <h3>${user.email}</h3>
  `;

document.getElementById('userImageUpdate').addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent default form submission

  const form = e.target;
  const image = form.userImage.files[0];
  
  if (!image) {
      console.log('No image selected');
      return;
  }

  const userId = form.username.value;
  const user = JSON.parse(localStorage.getItem(userId));

  if (!user) {
      console.log('User not found');
      return;
  }

  user.avater = URL.createObjectURL(image);
  localStorage.setItem(userId, JSON.stringify(user));

  // Update the UI to reflect the new avatar
  displayUser(user);
});
}






function likePost(postId,username) {
  const post = posts.find((p) => p.id === postId);

  if (post.likes.includes(username)) {
    // User has already liked the post, so remove the like
    post.likes = post.likes.filter((user) => user !== username);
  } else {
    // User has not liked the post yet, so add the like
    post.likes.push(username);
  }

  // Update the display
  displaypost(username);
}

function showCommentBox(postId) {
  const commentBox = document.getElementById(`comment-box-${postId}`);
  if (commentBox.style.display === "none") {
    commentBox.style.display = "block";
  } else {
    commentBox.style.display = "none";
  }
}

function addComment(postId,username) {
  const commentInput = document.getElementById(`comment-input-${postId}`);
  const commentText = commentInput.value.trim();
  if (commentText) {
    const post = posts.find((p) => p.id === postId);
    if (post) {
      post.comments.push({
        username: username,
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

function showNotification(message, duration = 3000) {
  const notification = document.getElementById('notification');
  notification.textContent = message;
  notification.style.display = 'block';

  setTimeout(() => {
    notification.style.display = 'none';
  }, duration);
}
const notificationContainer = document.getElementById('notification-container');

// Function to create a notification
function createNotification(message, type) {
  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  notification.innerText = message;
  
  // Add the notification to the container
  notificationContainer.appendChild(notification);
  
  // Remove the notification after 5 seconds
  setTimeout(() => {
    notification.remove();
  }, 5000);
}

// Function to show a success notification
function showSuccessNotification(message) {
  createNotification(message, 'success');
}

// Function to show an error notification
function showErrorNotification(message) {
  createNotification(message, 'error');
}

// Add some basic CSS for notifications
const style = document.createElement('style');
style.innerHTML = `
  .notification {
    padding: 10px;
    margin: 5px 0;
    border-radius: 5px;
    color: #fff;
    font-size: 16px;
    font-family: Arial, sans-serif;
    opacity: 0.9;
  }
  .notification.success {
    background-color: #4caf50;
  }
  .notification.error {
    background-color: #f44336;
  }
`;
document.head.appendChild(style);
