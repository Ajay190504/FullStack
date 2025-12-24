public class VoteContest {

    public static void main(String[] args) {

        int age = 30;

        if(age >= 18) {
            System.out.println("Eligible to Vote");
            if(age >= 25){
                System.out.println("Eligible to Contest Election");
            }
        }   else {
                System.out.println("Not Eligible to Vote");
            }
    }
}