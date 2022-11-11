var addTwoNumbers = function(l1, l2) {
    let dummyHead = new ListNode(0);
    let curr = dummyHead;
    let carry = 0;
    while(l1 || l2 || carry !== 0) {
        let val1 = l1 ? l1.val : 0;
        let val2 = l2 ? l2.val : 0;
        let sum = carry + val1 + val2;
        carry = Math.floor(sum / 10);
        curr.next = new ListNode(sum % 10);
        curr = curr.next;
        if(l1) l1 = l1.next;
        if(l2) l2 = l2.next;
    }
    return dummyHead.next;
}