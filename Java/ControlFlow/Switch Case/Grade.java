
public class Grade {
    public static void main(String[] args) {
       
        char g = 'B';

        switch(g) {
            case 'A': 
                    System.out.println("Range 90-100 % -> Excellent"); 
                    break;
            case 'B': 
                    System.out.println("Range 80-89 % -> Very Good"); 
                    break;
            case 'C': 
                    System.out.println("Range 70-79 % -> Good"); 
                    break;
            case 'D': 
                    System.out.println("Range 60-69 % -> Average"); 
                    break;     
            case 'E': 
                    System.out.println("Range 50-60 % -> Poor"); 
                    break;
            case 'F': 
                    System.out.println("Range below 50 % -> Fail"); 
                    break;   
            default: System.out.println("Invalid Grade");
        }
    }
}
