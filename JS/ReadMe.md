# Engineering Week Debugging Exercise – JavaScript Version

Welcome to the Engineering Week Debugging Exercise for JavaScript. This project challenges you to fix the program by correcting intentionally faulty logic in the provided source files. When all issues are resolved, running the project will print the complete alphabet “ABCDEFGHIJKLMNOPQRSTUVWXYZ” to the console.

## Objective

Your goal is to fix the program by correcting errors in **logic.js** and **mathHelpers.js** so that every scenario returns the expected result. **Important:** Do not hard-code arithmetic expressions (for example, avoid writing `1+1` directly). Instead, always use the provided helper functions (for instance, use `MathHelpers.Add(1, 1)`).

## Project Files

This exercise consists of three files:

1. **main.js** – The driver file.  
   _Do not modify this file._  
   It calls 26 scenario methods (labeled A to Z) and prints the corresponding letter if the scenario passes. If any scenario fails, an error message is displayed.

2. **logic.js** – Contains the scenario definitions.  
   Each method represents a scenario that should perform a specific calculation or comparison. Some scenarios use helper functions from **mathHelpers.js**, while others are implemented directly.  
   Your task is to debug and fix this file so that each scenario returns the correct result.

3. **mathHelpers.js** – Contains parameterized helper functions for basic arithmetic and comparisons.  
   This file also contains intentional errors that need to be corrected.  
   **Remember:** All arithmetic must be performed using these helper functions; avoid hard-coding any calculations directly.

## Expected Outcome

After all fixes, running the project should display:

```
ABCDEFGHIJKLMNOPQRSTUVWXYZ
```

If any scenario fails, the driver will print an error message indicating which scenario(s) need further work.

## How to Run

### Prerequisites

- [Node.js](https://nodejs.org/) must be installed on your machine.

### Steps

1. **Clone or Download the Project Files**  
   Make sure that `main.js`, `logic.js`, and `mathHelpers.js` are in the same folder.

2. **Install Dependencies (if any)**  
   This project uses plain JavaScript, so no additional dependencies are required.

3. **Run the Application**  
   Open a terminal in the project folder and run:

   ```bash
   node main.js
   ```

   If every scenario is fixed, you will see:

   ```
   ABCDEFGHIJKLMNOPQRSTUVWXYZ
   ```

   Otherwise, error messages will indicate which scenario(s) are still failing.

---

Good luck, and happy debugging!
