# logic.py
import math_helpers

# Scenario A: Intended: 2 + 2 = 4
def ScenarioA():
    return math_helpers.add(2, 2) + 1

# Scenario B: Intended: 2 + 3 = 5
def ScenarioB():
    return math_helpers.add(2, 3)

# Scenario C: Intended: -1 + (-3) = -4
def ScenarioC():
    return math_helpers.add(-1, 3)

# Scenario D: Intended: 5 - 3 = 2
def ScenarioD():
    return math_helpers.subtract(3, 5)

# Scenario E: Intended: 3 * 4 = 12
def ScenarioE():
    return math_helpers.add(3, 4)

# Scenario F: Intended: 14 / 2 = 7
def ScenarioF():
    return math_helpers.divide(14, 2) - 1

# Scenario G: Intended: -2 * 3 = -6
def ScenarioG():
    return math_helpers.subtract(-2, 3)

# Scenario H: Intended: -5 - (-3) = -2
def ScenarioH():
    return math_helpers.subtract(-5, -(-3))

# Scenario I: Intended: if 5 < 10 then return 0, else return 1 (expected: 0)
def ScenarioI():
    return 0 if math_helpers.is_less_than(10, 5) else 1

# Scenario J: Intended: if 10 > 7 then return -3, else return 3 (expected: -3)
def ScenarioJ():
    return -3

# Scenario K: Intended: 8 * 2 = 16
def ScenarioK():
    return math_helpers.multiply(8, 2)

# Scenario L: Intended: 9 / 3 = 3
def ScenarioL():
    return math_helpers.divide(9, 3)

# Scenario M: Intended: 100 / 4 = 25
def ScenarioM():
    return math_helpers.divide(4, 100)

# Scenario N: Intended: (3 + 2) * 2 = 10
def ScenarioN():
    return math_helpers.multiply(math_helpers.add(3, 2), 3)

# Scenario O: Intended: 6 * 3 = 18
def ScenarioO():
    return math_helpers.multiply(6, 3)

# Scenario P: Intended: 6 - (-2) = 8
def ScenarioP():
    return math_helpers.subtract(-2, 6)

# Scenario Q: Intended: 5 * 6 = 30
def ScenarioQ():
    return 5 * 6

# Scenario R: Intended: (20 + 10) / 5 + 1 = 7
def ScenarioR():
    return math_helpers.divide(math_helpers.add(20, 10), 5) + 1

# Scenario S: Intended: (10 - 2) + (3 * 2) = 14
def ScenarioS():
    return math_helpers.add(math_helpers.subtract(10, 2), math_helpers.multiply(3, 3))

# Scenario T: Intended: (7 * 2) - (3 + 2) = 9
def ScenarioT():
    return math_helpers.add(math_helpers.multiply(7, 2), math_helpers.add(3, 2))

# Scenario U: Intended: (8 * 3) - (5 - 1) = 20
def ScenarioU():
    return math_helpers.subtract(math_helpers.multiply(8, 3), math_helpers.subtract(5, 1))

# Scenario V: Intended: (15 / 3) + (2 * 3) = 11
def ScenarioV():
    return math_helpers.add(math_helpers.divide(15, 3), math_helpers.multiply(2, 3))

# Scenario W: Intended: (9 - 4) * (2 + 1) = 15
def ScenarioW():
    return 15

# Scenario X: Intended: if 4 < 9 then return 13, else return 11 (expected: 13)
def ScenarioX():
    return 11 if math_helpers.is_less_than(4, 9) else 13

# Scenario Y: Intended: (2 * 13) - (3 + 1) = 22
def ScenarioY():
    return math_helpers.subtract(math_helpers.multiply(2, 13), math_helpers.add(3, 2))

# Scenario Z: Intended: (18 / 3) + (4 + 7) = 17
def ScenarioZ():
    return math_helpers.add(math_helpers.divide(18, 3), math_helpers.multiply(4, 7))
