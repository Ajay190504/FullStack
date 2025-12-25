public class ThreeQuarters {
    public static void main(String[] args) {

        String month = "may";

        switch(month) {

            // ---------- Quarter 1 ----------
            case "jan":
            case "feb":
            case "march":
            case "april":

                System.out.println("January");
                System.out.println("February");
                System.out.println("March");
                System.out.println("April");
                }

                break;

            // ---------- Quarter 2 ----------
            case "may":
            case "june":
            case "july":
            case "august":

                System.out.println("May");
                System.out.println("June");
                System.out.println("July");
                System.out.println("August");
                break;

            // ---------- Quarter 3 ----------
            case "september":
            case "october":
            case "november":
            case "december":

                System.out.println("September");
                System.out.println("October");
                System.out.println("November");
                System.out.println("December");
                break;

            default:
                System.out.println("Invalid Month");
        }
    }
}
