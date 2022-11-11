var deleteDuplicates = function(head) {
    if(head === null) return null;
    if(head.next === null) return head;
    let dummy = new ListNode(0);
    let prev = dummy;
    let curr = head;
    while(curr) {
        let val = curr.val;
        let count = 0;
        let next = curr;
        while(next && next.val === val) {
            count++;
            next = next.next;
        }
        if(count < 2) {
            prev.next = curr;
            prev = curr;
        }
        curr = next;
    }
    prev.next = null;
    return dummy.next;
};