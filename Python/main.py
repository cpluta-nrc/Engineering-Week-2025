# driver.py
from logic import (
    ScenarioA, ScenarioB, ScenarioC, ScenarioD, ScenarioE, ScenarioF, ScenarioG,
    ScenarioH, ScenarioI, ScenarioJ, ScenarioK, ScenarioL, ScenarioM, ScenarioN,
    ScenarioO, ScenarioP, ScenarioQ, ScenarioR, ScenarioS, ScenarioT, ScenarioU,
    ScenarioV, ScenarioW, ScenarioX, ScenarioY, ScenarioZ
)

def main():
    all_passed = True
    output = ""

    if ScenarioA() == 4:
        output += "A"
    else:
        print("Scenario A failed.")
        all_passed = False

    if ScenarioB() == 5:
        output += "B"
    else:
        print("Scenario B failed.")
        all_passed = False

    if ScenarioC() == -4:
        output += "C"
    else:
        print("Scenario C failed.")
        all_passed = False

    if ScenarioD() == 2:
        output += "D"
    else:
        print("Scenario D failed.")
        all_passed = False

    if ScenarioE() == 12:
        output += "E"
    else:
        print("Scenario E failed.")
        all_passed = False

    if ScenarioF() == 7:
        output += "F"
    else:
        print("Scenario F failed.")
        all_passed = False

    if ScenarioG() == -6:
        output += "G"
    else:
        print("Scenario G failed.")
        all_passed = False

    if ScenarioH() == -2:
        output += "H"
    else:
        print("Scenario H failed.")
        all_passed = False

    if ScenarioI() == 0:
        output += "I"
    else:
        print("Scenario I failed.")
        all_passed = False

    if ScenarioJ() == -3:
        output += "J"
    else:
        print("Scenario J failed.")
        all_passed = False

    if ScenarioK() == 16:
        output += "K"
    else:
        print("Scenario K failed.")
        all_passed = False

    if ScenarioL() == 3:
        output += "L"
    else:
        print("Scenario L failed.")
        all_passed = False

    if ScenarioM() == 25:
        output += "M"
    else:
        print("Scenario M failed.")
        all_passed = False

    if ScenarioN() == 10:
        output += "N"
    else:
        print("Scenario N failed.")
        all_passed = False

    if ScenarioO() == 18:
        output += "O"
    else:
        print("Scenario O failed.")
        all_passed = False

    if ScenarioP() == 8:
        output += "P"
    else:
        print("Scenario P failed.")
        all_passed = False

    if ScenarioQ() == 30:
        output += "Q"
    else:
        print("Scenario Q failed.")
        all_passed = False

    if ScenarioR() == 7:
        output += "R"
    else:
        print("Scenario R failed.")
        all_passed = False

    if ScenarioS() == 14:
        output += "S"
    else:
        print("Scenario S failed.")
        all_passed = False

    if ScenarioT() == 9:
        output += "T"
    else:
        print("Scenario T failed.")
        all_passed = False

    if ScenarioU() == 20:
        output += "U"
    else:
        print("Scenario U failed.")
        all_passed = False

    if ScenarioV() == 11:
        output += "V"
    else:
        print("Scenario V failed.")
        all_passed = False

    if ScenarioW() == 15:
        output += "W"
    else:
        print("Scenario W failed.")
        all_passed = False

    if ScenarioX() == 13:
        output += "X"
    else:
        print("Scenario X failed.")
        all_passed = False

    if ScenarioY() == 22:
        output += "Y"
    else:
        print("Scenario Y failed.")
        all_passed = False

    if ScenarioZ() == 17:
        output += "Z"
    else:
        print("Scenario Z failed.")
        all_passed = False

    if all_passed:
        print(output)
    else:
        print("One or more scenarios failed. Please fix your logic in the provided files.")

if __name__ == "__main__":
    main()
