package com.coreframeowrk.bdd.practice2.Base;

import org.openqa.selenium.WebDriver;

public class BaseClass {

	public WebDriver driver;
	
	public BaseClass(WebDriver driver)
	{
		this.driver = driver;
	}
}
