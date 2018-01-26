package com.coreframeowrk.bdd.practice2.pageObjectManager;

import org.openqa.selenium.WebDriver;
import com.coreframeowrk.bdd.practice2.pageobjects.LoginPage;

public class PageObjectManager {
	public WebDriver driver;
	public LoginPage loginPage;

	public PageObjectManager(WebDriver driver)
	{
		this.driver = driver;
	}
	
	public LoginPage getLoginPage()
	{
		return(loginPage==null)? new LoginPage(driver) : loginPage;
	}
	
}
