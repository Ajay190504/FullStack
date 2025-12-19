
public class Employee {
	// Global Variables Declaration
	String cmpName;
	String city; // different for all instances
	String empName;
	int empId;
	
	public static void main(String[] args) {
		
		//Local Variables Declaration and Initialization
		boolean isActive = false;
		
		
		byte empAge = 48;
		
		byte empRank = 1; //out of 138
		
		short joinYear = 2002;
		short leaveYear = 2025;
		
		char gender = 'M';
		
		String cmpName = "World Wrestling Event";
		
		long phoneNo = 1234567890l;
		
		float performanceRating = 10.0f; //out of 10.0
		
		double empSalary = 60000000.0940932; // 60M$/year
		
		//instance(Object) created of WweEmployee class -- required to access instance variables
		Employee emp1 = new Employee(); 
		
		//Global Variable Initialization for emp1 instance
		emp1.city = "New York";
		emp1.empName = "John Cena";
		emp1.empId = 138;
		emp1.cmpName = "World Wrestling Event";
		
		System.out.println("Employee Details: ");
		System.out.println("Employee Name: "+emp1.empName);
		System.out.println("Company Name: "+emp1.cmpName);
		System.out.println("Employee City: "+emp1.city);
		System.out.println("Employee Id: "+emp1.empId);
		System.out.println("Employee Phone Number: "+phoneNo);
		System.out.println("Employee Age: "+empAge);
		System.out.println("Employee Rank: "+empRank);
		System.out.println("Employee Joining Year: "+joinYear);
		System.out.println("Employee Leaving Year: "+leaveYear);
		System.out.println("Employee Gender: "+gender);
		System.out.println("Employee is Active: "+isActive);
		System.out.println("Employee Performance Rating: "+performanceRating); 
		System.out.println("Employee Salary: "+empSalary);
			
				

	}

}

	