# Guess the number game!

Guess the number game is a simple number guessing game written in JavaScript with use of HTML and CSS. In this game user plays against computer which chooses a random number in a range which depends on game difficulty starting from easy level and range 1 to 10, medium level and range 1 to 100, hard level and range 1 to 500 and hardest level and range 1 to 1000. Difficulty also depends on the number of guess attempts: easy level has 3 attempts, medium level 10 attempts, hard level 9 attempts and hardest level 8 attempts. During the game player will get a hints in form of remainder of numbers players already typed to guess, remainder of how many attempts are left and a hint which is telling if the typed number was higher or lower than player needs to guess. If the player guesses the number before all attempts are over, player wins the game and can start a new game. Otherwise player fails to guess the number and computer shows the correct number it chose and player can try again. 

#### [Link to Guess the number game](https://genagrig.github.io/guess-the-number-game/)

#### [Link to GitHub repository](https://github.com/GenaGrig/guess-the-number-game.git)

![Responsive design check](/assets/images/responsiveCheck.PNG)

# Design

## Wireframes

## Welcome screen 

![computer welcome screen](/assets/images/welcomeScreenFrame.PNG) 
![mobile welcome screen](/assets/images/mobileWelcomeFrame.PNG)

## Game screen

![computer game screen](/assets/images/gameScreenFrame.PNG)
![mobile game screen](/assets/images/mobileGameFrame.PNG)

## End game screen

![computer end game screen](/assets/images/endGameFrame.PNG)
![mobile end game screen](/assets/images/mobileEndGame.PNG)

# Features

### Existing features

#### 1. Welcome screen
   * Heading and "How to play?" button
   
   ![h1 and how to play button](/assets/images/h1andButton.PNG)

   Simple heading and "How to play?" button welcomes players, for easier understanding that the game page is correct and players can read the rules on how to play first.

   * How to play? - modal window

   ![How to play modal window](/assets/images/modalWindow.PNG)

   When the player pushes on "How to play?" button, modal window appears from the top with simple how to play rules and difficulty levels. Player needs to press on X in top right corner or somewhere outside modal window to close it.

   * Rules duplication. On the welcome page, aside of modal window with rules, player can read the same rules as in modal window. It is made for better desing and outlook. 

   * Difficulty level buttons.

   ![Difficulty level buttons](/assets/images/difficultyLevels.PNG)

    In this section player chooses desired difficulty level. When the button is pushed, this welcome screen area becomes hidden and game area enables.  
#
#### 2. Game screen.

* Default game screen after player chooses difficulty level.

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

#### 3. End game screen
* Player wins the game by guessing the correct number.

    ![Player wins the game by guessing the number](/assets/images/playerWins.PNG)

    After player guesses correct number, player gets congratulations on guessing right. Both input field and submit answer button gets disable, to prevent input of other values and increasing previous guesses and setting attempts to minus values. The only option player has is to close the game window or start new game pushing the purple "NEW GAME" button, which will disable this game screen and enable welcome screen, where player can choose new difficulty or play on the same. 

* Player looses the game by using all attempts on guessing and not finding correct number.

    ![Player looses game by using all attempts to guess](/assets/images/playerLooses.PNG)

    This screen is similar to the winning state with only differences as player gets the correct number shown and try again message. 

#### 4. 404 error page

* 404 error page will show up in case something will work wrong. Home page button will redirect player to welcome screen.

    ![404 page](/assets/images/404page.PNG)

# Future Features

* Multiplayer game. Two players can play simultaneously against computer that still chooses the random number and two players compete in who will guess the number first. It should be turn based game.
* Timer function
    - Countdown timer to guess the number before time runs upp. Still arguable, because time limit is unknown for each level of difficulty.
    - Timer that will start with first guess and goes upp. The goal is to guess the number as fast as possible.
* Leaderboard is neccessary only if timer function will be implemented. There will be stored players with fastest number guesses.

# Testing

## Functionality testing on desktop

### Welcome screen 

* "How to play?" button
    - Pushing the button opens the modal window with game rules.
    - Pushing big X on the right top corner of modal window or somewhere outside it closes the modal window.
    - Difficulty buttons. Each button works and selects the desired difficulty level. Pushing on each of the difficulty buttons welcome screen gets hidden and game area appears. 

### Game screen

* Input field allow only number values. When is empty and player tries to submit answer shows up error message below "Please enter a valid number!". This prevents game to continue until player will enter a valid number value.
* "Check your answer button" works and checks player guesses each time player types in value and clicks the button. 
* Previous guesses, number of attempts left and guessed number range (higher or lower) shows correct values and appears correctly.

### End game screen

* Player input field and "Check your answer" button gets disabled when number is guesed or player is out of attempts.
* New Game button appears below input field for starting new game. Pushing new game button will make game area hidden and welcome screen appears. 

## Functionality testing on mobile phones (Tested on Nokia 7 Plus)

### Welcome screen 

* "How to play?" button
    - Pushing the button opens the modal window with game rules.
    - Pushing big X on the right top corner of modal window or somewhere outside it closes the modal window.

![Game screen by default](/assets/images/mobileWelcome.jpg)

- Difficulty buttons. Each button works and selects the desired difficulty level. Pushing on each of the difficulty buttons welcome screen gets hidden and game area appears. To access them player needs to scroll down the page.

![Game screen difficulty buttons](/assets/images/mobileWelcome1.jpg)

### Game screen

* Input field allow only number values. When is empty and player tries to submit answer shows up error message below "Please enter a valid number!". This prevents game to continue until player will enter a valid number value.
* "Check your answer button" works and checks player guesses each time player types in value and clicks the button. It is located under the player input field.
* Because the focus function is used, cursor appears directly in the input field and phone keyboard automaticaly opens with numbers page (as the input field is set as number only).

![Game screen mobile before 1 attempt](/assets/images/mobileGame1.jpg)

* Previous guesses, number of attempts left and guessed number range (higher or lower) shows correct values and appears correctly.

![Game screen mobile after 1 attempt](/assets/images/mobileGame2.jpg)

### End game screen

* Player input field and "Check your answer" button gets disabled when number is guesed or player is out of attempts.
* New Game button appears below input field for starting new game. Pushing new game button will make game area hidden and welcome screen appears. 

![Game end screen mobile](/assets/images/mobileGameEnd.jpg)