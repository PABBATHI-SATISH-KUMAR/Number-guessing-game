## Number Guessing Game

### Overview
This Python script implements a number guessing game where the player tries to guess a secret number randomly chosen by the system. The game provides hints based on the number of attempts made, and awards stars based on the player's performance.

### How to Play
1. The player is prompted to enter their name.
2. The player is welcomed and given an overview of the game.
3. The system randomly selects a secret number between 1 and 100.
4. The player attempts to guess the secret number, receiving feedback and hints after each guess.
5. The game continues until the player correctly guesses the secret number.
6. After guessing the number, the player is awarded stars based on the number of attempts:
   - 3 attempts or fewer: 5 stars
   - 4 attempts: 4 stars
   - More than 4 attempts: 1 star
7. The player is asked if they want to play again. The game restarts if they choose to continue, or ends if they choose to stop.

### Code Explanation

#### Main Function: `guess_number`
- **Imports**: The script imports the `random` module to generate random numbers.
- **Helper Function**: `is_prime(n)` determines if a given number `n` is a prime number.
- **Game Loop**: 
  - **Secret Number**: The game generates a random secret number between 1 and 100.
  - **Divisors List**: It creates a list of all divisors of the secret number.
  - **Attempts Counter**: Tracks the number of guesses made by the player.
  - **Guess Loop**: 
    - The player is prompted to guess the number.
    - The system checks if the guess is correct and provides appropriate feedback.
    - If the guess is incorrect, hints are provided based on the number of attempts:
      - Attempt 1: Hint whether the secret number is less than or greater than 50.
      - Attempt 2: Hint whether the secret number is even or odd.
      - Attempt 3: Hint whether the secret number is a prime number.
      - Attempt 4: Hint with a list of divisors of the secret number.
      - Attempt 5: Hint with the square of the secret number.
      - Attempt 6: Hint with the cube root of the secret number.
  - **Star Rating**: After guessing the number, the player receives a star rating based on the number of attempts.
  - **Replay Option**: The player is asked if they want to play again. If yes, the game restarts; otherwise, it ends.

#### Entry Point: `if __name__ == "__main__"`
- The script prompts the player to enter their name.
- Welcomes the player and provides an overview of the game.
- Calls the `guess_number` function to start the game.
