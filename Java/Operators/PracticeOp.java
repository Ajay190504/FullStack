public class PracticeOp {
    public static void main(String[] args) {

        int a = 10;
        System.out.println("a = " + a); //10

        a++;
        System.out.println("a++ : " + a);  //10 //11

        ++a;
        System.out.println("++a : " + a);  //12

        a--;
        System.out.println("a-- : " + a);  //11

        --a;
        System.out.println("--a : " + a); //10

        a += 5;
        System.out.println("a += 5 : " + a); //15

        a -= 2;
        System.out.println("a -= 2 : " + a); //13

        a *= 3;
        System.out.println("a *= 3 : " + a); //39

        a /= 4;
        System.out.println("a /= 4 : " + a); //9

        a %= 3;
        System.out.println("a %= 3 : " + a); //0

        a = 7;
        System.out.println("a = " + a); //7

        System.out.println("a & 3 : " + (a & 3));  //3 //do not change a
        System.out.println("a | 2 : " + (a | 2)); //7  //do not change a
        System.out.println("a << 1 : " + (a << 1)); //14  //do not change a
        System.out.println("a >> 1 : " + (a >> 1)); //3 //do not change a

        a++;
        System.out.println("a++ : " + a); //8

        a += 4;
        System.out.println("a += 4 : " + a); //12

        System.out.println("a & 5 : " + (a & 5)); //4  //do not change a
        System.out.println("a >> 2 : " + (a >> 2)); //3 //do not change a
    }
}
