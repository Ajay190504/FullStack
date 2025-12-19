public class DataTypesTable {
    public static void main(String[] args) {
        System.out.println("---------------------------------------------------------------");
        System.out.printf("%-10s %-15s %-30s\n", "DataType", "Size (in bytes)", "Range");
        System.out.println("---------------------------------------------------------------");

        System.out.printf("%-10s %-15d %-30s\n", "byte", Byte.BYTES, Byte.MIN_VALUE + " to " + Byte.MAX_VALUE);
        System.out.printf("%-10s %-15d %-30s\n", "short", Short.BYTES, Short.MIN_VALUE + " to " + Short.MAX_VALUE);
        System.out.printf("%-10s %-15d %-30s\n", "int", Integer.BYTES, Integer.MIN_VALUE + " to " + Integer.MAX_VALUE);
        System.out.printf("%-10s %-15d %-30s\n", "long", Long.BYTES, Long.MIN_VALUE + " to " + Long.MAX_VALUE);

        System.out.printf("%-10s %-15d %-30s\n", "float", Float.BYTES,
                Float.MIN_VALUE + " to " + Float.MAX_VALUE);
        System.out.printf("%-10s %-15d %-30s\n", "double", Double.BYTES,
                Double.MIN_VALUE + " to " + Double.MAX_VALUE);

        System.out.printf("%-10s %-15d %-30s\n", "char", Character.BYTES, "0 to 65535");
        
        System.out.printf("%-10s %-15s %-30s\n", "boolean", "Not fixed", "true / false");

        System.out.println("---------------------------------------------------------------");
    }
}
