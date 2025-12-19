//Logical Operators Practice
public class LogicalOp {
    public static void main(String[] args) {

		//With AND operator
		System.out.println(5 > 3 && 10 < 20); // true
		System.out.println(15 == 15 && 8 != 8); // false
		System.out.println(25 >= 30 && 40 <= 40); // false
		System.out.println(7 > 10 && 12 < 5); // false
		System.out.println(20 == 25 && 30 != 30); // false

		System.out.println(30 < 40 && 40 > 30); // true
		System.out.println(9 <= 9 && 8 >= 8); // true
		System.out.println(0 == 0 && 1 != 1); // false	
		System.out.println(14 > 10 && 6 < 8); // true
		System.out.println(11 <= 15 && 20 >= 25); // false
		
		//With OR operator
		System.out.println(5 > 10 || 10 < 20); // true
		System.out.println(15 == 10 || 8 != 8); // false
		System.out.println(25 >= 30 || 40 <= 35); // false	
		System.out.println(7 > 10 || 12 < 5); // false
		System.out.println(20 == 25 || 30 != 30); // false
		
		System.out.println(30 < 40 || 40 > 50); // true
		System.out.println(9 <= 9 || 8 >= 10); // true
		System.out.println(0 == 1 || 1 != 1); // false
		System.out.println(14 > 20 || 6 < 8); // true
		System.out.println(11 <= 10 || 20 >= 25); // false
		
		//With NOT operator
		System.out.println(!(5 > 3)); // false
		System.out.println(!(10 < 20)); // false
		System.out.println(!(15 == 15)); // false
		System.out.println(!(8 != 8)); // true
		System.out.println(!(12 >= 10)); // false

		System.out.println(!(7 <= 5)); // true
		System.out.println(!(0 == 1)); // true
		System.out.println(!(25 < 30)); // false
		System.out.println(!(14 > 20)); // true
		System.out.println(!(9 <= 9)); // false

		//With xor operator
		System.out.println(5 > 3 ^ 10 < 20); // false
		System.out.println(15 == 15 ^ 8 != 8); // true
		System.out.println(25 >= 30 ^ 40 <= 40); // true
		System.out.println(7 > 10 ^ 12 < 5); // false
		System.out.println(20 == 25 ^ 30 != 30); // false

		System.out.println(30 < 40 ^ 40 > 30); // false
		System.out.println(9 <= 9 ^ 8 >= 8); // false	
		System.out.println(0 == 0 ^ 1 != 1); // false
		System.out.println(14 > 10 ^ 6 < 8); // false
		System.out.println(11 <= 15 ^ 20 >= 25); // false
		

		//With AND, OR operators
        System.out.println(!(10 > 5) || 3 < 7 && 8 == 8); // true
        System.out.println(!(20 < 10) && 5 >= 5 || !(2 != 2)); // true
        System.out.println(!(15 == 15) || 10 > 20 && 3 <= 1); // false
        System.out.println(!(5 > 3 && 2 < 1)); // false
        System.out.println(!(25 >= 20 && 10 < 5) || 7 != 7); // true

        System.out.println(!(30 > 40) || 20 <= 20 && !false); // true
        System.out.println(!(8 == 8) || 6 > 3 && !(9 <= 9)); // true
        System.out.println(!(100 > 50 && 40 < 20) || !(30 == 30)); // true
        System.out.println(!(10 >= 5) && !(3 != 3) || 6 < 9); // true
        System.out.println(!(7 > 3) && !(4 <= 4) || 2 == 2); // true

        System.out.println(!(5 != 5) && 10 > 8 || !(6 < 1)); // true
        System.out.println(!(20 <= 30) || !(15 > 10 && 5 < 3)); // true
        System.out.println(!(9 > 7) || !(6 == 6) && 4 <= 4); // true
        System.out.println(!(100 < 50 || 30 >= 30)); // false
        System.out.println(!(8 < 4) && 6 == 6 || !(9 > 3)); // true

        System.out.println(!(3 < 5) || 7 >= 7 && !(2 != 1)); // true
        System.out.println(!(50 > 25) && !(20 <= 20) || 10 == 10); // true
        System.out.println(!(6 > 2 && 8 < 4) || !(9 != 9)); // true
        System.out.println(!(4 == 4) && !(5 > 3) || 6 <= 6); // true
        System.out.println(!(10 == 10) || !(20 > 15 && 30 <= 30)); // true

		// with And, Or, Not operators combined
		System.out.println(!(30 > 40) || 20 <= 20 && !(1>0)); // false
        System.out.println(!(8 == 8) || 6 > 3 && !(9 <= 9));  // false
        System.out.println(!(100 > 50 && 40 < 20) || !(40 == 30)); // true
        System.out.println(!(10 >= 5) && !(3 != 3)); // false
        System.out.println(!(7 > 3) || 2 == 2); // true

        
        System.out.println(!(5 != 5) && 10 > 8 || !(6 < 1));  // true
        System.out.println(!(20 <= 30) || !(15 > 10 && 5 < 3)); // true
        System.out.println(!(9 > 7) && !(6 == 6)); // false
        System.out.println(!(100 < 50 || 30 >= 30)); // false
        System.out.println(!(8 < 4) && 6 == 6); // true

        
        System.out.println(!(3 < 5) || 7 >= 7 && !(2 != 1)); // false
        System.out.println(!(50 > 25) && !(20 <= 20) || 10 == 10); // true
        System.out.println(!(6 > 2 && 8 < 4) || !(9 != 9));   // true
        System.out.println(!(4 == 4) && !(5 > 3) || 6 <= 6);  // true
        System.out.println(!(10 == 10) && !(20 > 15 && 30 <= 30)); // false 

		//with mixed operators (AND, OR, NOT, XOR)	
		System.out.println((5 > 3 && 10 < 20) || !(15 == 15)); // true
		System.out.println((8 != 8 || 25 >= 30) && !(40 <= 40)); // false
		System.out.println(!(7 > 10) ^ (12 < 5 || 20 == 25)); // true
		System.out.println((30 < 40 && 40 > 30) || !(9 <= 9)); // true
		System.out.println((0 == 0 ^ 1 != 1) && !(14 > 10)); // false
		System.out.println(!(6 < 8) || (11 <= 15 && 20 >= 25)); // false
		System.out.println((10 > 5) ^ !(3 < 7) && (8 == 8)); // true
		System.out.println(!(20 < 10) && (5 >= 5 || 2 != 2)); // true
		System.out.println((15 == 15 || 10 > 20) ^ !(3 <= 1)); // true
		System.out.println(!(5 > 3 && 2 < 1) || (25 >= 20 && 10 < 5)); // false		
		
		

		
    }
}

