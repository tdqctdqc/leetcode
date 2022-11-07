var reverseList = function(head) {
    if(head === null) return head;
    let curr = head;
    let prev = null;
    while(curr.next) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }  
    curr.next = prev;
    return curr;
};