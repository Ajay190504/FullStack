public class BitwiseOp{
    public static void main(String[] args) {

        int a = 5;
        System.out.println("a = " + a);

        System.out.println("a & 3 : " + (a & 3));
        System.out.println("a | 1 : " + (a | 1));
        System.out.println("a ^ 2 : " + (a ^ 2));
        System.out.println("a << 1 : " + (a << 1));
        System.out.println("a >> 1 : " + (a >> 1));

        a = 10;
        System.out.println("a = " + a);

        System.out.println("a & 6 : " + (a & 6));
        System.out.println("a | 4 : " + (a | 4));
        System.out.println("a ^ 3 : " + (a ^ 3));
        System.out.println("a << 2 : " + (a << 2));
        System.out.println("a >> 2 : " + (a >> 2));
    }
}
