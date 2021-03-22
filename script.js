var stringers = [3, "Jerry", "Sandy", 4, "Pepper", 15, "Jocastah", 12];

function writeLine(text) {
  var that = this;
  this.ele = document.createElement("p");
  this.ele.style.color = "black";
  this.ele.innerHTML = "The value is " + text + " and "
  if (typeof(text) === "string") {
    if (text.length > 5) {
      this.ele.innerHTML += "it is longer than 5 characters."
    } else {
      this.ele.innerHTML += "it is normal."
    }
  } else {
    if (text < 10) {
      this.ele.innerHTML += "it is less than 10."
    } else if (text === 15) {
      this.ele.innerHTML += "it is equal to 15."
    } else {
      this.ele.innerHTML += "it is normal."
    }
  }
  this.ele.addEventListener("click", function() {
    that.changeColor();
  })
  document.body.appendChild(this.ele);
}

writeLine.prototype.changeColor = function() {
  if (this.ele.style.color === "black") {
    this.ele.style.color = "blue";
  } else {
    this.ele.style.color = "black";
  }
}



function createArray() {
  this.stringArray = [];
  for (entry in stringers) {
    this.stringArray.push(new writeLine(stringers[entry]))
  }
}

createArray();