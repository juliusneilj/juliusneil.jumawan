Feature: Contact Feature

        Scenario: (Test Case 1) Validate error messages are displayed when mandatory fields are empty.
            Given The user views the Jupiter Toys homepage
             When The user clicks the Contact link
              And The user clicks the Submit button
             Then The user will see error messages
             When The user enters "John" in the forename field
              And The user enters "johndoe+test@gmail.com" in the email field
              And The user enters "This is my feedback." in the message box
             Then The user will not see error messages

        Scenario Outline: (Test Case 2) Validate success message is displayed for valid submission.
            Given The user views the Jupiter Toys homepage
             When The user clicks the Contact link
              And The user enters "<forename>" in the forename field
              And The user enters "<email>" in the email field
              And The user enters "<message>" in the message box
              And The user clicks the Submit button
             Then The user will see the success message

        Examples:
                  | forename | email                    | message                                |
                  | John     | johndoe+test1@gmail.com  | This is a sample message.              |
                  | Jane     | janedoe+test1@gmail.com  | This is my feedback.                   |
                  | Jamie    | jamiedoe+test1@gmail.com | This is my feedback for the site.      |
                  | Juan     | juandoe+test1@gmail.com  | Another feedback to the site.          |
                  | Juana    | juanadoe+test1@gmail.com | This is the last feedback on the site. |