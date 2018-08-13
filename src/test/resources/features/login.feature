@all
Feature: This is login feature for my demo app
  Rules:
    1) username should be a valid email
    2) username cannot be blank
    3) password cannot be blank

  Assumptions:
    1) Users are already registered and know their credentials before login in
    2) Password rules are tested in registration feature

  @happypath
  Scenario: Successfull login with valid username and password
    Given I'm on the demo website
    And I click login
    When I enter my username as bjornedwin@gmail.com
    And I enter my password as pass123
    And I Sign In to my account
    Then I get directed to my account homepage

  Scenario: Unsuccessful login with empty email address
    Given I'm on the demo website
    And I click login
    And I don't enter a username
    And I enter my password as pass123
    And I Sign In to my account
    Then I get a error message An email address required.

  Scenario: Unsuccessful login with empty password
    Given I'm on the demo website
    And I click login
    When I enter my username as bjornedwin@gmail.com
    And I don't enter a password
    And I Sign In to my account
    Then I get a error message Password is required.

  @scenariooutline
  Scenario Outline: Unsuccessful login with bad username or password
    Given I'm on the demo website
    And I click login
    When I enter my username as <email>
    And I enter my password as <password>
    And I Sign In to my account
    Then I get a error message <message>

    Examples: invalid email and incorrect password
      | <email>                 | <password>      | <message>                 |
      | bjorn                   | pass123         | Invalid email address.    |
      | bjornedwin@gmail.com    | wrongpass123    | Authentication failed.    |
