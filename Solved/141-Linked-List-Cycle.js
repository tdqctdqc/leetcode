var hasCycle = function(head) {
    if(head === null) return false;
    let fast = head;
    let slow = head;
    while(fast.next && fast.next.next) {
        fast = fast.next.next;
        slow = slow.next;
        if(fast === slow) return true;
    }


    return false;
};