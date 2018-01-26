package com.coreframeowrk.bdd.practice2.BaseTest;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import cucumber.api.java.Before;
import cucumber.api.java.After;

import cucumber.api.Scenario;

public class Hooks {
	
	public static WebDriver driver;

	@Before
	public void setUp()
	{
		System.setProperty("webdriver.chrome.driver","D:\\Automation\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().deleteAllCookies();
		System.out.println("heloooooooooooooooooooooo");
	}
	
	@After
	public void tearDown(Scenario scenario)
	{
		if(scenario.isFailed())
		{
			try {
			scenario.write("failed at"+driver.getCurrentUrl());
			byte[] screenshot = ((TakesScreenshot)driver).getScreenshotAs(OutputType.BYTES);
			scenario.embed(screenshot, "image/png");
			}catch (Exception SomeSystemDontSupportScreenShot) {
			
				SomeSystemDontSupportScreenShot.getMessage();
				// TODO: handle exception
			}
			
			//driver.quit();
		}
	}
	
}
