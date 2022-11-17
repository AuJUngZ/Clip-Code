const input = document.getElementById("input");
const output = document.getElementById("output");

function Changenumber(text) {
  const thainumber = ["๐", "๑", "๒", "๓", "๔", "๕", "๖", "๗", "๘", "๙"];
  ///[0-9]/g as a regular expression
  return text.replace(/[0-9]/g, function (match) {
    return thainumber[match];
  });
}

input.addEventListener("input", (e) => {
  output.innerHTML = Changenumber(e.target.value);
});
