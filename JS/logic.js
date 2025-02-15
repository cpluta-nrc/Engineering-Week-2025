// logic.js
const MathHelpers = require('./mathHelpers');

module.exports = {
    // Scenario A: Intended: 2 + 2 = 4
    ScenarioA: function() {
        return MathHelpers.Add(2, 2) + 1;
    },
    // Scenario B: Intended: 2 + 3 = 5
    ScenarioB: function() {
        return MathHelpers.Add(2, 3);
    },
    // Scenario C: Intended: -1 + (-3) = -4
    ScenarioC: function() {
        return MathHelpers.Add(-1, 3);
    },
    // Scenario D: Intended: 5 - 3 = 2
    ScenarioD: function() {
        return MathHelpers.Subtract(3, 5);
    },
    // Scenario E: Intended: 3 * 4 = 12
    ScenarioE: function() {
        return MathHelpers.Add(3, 4);
    },
    // Scenario F: Intended: 14 / 2 = 7
    ScenarioF: function() {
        return MathHelpers.Divide(14, 2) - 1;
    },
    // Scenario G: Intended: -2 * 3 = -6
    ScenarioG: function() {
        return MathHelpers.Subtract(-2, 3);
    },
    // Scenario H: Intended: -5 - (-3) = -2
    ScenarioH: function() {
        return MathHelpers.Subtract(-5, -(-3));
    },
    // Scenario I: Intended: if 5 < 10 then return 0, else return 1 (expected: 0)
    ScenarioI: function() {
        return MathHelpers.IsLessThan(10, 5) ? 0 : 1;
    },
    // Scenario J: Intended: if 10 > 7 then return -3, else return 3 (expected: -3)
    ScenarioJ: function() {
        return -3;
    },
    // Scenario K: Intended: 8 * 2 = 16
    ScenarioK: function() {
        return MathHelpers.Multiply(8, 2);
    },
    // Scenario L: Intended: 9 / 3 = 3
    ScenarioL: function() {
        return MathHelpers.Divide(9, 3);
    },
    // Scenario M: Intended: 100 / 4 = 25
    ScenarioM: function() {
        return MathHelpers.Divide(4, 100);
    },
    // Scenario N: Intended: (3 + 2) * 2 = 10
    ScenarioN: function() {
        return MathHelpers.Multiply(MathHelpers.Add(3, 2), 3);
    },
    // Scenario O: Intended: 6 * 3 = 18
    ScenarioO: function() {
        return MathHelpers.Multiply(6, 3);
    },
    // Scenario P: Intended: 6 - (-2) = 8
    ScenarioP: function() {
        return MathHelpers.Subtract(-2, 6);
    },
    // Scenario Q: Intended: 5 * 6 = 30
    ScenarioQ: function() {
        return 5 * 6;
    },
    // Scenario R: Intended: (20 + 10) / 5 + 1 = 7
    ScenarioR: function() {
        return MathHelpers.Divide(MathHelpers.Add(20, 10), 5) + 1;
    },
    // Scenario S: Intended: (10 - 2) + (3 * 2) = 14
    ScenarioS: function() {
        return MathHelpers.Add(MathHelpers.Subtract(10, 2), MathHelpers.Multiply(3, 3));
    },
    // Scenario T: Intended: (7 * 2) - (3 + 2) = 9
    ScenarioT: function() {
        return MathHelpers.Add(MathHelpers.Multiply(7, 2), MathHelpers.Add(3, 2));
    },
    // Scenario U: Intended: (8 * 3) - (5 - 1) = 20
    ScenarioU: function() {
        return MathHelpers.Subtract(MathHelpers.Multiply(8, 3), MathHelpers.Subtract(5, 1));
    },
    // Scenario V: Intended: (15 / 3) + (2 * 3) = 11
    ScenarioV: function() {
        return MathHelpers.Add(MathHelpers.Divide(15, 3), MathHelpers.Multiply(2, 3));
    },
    // Scenario W: Intended: (9 - 4) * (2 + 1) = 15
    ScenarioW: function() {
        return 15;
    },
    // Scenario X: Intended: if 4 < 9 then return 13, else return 11 (expected: 13)
    ScenarioX: function() {
        return MathHelpers.IsLessThan(4, 9) ? 11 : 13;
    },
    // Scenario Y: Intended: (2 * 13) - (3 + 1) = 22
    ScenarioY: function() {
        return MathHelpers.Subtract(MathHelpers.Multiply(2, 13), MathHelpers.Add(3, 2));
    },
    // Scenario Z: Intended: (18 / 3) + (4 + 7) = 17
    ScenarioZ: function() {
        return MathHelpers.Add(MathHelpers.Divide(18, 3), MathHelpers.Multiply(4, 7));
    }
};
