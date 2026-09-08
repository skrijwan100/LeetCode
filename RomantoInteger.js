/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const strarr = s.split('');
    let result = 0;
    let numarr=[]
    for (let i = 0; i < strarr.length; i++) {
        if (strarr[i] == 'I') {

            numarr.push(1)

        }
        else if (strarr[i] == 'V') {
             numarr.push(5)
        }
        else if (strarr[i] == 'X') {

             numarr.push(10)
        }
        else if (strarr[i] == 'L') {

             numarr.push(50);
        }
        else if (strarr[i] == 'C') {

             numarr.push(100);
        }
        else if (strarr[i] == 'D') {

            numarr.push(500);
        }
        else if (strarr[i] == 'M') {
             numarr.push(1000);
        }
    }
    for (let i = 0; i < numarr.length-1; i++) {
       if(numarr[i] < numarr[i+1]){
          result= result-numarr[i];
          if(i+1 == numarr.length-1){
            result=result+numarr[i+1]
          }
       }
       else{

         result= result+numarr[i];
          if(i+1==numarr.length-1){
            result=result+numarr[i+1]
          }
       }

    }
    if(numarr.length==1){
        result=numarr[0];
    }
    return result;
};