$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/carvana.feature");
formatter.feature({
  "name": "Carvana Functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.scenario({
  "name": "Validate CAR FINDER menu item",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on \"https://www.carvana.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "BaseSteps.userNavigatesTo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"CAR FINDER\" menu item",
  "keyword": "When "
});
formatter.match({
  "location": "CarvanaSteps.userClicksOnMenuItem(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be navigated to \"https://www.carvana.com/help-me-search/\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CarvanaSteps.userShouldBeNavigatedTo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"WHAT CAR SHOULD I GET?\" text",
  "keyword": "And "
});
formatter.match({
  "location": "CarvanaSteps.userShouldSeeText(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Car Finder can help! Answer a few quick questions to find the right car for you.\" text",
  "keyword": "And "
});
formatter.match({
  "location": "CarvanaSteps.userShouldSeeText(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"TRY CAR FINDER\" link",
  "keyword": "And "
});
formatter.match({
  "location": "CarvanaSteps.userShouldSeeLink(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"TRY CAR FINDER\" link",
  "keyword": "When "
});
formatter.match({
  "location": "CarvanaSteps.userClicksOnLink(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be navigated to \"https://www.carvana.com/help-me-search/qa\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CarvanaSteps.userShouldBeNavigatedTo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"WHAT IS MOST IMPORTANT TO YOU IN YOUR NEXT CAR?\" text",
  "keyword": "And "
});
formatter.match({
  "location": "CarvanaSteps.userShouldSeeText(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Select up to 4 in order of importance\" text",
  "keyword": "And "
});
formatter.match({
  "location": "CarvanaSteps.userShouldSeeText(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate SELL/TRADE invalid vin search",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on \"https://www.carvana.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "BaseSteps.userNavigatesTo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"SELL/TRADE\" menu item",
  "keyword": "When "
});
formatter.match({
  "location": "CarvanaSteps.userClicksOnMenuItem(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be navigated to \"https://www.carvana.com/sell-my-car\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CarvanaSteps.userShouldBeNavigatedTo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"GET A REAL OFFER IN 2 MINUTES\" text",
  "keyword": "And "
});
formatter.match({
  "location": "CarvanaSteps.userShouldSeeText(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"We pick up your car. You get paid on the spot.\" text",
  "keyword": "And "
});
formatter.match({
  "location": "CarvanaSteps.userShouldSeeText(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"VIN\" button",
  "keyword": "When "
});
formatter.match({
  "location": "CarvanaSteps.userClicksOnButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters vin number as \"12345678912345678\"",
  "keyword": "And "
});
formatter.match({
  "location": "CarvanaSteps.userEntersVinNumberAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"GET MY OFFER\" button",
  "keyword": "And "
});
formatter.match({
  "location": "CarvanaSteps.userClicksOnButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"We couldn\u0027t find that VIN. Please check your entry and try again.\" text",
  "keyword": "Then "
});
formatter.match({
  "location": "CarvanaSteps.userShouldSeeText(String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003cWe [couldn\u0027t find that VIN. Please check your entry and try again].\u003e but was:\u003cWe [found your VIN, but weren’t able to identify your vehicle details. Please add the year, make, model, and trim below].\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:115)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat steps.CarvanaSteps.userShouldSeeText(CarvanaSteps.java:92)\n\tat ✽.user should see \"We couldn\u0027t find that VIN. Please check your entry and try again.\" text(src/test/resources/features/carvana.feature:26)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate AUTO LOAN CALCULATOR under FINANCING menu item",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on \"https://www.carvana.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "BaseSteps.userNavigatesTo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user hovers over on \"FINANCING\" menu item",
  "keyword": "When "
});
formatter.match({
  "location": "CarvanaSteps.userHoversOverOnMenuItem(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"AUTO LOAN CALCULATOR\" menu item",
  "keyword": "And "
});
formatter.match({
  "location": "CarvanaSteps.userClicksOnMenuItem(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Cost of Car I want\" as \"10,000\"",
  "keyword": "When "
});
formatter.match({
  "location": "CarvanaSteps.userEntersAs(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects \"What\u0027s Your credit Score?\" as \"Excellent: 780\"",
  "keyword": "And "
});
formatter.match({
  "location": "CarvanaSteps.userSelectsAs(String,String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom unknown error: unexpected command response\n  (Session info: chrome\u003d103.0.5060.53)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Uthmans-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:149b:288a:a5c6:439b%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002712.4\u0027, java.version: \u00271.8.0_321\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 103.0.5060.53, chrome: {chromedriverVersion: 103.0.5060.53 (a1711811edd7..., userDataDir: /var/folders/09/rldzht6j09b...}, goog:chromeOptions: {debuggerAddress: localhost:58706}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 3bea7dd6da7fb21a9b9599be6713b74d\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\n\tat steps.CarvanaSteps.userSelectsAs(CarvanaSteps.java:157)\n\tat ✽.user selects \"What\u0027s Your credit Score?\" as \"Excellent: 780\"(src/test/resources/features/carvana.feature:34)\n",
  "status": "failed"
});
formatter.step({
  "name": "user selects \"Choose Your Loan Terms\" as \"60 Months\"",
  "keyword": "And "
});
formatter.match({
  "location": "CarvanaSteps.userSelectsAs(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters \"What is Your Down Payment?\" as \"1,500\"",
  "keyword": "And "
});
formatter.match({
  "location": "CarvanaSteps.userEntersAs(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see the monthly payment as \"154.00\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CarvanaSteps.userShouldSeeTheMonthlyPaymentAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "status": "passed"
});
});