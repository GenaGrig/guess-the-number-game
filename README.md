# Guess the number game!

Guess the number game is a simple number guessing game written in JavaScript with use of HTML and CSS. In this game user plays against computer which chooses a random number in a range which depends on game difficulty starting from easy level and range 1 to 10, medium level and range 1 to 100, hard level and range 1 to 500 and hardest level and range 1 to 1000. Difficulty also depends on the number of guess attempts: easy level has 3 attempts, medium level 10 attempts, hard level 9 attempts and hardest level 8 attempts. During the game player will get a hints in form of remainder of numbers players already typed to guess, remainder of how many attempts are left and a hint which is telling if the typed number was higher or lower than player needs to guess. If the player guesses the number before all attempts are over, player wins the game and can start a new game, otherwise player fails to guess the number, and computer shows the correct number it chose and player can try again. 

#### [Link to Guess the number game](https://genagrig.github.io/guess-the-number-game/)

#### [Link to GitHub repository](https://github.com/GenaGrig/guess-the-number-game.git)

![Responsive design check](/assets/images/responsiveCheck.PNG)

# User Experience

## User stories

### First time visitor goals

* As a first time visitor, I want easily understand the main purpose of the website.
* As a first time visitor, I want to be able to find the rules of the game quickly after landing on the page.
* As a first time visitor, I want to be able to select different difficulty levels for the game and understand what the difference between them is.
* As a first time user, I want to be able to easily navigate through the website.
* As a first time visitor, I want to enjoy design and staying on a website, because I want to spend some amount of time playing the game without distraction.
* As a first time visitor, I want to get feedback on my actions in game.

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

   * How to play? - Modal window

   ![How to play modal window](/assets/images/modalWindow.PNG)

   When the player pushes on "How to play?" button, modal window appears from the top with simple how to play rules and difficulty levels. Player needs to press on X in top right corner or somewhere outside modal window to close it.

   * Rules duplication. On the welcome page, aside of modal window with rules, player can read the same rules as in modal window. It was made for better design and outlook. 

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

    If the player leaves input field empty and will try to submit answer, player will get an error message "Please enter a valid number!", so this will prevent on submitting the empty answers and decrease attempts left. 

* During the game.

    ![Game is on](/assets/images/gameIsOn.PNG)

    During the game player has all the necessary information on what is going on. 
        - After guessing the first time and all other attempts untill the game end or guessing the correct number, player will see previous guesses on a pink background.
        - After each guess player will see the number of attempt left on a red background below previous guesses.
        - After each guess player will see if the last number was higher or lower than the chosen by computer. It helps player to narrow the range of numbers to guess the correct one.

#### 3. End game screen
* Player wins the game by guessing the correct number.

    ![Player wins the game by guessing the number](/assets/images/playerWins.PNG)

    After player guesses correct number, player gets congratulations on guessing right. Both input field and submit answer button gets disable, to prevent input of other values and increasing previous guesses and setting attempts to minus values. The only option player has is to close the game window or start new game pushing the purple "NEW GAME" button, which will disable this game screen and enable welcome screen, where player can choose new difficulty or play on the same. 

* Player loses the game by using all attempts on guessing and not finding correct number.

    ![Player loses game by using all attempts to guess](/assets/images/playerLooses.PNG)

    This screen is similar to the winning state with only differences as player gets the correct number shown and try again message. 

#### 4. 404-error page

* 404 error page will show up in case something will work wrong. Home page button will redirect player to welcome screen.

    ![404 page](/assets/images/404page.PNG)

# Future Features

* Multiplayer game. Two players can play simultaneously against computer that still chooses the random number and two players compete in who will guess the number first. It should be turn based game.
* Timer function
    - Countdown timer to guess the number before time runs up. Still arguable, because time limit is unknown for each level of difficulty.
    - Timer that will start with first guess and goes up. The goal is to guess the number as fast as possible.
* Leaderboard is necessary only if timer function will be implemented. There will be stored players with fastest number guesses.

# Technologies used

## Languages

