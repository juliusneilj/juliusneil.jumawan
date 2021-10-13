Feature: Shop Feature

    Background: The user is in Shop page.
        Given The user is in the Shop page

    Scenario: (Test Case 3) Validate selected items in shop are displayed in the cart.
        When The user buys the products
            | product      | quantity |
            | Teddy Bear   | 2        |
            | Stuffed Frog | 2        |
        And The user clicks the Cart link
        Then The user will see all the added products in cart
# Then The user will see the products added in the cart


