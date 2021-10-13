Feature: Contact Feature

        Background: Jupiter Toys homepage.
            Given The user is in the Contact page

        Scenario: (Test Case 1) Validate error messages are displayed when mandatory fields are empty.
             When The user clicks the Submit button
             Then The user will see error messages
             When The user enters the details in the contact form
                  | forename | surname | email             | telephone | type   | message       |
                  | John     |         | johndoe@gmail.com | 12345678  | Review | This is good. |

             Then The user will not see error messages

        Scenario Outline: (Test Case 2) Validate success message is displayed for valid submission.
             When The user enters "<forename>" as forename and "<surname>" as surname
              And The user enters "<email>" as email and "<telephone>" as telephone
              And The user selects "<type>" as type and enters "<message>" as message
              And The user clicks the Submit button
             Then The user will see the "<expMessage>" message
        Examples:
                  | forename | surname | email              | telephone | type      | message       | expMessage                                 |
                  | John     |         | johndoe@gmail.com  | 12345678  | Review    | This is good. | Thanks John, we appreciate your feedback.  |
                  | Jane     | Doe     | janedoe@gmail.com  | 12345678  | Complaint | Not good      | Thanks Jane, we appreciate your feedback.  |
                  | Juan     |         | juan@gmail.com     | 12345678  | Review    | Good          | Thanks Juan, we appreciate your feedback.  |
                  | Juana    | Day     | juanaday@gmail.com | 12345678  | Complaint | Not okay.     | Thanks Juana, we appreciate your feedback. |
                  | Joe      |         | joe@gmail.com      | 12345678  | Review    | Okay          | Thanks Joe, we appreciate your feedback.   |