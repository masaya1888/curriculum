let numbers = [2, 5, 12, 13, 15, 18, 22];
//ここに答えを実装してください。↓↓↓
let num = numbers;
function isEven(num) {
    console.log(num + 'は偶数です');
}
for (let i = 0; i < num.length; i++) {
    
    if ( num[i] % 2 === 0) {  
        
        isEven(num[i]);
    }
}
                    

class car {
    constructor(gass,num) {
        this.gass = gass;
        this.num = num;
    }    
    getNumGas(gass,num){

        console.log("ガソリンは"+this.gass+"です。"+"ナンバーは"+this.num+"です");
    
    }

}
let Car = new car(1234,5678);
Car.getNumGas();
