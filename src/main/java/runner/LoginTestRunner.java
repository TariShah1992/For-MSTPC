package runner;

 
import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
 
@RunWith(Cucumber.class)
@CucumberOptions(features= {"src/main/java/features"}, 
glue="stepDefination",
plugin = {"pretty", "html:target/Destination"},

monochrome=true,
dryRun=false
)

public class LoginTestRunner {
 
}
