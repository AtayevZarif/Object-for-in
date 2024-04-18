let write = +prompt("methodni sonini yozing")

let zarif = {
    method1: myFunction1 = () =>{
        let solve = Math.sqrt(2 + 3)
        console.log(solve);
    },
    method2: myFunction2 = () =>{
        for (let i = 0; i < 10; i++) {
            console.log("Hello Mars");
        }
    },
    method3: myFunction3 = () =>{
        let name = prompt("Write your name")
        let lenght = name.length
        console.log(name);
        console.log(lenght);
    },
    method4: myFunction4 = () =>{
        let array = [1,2,3,4,5,6,7,8,9,10]
        let even = []
        let odd = []
        for (let i = 0; i < 10; i++) {
            if (array[i] % 2 == 0) {
                even.push(array[i])
            }
            else{
                odd.push(array[i])
            }
        }
        console.log(even);
        console.log(odd);
    },
}

switch (write) {
    case 1:
        console.log(zarif.method1());
        break;
    case 2:
        console.log(zarif.method2());
        break;
    case 3:
        console.log(zarif.method3());
        break;
    case 4:
        console.log(zarif.method4());
        break;
    default:
        alert("ERROR")
        break;
}