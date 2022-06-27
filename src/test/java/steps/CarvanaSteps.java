package steps;

import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.NotFoundException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.interactions.Actions;
import pages.AutoLoanPage;
import pages.CarFinderCarvanaPage;
import pages.CarvanaPage;
import pages.SellTradeCarvanaPage;
import utils.Driver;
import utils.Waiter;

public class CarvanaSteps {

    WebDriver driver;
    CarvanaPage carvanaPage;
    CarFinderCarvanaPage carFinderCarvanaPage;
    AutoLoanPage autoLoanPage;
    SellTradeCarvanaPage sellTradeCarvanaPage;


    @Before
    public void setup(){
        driver = Driver.getDriver();
        carvanaPage = new CarvanaPage();
        carFinderCarvanaPage = new CarFinderCarvanaPage();
        autoLoanPage = new AutoLoanPage();
        sellTradeCarvanaPage = new SellTradeCarvanaPage();
    }

    @When("user clicks on {string} menu item")
    public void userClicksOnMenuItem(String key) {
        switch (key) {
            case "CAR FINDER":
                Waiter.pause(5);
                carvanaPage.carFinderButton.click();
                break;
            case "SELL/TRADE":
                Waiter.pause(2);
                carvanaPage.sellTradeButton.click();
                break;
            case "AUTO LOAN CALCULATOR":
                carvanaPage.autoLoanCalculator.click();
                break;
            default:
                throw new NotFoundException("The item entered is not valid.");
        }
    }

    @Then("user should be navigated to {string}")
    public void userShouldBeNavigatedTo(String url) {
        Waiter.pause(5);
        Assert.assertEquals(url, driver.getCurrentUrl());
    }

    @And("user should see {string} text")
    public void userShouldSeeText(String text) {
        switch (text){
            case "WHAT CAR SHOULD I GET?":
                Assert.assertTrue(carFinderCarvanaPage.whatShouldIGetHeader.isDisplayed());
                Assert.assertEquals(text, carFinderCarvanaPage.whatShouldIGetHeader.getText());
                break;
            case "Car Finder can help! Answer a few quick questions to find the right car for you.":
                Assert.assertTrue(carFinderCarvanaPage.carFinderCanHelpHeader.isDisplayed());
                Assert.assertEquals(text, carFinderCarvanaPage.carFinderCanHelpHeader.getText());
                break;
            case "WHAT IS MOST IMPORTANT TO YOU IN YOUR NEXT CAR?":
                Waiter.pause(2);
                Assert.assertTrue(carFinderCarvanaPage.whatIsMostImportantToYouHeader.isDisplayed());
                Assert.assertEquals(text, carFinderCarvanaPage.whatIsMostImportantToYouHeader.getText());
                break;
            case "Select up to 4 in order of importance":
                Assert.assertTrue(carFinderCarvanaPage.selectUpTo4InOrderOfImportanceHeader.isDisplayed());
                Assert.assertEquals(text, carFinderCarvanaPage.selectUpTo4InOrderOfImportanceHeader.getText());
                break;
            case "GET A REAL OFFER IN 2 MINUTES":
                Assert.assertTrue(sellTradeCarvanaPage.getRealOfferIn2MinHeader.isDisplayed());
                Assert.assertEquals(text, sellTradeCarvanaPage.getRealOfferIn2MinHeader.getText());
                break;
            case "We pick up your car. You get paid on the spot.":
                Assert.assertTrue(sellTradeCarvanaPage.wePickUpYourCarHeader.isDisplayed());
                Assert.assertEquals(text, sellTradeCarvanaPage.wePickUpYourCarHeader.getText());
                break;
            case "We couldn't find that VIN. Please check your entry and try again.":
                Waiter.waitForVisibilityOfElement(driver, sellTradeCarvanaPage.invalidVinErrorMessage, 30);
                Assert.assertTrue(sellTradeCarvanaPage.invalidVinErrorMessage.isDisplayed());
                Assert.assertEquals(text, sellTradeCarvanaPage.invalidVinErrorMessage.getText());
                break;
            default:
                throw new NotFoundException("The text entered is not valid.");
        }
    }

    @And("user should see {string} link")
    public void userShouldSeeLink(String link) {
        Assert.assertTrue(carFinderCarvanaPage.tryCarFinderLink.isDisplayed());
        Assert.assertEquals(link, carFinderCarvanaPage.tryCarFinderLink.getText());
    }

    @When("user clicks on {string} link")
    public void userClicksOnLink(String link) {
        carFinderCarvanaPage.tryCarFinderLink.click();
    }

    @When("user clicks on {string} button")
    public void userClicksOnButton(String key) {
        switch (key){
            case "VIN":
                sellTradeCarvanaPage.vinButton.click();
                break;
            case "GET MY OFFER":
                sellTradeCarvanaPage.getMyOfferButton.click();
                break;
            default:
                throw new NotFoundException("The text entered is not valid.");
        }
    }

    @And("user enters vin number as {string}")
    public void userEntersVinNumberAs(String key) {
        sellTradeCarvanaPage.vinInputBox.sendKeys(key);
    }

    @When("user hovers over on {string} menu item")
    public void userHoversOverOnMenuItem(String key) {
        Waiter.pause(3);
        new Actions(Driver.getDriver()).moveToElement(carvanaPage.financeDropdown).perform();
    }

    @When("user enters {string} as {string}")
    public void userEntersAs(String question, String key) {
        switch(question){
            case "Cost of Car I want" :
                Assert.assertTrue(autoLoanPage.costOfCarInputBox.isDisplayed());
                autoLoanPage.costOfCarInputBox.click();
                autoLoanPage.costOfCarInputBox.sendKeys("10,000");
                break;
            case "What is Your Down Payment?" :
                Assert.assertTrue(autoLoanPage.downPaymentInputBox.isDisplayed());
                autoLoanPage.downPaymentInputBox.click();
                autoLoanPage.downPaymentInputBox.sendKeys(key);
                break;
            default:
                throw new NotFoundException("The input entered is not valid.");
        }
    }

    @And("user selects {string} as {string}")
    public void userSelectsAs(String question, String key) {
        switch (question){
            case "What's Your credit Score?" :
                autoLoanPage.creditScoreDropdown.click();
                autoLoanPage.excellentCreditScore.click();
                break;
            case "Choose Your Loan Terms":
                autoLoanPage.loanTermDropdown.click();
                autoLoanPage.sixtyMonthOptionLoanTerm.click();
                break;
            default:
                throw new NotFoundException("The input entered is not valid.");
        }
    }

    @Then("user should see the monthly payment as {string}")
    public void userShouldSeeTheMonthlyPaymentAs(String key) {
        Assert.assertTrue(autoLoanPage.monthlyPaymentEstimate.isDisplayed());
        Assert.assertEquals(key, autoLoanPage.monthlyPaymentEstimate.getText());
    }
}