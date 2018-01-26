package com.coreframeowrk.bdd.practice2.stepDefinition;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.PageFactory;

import com.coreframeowrk.bdd.practice2.BaseTest.Hooks;
import com.coreframeowrk.bdd.practice2.modules.LoginAction;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;
import com.coreframeowrk.bdd.practice2.pageObjectManager.PageObjectManager;
import com.coreframeowrk.bdd.practice2.pageobjects.LoginPage;

public class stepDefinitionLogin {
	public WebDriver driver;
	//public PageObjectManager pageObjectManager;
	public LoginPage loginPage;
	
	public stepDefinitionLogin()
	{
		driver = Hooks.driver;
		//System.setProperty("webdriver.chrome.driver","D:\\Automation\\chromedriver.exe");
		//driver = new ChromeDriver();
		//pageObjectManager= new PageObjectManager(driver);
	}
	
	@Given("^User is on automationpractice website$")
	public void user_is_on_automationpractice_website() throws Throwable {
		
		//Hooks.driver.manage().deleteAllCookies();
		driver.get("http://automationpractice.com/index.php");
	}

	@When("^User enter username \"([^\"]*)\" and password \"([^\"]*)\"$")
	public void user_enter_username_and_password(String username, String password) throws Throwable {
		 loginPage = new LoginPage(driver);
		   PageFactory.initElements(Hooks.driver, loginPage);
		   LoginAction la = new LoginAction(Hooks.driver);
		   la.execute(username, password);
	}


	@Then("^User should signIn successfully$")
	public void user_should_signIn_successfully() throws Throwable {
	    System.out.println("login sucess");
	    System.out.println("user dir:"+"user.dir");
	}

}
