function startNumbers() {
  event.preventDefault()
  highestNum = document.getElementById("numberInput").value.trim();
  var a = 0
  var b = 1
  var c = 0
  var stringOutput = ""
  for(var i=0; i <= highestNum; i++) {
    c = a + b
    a = b
    b = c
    console.log(c)

    var tempString = c + ", ";
    var stringOutput = stringOutput + tempString;
  }
  console.log(stringOutput);

  var numbersDiv = document.getElementById("numberSequence");
  numbersDiv.innerHTML = "";
  var numbersString = document.createTextNode(stringOutput); 
  numbersDiv.appendChild(numbersString);

}