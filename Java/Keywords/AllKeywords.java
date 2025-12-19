
import java.util.List;
import java.util.Arrays;

// --- 1. Data Structure Definitions (Using Records) ---

/**
 * Represents a single Java keyword entry.
 * @param keyword The keyword string (e.g., "public")
 * @param description The brief functionality description
 * @param example The code snippet demonstrating its use
 */
record KeywordDetail(String keyword, String description, String example) {}

/**
 * Represents a category of keywords.
 * @param categoryName The name of the category (e.g., "Control Flow Keywords")
 * @param keywords The list of KeywordDetail objects in this category
 */
record KeywordCategory(String categoryName, List<KeywordDetail> keywords) {}

public class AllKeywords {

    public static void main(String[] args) {
        // Prepare the categorized data
        List<KeywordCategory> categories = prepareKeywordData();

        // Print the data
        printKeywordData(categories);
    }

    // --- 2. Data Initialization Method ---

    private static List<KeywordCategory> prepareKeywordData() {
        return List.of(
            new KeywordCategory("Data Type Keywords", List.of(
                new KeywordDetail("boolean", "Defines a variable to hold true or false values.", "boolean isReady = true;"),
                new KeywordDetail("byte", "Defines an 8-bit signed integer.", "byte age = 25;"),
                new KeywordDetail("char", "Defines a 16-bit Unicode character.", "char initial = 'J';"),
                new KeywordDetail("double", "Defines a 64-bit double-precision floating-point number.", "double pi = 3.14159;"),
                new KeywordDetail("float", "Defines a 32-bit single-precision floating-point number.", "float ratio = 0.5f;"),
                new KeywordDetail("int", "Defines a 32-bit signed integer.", "int count = 50;"),
                new KeywordDetail("long", "Defines a 64-bit signed integer.", "long population = 8000000000L;"),
                new KeywordDetail("short", "Defines a 16-bit signed integer.", "short code = 101;"),
                new KeywordDetail("void", "Indicates that a method does not return any value.", "public void print() { ... }")
            )),
            new KeywordCategory("Control Flow Keywords", List.of(
                new KeywordDetail("break", "Immediately exits the current loop or switch block.", "if (i == 5) break;"),
                new KeywordDetail("case", "Defines a block of code within a switch statement.", "case 1: ... break;"),
                new KeywordDetail("continue", "Skips the rest of the current loop iteration.", "if (i % 2 == 0) continue;"),
                new KeywordDetail("default", "Specifies the code if no switch case matches.", "default: ..."),
                new KeywordDetail("do", "Used with while to create a loop that executes at least once.", "do { i++; } while (i < 5);"),
                new KeywordDetail("else", "Specifies code to execute if the preceding if condition is false.", "if (x > 10) { ... } else { ... }"),
                new KeywordDetail("for", "Creates a loop that executes a block of code a specified number of times.", "for (int i = 0; i < 10; i++) { ... }"),
                new KeywordDetail("if", "Executes a block of code only if a specified condition is true.", "if (x > 10) { ... }"),
                new KeywordDetail("instanceof", "Operator that tests whether an object is an instance of a specific type.", "if (obj instanceof String) { ... }"),
                new KeywordDetail("return", "Exits a method and optionally returns a value.", "return result;"),
                new KeywordDetail("switch", "Selects one of many code blocks based on a variable's value.", "switch (x) { ... }"),
                new KeywordDetail("while", "Creates a loop that executes repeatedly as long as a specified condition is true.", "while (condition) { ... }"),
                new KeywordDetail("yield", "Used in a switch expression to produce a value (Java 14+).", "int result = switch (s) { default -> { yield 0; } };")
            )),
            new KeywordCategory("OOP & Structure Keywords", List.of(
                new KeywordDetail("class", "Declares a class, the blueprint for objects.", "public class Person { ... }"),
                new KeywordDetail("abstract", "Declares a class or method incomplete.", "abstract class Animal { ... }"),
                new KeywordDetail("enum", "Declares an enumerated type (a set of named constants).", "enum Level { LOW, HIGH }"),
                new KeywordDetail("extends", "Indicates a class inherits from another class (superclass).", "class Dog extends Animal { ... }"),
                new KeywordDetail("implements", "Indicates a class adopts the methods defined in an interface.", "class Car implements Vehicle { ... }"),
                new KeywordDetail("interface", "Declares an interface (a collection of abstract methods).", "interface Drawable { ... }"),
                new KeywordDetail("new", "Operator that creates a new object or array instance.", "Person p = new Person();"),
                new KeywordDetail("super", "Refers to the superclass object or constructor.", "super.method();"),
                new KeywordDetail("this", "Refers to the current instance of the class.", "this.field = field;"),
                new KeywordDetail("record", "Declares an immutable data carrier class (Java 16+).", "public record Point(int x, int y) { }"),
                new KeywordDetail("sealed", "Restricts subclassing/implementing (Java 17+).", "public sealed interface Shape permits ... { }"),
                new KeywordDetail("permits", "Lists the only allowed direct subclasses of a sealed type (Java 17+).", "... permits Dog, Cat { }"),
                new KeywordDetail("non-sealed", "Allows normal extension of a permitted subclass (Java 17+).", "public non-sealed class Circle extends Shape { }")
            )),
            new KeywordCategory("Exception & Utility Keywords", List.of(
                new KeywordDetail("try", "Defines a block of code where exceptions might occur.", "try { dangerousOp(); }"),
                new KeywordDetail("catch", "Defines a block to handle exceptions.", "catch (IOException e) { ... }"),
                new KeywordDetail("finally", "Defines a block of code that always executes.", "finally { cleanup(); }"),
                new KeywordDetail("throw", "Explicitly throws an exception object.", "throw new Exception();"),
                new KeywordDetail("throws", "Declares the exceptions a method might throw.", "void readFile() throws IOException { ... }"),
                new KeywordDetail("assert", "Used for debugging to test assumptions in code.", "assert x > 0;"),
                new KeywordDetail("var", "Used for local variable type inference (Java 10+).", "var list = new ArrayList<String>();")
            )),
            new KeywordCategory("Access & Non-Access Modifiers", List.of(
                new KeywordDetail("private", "Restricts access to within the own class.", "private int secret;"),
                new KeywordDetail("protected", "Allows access within the class, subclasses, and same package.", "protected String name;"),
                new KeywordDetail("public", "Allows access from anywhere.", "public class Main { ... }"),
                new KeywordDetail("final", "Makes a variable constant or prevents overriding.", "final int MAX_SIZE = 100;"),
                new KeywordDetail("static", "Declares a member that belongs to the class.", "public static int count;"),
                new KeywordDetail("synchronized", "Ensures only one thread accesses a block/method at a time.", "public synchronized void update() { ... }"),
                new KeywordDetail("volatile", "Ensures a variable's value is always read from/written to main memory.", "private volatile boolean flag;"),
                new KeywordDetail("transient", "Marks a field that should not be serialized.", "private transient String password;"),
                new KeywordDetail("native", "Indicates a method is implemented in platform-dependent native code.", "public native void runNativeCode();"),
                new KeywordDetail("strictfp", "Ensures floating-point calculations are strictly IEEE 754 compliant.", "strictfp class Calculator { ... }")
            )),
            new KeywordCategory("Package & Module Keywords (JPMS)", List.of(
                new KeywordDetail("package", "Declares the package to which the current file belongs.", "package com.myapp.model;"),
                new KeywordDetail("import", "Brings classes or entire packages into the current file.", "import java.util.Scanner;"),
                new KeywordDetail("module", "Declares a module, a collection of packages (Java 9+).", "module com.example.app { ... }"),
                new KeywordDetail("requires", "Specifies that this module depends on another module (Java 9+).", "requires java.base;"),
                new KeywordDetail("exports", "Specifies which packages are accessible to other modules (Java 9+).", "exports com.example.api;"),
                new KeywordDetail("opens", "Specifies packages open for deep reflection (Java 9+).", "opens com.example.data;"),
                new KeywordDetail("uses", "Declares that the module uses a service (Java 9+).", "uses com.example.Service;"),
                new KeywordDetail("provides", "Declares that the module provides an implementation for a service (Java 9+).", "provides com.example.Service ..."),
                new KeywordDetail("to", "Limits exports/opens to specified target modules (Java 9+).", "exports com.example.util to com.example.test;"),
                new KeywordDetail("with", "Specifies the concrete implementation class of a service (Java 9+).", "... with com.example.ServiceImpl;"),
                new KeywordDetail("transitive", "Implies a dependency for modules that read this module (Java 9+).", "requires transitive com.example.dependency;")
            )),
            new KeywordCategory("Reserved Words & Literals", List.of(
                new KeywordDetail("true", "Represents the boolean truth value.", "boolean flag = true;"),
                new KeywordDetail("false", "Represents the boolean false value.", "boolean flag = false;"),
                new KeywordDetail("null", "Represents an object reference that points to nothing.", "String s = null;"),
                new KeywordDetail("goto", "Reserved, but unused in Java.", "N/A"),
                new KeywordDetail("const", "Reserved, but unused in Java (use final).", "N/A"),
                new KeywordDetail("_", "Reserved identifier since Java 9.", "N/A (Avoid use)")
            ))
        );
    }

    // --- 3. Printing Method ---

    private static void printKeywordData(List<KeywordCategory> categories) {
        System.out.println("==========================================================================================");
        System.out.println("||                           JAVA KEYWORDS (69+) CATEGORIZED                            ||");
        System.out.println("==========================================================================================");

        for (KeywordCategory category : categories) {
            System.out.println("\n### " + category.categoryName().toUpperCase() + " ###");
            System.out.println(String.format("%-15s | %-60s | %s",
                                            "KEYWORD", "DESCRIPTION & FUNCTIONALITY", "EXAMPLE"));
            System.out.println("------------------------------------------------------------------------------------------");

            for (KeywordDetail detail : category.keywords()) {
                System.out.println(String.format("%-15s | %-60s | %s",
                                                detail.keyword(),
                                                detail.description(),
                                                detail.example()));
            }
        }
        System.out.println("\n==========================================================================================");
    }
}