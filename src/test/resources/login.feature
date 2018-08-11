Feature: This is login feature for my demo app

  Scenario: Successfull login with valid username and password
    Given I'm on the demo website
    And I click login
    When I enter my username as bjornedwin@gmail.com
    And I enter my password as pass123
    And I Sign In to my account
    Then I get directed to my account homepage