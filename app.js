const input = document.querySelector(".input");
const show = document.querySelector(".show");
const output = document.querySelector(".output");

show.addEventListener("click", () => {
  output.innerHTML = spongebobify(input.value);
  //console.log(spongebobify(input.value));
});

function spongebobify(text) {
  let string = text.split("");
  let sbtext = [];
  let odd = false;

  string.forEach(element => {
    if (element === " ") {
      sbtext.push(element);
    } else {
      if (!odd) {
        sbtext.push(element.toUpperCase());
        odd = true;
      } else {
        sbtext.push(element.toLowerCase());
        odd = false;
      }
    }
  });

  let combined = "";
  sbtext.forEach(element => {
    combined += element;
  });

  return combined;
}
