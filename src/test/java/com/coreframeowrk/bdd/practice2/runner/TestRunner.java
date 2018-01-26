package com.coreframeowrk.bdd.practice2.runner;

import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;
import cucumber.api.CucumberOptions;


//@RunWith(Cucumber.class)
@CucumberOptions(
		features= "src\\test\\resource\\features",
		glue= "com\\coreframeowrk\\bdd\\practice2\\stepDefinition",
		plugin="html:target/cucumber-report")
public class TestRunner extends AbstractTestNGCucumberTests{
}
