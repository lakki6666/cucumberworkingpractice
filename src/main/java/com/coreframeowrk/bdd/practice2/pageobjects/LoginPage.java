package com.coreframeowrk.bdd.practice2.pageobjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.FindBy;

import com.coreframeowrk.bdd.practice2.Base.BaseClass;

public class LoginPage extends BaseClass{

	public LoginPage(WebDriver driver) {
		super(driver);
		// TODO Auto-generated constructor stub
	}

	@FindBy(how=How.XPATH,using="//div[@class='header_user_info']/a")
	public WebElement btn_SignIn;
	
	@FindBy(how=How.XPATH,using="//*[@id='email']")
	public WebElement txt_username;
	
	@FindBy(how=How.XPATH,using="//*[@id='passwd']")
	public WebElement txt_password;
	
	@FindBy(how=How.XPATH,using="//*[@id='SubmitLogin']")
	public WebElement btn_Submit;
	
	public void clickSignIn()
	{
		btn_SignIn.click();
	}
	
	public void enterUsername(String username)
	{
		txt_username.sendKeys(username);
	}
	
	public void enterPassword(String password)
	{
		txt_password.sendKeys(password);
	}
	
	public void clickSubmit()
	{
		btn_Submit.click();
	}
	
	
}
