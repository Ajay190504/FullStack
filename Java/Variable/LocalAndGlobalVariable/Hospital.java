
public class Hospital {
		// Global Variables Declaration
			String hName;
			String hCity;
	public static void main(String[] args) {

		//Local Variables Declaration and Initialization
			short noOfStaff = 1200 ;
			byte rank = 1;
			boolean isBedAvailable = true;
			int noOfPatients = 12000; //Till Now
			float successRate = 98.00f;
			double feesPerOp = 10093864;
			long phoneNo = 8322973682l;
			
		
		//instance(Object) created of WweEmployee class -- required to access instance variables
		Hospital hosp1 = new Hospital(); 
				
		//Global Variable Initialization for emp1 instance
		
		
		System.out.println("Hospital Details:");
		System.out.println("Hospital Name: "+hosp1.hName);
		System.out.println("Hospital City: "+hosp1.hCity);
		System.out.println("Phone Number: "+phoneNo);
		System.out.println("Rank: "+rank);
		System.out.println("Number of staff: "+noOfStaff);
		System.out.println("Number of Patients: "+noOfPatients);
		System.out.println("Success Rate: "+successRate);
		System.out.println("Is bed available: "+isBedAvailable);

	}

}
