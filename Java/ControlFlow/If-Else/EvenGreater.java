public class EvenGreater {

    public static void main(String[] args) {

        int num = 60;

        if(num % 2 == 0) {
            System.out.println("Even Number");
            if(num > 50){
                System.out.println("Greater than 50");
            }
        }
        else
            System.out.println("Odd Number");
    }

}