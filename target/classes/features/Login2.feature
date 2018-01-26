Feature: User signIn and Signout sucessfully

  Scenario Outline: User sign in sucessfully
    Given User is on automationpractice website
    When User enter username "<username>" and password "<password>"
    Then User should signIn successfully

    Examples: 
      | username  | password | 
      |kanaka.rammi@gmail.com |Kank@1234| 
      
