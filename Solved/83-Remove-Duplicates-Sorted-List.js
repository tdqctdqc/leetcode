var deleteDuplicates = function(head) {
    if(head === null) return null;
    let curr = head;
    while(curr.next) {
        while(curr.next && curr.val === curr.next.val) {
            curr.next = curr.next.next;
        }
        if(curr.next) { 
            curr = curr.next;
        }
    }
    return head;
};