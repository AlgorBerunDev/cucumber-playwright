# language: en

Feature: User Authentication

  As a registered user
  I want to be able to authenticate in the system
  So that I can access protected resources and personalized settings.

  Scenario: Successful authentication with correct credentials
    Given the user is on the authentication page
    When the user enters a correct phone and password
    And clicks on the "Login" button
    Then the user should be redirected to the homepage
    And see a welcome message with their name

  Scenario: Authentication with incorrect password
    Given the user is on the authentication page
    And the user has entered a correct phone
    When the user enters an incorrect password three times
    And clicks on the "Login" button after each attempt
    Then the user should see an error message "Foydalanuvchi topilmadi"

  Scenario: Authentication with incorrect phone
    Given the user is on the authentication page
    When the user enters an incorrect phone
    And clicks on the "Login" button
    Then the user should see an error message "Foydalanuvchi topilmadi"

#   Scenario: Password recovery with valid phone
#     Given the user has clicked on the "Forgot Password" link
#     When the user enters their registered email address
#     And clicks on the "Submit" button
#     Then the user should receive a password recovery email
#     And be able to create a new password following the email instructions