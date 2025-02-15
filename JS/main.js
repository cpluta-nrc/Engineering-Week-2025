// main.js
const Logic = require('./logic');

let allPassed = true;
let output = "";

if (Logic.ScenarioA() === 4) { output += "A"; } else { console.log("Scenario A failed."); allPassed = false; }
if (Logic.ScenarioB() === 5) { output += "B"; } else { console.log("Scenario B failed."); allPassed = false; }
if (Logic.ScenarioC() === -4) { output += "C"; } else { console.log("Scenario C failed."); allPassed = false; }
if (Logic.ScenarioD() === 2) { output += "D"; } else { console.log("Scenario D failed."); allPassed = false; }
if (Logic.ScenarioE() === 12) { output += "E"; } else { console.log("Scenario E failed."); allPassed = false; }
if (Logic.ScenarioF() === 7) { output += "F"; } else { console.log("Scenario F failed."); allPassed = false; }
if (Logic.ScenarioG() === -6) { output += "G"; } else { console.log("Scenario G failed."); allPassed = false; }
if (Logic.ScenarioH() === -2) { output += "H"; } else { console.log("Scenario H failed."); allPassed = false; }
if (Logic.ScenarioI() === 0) { output += "I"; } else { console.log("Scenario I failed."); allPassed = false; }
if (Logic.ScenarioJ() === -3) { output += "J"; } else { console.log("Scenario J failed."); allPassed = false; }
if (Logic.ScenarioK() === 16) { output += "K"; } else { console.log("Scenario K failed."); allPassed = false; }
if (Logic.ScenarioL() === 3) { output += "L"; } else { console.log("Scenario L failed."); allPassed = false; }
if (Logic.ScenarioM() === 25) { output += "M"; } else { console.log("Scenario M failed."); allPassed = false; }
if (Logic.ScenarioN() === 10) { output += "N"; } else { console.log("Scenario N failed."); allPassed = false; }
if (Logic.ScenarioO() === 18) { output += "O"; } else { console.log("Scenario O failed."); allPassed = false; }
if (Logic.ScenarioP() === 8) { output += "P"; } else { console.log("Scenario P failed."); allPassed = false; }
if (Logic.ScenarioQ() === 30) { output += "Q"; } else { console.log("Scenario Q failed."); allPassed = false; }
if (Logic.ScenarioR() === 7) { output += "R"; } else { console.log("Scenario R failed."); allPassed = false; }
if (Logic.ScenarioS() === 14) { output += "S"; } else { console.log("Scenario S failed."); allPassed = false; }
if (Logic.ScenarioT() === 9) { output += "T"; } else { console.log("Scenario T failed."); allPassed = false; }
if (Logic.ScenarioU() === 20) { output += "U"; } else { console.log("Scenario U failed."); allPassed = false; }
if (Logic.ScenarioV() === 11) { output += "V"; } else { console.log("Scenario V failed."); allPassed = false; }
if (Logic.ScenarioW() === 15) { output += "W"; } else { console.log("Scenario W failed."); allPassed = false; }
if (Logic.ScenarioX() === 13) { output += "X"; } else { console.log("Scenario X failed."); allPassed = false; }
if (Logic.ScenarioY() === 22) { output += "Y"; } else { console.log("Scenario Y failed."); allPassed = false; }
if (Logic.ScenarioZ() === 17) { output += "Z"; } else { console.log("Scenario Z failed."); allPassed = false; }

if (allPassed) {
    console.log(output);
} else {
    console.log("One or more scenarios failed. Please fix your logic in the provided files.");
}
