//Relational Operators Practice
public class RelationalOp {
	
	    public static void main(String[] args) {

	        System.out.println((10 > 5) == (2 >= 25)); //false
	        System.out.println((20 < 30) == (5 <= 5)); //true
	        System.out.println((8 == 8) != (10 > 20)); //true
	        System.out.println((15 >= 10) == (7 < 3)); //false
	        System.out.println((100 > 50) != (25 == 25)); //false

	        System.out.println((5 < 2) == (10 >= 5)); //false
	        System.out.println((9 <= 9) != (4 > 6)); //true
	        System.out.println((30 > 40) == (20 <= 10)); //true
	        System.out.println((7 != 8) == (6 >= 6)); //true
	        System.out.println((0 == 1) != (2 < 3)); //true

	        System.out.println((50 >= 50) == (25 < 10)); //false
	        System.out.println((6 < 3) != (8 != 8)); //false
	        System.out.println((99 > 100) == (1 <= 0)); //true
	        System.out.println((4 == 4) != (10 < 5)); //true
	        System.out.println((12 >= 15) == (20 > 10)); //false

	        System.out.println((3 < 5) == (7 >= 7)); //true
	        System.out.println((100 != 100) != (50 <= 60)); //true
	        System.out.println((8 > 6) == (2 < 1)); //false
	        System.out.println((14 <= 14) != (9 > 3)); //false
	        System.out.println((1 == 1) == (0 >= 2)); //false
	    
	}


}
