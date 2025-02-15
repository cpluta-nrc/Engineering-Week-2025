using System;

namespace EngineeringWeekExercise
{
    class Program
    {
        static void Main(string[] args)
        {
            bool allPassed = true;
            string output = "";

            if (Logic.ScenarioA() == 4) { output += "A"; } else { Console.WriteLine("Scenario A failed."); allPassed = false; }
            if (Logic.ScenarioB() == 5) { output += "B"; } else { Console.WriteLine("Scenario B failed."); allPassed = false; }
            if (Logic.ScenarioC() == -4) { output += "C"; } else { Console.WriteLine("Scenario C failed."); allPassed = false; }
            if (Logic.ScenarioD() == 2) { output += "D"; } else { Console.WriteLine("Scenario D failed."); allPassed = false; }
            if (Logic.ScenarioE() == 12) { output += "E"; } else { Console.WriteLine("Scenario E failed."); allPassed = false; }
            if (Logic.ScenarioF() == 7) { output += "F"; } else { Console.WriteLine("Scenario F failed."); allPassed = false; }
            if (Logic.ScenarioG() == -6) { output += "G"; } else { Console.WriteLine("Scenario G failed."); allPassed = false; }
            if (Logic.ScenarioH() == -2) { output += "H"; } else { Console.WriteLine("Scenario H failed."); allPassed = false; }
            if (Logic.ScenarioI() == 0) { output += "I"; } else { Console.WriteLine("Scenario I failed."); allPassed = false; }
            if (Logic.ScenarioJ() == -3) { output += "J"; } else { Console.WriteLine("Scenario J failed."); allPassed = false; }
            if (Logic.ScenarioK() == 16) { output += "K"; } else { Console.WriteLine("Scenario K failed."); allPassed = false; }
            if (Logic.ScenarioL() == 3) { output += "L"; } else { Console.WriteLine("Scenario L failed."); allPassed = false; }
            if (Logic.ScenarioM() == 25) { output += "M"; } else { Console.WriteLine("Scenario M failed."); allPassed = false; }
            if (Logic.ScenarioN() == 10) { output += "N"; } else { Console.WriteLine("Scenario N failed."); allPassed = false; }
            if (Logic.ScenarioO() == 18) { output += "O"; } else { Console.WriteLine("Scenario O failed."); allPassed = false; }
            if (Logic.ScenarioP() == 8) { output += "P"; } else { Console.WriteLine("Scenario P failed."); allPassed = false; }
            if (Logic.ScenarioQ() == 30) { output += "Q"; } else { Console.WriteLine("Scenario Q failed."); allPassed = false; }
            if (Logic.ScenarioR() == 7) { output += "R"; } else { Console.WriteLine("Scenario R failed."); allPassed = false; }
            if (Logic.ScenarioS() == 14) { output += "S"; } else { Console.WriteLine("Scenario S failed."); allPassed = false; }
            if (Logic.ScenarioT() == 9) { output += "T"; } else { Console.WriteLine("Scenario T failed."); allPassed = false; }
            if (Logic.ScenarioU() == 20) { output += "U"; } else { Console.WriteLine("Scenario U failed."); allPassed = false; }
            if (Logic.ScenarioV() == 11) { output += "V"; } else { Console.WriteLine("Scenario V failed."); allPassed = false; }
            if (Logic.ScenarioW() == 15) { output += "W"; } else { Console.WriteLine("Scenario W failed."); allPassed = false; }
            if (Logic.ScenarioX() == 13) { output += "X"; } else { Console.WriteLine("Scenario X failed."); allPassed = false; }
            if (Logic.ScenarioY() == 22) { output += "Y"; } else { Console.WriteLine("Scenario Y failed."); allPassed = false; }
            if (Logic.ScenarioZ() == 17) { output += "Z"; } else { Console.WriteLine("Scenario Z failed."); allPassed = false; }

            if (allPassed)
            {
                Console.WriteLine(output);
            }
            else
            {
                Console.WriteLine("One or more scenarios failed. Please fix your logic in the provided files.");
            }
        }
    }
}
