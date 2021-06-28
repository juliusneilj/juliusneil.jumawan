Feature: Shop Feature

        Scenario: (Test Case 3) Validate selected items in shop are displayed in the cart.
            Given The user views the Jupiter Toys homepage
             When The user clicks the Shop link
              And The user buys "2" "Funny Cow" in the shop
              And The user buys "1" "Fluffy Bunny" in the shop
              And The user clicks the Cart link
             Then The user will see all the added products in cart


