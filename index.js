// toán tử logic && || !
// tóan tử số học + - * / ** %
// toán tử gán = += -= /= *= %= **=
// toán tử so sánh > < == === != !=== <= >=

// const string1 = '  Bài toán về chuỗi'
// const string2 = '  Bài toán về chuỗi'
// // tìm , cắt , chuyển hoa thường, nối, space đầu cuối, thêm , lặp, thay thế , chuyển array
// tìm kiếm search../index  match / matchAll , includes => true, false : bất kì vị trí nào  , startswith, endswith 
// console.log(string1.at(6)) // tìm vị trí
// console.log(string1.slice(3))// cắt
// console.log(string1.trim())
// console.log(string1.trimStart())
// console.log(string1.toLowerCase())
// console.log(string1.toUpperCase())
// console.log(string1.concat(string2))
// console.log(string1.repeat(4))
// console.log(string1.replaceAll('Bài', 'Chuyển'))
// console.log(string1.split(''))
// console.log(string1.padStart(22, 'Tên '))
// console.log(string1.length)

// array
// đếm , nối , nối kí tự(join), xóa thêm cuối, xóa thêm đầu,[], cắt
//copy copywithin, lằm phẳng flat
const array1 = ['Cam', 'Xoai', 'Mit','Buoi',['Chuoi'],'Cam']
// const array2 = [1,2,3]
// console.log(array1[2] = 'cam'),xóa và thay thế splice, chuyển thành chuõi


// console.log(array1.findLastIndex(element => element === "Cam"))
// console.log(array1)
// round() làm tròn lên từ 0.5 , ceil() làm tròn từ 0.1 , floor() lấy từ số nguyên  , 
// console.log(Math.floor(4))


// toán tử số + - * / % ** 
// toán tử logic && || !
// toán tử gán  = += -= *= /= 
// toán tử so sánh < > <= >=  == === != !== 


// ?? : nếu là null hoặc undifind chọn giá trị 2
// || : nếu là 0 hoặc "" thì chọn giá trị 2
// ?. nếu trong đối tượng không có phương thức hoặc thuộc tính đó thì không xuất lổi ra
// &&= giống điều kiện if  nếu đúng thì nó sẽ gán 
// ||= nếu điều kiện if sai thì nó sẽ gán 
// ??= nếu giá trị kiểm tra null hoặc undefined thì ở trong sẽ được gán


// add , clear, has, delete, value , forEarch ,size
// const test = new Set([1,2,3,4,5])
// test.add(6)
// test.add(7)
// test.add(8)
// test.add(9)
// let a = test.entries()
// console.log(test.keys())
// test.forEach(value => {
//     console.log(value)
// })
// console.log(test)

//

// const test = new Map([['tao',500],['quyt',600],['le',300]])
// test.set('man',400)


// let a = test.entries()
// console.log(a)
// console.log(test)

// const a = '{"name": "Tuan","age": 25,"isStudent": true}'
// const object = JSON.parse(a)
// console.log(object.age) 


const courses  = [
    {
        id : 1,
        name : 'javascript',
        coin : 0
    },
    {
        id : 2,
        name : 'html',
        coin : 0
    },
    {
        id : 3,
        name : 'PHP',
        coin : 0
    },
    {
        id : 4,
        name : 'Ruby',
        coin : 350
    },
    {
        id : 5,
        name : 'Ruby',
        coin : 350
    },
]
function reducee(total,value,index,array){
    let a  = total + value.coin
    console.log(array)
    return a
}
var Tong = courses.reduce(reducee,0)
console.log(Tong)

//forEach, every ,some , find, filter, map, reduce

// var isFree = courses.map((course, index)=>{
//     return {
//         id : course.id,
//         name : `Tên : ${course.name}`,
//         coin : `Xu : ${course.coin}`,
//         index: index
//     }
// })
// console.log(isFree) 

