// 1. set default value = fullName = "unknown", age = 25, isMale = false,
const Person = (fullName = "unknown", age = 25, isMale = false, avatar) => {
    // ternary operator, menggantikan if-else
    let sex = isMale ? "Laki-laki" : "Perempuan"
    const info = () => {
        // 2. Tampilkan full name, sex dan age
        return `Full Name: ${fullName}, Sex: ${sex}, Age: ${age} years`
    };

    return {
        get getInfo() {
            // 3. kembalikan nilai info diatas
            return info();
        },
        toString() {
            // 4. kembalikan nilai info diatas
            return info();
        },
        addAge: (years) => {
            // 5. Kembalikan usia sekarang ditambah dengan tahun inputan user
            age += years; 
        },
        setAge: (newAge) => {
            // 6. fungsi yang mengeset usia yang baru
            age = newAge;
        },
        rename: (newName) => {
            // 7. fungsi yang mengeset nama yang baru
            fullName = newName;
        },
        // 8. Kembalikan semua nilai dengan shorthand property
        fullName,
        age,
        isMale,
        avatar
    };
};

// 9. Export objek person sebagai sebuah modul
export default Person;