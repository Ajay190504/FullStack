//Logical Operators Practice
public class LogicalOp {

	public static void main(String[] args) {

		        System.out.println(5 > 3 && 10 <= 10 && 8 != 2 || 1>5); // true
		        System.out.println(15 >= 10 && 20 < 25 && 30 != 30); //false
		        System.out.println((50 > 40 || 20 < 10) && (5 == 5 && 2!=3)); //true
		        System.out.println(100 <= 90 || (60 >= 60 && 3 == 4)); //false
		        System.out.println((7 == 7) &&  (5<=3 || 9 > 3) && 2 <= 2); //true

		        System.out.println(10 != 5 && 1==0 || 20 > 15 || 30 < 10); //true
		        System.out.println(8 > 12 || 6 < 6 && 14 >= 10); //false
		        System.out.println(25 > 30 || 40 < 50 &&  12>27 || 60 >= 70); //false
		        System.out.println(9 <= 9 && 3 == 3 || 5 > 10); //true
		        System.out.println(100 != 100 || 200 >= 150 && 300 < 250); //false

		        System.out.println(5 > 10 && (20 <= 30 && 11!=11) || 40 != 40); //false
		        System.out.println(15 < 20 && 25 >= 25 && 30 != 35); //true
		        System.out.println(60 > 50 || 70 < 65 && 80 == 80); //true
		        System.out.println(1 == 1 && 2 == 2 && 3 == 4); //false
		        System.out.println((90 >= 90 || 100 < 50) && (23 <= 12 || 10 != 10)); //false

		        System.out.println(12 <= 12 && 14 > 10 || 16 < 8); //true
		        System.out.println(200 > 100 && 150 < 300 && 400 != 500); //true
		        System.out.println((30 >= 20 || 5==5) || 40 <= 35 && 50 == 50); //true
		        System.out.println(6 != 6 && 8 > 4 || (4<2 || 10 != 10)); //false
		        System.out.println(99 > 100 || 88 < 77 && 66 >= 66 && 12!=12); //false
		    

	}

}
