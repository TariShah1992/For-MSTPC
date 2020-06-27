package stepDefination;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepDefination{
	
	WebDriver driver;

	@Given("^User has already open browser$")
	public void user_has_already_open_browser(){
		System.setProperty("webdriver.chrome.driver","C:\\Drivers\\For 83 chrome\\chromedriver.exe");
	   driver= new ChromeDriver();
	   driver.get("http://newtours.demoaut.com/mercurysignon.php");
	}
	
	@When("^User enter user name and password$")
	public void user_enter_user_name_and_password(){
		driver.findElement(By.name("userName")).sendKeys("tarishah");
	    driver.findElement(By.name("password")).sendKeys("tarishah0306");
	 }

	@Then("^User click on login Btn$")
	public void user_click_on_login_Btn(){
		driver.findElement(By.name("login")).click();
	 }

	@Then("^User is on homePage$")
	public void user_is_on_homePage(){
		
		String title =driver.getTitle();
		Assert.assertEquals(title, "Find a Flight: Mercury Tours:");
	}
	
	/*@Then("^User close the browser$")
	public void user_close_the_browser(){
		driver.quit();
	}*/
	@When("^user select departure city$")
	public void user_select_departure_city(){
	Select destin = new Select(driver.findElement(By.name("fromPort")));
	destin.selectByValue("London");
   }

	@Then("^user select the reservation type$")
	public void user_select_the_reservation_type(){
	//Select RadioBtn= new Select(driver.findElement(By.xpath("//input[@name='servClass' and @value='Business']")));
	WebElement radioBtn= driver.findElement(By.xpath("//input[@name='servClass' and@ value='First']"));
	radioBtn.click();
	}

	@Then("^user click on continue button$")
	public void user_click_on_continue_button(){
	WebElement continueBtn= driver.findElement(By.xpath("//input[@name='findFlights']"));
	continueBtn.click();
    }
	
	@Then("^user select air lines$")
	public void user_select_air_lines(){
		//Select selBlueSky= new Select(driver.findElement(By.cssSelector("input[name='outFlight'][value^='Blue Skies Airlines$361$271$7:10']")));
		//selBlueSky.selectByValue("Blue Skies Airlines$361$271$7:10");
		driver.findElement(By.xpath("//input[@name='outFlight' and @value='Blue Skies Airlines$361$271$7:10']")).click();
		driver.findElement(By.xpath("//input[@name='inFlight' and @value='Pangea Airlines$632$282$16:37']")).click();
		WebElement resvBtn=driver.findElement(By.xpath("//input[@src='/images/forms/continue.gif' and @name='reserveFlights']"));
		//WebElement resvBtn =driver.findElement(By.xpath("input[name='reserveFlights']"));
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].click()",resvBtn);
		}
	
	@When("^user enter the passenger name$")
	public void user_enter_the_passenger_first_name(){
		driver.findElement(By.name("passFirst0")).sendKeys("Roy");
		driver.findElement(By.name("passLast0")).sendKeys("Davis");
	}

	@Then("^user select the credit card$")
	public void user_select_the_credit_card_type(){
		WebElement CCName=driver.findElement(By.cssSelector("select[name='creditCard']"));
		Select sel= new Select(CCName);
		sel.selectByValue("DS");
		driver.findElement(By.name("creditnumber")).sendKeys("56480987");
		Select mont= new Select(driver.findElement(By.cssSelector("select[name='cc_exp_dt_mn']")));
		mont.selectByIndex(3);
		Select yrs= new Select(driver.findElement(By.cssSelector("select[name='cc_exp_dt_yr']")));
		yrs.selectByIndex(10);
	  }

	@Then("^user enter the billing address$")
	public void user_enter_the_billing_address(){
		driver.findElement(By.name("billAddress1")).clear();
		driver.findElement(By.name("billAddress1")).sendKeys("321-Breez Ct");
		driver.findElement(By.name("billCity")).clear();
		driver.findElement(By.name("billCity")).sendKeys("Burke");
		driver.findElement(By.name("billState")).clear();
		driver.findElement(By.name("billState")).sendKeys("VA");
		driver.findElement(By.name("billZip")).clear();
		driver.findElement(By.name("billZip")).sendKeys("22709");
	    
	}

	@Then("^user clicks o secure purchase btn$")
	public void user_clicks_o_secure_purchase_btn(){
		WebElement secBtn=driver.findElement(By.cssSelector("input[src='/images/forms/purchase.gif'][name='buyFlights']"));
		secBtn.click();
		/*JavascriptExecutor js= (JavascriptExecutor) driver;
		js.executeScript("arguments[0],click()",secBtn);*/
	   
	}
	
}
