
// function countDown(n) {
//     if (n === 0) {
//       console.log("Pietiek!");
//       return;
//     }

//     console.log(n);
//     countDown(n - 1); // rekursīvi izsauc pati sevi
//   }

//   countDown(5);

//   function printAllLi(element) {
//     for (let child of element.children) {
//       if (child.tagName === "LI") {
//         console.log(child.textContent.trim());
//       }

//       // Ja ir bērni – izsauc funkciju rekursīvi
//       if (child.children.length > 0) {
//         printAllLi(child);
//       }
//     }
//   }

//   const tree = document.getElementById("tree");
//   printAllLi(tree);





// function pow(x, n) {
//     let result = 1;

//     for (let i = 0; i < n; i++) {
//         result *= x;
//     }
//     return result;
// };


function pow(x, n) {
    if (n === 1) {
        return x;
    } else {
        return x * pow(x, n - 1);
    }

};

// console.log(pow(2, 1)); //2
// console.log(pow(2, 2)); //4
// console.log(pow(2, 3)); //8
// console.log(pow(2, 4)); //16

let students = {

    js: [
        {
            name: 'Jon',
            progress: 100
        },
        {
            name: 'Ivan',
            progress: 60
        }
    ],

    html: {
        basic: [
            {
                name: 'Peter',
                progress: 20
            },
            {
                name: 'Ann',
                progress: 18
            },
        ],
        pro: [{

            name: 'Sam',
            progress: 10

        }],

        semi: {
            students: [{
                name: 'Test',
                progress: 99
            }]
        }
    }
};

// function getTotalProgressByIteratiion(data) {
//     let total = 0;
//     let students = 0;

//     for (let course of Object.values(data)){
//         if (Array.isArray(course)) {
//             students += course.length;
//           for (let i = 0; i < course.length; i++) {
//             total += course[i].progress;
//           }
//         } else {
//            for (let subcourse of Object.values(course)) {
//             students += subcourse.length;
//             for (let i = 0; i < subcourse.length; i++) {
//                 total += subcourse[i].progress;
//               }
//            }
//         }

//     }
// console.log(total, students)


//     return total / students;
// };

function getTotalProgressByRecursion(data) {
    let total = [0, 0]; // [kopā, skaits]
  
    if (Array.isArray(data)) {
      for (let item of data) {
        const [subTotal, subCount] = getTotalProgressByRecursion(item);
        total[0] += subTotal;
        total[1] += subCount;
      }
    } else if (data !== null && typeof data === 'object') {
      if ('progress' in data && typeof data.progress === 'number') {
        total[0] += data.progress;
        total[1] += 1;
      } else {
        for (let value of Object.values(data)) {
          const [subTotal, subCount] = getTotalProgressByRecursion(value);
          total[0] += subTotal;
          total[1] += subCount;
        }
      }
    }
  
    return total;
  }
  





// getTotalProgressByIteratiion(students);
// console.log(getTotalProgressByIteratiion(students));
console.log(getTotalProgressByRecursion(students));
// getTotalProgressByRecursion(students);

// console.log(students)
// console.log('values:',Object.values(students))
// console.log('keys:',Object.keys(students))
// console.log('entries:',Object.entries(students))

// function exploreDeep(data) {
//     if (Array.isArray(data)) {
//         for (let item of data) {
//             exploreDeep(item);
//         }
//     } else if (typeof data === 'object' && data !== null) {
//               for (let value of Object.values(data)) {
//                 exploreDeep(value);
//               }
//     } else {
//         return console.log('Vertiba:', data)
//     }
// }

// exploreDeep(students)
// console.log(Array.isArray(students))