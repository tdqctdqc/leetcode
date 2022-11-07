var isPalindrome = function(head) {
    let vals = [];
    while(head) {
        vals.push(head.val);
        head = head.next;
    }  
    for (let i = 0; i < vals.length; i++) {
        if(vals[i] != vals[vals.length - 1 - i]) return false;
        
    }
    return true;
};