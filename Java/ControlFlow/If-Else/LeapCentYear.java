public class LeapCentYear {

    public static void main(String[] args) {

        int year = 2000;

        if(year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
            System.out.println("Leap Year");
            if(year % 100 == 0){
                System.out.println("Century Year");
            }
        }
        else
            System.out.println("Not Leap Year");
    }
}