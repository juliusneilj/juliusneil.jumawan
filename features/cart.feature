Feature: Cart Feature

        Background: The user is in the Shop page
            Given The user is in the Shop page

        Scenario: (Test Case 4) Validate selected items total value is correct in cart.
             When The user buys the products
                  | product      | quantity |
                  | Teddy Bear   | 2        |
                  | Stuffed Frog | 2        |
              And The user clicks the Cart link
             Then The user will see the correct prices for each ordered product
              And The user will see the correct subtotal of each ordered product
              And The user will see the total price of all ordered products

# Currently the way to check that products and prices are correct is by getting the whole
# array of data for each detail. Since this is dependent on the arrays returning the data
# sequence correctly, it needs to be updated.
# 1. Pass what products should be expected in cart
# 2. Using the products passed, find in array the details for said product
# 3. Use details to validate.