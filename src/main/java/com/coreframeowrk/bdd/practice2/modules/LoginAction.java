package com.coreframeowrk.bdd.practice2.modules;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import com.coreframeowrk.bdd.practice2.pageobjects.LoginPage;

public class LoginAction {
 public LoginPage login;
	public WebDriver driver;
	public LoginAction(WebDriver driver)
	{
		this.driver = driver;
		login = new  LoginPage(driver);
		PageFactory.initElements(driver, login);
	}
	
	public void execute(String username,String password)
	{
		login.clickSignIn();
		login.enterUsername(username);
		login.enterPassword(password);
		login.clickSubmit();
	}
}
