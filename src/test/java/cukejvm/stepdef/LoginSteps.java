package cukejvm.stepdef;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import static org.junit.Assert.assertEquals;

import org.openqa.selenium.By;

public class LoginSteps {

    WebDriver driver;
    private static final String DEMO_URL = "http://automationpractice.com/index.php";

    public LoginSteps()
    {
        driver = Hooks.driver;
    }

    @Given("^I'm on the demo website$")
    public void iMOnTheDemoWebsite() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        System.out.println("URL launched\n");
        driver.get(DEMO_URL);
        assertEquals("My Store", driver.getTitle());
    }

    @And("^I click login$")
    public void iClickLogin() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        System.out.println("login is clicked\n");
        driver.findElement(By.className("login")).click();
    }

    @When("^I enter my username as (.*)$")
    public void iEnterMyUsernameAsBjorn(String email) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        driver.findElement(By.id("email")).sendKeys(email);
    }

    @And("^I enter my password as (.*)$")
    public void iEnterMyPasswordAsPass(String password) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        driver.findElement(By.id("passwd")).sendKeys(password);
    }

    @And("^I Sign In to my account$")
    public void iClickSignIn() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        driver.findElement(By.id("SubmitLogin")).click();
    }

    @Then("^I get directed to my account homepage$")
    public void iGetDirectedToHomepage() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        String pagetitle = driver.getTitle();
        System.out.println("My account home page title : " + pagetitle + "\n");
        assertEquals("My account - My Store", driver.getTitle());
    }

    @Then("^I get a error message ([^\"]*)$")
    public void iGetAndErrorMessage(String errorMessage) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        driver.findElement(By.xpath("//*[text()[contains(.,errorMessage)]]"));
    }

    @And("^I don't enter a password$")
    public void iDonTEnterAPassword() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        driver.findElement(By.id("passwd")).sendKeys();
    }

    @And("^I don't enter a username$")
    public void iDonTEnterAUsername() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        driver.findElement(By.id("email")).sendKeys();
    }
}
