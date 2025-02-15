# Engineering Week Debugging Exercise – Python Version

Welcome to the Engineering Week Debugging Exercise for Python. This project challenges you to fix the program by correcting intentionally faulty logic in the provided source files. When all issues are resolved, running the driver will print the complete alphabet “ABCDEFGHIJKLMNOPQRSTUVWXYZ” to the console.

## Objective

Your goal is to fix the program by correcting errors in **logic.py** and **math_helpers.py** so that every scenario returns the expected result. **Important:** Do not hard-code arithmetic expressions (for example, avoid writing `1+1` directly). Instead, always use the provided helper functions (for instance, use `math_helpers.add(1, 1)`).

## Project Files

This exercise consists of three files:

1. **driver.py** – The driver file.  
   _Do not modify this file._  
   It calls 26 scenario functions (labeled A to Z) and prints the corresponding letter if the scenario passes. If any scenario fails, an error message is displayed.

2. **logic.py** – Contains the scenario definitions.  
   Each function represents a scenario that should perform a specific calculation or comparison. Some scenarios call helper functions from **math_helpers.py**, while others are implemented directly.  
   Your task is to debug and fix this file so that each scenario returns the correct result.

3. **math_helpers.py** – Contains parameterized helper functions for basic arithmetic and comparisons.  
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

- [Python](https://www.python.org/downloads/) installed on your machine.

### Steps

1. **Clone or Download the Project Files**  
   Ensure that `driver.py`, `logic.py`, and `math_helpers.py` are in the same folder.

2. **Run the Application**  
   Open a terminal in the project folder and run:

   ```bash
   python driver.py
   ```

   If every scenario is fixed, you will see the full alphabet printed to the console. Otherwise, error messages will indicate which scenario(s) are still failing.

---

Good luck, and happy debugging!
