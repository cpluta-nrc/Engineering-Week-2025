# Engineering Week Debugging Exercise – C# Version

Welcome to the Engineering Week Debugging Exercise for C#. This project challenges you to fix the program by correcting intentionally faulty logic in the provided source files. When all issues are resolved, running the project will print the complete alphabet “ABCDEFGHIJKLMNOPQRSTUVWXYZ” to the console.

## Objective

Your goal is to fix the program by correcting errors in **Logic.cs** and **MathHelpers.cs** so that every scenario returns the expected result. **Important:** Do not hard-code arithmetic expressions (e.g., do not write `1+1` directly); always use the provided helper functions (for example, use `MathHelpers.Add(1, 1)`).

## Project Files

This exercise consists of three files:

1. **Program.cs** – The driver file.  
   _Do not modify this file._  
   It calls 26 scenario methods (labeled A to Z) and prints the corresponding letter if the scenario passes. If any scenario fails, an error message is displayed.

2. **Logic.cs** – Contains the scenario definitions.  
   Each method represents a scenario that should perform a specific calculation or comparison. Some scenarios use helper functions from **MathHelpers.cs**, while others are implemented directly.

3. **MathHelpers.cs** – Contains parameterized helper functions for basic arithmetic and comparisons.  
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

- [.NET SDK](https://dotnet.microsoft.com/download) installed on your machine.

### Steps

1. **Clone or Download the Project Files**  
   Ensure that `Program.cs`, `Logic.cs`, and `MathHelpers.cs` are in the same folder.

2. **Create a New Console Project**  
   Open a terminal in the folder and run:

   ```bash
   dotnet new console --force
   ```

   This command creates a project file (`.csproj`) and includes all `.cs` files in the folder.

3. **Build the Project**  
   Compile the project with:

   ```bash
   dotnet build
   ```

4. **Run the Application**  
   Execute the program using:

   ```bash
   dotnet run
   ```

   If every scenario is fixed, you will see:

   ```
   ABCDEFGHIJKLMNOPQRSTUVWXYZ
   ```

   Otherwise, error messages will indicate which scenarios are still failing.

---

Good luck, and happy debugging!
