$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login2.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "User signIn and Signout sucessfully",
  "description": "",
  "id": "user-signin-and-signout-sucessfully",
  "keyword": "Feature",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "line": 22,
  "name": "User sign in sucessfully",
  "description": "",
  "id": "user-signin-and-signout-sucessfully;user-sign-in-sucessfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "user is on automationpractice website",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "user enter username \"\u003cusername\u003e\" and password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "clicks submit",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User should signIn successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "user-signin-and-signout-sucessfully;user-sign-in-sucessfully;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 29,
      "id": "user-signin-and-signout-sucessfully;user-sign-in-sucessfully;;1"
    },
    {
      "cells": [
        "kanaka.rammi@gmail.com",
        "Kank@1234"
      ],
      "line": 30,
      "id": "user-signin-and-signout-sucessfully;user-sign-in-sucessfully;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 30,
  "name": "User sign in sucessfully",
  "description": "",
  "id": "user-signin-and-signout-sucessfully;user-sign-in-sucessfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "user is on automationpractice website",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "user enter username \"kanaka.rammi@gmail.com\" and password \"Kank@1234\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "clicks submit",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User should signIn successfully",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});