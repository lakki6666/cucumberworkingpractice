$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login2.feature");
formatter.feature({
  "line": 1,
  "name": "User signIn and Signout sucessfully",
  "description": "",
  "id": "user-signin-and-signout-sucessfully",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "User sign in sucessfully",
  "description": "",
  "id": "user-signin-and-signout-sucessfully;user-sign-in-sucessfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is on automationpractice website",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enter username \"\u003cusername\u003e\" and password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User should signIn successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "user-signin-and-signout-sucessfully;user-sign-in-sucessfully;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 9,
      "id": "user-signin-and-signout-sucessfully;user-sign-in-sucessfully;;1"
    },
    {
      "cells": [
        "kanaka.rammi@gmail.com",
        "Kank@1234"
      ],
      "line": 10,
      "id": "user-signin-and-signout-sucessfully;user-sign-in-sucessfully;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 10,
  "name": "User sign in sucessfully",
  "description": "",
  "id": "user-signin-and-signout-sucessfully;user-sign-in-sucessfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is on automationpractice website",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enter username \"kanaka.rammi@gmail.com\" and password \"Kank@1234\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User should signIn successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitionLogin.user_is_on_automationpractice_website()"
});
formatter.result({
  "duration": 129694199,
  "error_message": "java.lang.NullPointerException\r\n\tat com.coreframeowrk.bdd.practice2.stepDefinition.stepDefinitionLogin.user_is_on_automationpractice_website(stepDefinitionLogin.java:33)\r\n\tat ✽.Given User is on automationpractice website(Login2.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "kanaka.rammi@gmail.com",
      "offset": 21
    },
    {
      "val": "Kank@1234",
      "offset": 59
    }
  ],
  "location": "stepDefinitionLogin.user_enter_username_and_password(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitionLogin.user_should_signIn_successfully()"
});
formatter.result({
  "status": "skipped"
});
});