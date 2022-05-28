const cat_btn = document.getElementById("cat_btn");
const dog_btn = document.getElementById("dog_btn");
const cat_result = document.getElementById("cat_result");
const dog_result = document.getElementById("dog_result");

const catData = "https://aws.random.cat/meow";
const dogData = "https://random.dog/woof.json";

cat_btn.addEventListener("click", getRandomCat);
dog_btn.addEventListener("click", getRandomDog);

function getRandomCat() {
  fetch(catData)
    .then((res) => res.json())
    .then((data) => {
      cat_result.innerHTML = `<img src=${data.file} alt="cat" />`;
    });
}

function getRandomDog() {
  fetch(dogData)
    .then((res) => res.json())
    .then((data) => {
      if (data.url.includes(".mp4")) {
        dog_result.innerHTML = `<video autoplay>
				<source src=${data.url} type="video/mp4">
			  </video>`;
      } else {
        dog_result.innerHTML = `<img src=${data.url} alt="dog" />`;
      }
    });
}
