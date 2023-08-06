class TidyNumbers {
  public static boolean tidyNumber(int number) {
    String[] arr = String.valueOf(number).split("");
    for (int i = 0; i < arr.length-1; i++) {
      if (Integer.parseInt(arr[i]) > Integer.parseInt(arr[i + 1])) {
        return false;
      }
    }
    return true;
  }
  
  public static void main(String[] args) {
    System.out.println(tidyNumber(123));
    System.out.println(tidyNumber(2247));
  }
}