* **HTML** for main design and layout
* **CSS** for styling and responsiveness
* **JavaScript** for game coding and implementation

## Other programs and websites

* [Balsamiq](https://balsamiq.com/wireframes/desktop/) for creating wireframes
* [GitHub](github.com) for storing project repository
* [GitHub Pages](https://pages.github.com/) for hosting a game online
* [Visual Studio Code](https://code.visualstudio.com/) for coding all the project inside and pushing it to GitHub


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

* Player input field and "Check your answer" button gets disabled when the number is guessed or player is out of attempts.
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
* Because the focus function is used, cursor appears directly in the input field and phone keyboard automatically opens with numbers page (as the input field is set as number only).

![Game screen mobile before first attempt](/assets/images/mobileGame1.jpg)

* Previous guesses, number of attempts left and guessed number range (higher or lower) shows correct values and appears correctly.

![Game screen mobile after first attempt](/assets/images/mobileGame2.jpg)

### End game screen

* Player input field and "Check your answer" button gets disabled when number is guessed or player is out of attempts.
* New Game button appears below input field for starting new game. Pushing new game button will make game area hidden and welcome screen appears. 

![Game end screen mobile](/assets/images/mobileGameEnd.jpg)

# Usability testing

* To get feedback I posted link to my friends and relatives.
    - Several bugs were found and easy corrected by changing the code
    - Responsive design works fine both on different mobile phones and on tablets

# Bugs

No bugs were detected

## CSS validator result - PASS

<p></p>
    <a href="http://jigsaw.w3.org/css-validator/validator?lang=ru&profile=css3svg&uri=https%3A%2F%2Fgenagrig.github.io%2Fguess-the-number-game%2F&usermedium=all&vextwarning=&warning=1">
        <img style="border:0;width:88px;height:31px"
            src="https://jigsaw.w3.org/css-validator/images/vcss"
            alt="Правильный CSS!" />
    </a>
</p>

## HTML validator result - PASS

### [Result page](https://validator.w3.org/nu/?doc=https%3A%2F%2Fgenagrig.github.io%2Fguess-the-number-game%2F)

## JavaScript validator [JShint](https://jshint.com/) result - PASS

* No errors were found after validation.

    - There are 12 functions in this file.

    - Function with the largest signature take 1 arguments, while the median is 0.

    - Largest function has 28 statements in it, while the median is 2.

    - The most complex function has a cyclomatic complexity value of 7 while the median is 1.

## Lighthouse desktop

![Lighthouse desktop](/assets/images/lighthouse-desktop.PNG)

## Lighthouse mobile

![Lighthouse mobile](/assets/images/lighthouse-mobile.PNG)

## Testing user stories 

* As a first time visitor, I want easily understand the main purpose of the website.
    - The big heading "Guess the number!" and button below it "How to play?" indicates clearly that this website is created for game with its own rules. Background in form of different numbers make association with numbers game stronger. 
* As a first time visitor, I want to be able to find the rules of the game quickly after opening the page.
    - There are duplicates of game rules on a website. Firstly, player can push the "How to play?" button below the heading to open a modal window with game rules. Secondary, there is duplicated game rules below the button in the middle of a page that can be as a reminder and a hint before choosing game difficulty.
* As a first time visitor, I want to be able to select different difficulty levels for the game and understand what the difference between them is.
    - There are four levels of difficulty in the game - Easy, Medium, Hard and Hardest. To make it easier for player, each difficulty level button has its own color, based on a color code that is mostly used in many other games, regarding difficulty levels choice. Difficulty is based on the range of numbers and number of attempts. The higher the difficulty, the greater is range and the fewer attempts.
* As a first time user, I want to be able to easily navigate through the website.
    - Website is easy to navigate as there are only several buttons on a welcome page (levels of difficulty) and a number input and submit button on a game page. When the game is over, "NEW GAME" button appears and redirect player to welcome page for new game choice. 
* As a first time visitor, I want to enjoy design and staying on a website, because I want to spend some amount of time playing the game without distraction.
    - For this game a mild blue and white color scheme were chosen. That keeps eyes not to get tired fast from the game and does not distract from the game. It allows player to spend available time playing the game, without the wish to close it, because of inappropriate colors.
* As a first time visitor, I want to get feedback on my actions in game.
    - On the welcome page there are "How to play?" button which opens a modal window with rules, that can be closed by clicking the big "X" in the top right corner or clicking on any other space outside the modal window. 
    - Game cannot be started without clicking on difficulty level, so to start the game, player needs to click on any difficulty level player wants.
    - After difficulty button is clicked, player lands on a game screen with input field and "Check your answer" button. Above it player can see chosen difficulty and range of numbers, from which computer chose a random number to guess.
    - On the default game page if input field is empty and player pushes the "Check your answer button", error message "Please enter a valid number!" will appear below and nothing will happen until player will enter some number and pushes the submit button.
    - During the game, player will see previous guesses, how many attempts are left and if the last guessed number was higher or lower as the number chosen by computer. 
    - When the game is over after a win, player will see a green congratulations message and the button "NEW GAME" will appear to let the player to start a new game.
    - When the game is over after a loss, that happens if there are no guess attempts left, player will see a message with a correct number and the button "NEW GAME" will appear to let the player to start a new game.

# Deployment

This website is published using GitHub Pages. The procedure of deployment is written below:

1. Log in to the GitHub website.
2. Choose the appropriate repository of that project that needs to be published. [My repository for this project.](https://github.com/GenaGrig/guess-the-number-game.git)
3. Click on a Settings button in navigation bar above project files.
4. On the left side you will see a list of sorted menus. Find the Pages button in Code and Automation. Push it.
5. On the right side in Build and deployment you need:
    * In Source dropdown menu choose Deploy from a branch
    * In Branch dropdown menu choose "main" then "/(root) and click Save.
6. Page will reload but nothing more happens. Link will not appear at once, wait a while.
7. In a couple of minutes above Build and deployment you will see a statement that "Your site is live at" and a link to your website.
    * The site was deployed to GitHub pages, live link is here: [Guess the number game on GitHub pages.](https://genagrig.github.io/guess-the-number-game/)

### Creating a fork

1. Navigate to the [repository](https://github.com/GenaGrig/guess-the-number-game.git)
2. In the top-right corner of the page click on the fork button and select create a fork.
3. You can change the name of the fork and add description.
4. Choose to copy only the main branch or all branches to the new fork.
5. Click Create a Fork. A repository should appear in your GitHub.

### Cloning a repository

1. Navigate to the [repository](https://github.com/GenaGrig/guess-the-number-game.git)
2. Click on the Code button on top of the repository and copy the link.
3. Open Git Bash and change the working directory to the location where you want the cloned directory.
4. Type git clone and then paste the link.
5. Press Enter to create your local clone.

# Credits

## Content

* Font that is used on this website was taken from [Google Fonts](https://fonts.google.com/)
* README file was written with help of following documents:
    - Code Institute [README template](https://github.com/Code-Institute-Solutions/readme-template)
    - GitHubs [Basic writing and formatting syntax](https://docs.github.com/ru/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#headings)
    - README from existing project from [Dayana-N](https://github.com/Dayana-N/portfolio-project-2-word-type/blob/main/README.md)
* Main idea of the game and code samples were taken from [Guess the number game tutorial](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/A_first_splash#example_—_guess_the_number_game)
* Modal window was created with help of [w3schools](https://www.w3schools.com/howto/howto_css_modals.asp)
* Background image was taken from free image website [freepik](https://www.freepik.com/free-photo/abstract-background-made-with-numbers_943259.htm)
* Several ideas for game improvement was taken from this course by [Chris Dixon - JavaScript Fun Series! Build a Guess The Number Game!](https://www.youtube.com/playlist?list=PLj0t1MkWhlOkGdzGAL3aiocfhSgYB1alb)

## Acknowledgements

* I want to thank my mentor Maranatha Ilesanmi for good feedback and very useful advices that made my project easier to understand and implement.
* I want to thank members on our Slack community for giving feedback and showing their own projects that was inspiring in different ways.