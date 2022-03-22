const butt1 = document.querySelector(`#one`);

butt1.onclick = function (){
  alert("You clicked the first button! Congrats!");
}

const h3 = document.querySelector(`h3`);

// 2b
h3.addEventListener(`mouseover`, () => {
  alert("You hovered over the h3 element! Congrats!");
});

const form = document.querySelector(`form`);

form.addEventListener(`submit`, function (v){
  v.preventDefault();
  const input = form.elements.entry.value;
  alert(input);
  form.elements.entry.value = ``;
});