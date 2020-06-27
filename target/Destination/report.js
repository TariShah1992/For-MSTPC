$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("RegisterPage.feature");
formatter.feature({
  "line": 1,
  "name": "Registration page",
  "description": "",
  "id": "registration-page",
  "keyword": "Feature"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "User has already open browser",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "User enter user name and password",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefination.user_has_already_open_browser()"
});
formatter.result({
  "duration": 5481023900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_enter_user_name_and_password()"
});
formatter.result({
  "duration": 259745700,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "register new clients",
  "description": "",
  "id": "registration-page;register-new-clients",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@tag4"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "user is alrady logedIn to application",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "user click on Register tab",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user enters the contact information",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters mailing information",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user create user name and password",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user click on submit button",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationPage.user_is_alrady_logedIn_to_application()"
});
formatter.result({
  "duration": 3841121500,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationPage.user_click_on_Register_tab()"
});
formatter.result({
  "duration": 474393300,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationPage.user_enters_the_contact_information()"
});
formatter.result({
  "duration": 619661100,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationPage.user_enters_mailing_information()"
});
formatter.result({
  "duration": 612910700,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationPage.user_create_user_name_and_password()"
});
formatter.result({
  "duration": 409159500,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationPage.user_click_on_submit_button()"
});
formatter.result({
  "duration": 92774100900,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "FreeTourAutomationTest",
  "description": "",
  "id": "freetourautomationtest",
  "keyword": "Feature"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "User has already open browser",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "User enter user name and password",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "User click on login Btn",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_has_already_open_browser()"
});
formatter.result({
  "duration": 3769457800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_enter_user_name_and_password()"
});
formatter.result({
  "duration": 242365900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_click_on_login_Btn()"
});
formatter.result({
  "duration": 291613614900,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "LoginPageAutomation",
  "description": "",
  "id": "freetourautomationtest;loginpageautomation",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User is on homePage",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_homePage()"
});
formatter.result({
  "duration": 9864000,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "User has already open browser",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "User enter user name and password",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "User click on login Btn",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_has_already_open_browser()"
});
formatter.result({
  "duration": 5388811500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_enter_user_name_and_password()"
});
formatter.result({
  "duration": 213987000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_click_on_login_Btn()"
});
formatter.result({
  "duration": 300116190400,
  "error_message": "org.openqa.selenium.TimeoutException: timeout: Timed out receiving message from renderer: 300.000\n  (Session info: chrome\u003d83.0.4103.116)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027FOURSTARS\u0027, ip: \u0027192.168.1.163\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.116, chrome: {chromedriverVersion: 83.0.4103.14 (be04594a2b841..., userDataDir: C:\\Users\\Tarishah\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:58186}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: f59d388f38cf15980f99bfc36caa6b05\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat stepDefination.LoginStepDefination.user_click_on_login_Btn(LoginStepDefination.java:34)\r\n\tat ✽.Then User click on login Btn(login.feature:5)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 11,
  "name": "Flight booking",
  "description": "",
  "id": "freetourautomationtest;flight-booking",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "user select departure city",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user select the reservation type",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user click on continue button",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user select air lines",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "user enter the passenger name",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "user select the credit card",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "user enter the billing address",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user clicks o secure purchase btn",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_select_departure_city()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefination.user_select_the_reservation_type()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefination.user_click_on_continue_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefination.user_select_air_lines()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefination.user_enter_the_passenger_first_name()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefination.user_select_the_credit_card_type()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefination.user_enter_the_billing_address()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_o_secure_purchase_btn()"
});
formatter.result({
  "status": "skipped"
});
});