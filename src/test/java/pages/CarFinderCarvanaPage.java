package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utils.Driver;

public class CarFinderCarvanaPage {
    public CarFinderCarvanaPage(){
        PageFactory.initElements(Driver.getDriver(), this);
    }

    @FindBy(xpath = "//h1")
    public WebElement whatShouldIGetHeader;

    @FindBy(xpath = "//h3")
    public WebElement carFinderCanHelpHeader;

    @FindBy(css = "a[data-qa='router-link']")
    public WebElement tryCarFinderLink;

    @FindBy(css = "div[data-qa='headline']")
    public WebElement whatIsMostImportantToYouHeader;

    @FindBy(css = "div[data-qa='sub-heading']")
    public WebElement selectUpTo4InOrderOfImportanceHeader;
}