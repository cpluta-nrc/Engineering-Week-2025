# Engineering Week Debugging Exercise

Welcome to the Engineering Week Debugging Exercise! This repository contains exercises in multiple languages: C#, JavaScript, and Python. Each language folder includes its own set of source files and a README with detailed instructions on how to build, run, and debug the exercise.

## How It Works

Inside this repository, you will find three folders:

- **CSharp** – Contains the C# exercise. Open the `ReadMe.md` inside this folder for detailed instructions.
- **JS** – Contains the JavaScript exercise. Open the `ReadMe.md` inside this folder for detailed instructions.
- **Python** – Contains the Python exercise. Open the `ReadMe.md` inside this folder for detailed instructions.

Each language folder contains three files:
- A **driver** file that runs a series of test scenarios.
- A **logic** file containing intentionally faulty implementations of the scenarios.
- A **helper** file (e.g., `MathHelpers.cs`, `mathHelpers.js`, or `math_helpers.py`) that provides functions for basic arithmetic and comparisons—also with intentional errors.

Your goal is to fix the program by correcting errors in the logic and helper files so that running the driver prints the complete alphabet:

```
ABCDEFGHIJKLMNOPQRSTUVWXYZ
```

**Important:**  
- Do not hard-code arithmetic expressions (e.g., avoid writing `1+1` directly).  
- Always use the provided helper functions (for example, use `MathHelpers.Add(1, 1)` in C#, or the equivalent in JavaScript or Python).

## Steps to Get Started

1. **Clone the Repository**

   Open a terminal and run:

   ```bash
   git clone https://github.com/cpluta-nrc/Engineering-Week-2025.git
   ```

2. **Choose Your Language**

   Inside the repository, choose the folder for the language you want to work with:
   - For C#, open the **CSharp** folder.
   - For JavaScript, open the **JS** folder.
   - For Python, open the **Python** folder.

3. **Read the Language-Specific README**

   Each folder contains a `ReadMe.md` file with detailed instructions on how to build and run the exercise for that language.

4. **Fix the Code**

   Debug and correct the errors in the logic and helper files so that every scenario returns the expected result. Make sure all arithmetic is done using the helper functions rather than hard-coded math.

5. **Submit Your Work**

   Once your fixes are complete and the program outputs the full alphabet, email your updated files to the email address provided in your invitation.

## Submission Guidelines

- Only modify files within the chosen language folder.
- Do not modify the driver file.
- Your submission should include the fixed versions of all relevant source files.

Thank you for participating in the Engineering Week Debugging Exercise. Good luck, and happy debugging!
