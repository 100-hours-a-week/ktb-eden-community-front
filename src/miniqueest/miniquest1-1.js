const myPet = {
    name: "MoMo",
    type: "Cat",
    
    print: function(){
        console.log(`이름: ${this.name}, 종류: ${this.type}`);
    }
};

myPet.print();