const input = document.querySelector(".input");
const show = document.querySelector(".show");
const output = document.querySelector(".output");

show.addEventListener("click", () => {
  output.value = spongebobify(input.value);
  output.select();
  document.execCommand("copy");
});

function spongebobify(text) {
  let sbtext = [];
  let odd = false;

  for (let i = 0; i < text.length; i++) {
    if (text[i] === " ") {
      sbtext.push(text[i]);
    } else {
      if (!odd) {
        sbtext.push(text[i].toUpperCase());
        odd = true;
      } else {
        sbtext.push(text[i].toLowerCase());
        odd = false;
      }
    }
  }

  let combined = "";
  sbtext.forEach(element => {
    combined += element;
  });

  return combined;
}
