# password-generator

In this Project, we are creating a responsive web application that generates a random password based on user's chosen criteria.

User criteria includes choosing to include symbols, numbers, lowercase and uppercase letters. In addition to character types, user can choose the length of their password of at least 8 and not over 128 characters. By doing that, the several functions below are created to assist with the task:


wantSymbols() function procedure is described below:
    - Prompts user asking if they wish to include symbols in their password.
    - Input format is yes or no (y/n) and user’s input is validated to follow. 
    - If the answer is yes, a string of all symbols previously declared inside of a variable named symbols is added to a variable emptyPassword with an empty string
    - emptyPassword is then returned at the end of the function

    Note: wantNumbers(), wantUpper(), wantLower(), all follow the same procedure. After all the functions are called, we then have emptyPassword filled with characters type that user wishes to include.

getLength() function asks the user for their desired password length, validates then saves the number inside of global variable pwLength and returns it after proper validation. 

randomPassword() function takes in a String as an argument and picks a random character from it. 

generatePassword() is the big executing function that generates our password by the follow procedure:
    - Declares a password variable that the final password is to be stored in.
    - Declares a string criteriaString including all the characters of types desired by user.
    - criteriaString is then used to store all return values from character type functions.
    - Declares a variable pwCount to store return value from getLength().
    - Using a for-loop, randomPassword() randomly picks a character from criteriaString and adds it to the empty string variable password. 
    - The for-loop is executed just as many times as the character count of user’s desired password length.
    - Finally, the function returns password which contains the password as a string. 