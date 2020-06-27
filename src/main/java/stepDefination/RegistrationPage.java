package stepDefination;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class RegistrationPage {
	
	WebDriver driver;
	@Given("^user is alrady logedIn to application$")
	public void user_is_alrady_logedIn_to_application(){
		//System.setProperty("webdriver.chrome.driver","C:\\drivers\\chrome83\\chromedriver.exe");
		System.setProperty("webdriver.chrome.driver","C:\\Drivers\\For 83 chrome\\chromedriver.exe");
		   driver= new ChromeDriver();
		   driver.get("http://newtours.demoaut.com/mercurysignon.php");
	  }

	@When("^user click on Register tab$")
	public void user_click_on_Register_tab(){
		
		  Actions action = new Actions(driver);
			action.moveToElement(driver.findElement(By.xpath("//a[contains(text(),'REGISTER')]")));
			driver.findElement(By.xpath("//a[contains(text(),'REGISTER')]")).click();
	}

	@Then("^user enters the contact information$")
	public void user_enters_the_contact_information(){
		driver.findElement(By.name("firstName")).sendKeys("Jack");
		driver.findElement(By.name("lastName")).sendKeys("Winner");
		driver.findElement(By.name("phone")).sendKeys("301-980-3456");
		driver.findElement(By.name("userName")).sendKeys("Jwinner123@yahoo.com");
		}

	@Then("^user enters mailing information$")
	public void user_enters_mailing_information(){
		driver.findElement(By.name("address1")).sendKeys("701-Noth Glebe Rd");
		driver.findElement(By.name("city")).sendKeys("Arlington");
		driver.findElement(By.name("state")).sendKeys("VA");
		driver.findElement(By.name("postalCode")).sendKeys("22203");
		driver.findElement(By.name("country"));
	    Select sel = new Select(driver.findElement(By.name("country")));
	    sel.selectByValue("215");
	}

	@Then("^user create user name and password$")
	public void user_create_user_name_and_password(){
		driver.findElement(By.name("email")).sendKeys("Jwinner");
		driver.findElement(By.name("password")).sendKeys("Jwineer2019");
		driver.findElement(By.name("confirmPassword")).sendKeys("Jwineer2019");
	}

	@Then("^user click on submit button$")
	public void user_click_on_submit_button(){
		driver.findElement(By.name("register")).click();
	   
	   
	}

}
