let dishesonTable;
let persons;
let perviousdish;
let dishArray = [];
let dishespricearray = [];
const rupeeSymbol = "\u20B9";

// Input event for input screen -1

document.querySelector("#disehesOntable").addEventListener("input", (e) => {
  dishesonTable = e.target.value;
});

// Click event for screen-1 submit button

document.querySelector("#dishButton").addEventListener("click", () => {
  // removing innerHtml of total bill and each person bi;; for output screen
  document.querySelector("#Total-Bill").innerHTML = "";
  document.querySelector("#Bill-per-person").innerHTML = "";

  document.querySelector("#persons").value = null;
  persons = null;

  // Checking input price field of dishes filled or not

  if (dishesonTable === undefined) {
    alert("Please enter number of dishes order by customer");
    return undefined;
  }

  // Removing perivious div taf if present which prevent any unexpected error

  if (perviousdish) {
    for (let i = 0; perviousdish > i; i++) {
      dishArray[i].remove();
    }
  }
  // Enable input-screen-2 before display none
  document.querySelector("#input-screen2").style.display = "flex";
  for (let i = 0; dishesonTable > i; i++) {
    // Creating div tag for each dish with label and input tag
    dishArray[i] = document.createElement("div");
    dishArray[i].idname = `dish-${i}`;
    dishArray[i].classList.add("dish");

    document.querySelector("#input-2-body").appendChild(dishArray[i]);

    // Creating Label for dishes in input-screen-2

    dishArray[i].label = document.createElement("label");
    dishArray[i].label.setAttribute("for", `price-dish-${i + 1}`);
    dishArray[i].label.textContent = `Dish-${i + 1} : `;
    dishArray[i].appendChild(dishArray[i].label);

    // Creating input  for dishes in input-screen-2

    dishArray[i].input = document.createElement("input");
    dishArray[i].input.setAttribute("type", "number");
    dishArray[i].input.idname = `price-dish-${i + 1}`;
    dishArray[i].appendChild(dishArray[i].input);

    // adding input event on dynamically created input tag

    dishArray[i].input.addEventListener("input", (e) => {
      dishespricearray[i] = e.target.value;
    });
  }

  // previous dishes copied in another variable for future use of removing the div tag

  perviousdish = dishesonTable;
});

// Click event for create dish button in screen2

document.querySelector("#input-2-button").addEventListener("click", () => {
  // Checking input field of all dishes price are filled or not

  for (let i = 0; dishesonTable > i; i++) {
    if (dishespricearray[i] === undefined || dishespricearray[i] == "") {
      alert(
        `Please fill all the input box of "Enter different-defferent dishes price"`
      );
      return undefined;
    }
  }

  // Enable input-screen-3 , before displaying none

  document.querySelector("#input-screen-3").style.display = "flex";
});

// input event for peoples in input-screen-3
document.querySelector("#persons").addEventListener("input", (e) => {
  persons = e.target.value;
});

document.querySelector("#person-btn").addEventListener("click", () => {
  if (persons === undefined) {
    alert(
      `Please fill the input field of "Enter total no of people sharing dishes"`
    );
    return undefined;
  }

  // Calculating total price of dishes from dishArray
  let TotalBill = dishespricearray.reduce((ac, currentVal) => {
    return Number(ac) + Number(currentVal);
  });

  // adding innerHTML to total bill

  document.querySelector(
    "#Total-Bill"
  ).innerHTML = `Total bill : <span> ${TotalBill.toFixed(
    2
  )}${rupeeSymbol}</span>`;

  document.querySelector(
    "#Bill-per-person"
  ).innerHTML = `Bill to be paid by each person in group : <span> ${(
    TotalBill / Number(persons)
  ).toFixed(2)}${rupeeSymbol}</span>`;
});
