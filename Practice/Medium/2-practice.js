var addTwoNumbers = function(l1, l2) {
    let carry = 0;
    let dummy = new ListNode(0);
    let prev = dummy;
    while(l1 || l2 || carry > 0) {
        let val1 = l1 ? l1.val : 0;
        let val2 = l2 ? l2.val : 0;
        let placeSum = val1 + val2 + carry;
        let placeVal = placeSum % 10;
        carry = Math.floor(placeSum / 10);
        if(l1) l1 = l1.next;
        if(l2) l2 = l2.next;
        let node = new ListNode(placeVal);
        prev.next = node;
        prev = node;
    }
    return dummy.next;
}