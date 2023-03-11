# Guess the number game!

Guess the number game is a simple number guessing game written in JavaScript with use of HTML and CSS. In this game user plays against computer which chooses a random number in a range which depends on game difficulty starting from easy level and range 1 to 10, medium level and range 1 to 100, hard level and range 1 to 500 and hardest level and range 1 to 1000. Difficulty also depends on the number of guess attempts: easy level has 3 attempts, medium level 10 attempts, hard level 9 attempts and hardest level 8 attempts. During the game player will get a hints in form of remainder of numbers players already typed to guess, remainder of how many attempts are left and a hint which is telling if the typed number was higher or lower than player needs to guess. If the player guesses the number before all attempts are over, player wins the game and can start a new game. Otherwise player fails to guess the number and computer shows the correct number it chose and player can try again. 

[Link to Guess the number game](https://genagrig.github.io/guess-the-number-game/)

[Link to GitHub repository](https://github.com/GenaGrig/guess-the-number-game.git)

![Responsive design check](/assets/images/responsiveCheck.PNG)

## Features

### Existing features

1. Welcome screen
   * Heading and "How to play?" button
   ![h1 and how to play button](/assets/images/h1andButton.PNG)

   Simple heading and "How to play?" button welcomes players, for easier understanding that the game page is correct and players can read the rules on how to play first.

   * How to play? - modal window
   ![How to play modal window](/assets/images/modalWindow.PNG)

   When the player pushes on "How to play?" button, modal window appears from the top with simple how to play rules and difficulty levels. Player needs to press on X in top right corner or somewhere outside modal window to close it.

   * Rules duplication. On the welcome page, aside of modal window with rules, player can read the same rules as in modal window. It is made for better desing and outlook. 

   * Difficulty level buttons.
   ![Difficulty level buttons](/assets/images/difficultyLevels.PNG)

   In this section player chooses desired difficulty level. When the button is pushed, this welome screen area becomes hidden and game area enables.  

2. Game screen.
    * Default game sreen after player chooses difficulty level.
    ![Default game screen](/assets/images/defaultGameScreen.PNG)

    On this screen player can see desired difficulty level and range of numbers to guess the computer chosen number. There is an input field only for number values and button on its left side to check the number guess. 

    * Input is empty error. 
    ![Input field value error](/assets/images/gameScreenInputError.PNG)

    If the player leaves input field empty and will try to submit answer, player will get an error message "Please enter a valid number!", so this will preven on submitting the empty answers and decrease attempts left. 

    * During the game.
    ![Game is on](/assets/images/gameIsOn.PNG)

    During the game player has all the neccessary information on what is going on. 
    - After guessing the first time and all other attempts till the game end or guesing the correct number, player will see previous guesses on a pink background.
    - After each guess player will see the number of attempt left on a red background below previous guesses.
    - After each guess player will see if the last number was higher or lower than the chosen by computer. It helps player to narrow the range of numbers to guess the correct one.

3. End game screen
    * Player wins the game by guessing the correct number.
    ![Player wins the game by guessing the number]

