let btn = document.getElementById("btn");

function msg(event) {
  event.preventDefault(); // stop form reload

  let age = document.getElementById("age").value.trim();
  let name = document.getElementById("name").value.trim();

  if (age === "" || name === "") {
    alert("Please enter valid details.");
    return;
  }

  let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age > 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000);
  });

  promise1
    .then((data) => {
      alert(data);
    })
    .catch((err) => {
      alert(err);
    });
}

btn.addEventListener("click", msg);