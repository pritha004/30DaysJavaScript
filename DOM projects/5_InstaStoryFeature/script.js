const data = [
  {
    user_id: "i_am_david",
    dp: "https://images.unsplash.com/photo-1622519407650-3df9883f76a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWwlMjBtYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    story:
      "https://images.unsplash.com/photo-1500835556837-99ac94a94552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
  {
    user_id: "rachel_smith",
    dp: "https://images.unsplash.com/photo-1637858868799-7f26a0640eb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNhcnRvb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    story:
      "https://images.unsplash.com/photo-1528543606781-2f6e6857f318?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    user_id: "ikive",
    dp: "https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FydG9vbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    story:
      "https://images.unsplash.com/photo-1579487785973-74d2ca7abdd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8b2ZmaWNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
  {
    user_id: "cyn23",
    dp: "https://images.unsplash.com/photo-1617922001439-4a2e6562f328?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWwlMjBnaXJsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    story:
      "https://images.unsplash.com/photo-1567880905822-56f8e06fe630?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FmZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    user_id: "_david.anderson_",
    dp: "https://images.unsplash.com/photo-1622262918009-6a39cd1fb49d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vZGVsJTIwbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    story:
      "https://images.unsplash.com/photo-1545147986-a9d6f2ab03b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBsYW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
  {
    user_id: "kate_gh",
    dp: "https://images.unsplash.com/photo-1578632292335-df3abbb0d586?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    story:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
];

const stories = document.querySelector("#stories");
const heart = document.querySelector(".btns i");
const postImage = document.querySelector("#post-image");
const love = document.querySelector(".post i");

var storiesHTML = "";

data.forEach((elem, index) => {
  storiesHTML += `
    <div class="story-container">
    <div class="story">
    <img id="${index}" src="${elem.dp}" alt="" srcset="">
    </div>
    <p>${elem.user_id}</p>
  </div>
    `;
});

stories.innerHTML += storiesHTML;

const storyContainers = document.querySelectorAll(".story-container");
storyContainers.forEach((eachStory) => {
  console.log(eachStory.firstElementChild.style.background);
  eachStory.addEventListener("click", (e) => {

    let story = data[e.target.id].story;
    document.querySelector("#full-screen").style.display = "block";
    document.querySelector("#full-screen").style.backgroundImage = `url(${story})`;
    document.querySelector("#user").style.display = "none";
    document.querySelector("#post-image").style.display = "none";
    eachStory.firstElementChild.style.background = "rgb(201, 200, 199)";

    setTimeout(() => {
      document.querySelector("#full-screen").style.display = "none";
      document.querySelector("#user").style.display = "block";
      document.querySelector("#post-image").style.display = "block";
    }, 3000);
  });
});


heart.addEventListener("click", () => {
  if (heart.className.includes("ri-heart-line")) {
    heart.className = "ri-heart-fill";
    heart.style.color = "red";
  } else {
    heart.className = "ri-heart-line";
    heart.style.color = "black";
  }
});

postImage.addEventListener("dblclick", () => {
  love.style.transform = "translate(-50%,-50%) scale(1)";
  love.style.opacity = 0.8;
  heart.className = "ri-heart-fill";
  heart.style.color = "red";
  setTimeout(() => {
    love.style.opacity = 0;
    love.style.transform = "translate(-50%,-50%) scale(0)";
  }, 1000);
});

// stories.addEventListener("click", (e) => {
//   let story = data[e.target.id].story;
//   document.querySelector("#full-screen").style.display = "block";
//   document.querySelector(
//     "#full-screen"
//   ).style.backgroundImage = `url(${story})`;
//   document.querySelector('#user').style.display="none";
//   document.querySelector("#post-image").style.display="none";
//   setTimeout(() => {
//     document.querySelector("#full-screen").style.display = "none";
//     document.querySelector('#user').style.display="block";
//     document.querySelector("#post-image").style.display="block";
//   }, 3000);
// });