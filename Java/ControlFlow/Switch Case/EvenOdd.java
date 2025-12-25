
public class EvenOdd {
    public static void main(String[] args) {
        
        int n = 45;

        switch(n % 2) {
            case 0: 
                    System.out.println("Even"); 
                    break;
            case 1: 
                    System.out.println("Odd"); 
                    break;
            default: 
                    System.out.println("Invalid Input");
        }
    }
}
