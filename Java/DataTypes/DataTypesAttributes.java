public class DataTypesAttributes {

	public static void main(String[] args) {

        // Size in Bytes
		System.out.println("Byte size          :" + Byte.BYTES      + " Byte ");
		System.out.println("Short size is      :" + Short.BYTES     + " Byte ");
		System.out.println("Integer size is    :" + Integer.BYTES   + " Byte ");
		System.out.println("Long size is       :" + Long.BYTES      + " Byte ");
		System.out.println("Float size is      :" + Float.BYTES     + " Byte ");
		System.out.println("Double size is     :" + Double.BYTES    + " Byte ");
		System.out.println("Character size is  :" + Character.BYTES + " Byte ");
		System.out.println("Boolean Size       :" + " No Fix Size\n\n ");


        // Size in Bits
		System.out.println("Byte size          :" + Byte.SIZE      + " Bit ");
		System.out.println("Short size is      :" + Short.SIZE     + " Bit ");
		System.out.println("Integer size is    :" + Integer.SIZE   + " Bit ");
		System.out.println("Long size is       :" + Long.SIZE      + " Bit ");
		System.out.println("Float size is      :" + Float.SIZE     + " Bit ");
		System.out.println("Double size is     :" + Double.SIZE    + " Bit ");
		System.out.println("Character size is  :" + Character.SIZE + " Bit ");
		System.out.println("Boolean Size       :" + " No Fix Size \n\n");




        // Min and Max Values (Range)
        System.out.println("Byte Range :");
		System.out.println(Byte.MIN_VALUE + " to " + Byte.MAX_VALUE);
		System.out.println(Short.MIN_VALUE + " to " + Short.MAX_VALUE);
		System.out.println(Integer.MIN_VALUE + " to " + Integer.MAX_VALUE);
		System.out.println(Long.MIN_VALUE + " to " + Long.MAX_VALUE);
		System.out.println(" " + Float.MIN_VALUE + " to " + Float.MAX_VALUE);
		System.out.println(" " + Double.MIN_VALUE + " to " + Double.MAX_VALUE);
		System.out.println(" " + (int) Character.MIN_VALUE + " to " + (int) Character.MAX_VALUE);
		System.out.println(" Boolean No fix Range");

	}
}