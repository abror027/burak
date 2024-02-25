/*H-TASK: 

Shunday function tuzing, u string qabul qilib teskari qilib return qilsin
MASALAN: gerReverse("hello") return qiladi "olleh"

*/













/*G-TASK: 

Shunday function tuzingki unga integerlardan iborat array pass bolsin va function bizga osha arrayning eng katta qiymatiga tegishli birinchi indexni qaytarsin.
MASALAN: getHighestIndex([5, 21, 12, 21, 8]) return qiladi 1 sonini.

*/

function findHigh(arry) {
    let max = arry[0];
    let maxIndex = 0;
    for (let i = 0; i < arry.length; i++) {
        if(max < arry[i]) {
            max = arry[i];
            maxIndex = i;
        }
    }
    return maxIndex;
  }

  const result = findHigh([46,4,54,39,8,17,54,47]);
  console.log(result);

