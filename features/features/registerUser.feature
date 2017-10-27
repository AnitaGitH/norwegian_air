#features/registerUser.feature
Feature: Register functionality test
User should be able to register on norwegian page
and after sucessfull registration he should see his profile page
   
Scenario: Register new User 
        Given I go to "https://www.norwegian.com/us/"
        When I click Signin button
        And I click register button
        And I enter all credentials 
        Then I should be able to see my profile page
        And I should Logout
        

        


        #  username, password, passwordConfirm, firstname, lastname, address, city, phoneNum