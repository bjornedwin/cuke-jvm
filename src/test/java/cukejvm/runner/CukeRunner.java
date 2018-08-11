package cukejvm.runner;

import cucumber.api.junit.Cucumber;
import cucumber.api.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features={"src/test/resources"},
        format = {"pretty","html:test-results/html/cucumber-html-report","json:test-results/json/cucumber.json"},
        glue = {"cukejvm.stepdef"}
)

public class CukeRunner {
}
