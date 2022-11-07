var removeNthFromEnd = function(head, n) {
    let current = head;
    for (let i = 0; i < n - 1; i++) {
        current = current.next;
    }
    let tail = head;
    let prev;
    while(current.next) {
        current = current.next;
        prev = tail;
        tail = tail.next;
    } 
    if(prev) {
        prev.next = tail.next;
        return head;
    } else {
        return tail.next;
    }   
};