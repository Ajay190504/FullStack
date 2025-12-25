
public class ElectricityRate {
    public static void main(String[] args) {
        
        String type = "Commercial";

        switch(type) {
            case "Domestic": 
                    System.out.println("Rate: 5 Rs/unit"); 
                    break;
            case "Commercial": 
                    System.out.println("Rate: 8 Rs/unit"); 
                    break;
            case "Industrial": 
                    System.out.println("Rate: 12 Rs/unit"); 
                    break;
            default: 
                    System.out.println("Invalid Category");
        }
    }
}
