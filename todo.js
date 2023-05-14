var add = document.getElementById("add");
let data = document.getElementById("data");
let submit = document.getElementById("submit");
let cancel = document.getElementById("cancel");
let cards = document.getElementById("cards");
var title=document.getElementById('title');
var description=document.getElementById('description');
var colors=['#ffef5c','#76d7ed','#f2b4cc','#fbb03c','#83CEAE']
var i=0;
title.setAttribute("required","true");
// #######################################################################################

function toggle(){
    var come=document.querySelector('.completed');
        if(come.classList.contains="fa-regular")
        {
            come.classList.remove('fa-regular');
            come.classList.add('fa-solid');
        }
        else
           { 
            come.classList.remove('fa-solid');
            come.classList.add('fa-regular');
        }     
    }

add.addEventListener("click", function () {
  data.classList.remove("hide");
  data.classList.add("show");
 cards.classList.add("blur");
});
submit.addEventListener("click", function () {
    let x=title.value;
    let y=description.value;
  if(!x)
  console.log('');
  else
  {
  const card = document.createElement("div");
  card.classList.add("card");
  card.classList.add("col-lg-3");
  card.classList.add("col-md-5");
  card.classList.add("col-sm-10");
  card.classList.add("m-2");
  card.classList.add("task");
  const cardhead = document.createElement("div");
  cardhead.classList.add("card-header");
  cardhead.classList.add("fw-semibold");
  cardhead.classList.add("text-capitalize");
  cardhead.classList.add("fs-5");
  cardhead.classList.add("w-100");
  cardhead.innerHTML=x;
  const cardbody = document.createElement("div");
  cardbody.classList.add("card-body");
  cardbody.classList.add("text-muted");
  cardbody.classList.add("fw-normal");
  cardbody.innerHTML=y;

  const cross = document.createElement("i");
  cross.classList.add("fa-solid");
  cross.classList.add("fa-xmark");
  cross.classList.add("delete");
  cross.setAttribute("onclick","this.parentElement.parentElement.style.display = 'none'");
  const complete = document.createElement("i");
  complete.classList.add("fa-regular");
  complete.classList.add("fa-square-check");
  complete.classList.add("completed");
  complete.setAttribute("onclick","toggle()");

  card.appendChild(cardhead);
  cardhead.appendChild(cross);
  cardhead.appendChild(complete);
  card.appendChild(cardbody);
  cards.appendChild(card);

card.style.background=colors[i];
cardhead.style.background=colors[i];
cardbody.style.background=colors[i];
i++;
if(i==5)
{
    i=0;
}
    cards.classList.add("noblur");
  data.classList.remove("show");
  data.classList.add("hide");
  description.value="";
  title.value="";
  }
});

cancel.addEventListener("click", function () {
  data.classList.remove("show");
  data.classList.add("hide");
  description.value="";
  title.value="";
  cards.classList.add("noblur");
});


    
    
   

