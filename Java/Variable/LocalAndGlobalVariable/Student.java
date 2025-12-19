
public class Student {
	
		// Global Variables Declaration
			String stdName;
			int stdId;
			String stdCity;
			
			
	public static void main(String[] args) {

		//Local Variables Declaration and Initialization
			int rollNo = 34;
			byte stdAge = 21;
			short regNo = 1234;
			boolean isSmart = true;
			long phoneNo = 9023728774l;
			String stdEmail = "ajayawaghmare190504@gmail.com";
			float tenthPercentage = 92.60f;
			double accBalance = 12244875.59803947;
			char grade = 'A';
			
			
		//instance(Object) created of WweEmployee class -- required to access instance variables
			Student std1 = new Student(); 
				
		//Global Variable Initialization for emp1 instance
			std1.stdName = "Ajay Waghmare";
			std1.stdId = 12345;
			std1.stdCity = "Barshi";
			
			System.out.println("Student Details:");
			System.out.println("Student Name: "+std1.stdName);
			System.out.println("Student Id: "+std1.stdId);
			System.out.println("Student City: "+std1.stdCity);
			System.out.println("Email Address: "+stdEmail);
			System.out.println("Phone Number: "+phoneNo);
			System.out.println("Age: "+stdAge);
			System.out.println("Roll Number: "+rollNo);
			System.out.println("Register Number: "+regNo);
			System.out.println("Account Balance: "+accBalance);
			System.out.println("Tenth Percentage: "+tenthPercentage);
			System.out.println("Student is Smart: "+isSmart);
			System.out.println("Grade: "+grade);

	}
}
