package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utils.Driver;

public class SellTradeCarvanaPage {

    public SellTradeCarvanaPage(){
        PageFactory.initElements(Driver.getDriver(), this);
    }


    @FindBy(css = "div[class='sc-7ed29b82-1 jwFVns']>div:nth-child(2)")
    public WebElement getRealOfferIn2MinHeader;

    @FindBy(css = "div[class='sc-7ed29b82-1 jwFVns']>div:nth-child(3)")
    public WebElement wePickUpYourCarHeader;

    @FindBy(css = "button[data-cv-test='VINToggle']")
    public WebElement vinButton;

    @FindBy(css = "div[data-cv-test='heroVinEntryInput']>input")
    public WebElement vinInputBox;

    @FindBy(css = "button[data-cv-test='heroGetMyOfferButton']")
    public WebElement getMyOfferButton;

    @FindBy(css = "div[class='Wrapper-k9xbs3-2 gWWKAZ boldTitle']>p")
    public WebElement invalidVinErrorMessage;
}