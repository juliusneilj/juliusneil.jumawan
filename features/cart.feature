Feature: Cart Feature

    Scenario: (Test Case 4) Validate selected items total value is correct in cart.
        Given The user views the Jupiter Toys homepage
        When The user clicks the Shop link
        And The user buys "2" "Stuffed Frog" in the shop
        And The user buys "5" "Fluffy Bunny" in the shop
        And The user buys "3" "Valentine Bear" in the shop
        And The user clicks the Cart link
        Then The user will see the correct prices for each ordered product
        And The user will see the correct subtotal of each ordered product
        And The user will see the total price of all ordered products