// 1
// let a = 5;
// let b = 6;

// [a,b]=[b,a]; // Cách 1
// b = [a, a = b][0];// Cách 2
// console.log(a, b);

// 2
// const str = "Hello beauty there";
// var arr = str.split(' ');
// console.log(arr);

// 3
// const a = [4, 5, 7, -8];
// console.log(...a);

// 4
// const gioHang = [];
// while (true) {
//   let userInput;
//   userInput = prompt("What do you want C,R,U,D? ");
//   userInput=userInput.toLocaleUpperCase();
//   if(userInput!='C' && userInput!='R' && userInput!='U' && userInput!='D'){
//       alert("The command is not supported");
//   }else{
//     if( userInput == 'R'){
//         let str2 = "";
//             for (let i = 0; i < gioHang.length; i++) {
//               str2 += ` ${i + 1} - ${gioHang[i]} \n`;
//             }
//             alert(str2);
//       }
//       if( userInput=='C'){
//           let newItem = prompt("Enter the name of the new item");
//           let find = gioHang.find(function(e){
//               return e==newItem;
//           })
//           if(!find){
//             gioHang.push(newItem);
//           }
//       }
//       if( userInput == 'U'){
//         let spot = (Number)(prompt("Enter the position you want to update"));
//         let change = prompt("Enter new name");
//         gioHang[spot] = change;
//         alert("Done");
//       }
//       if( userInput == 'D'){
//         let spot = (Number)(prompt("Enter the position you want to update"));
//         gioHang.splice(spot-1,1);
//         alert("Done");
//       }
//   }
//   let tiepTuc = prompt("Y/N");
//   if (tiepTuc.toLocaleUpperCase === "N") {
//     break;
//   }
// }

// 5
// function tong(arr) {
//     return arr.reduce(function tinhTong(sum, arr) {
//       return sum + (Number)(arr);
//     }, 0);
//   }
// const str = prompt("Enter the sequence");
// let arr = str.split(',');
// console.log(tong(arr));

// 6
// const str = prompt("Enter the sequence");
// let arr = str.split(' ');
// console.log(Math.min(...arr));

// 7
// const arr = [3, 4, 6, -9, 10, -88, 2];
// let numberFind = (Number)(prompt("Enter the number"));
// let find = arr.find( function(e){
//     return e==numberFind;
// })
// if(find){
//     let index = arr.findIndex( function(e){
//         return e===find;
//     })
//     console.log( `${numberFind}` + ` is FOUND in the array ` + `${index}`);
// }
// else console.log( `${numberFind}` + ` is NOT FOUND in the array`);

// 8
// var arr = [5,7,300,90,24,50,75];
// console.log( `This is my sheep sizes`);
// console.log(arr);
// let n=1;
// let currentMax;
// while(n<4){
//     currentMax=(Math.max(...arr));
//     console.log(`Now my biggest sheep has size `+ `${currentMax}`);
//     let find = arr.find( function(e){
//         return e==currentMax;
//     })
//     let index = arr.findIndex( function(e){
//         return e===find;
//     })
//     arr[index]=8;
//     console.log( `After shaving, here is my flock` );
//     console.log(arr);
//     console.log(`Month` + `${n}`);
//     console.log( `Current sheep sizes`);
//     function mangMoi(arr){
//         return arr.map( function (x){
//           return x+50; 
//     });
//     }
//     arr = mangMoi(arr);
//     console.log(arr);
//     n++;
// }
// function tong(arr) {
//     return arr.reduce(function tinhTong(sum, arr) {
//       return sum + (Number)(arr);
//     }, 0);
//   }
// let sum = tong(arr);
// console.log(`Total flock size ` + `${sum}`);
// console.log(`I would get `+`${sum}` + `*2$ = ` + `${sum*2}`);

// 9
// function demo() {
//     let j;
//     const colors = ["red","gray","blue","purple","cyan"];
//     for(let i=0; i<colors.length ; i++){
//        color(`${colors[i]}`);
//        j=0;
//        while(j<4){ 
//         fd(20*i);
//         rt(90);
//         j++;
//        }
//   }
// }

// 10
// let str = prompt("Enter names");
// var arr = str.split(', ');
// let str2 = str;
// str2+= ' => ';
// for(let i=0 ; i<arr.length ; i++){
//     str2 += `<`+`${arr[i]}` + `>`;
//     if(i!=(arr.length-1)) str2+=',';
// }
// console.log(str2);

// 11
// let str = prompt("Enter numbers");
// var arr = str.split(', ');
// let str2 = str;
// str2+= ' => ';
// for(let i=0 ; i<arr.length ; i++){
//     if( (Number)(arr[i])%2==1){
//         str2 += `${arr[i]}`;
//         if(i!=(arr.length-1)) str2+=',';
//     }
// }
// console.log(str2);