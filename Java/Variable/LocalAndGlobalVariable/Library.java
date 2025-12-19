
public class Library {
		// Global Variables Declaration
			short libId;
			String libName;

	public static void main(String[] args) {
		
		//Local Variables Declaration and Initialization
			String libCity = "Solapur";
			boolean isPrivate = false;
			long libPhone = 281793829l;
			int noOfBooks= 30826;
			byte libRank = 12;
			float fineRate = 0.25f;
			double lattitude = 34.052235;
		
		//instance(Object) created of WweEmployee class -- required to access instance variables
		Library lib1 = new Library(); 
				
		//Global Variable Initialization for emp1 instance
			lib1.libId = 230;
			lib1.libName="Solapur Library"; 
		
		System.out.println("Library Details:");
		System.out.println("Library Name: "+lib1.libName);
		System.out.println("Library Id: "+lib1.libId);
		System.out.println("Library City: "+libCity);
		System.out.println("Phone Number: "+libPhone);
		System.out.println("Number of Books: "+noOfBooks);
		System.out.println("Fine rate per Day: "+fineRate);
		System.out.println("Lattitude: "+lattitude);
		System.out.println("Library is Private: "+isPrivate);
		System.out.println("Library Rank: "+libRank);


	}

}
