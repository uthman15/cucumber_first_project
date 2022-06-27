package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utils.Driver;

import java.util.List;

public class CarvanaPage {
    public CarvanaPage(){
        PageFactory.initElements(Driver.getDriver(), this);
    }


    @FindBy(css = "a[data-cv-test='headerCarFinderLink']")
    public WebElement carFinderButton;

    @FindBy(css = "a[data-cv-test='headerTradesLink']")
    public WebElement sellTradeButton;

    @FindBy(css = "div[data-cv-test='headerFinanceDropdown']")
    public WebElement financeDropdown;

    @FindBy(css = "a[data-cv-test='headerFinanceLoanCalc']")
    public WebElement autoLoanCalculator;






}