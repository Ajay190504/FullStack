
public class TrafficSignal {
    public static void main(String[] args) {
        
        String color = "Red";

        switch(color) {
            case "Red": 
                    System.out.println("Stop"); 
                    break;
            case "Yellow": 
                    System.out.println("Ready"); 
                    break;
            case "Green": 
                    System.out.println("Go"); 
                    break;
            default: 
                    System.out.println("Invalid Color");
        }
    }
}
