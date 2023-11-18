// var carsList = [
//     'ayla',
//     'agya',
//     'calya',
//     'Kijang',
//     'Brio',
//     'BMW',
//     'Pajero'
// ]

// var carsNumber = [
//     1 * 5, 
//     2 + 5, 
//     3 - 1, 
//     4 / 2, 
//     5 + 6, 
//     6 * 6, 
//     7 + 3, 
//     8 - 4
// ]

// console.log(carsList)
// document.writeln(carsList)
// console.log(carsNumber)
// document.writeln(carsList[5])
// console.log(carsList[5]
// console.log('INI JUMLAH CARS: ', carsList.length)
// console.log(carsList.toString())
// document.writeln(carsList.toString())

// document.getElementById("test").innerHTML = carsList.toString();

// var data = document.getElementsByTagName('div')
// document.writeln("TEST: ", data[0] = carsList.toString())

// carsList.push('Tesla')
// console.log(carsList)

// var dataGroup = carsList.concat(carsNumber)
// console.log(dataGroup)

// carsList.shift()
// console.log(carsList) 

// delete carsList[0]
// console.log(carsList)

// carsList[6] = "Hyundai"
// console.log(carsList)

// carsList.splice(1,0, "Daihatsu")
// carsList.splice(5,0, "Daihatsu")
// console.log(carsList)

// let food = "Mie Ayam"
// console.log(food)

// const data = true
// const data2 = false

// const number = 3.5
// console.log(number)

// let result = 3 + 2
// console.log(result)

// let resultPerkalian = 3 * 5
// console.log(resultPerkalian)

// let resultPengurangan = 3 - 5
// console.log(resultPengurangan)

// let resultBagi = 3 / 5
// console.log(resultBagi)

// let resultSisa = 8 % 3
// console.log(resultSisa)


// const number1 = prompt("Angka Pertama")
// const number2 = prompt("Angka Kedua")
// const hasil = number1 * number2
// alert("Hasil Perhitungan= " + hasil)


// const benar = 5 == 5
// console.log(benar)

// const salah = 5 == 6
// console.log(salah)

// const lebihKecil = 5 < 6
// console.log(lebihKecil)

// const lebihBesar = 5 > 6
// console.log(lebihBesar)

// const result2 = 5 === "5"
// console.log(result2)


// const nilaiUjian = 65
// const nilaiAbsen = 50
// const lulusUjian = nilaiUjian >= 70
// const lulusAbsen = nilaiAbsen >= 80

// console.log(lulusUjian)
// console.log(lulusAbsen)

// const wisuda = lulusUjian && lulusAbsen
// console.log("Wisuda", wisuda)

// const wisuda2 = lulusUjian || lulusAbsen
// console.log("Wisuda", wisuda2)

// const nama = "Dwi"
// const score = 80
// console.log("Nama: " + nama + ", Score: " + score)
// console.log(`Nama: ${nama}, Score: ${score}`)


// if(lulusUjian && lulusAbsen){
//     console.log("Lulus")
// }else{
//     console.log("Tidak Lulus")
// }


// if(nilaiUjian <= 60){
//     console.log("Tidak Lulus")
// }else if(nilaiUjian > 60 && nilaiUjian < 80){
//     console.log("Cukup")
// }else{
//     console.log("Sempurna")
// }


// const hasilRapot = nilaiUjian <= 60 ? "Tidak Lulus" : nilaiUjian > 60 && nilaiUjian < 80 ? "Cukup" : "Sempurna"
// console.log(hasilRapot)


// const foods = [
//     {
//         dataId: 1,
//         rasa: 'Manis',
//         warna: 'Merah',
//         bentuk: 'bulat'
//     },

//     {
//         dataId: 2,
//         rasa: 'Asam',
//         warna: 'Kuning',
//         bentuk: 'Kotak'
//     },

//     {
//         dataId: 3,
//         rasa: 'Pedas',
//         warna: 'Merah',
//         bentuk: 'Panjang'
//     },

// ]

// console.log(foods[0])


// for(i = 0; i < carsList.length; i += 1){
//     console.log(carsList[i] + "<br>")
//     document.writeln(carsList[i] + "<br>")
// }

// var i = 0
// while(i < carsList.length){
//     document.writeln(`Data Mobil: ${carsList[i++]} <br>`)
// }

// let food = ''
// for(let food in foods){
//     food += foods[food]
//     document.writeln(`Makan Siang Hari Ini: ${food} <br>`)
// }

// foods.forEach(food => {
//     for(let value in food){
//         document.writeln(`${food[value]} <br>`)
//     }
// });


//FUNCTION
//Declaration

// function user(nama, email){
//     document.writeln(`Nama: ${nama}, Email: ${email}`)
// }
// user('Dwi', 'dw.pamungkas@gmail.com')


// function raport(lulusUjian, lulusAbsen){
//     if(lulusUjian && lulusAbsen){
//         document.writeln("Lulus")
//     }else{
//         document.writeln("Tidak Lulus")
//     }
// }
// raport(lulusUjian, lulusAbsen)


//expression
// const raport2 = function(lulusUjian, lulusAbsen){
//     const hasilRaport = lulusUjian = nilaiUjian >= 70 ? "Lulus" : lulusAbsen = nilaiAbsen >= 80 ? "Lulus":"Tidak Lulus"
//     return hasilRaport
// }
// const dwi = raport2(lulusUjian, lulusAbsen)
// document.writeln(dwi)


// const raport3 = (lulusUjian, lulusAbsen) => {
//     const hasilRaport = lulusUjian = nilaiUjian >= 70 ? "Lulus" : lulusAbsen = nilaiAbsen >= 80 ? "Lulus":"Tidak Lulus"
//     return hasilRaport
// }
// document.writeln(raport3(lulusUjian, lulusAbsen))


//FUNCTION BMI CALC
function bmiCalc(){
    var bmiCalcCount
    const weight = parseInt(document.getElementById("inputWeight").value)
    const height = parseInt(document.getElementById("inputHeight").value)
    

    bmiCalcCount = (weight / Math.pow((height/100),2)).toFixed(2)
    document.getElementById("resultBmi").textContent = bmiCalcCount

    const indicatorColor = document.getElementById("bmiBox")

    if(bmiCalcCount < 17){
        indicator = "Kurang Berat"
        indicatorColor.style.backgroundColor = "lime";
    }else if(bmiCalcCount >= 17 && bmiCalcCount <= 18.5){
        indicator = "Kurus"
        indicatorColor.style.backgroundColor = "yellow";
    }else if(bmiCalcCount >= 18.5 && bmiCalcCount <= 25){
        indicator = "Normal"
        indicatorColor.style.backgroundColor = "blue";
    }else if(bmiCalcCount >= 25 && bmiCalcCount <= 27){
        indicator = "Gemuk"
        indicatorColor.style.backgroundColor = "orange";
    }else{
        indicator = "Obesitas"
        indicatorColor.style.backgroundColor = "purple";
    }

    document.getElementById("resultIndicator").textContent = indicator
}   

//bmiCalc(180, 180)

