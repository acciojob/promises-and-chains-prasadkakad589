let btn = document.getElementById("btn");

btn.addEventListener("click", function (event) {
  event.preventDefault(); // stop form reload

  let age = document.getElementById("age").value.trim();
  let name = document.getElementById("name").value.trim();

  // Validation
  if (age === "" || name === "") {
    alert("Please enter valid details");
    return;
  }

  // Promise logic
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Number(age) > 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000);
  });

  // Handle result
  promise
    .then((msg) => {
      alert(msg);
    })
    .catch((err) => {
      alert(err);
    });
});