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



// 1. Shunday function tuzingki unga integerlardan iborat array pass bolsin
// 2. Bitta yangi max deb nomlangan variable create qilamiz va 0 index dagi array elementini solamiz
// 3. Yana bitta yangi maxIndex degan variable yaratamiz va boshlang'ich qiymatini 0 ga tenglaymiz
// 4. Arrayni loop qilamiz
// 5. Loop qilayotgan har bir array elementini max bilan solishtirib max dan kattami yo'qmi tekshiramiz
// 6. Agar max dan katta bo'lsa, max ga o'sha array elementini qiymatini tenglaymiz
// 7. Index ni ya'ni i ni maxIndex ga tenglaymiz
// 6. Loopdan tashqariga chiqib maxIndex ni return qilamiz
