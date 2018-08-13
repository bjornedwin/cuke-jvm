$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/login.feature");
formatter.feature({
  "name": "This is login feature for my demo app",
  "description": "  Rules:\n    1) username should be a valid email\n    2) username cannot be blank\n    3) password cannot be blank\n\n  Assumptions:\n    1) Users are already registered and know their credentials before login in\n    2) Password rules are tested in registration feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Unsuccessful login with bad username or password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@scenariooutline"
    }
  ]
});
formatter.step({
  "name": "I\u0027m on the demo website",
  "keyword": "Given "
});
formatter.step({
  "name": "I click login",
  "keyword": "And "
});
formatter.step({
  "name": "I enter my username as \u003cemail\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "I enter my password as \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "I Sign In to my account",
  "keyword": "And "
});
formatter.step({
  "name": "I get a error message \u003cmessage\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "invalid email and incorrect password",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "\u003cemail\u003e",
        "\u003cpassword\u003e",
        "\u003cmessage\u003e"
      ]
    },
    {
      "cells": [
        "bjorn",
        "pass123",
        "Invalid email address."
      ]
    },
    {
      "cells": [
        "bjornedwin@gmail.com",
        "wrongpass123",
        "Authentication failed."
      ]
    }
  ]
});
formatter.scenario({
  "name": "Unsuccessful login with bad username or password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@scenariooutline"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I\u0027m on the demo website",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.iMOnTheDemoWebsite()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click login",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.iClickLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter my username as \u003cemail\u003e",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.iEnterMyUsernameAsBjorn(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter my password as \u003cpassword\u003e",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.iEnterMyPasswordAsPass(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Sign In to my account",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.iClickSignIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I get a error message \u003cmessage\u003e",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iGetAndErrorMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Unsuccessful login with bad username or password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@scenariooutline"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I\u0027m on the demo website",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.iMOnTheDemoWebsite()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click login",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.iClickLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter my username as \u003cemail\u003e",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.iEnterMyUsernameAsBjorn(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter my password as \u003cpassword\u003e",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.iEnterMyPasswordAsPass(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Sign In to my account",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.iClickSignIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I get a error message \u003cmessage\u003e",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iGetAndErrorMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});