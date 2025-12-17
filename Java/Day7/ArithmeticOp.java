
// Program For Arithmetic Operators
public class ArithmeticOp {
	public static void main(String[] args) {
		
		//Local Variables
		int a=3,num1 = 20;
		int b=5,num2 = 5;
		
		//Arithmetic Operations
		int addition = num1+num2;
		int subtraction = num1-num2;
		int multiplication = num1*num2;
		int division = num1/num2;
		int modulus = num1%num2;
		
		//Meaningful Output
		System.out.println("Addition of "+num1+" and "+num2+" is "+addition);
		System.out.println("Subtraction of "+num1+" and "+num2+" is "+subtraction);
		System.out.println("Multiplication of "+num1+" and "+num2+" is "+multiplication);
		System.out.println("Division of "+num1+" and "+num2+" is "+division);
		System.out.println("Division of "+a+" and "+b+" is "+(a/b));
		System.out.println("Modulus of "+num1+" and "+num2+" is "+modulus);
		System.out.println("Modulus of "+a+" and "+b+" is "+(a%b));

	}

}
