
public class Calculator {
    public static void main(String[] args) {
        int num1 = 10; 
        int num2 = 5;  
        char op = '*';

        switch(op) {
            case '+': 
                    System.out.println(num1 + num2); 
                    break;
            case '-': 
                    System.out.println(num1 - num2); 
                    break;
            case '*': 
                    System.out.println(num1 * num2); 
                    break;
            case '/': 
                    System.out.println(num1 / num2); 
                    break;
            case '%': 
                    System.out.println(num1 % num2); 
                    break;
            default: 
                    System.out.println("Invalid Operator");
        }
    }
}
