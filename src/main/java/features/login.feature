Feature: FreeTourAutomationTest
Background:	
Given User has already open browser
When  User enter user name and password
Then  User click on login Btn

 @tag1
Scenario: LoginPageAutomation
Then  User is on homePage
@tag2
Scenario: Flight booking
When user select departure city
Then user select the reservation type
Then user click on continue button
Then user select air lines
When user enter the passenger name
Then user select the credit card 
Then user enter the billing address
Then user clicks o secure purchase btn