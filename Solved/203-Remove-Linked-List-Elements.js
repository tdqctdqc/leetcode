var removeElements = function(head, val) {
    if(head === null) return null;
    while(head.val === val) {
        head = head.next;
        if(head === null) return null;
    }
    curr = head;
    while(curr.next) {
        if(curr.next.val === val) {
            curr.next = curr.next.next;
        } else {
            curr = curr.next;
        }
    }
    return head;
};