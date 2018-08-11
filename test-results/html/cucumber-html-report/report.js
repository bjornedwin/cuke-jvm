$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/login.feature");
formatter.feature({
  "name": "This is login feature for my demo app",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Successfull login with valid username and password",
  "description": "",
  "keyword": "Scenario"
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
  "name": "I enter my username as bjornedwin@gmail.com",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.iEnterMyUsernameAsBjorn(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter my password as pass123",
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
  "name": "I get directed to my account homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iGetDirectedToHomepage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});