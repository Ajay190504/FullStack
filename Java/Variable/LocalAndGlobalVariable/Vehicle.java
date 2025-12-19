
public class Vehicle {
		// Global Variables Declaration
			String regCity;
			String vName;
			int regNo;
			String cmpName;
					
	public static void main(String[] args) {
		
		//Local Variables Declaration and Initialization
			short maxSpeed=360;
			byte modelNo = 14;
			boolean isSuv = true;
			double safetyRating = 4.87348764;
			long distTraveled = 10000000l; //in kilometers
			char grade= 'A';
			
		
		
		
		//instance(Object) created of WweEmployee class -- required to access instance variables
		Vehicle vehicle1 = new Vehicle(); 
				
		//Global Variable Initialization for emp1 instance
			vehicle1.vName = "Scorpio N";
			vehicle1.cmpName =  "Mahindra";
			vehicle1.regNo = 123476;
			vehicle1.regCity = "Solapur";
			
			
		
		
		System.out.println("Vehicle Details:");
		System.out.println("Vehicle Name: "+vehicle1.vName);
		System.out.println("Vehicle Company: "+vehicle1.cmpName);
		System.out.println("Vehicle City: "+vehicle1.regCity);
		System.out.println("Registration Number: "+vehicle1.regNo);
		System.out.println("Maximum Speed: "+maxSpeed);
		System.out.println("Model Number: "+modelNo);
		System.out.println("Safety Rating: "+safetyRating);
		System.out.println("Distance Traveled: "+distTraveled);
		System.out.println("Vehicle is SUV: "+isSuv);
		System.out.println("Vehicle Grade: "+grade);


	}

}
