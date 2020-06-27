Feature: Registration page
Background:	
Given User has already open browser
When  User enter user name and password

@tag4
Scenario: register new clients
Given user is alrady logedIn to application
When user click on Register tab
Then user enters the contact information
And user enters mailing information
Then user create user name and password
Then user click on submit button