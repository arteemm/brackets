module.exports = function check(str, bracketsConfig) {

    
    let bracketsOpen = ['(', '{', '[', '|'];
    let bracketsClose = [')', '}', ']', '|'];
    let current ;
    let add;
    let stack = [];
  
    for(let i = 0; i <= str.length-1; i++){
        
        current = str[i];
  
        if (bracketsClose.indexOf(current) > -1) {
            add = bracketsOpen[bracketsClose.indexOf(current)];
            if (stack.length == 0 || (stack.pop() != add)){
                return false;
            }
        } else {
            stack.push(current);
        }
  
    }
     return (stack.length == 0);
}
