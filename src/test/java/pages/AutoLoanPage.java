package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utils.Driver;

public class AutoLoanPage {
    public AutoLoanPage(){
        PageFactory.initElements(Driver.getDriver(), this);
    }

    @FindBy(css = "input[name='vehiclePrice']")
    public WebElement costOfCarInputBox;

    @FindBy(css = "input[name='downPayment']")
    public WebElement downPaymentInputBox;

    @FindBy(css = "select[name='creditScoreIndex']")
    public WebElement creditScoreDropdown;

    @FindBy(css = "select[name='creditScoreIndex']>option:nth-child(1)")
    public WebElement excellentCreditScore;

    @FindBy(css = "select[name='loanTerm']")
    public WebElement loanTermDropdown;

    @FindBy(css = "select[name='loanTerm']>option:nth-child(2)")
    public WebElement sixtyMonthOptionLoanTerm;


    @FindBy(css = "div[class='loan-calculator-display-value']")
    public WebElement monthlyPaymentEstimate;
}