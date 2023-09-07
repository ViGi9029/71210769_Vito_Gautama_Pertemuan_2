    const demo = document.getElementById("demo");
    const tess = document.getElementById("testLet");
    const testconst = document.getElementById("testConst")

    const testLet = () =>{
        let num = 100;
        {
            let num = 200;
        }
        return num;
    };

    const testVar = () =>{
        var num = 100;
        {
            var num = 200;
        }
        return num;
    }
    try{
        const PI = 3.141592653589793;
        PI = 3.14;
        testconst.innerHTML = PI;
    }
    catch(err){
        testconst.innerHTML = err;
    }

    demo.innerHTML = testLet();
    tess.innerHTML = testVar();

    let person = {
        name : "Marry",
        age : 36
        }
    console.log("Person :", person, "Name :", person.name, "Age :", person.age)
        // Bracket notation
    person['name'] = 'Marry'
    person['age'] = 25
    let selection = 'name'
    console.log("Person :", person, "Name :", person['name'], "Age :", person['age'], person[selection])

    function calculateBill(meal, taxRate = 0.05){
        const total = meal * (1+taxRate);
        return total;
    }
    const myTotal = calculateBill(100,0.13);

    var car = {
        name: "Honda",
        products: ["jazz", "civic", "hrv"],
        showProduct: function () {
            this.products.map(
                function (product) {
                    console.log(`${this.name} has launched ${product}`);
                }.bind(this)
            );  
        },
    };
    car.showProduct();
    var car = {
        name: "Honda",
        products: ["jazz", "civic", "hrv"],
        showProduct: function () {
            this.products.map(() =>{
                console.log(`${this.name} has launched ${product}`);
            });
        },
    };
    car.showProduct();

    const arr1 = ["a","b"];
    const arr2 = ["2"];
    const allArr = [...arr1,...arr2];
    console.log(allArr);

    import Person from "./Untitled-1.js";
    console.log("person",person);