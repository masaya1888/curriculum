package check;

public class Main {
	private String firstName;
	private String lastName;
	
	private static void printName(String firstName,String lastName) {
		String fullName = firstName + lastName;
		System.out.println(fullName);
	}             
	
	

	public static void main(String[] args) {
		// TODO 自動生成されたメソッド・スタブ
		
		printName("printNameメソッド→" + "大林","将也");
		
		Pet pet = new Pet("java吉","hoge");
		RobotPet Rpet = new RobotPet("R2D2","ルーク");
		pet.introduce();
		Rpet.introduce();
		
		
		
		
		

	}

}
