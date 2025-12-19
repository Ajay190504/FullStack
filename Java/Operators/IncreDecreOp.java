public class IncreDecreOp {
    public static void main(String[] args) {

        int a = 10;

        a++; // 11
        --a; // 10
        a++; // 11
        a--; // 10
        a--; // 9
        ++a; // 10
        System.out.println("a = " + (a++)); // 10 // 11
        System.out.println("a = " + (a--)); // 11 // 10
        System.out.println("a = " + a); // 10

        --a; // 9
        a++; // 10
        a--; // 9
        a--; // 8
        --a; // 7
        ++a; // 8
        a++; // 9
        --a; // 8
        System.out.println("a = " + (--a)); //7
        System.out.println("a = " + (++a)); //8
        System.out.println("a = " + a); //8


        a++; // 9
        --a; // 8
        ++a; // 9
        a--; // 8
        a--; // 7
        a++; // 8
        ++a; // 9
        System.out.println("a = " + (++a)); //10
        System.out.println("a = " + a--); //10 // 9
        System.out.println("a = " + a); //9


        --a; // 8
        a++; // 9
        a--; // 8
        a++; // 9
        ++a; // 10
        a--; // 9
        a++; // 10
        ++a; // 11
        System.out.println("a = " + (--a)); // 10
        System.out.println("a = " + (a++)); // 10 // 11
        System.out.println("a = " + a); // 11
    }
}
