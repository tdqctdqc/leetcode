var reverseBetween = function(head, left, right) {
    if(left === right) return head;
    let preReverse = null;
    let postReverse = null;
    let reverseHead;
    let reverseTail;
    let curr = head;
    let iter = 0;
    while(curr) {
        iter++;
        if(iter === left - 1) preReverse = curr;
        if(iter === left) reverseHead = curr;
        if(iter === right) reverseTail = curr;
        if(iter === right + 1) postReverse = curr;
        curr = curr.next;
    }

    let prev = postReverse;
    curr = reverseHead;
    for (let i = 0; i < right - left + 1; i++) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;        
    }
    if(preReverse) preReverse.next = reverseTail;

    console.log(`preReverse ${preReverse?.val}`);
    console.log(`reverseHead ${reverseHead?.val}`);
    console.log(`reverseTail ${reverseTail?.val}`);
    console.log(`postReverse ${postReverse?.val}`);
    return left === 1 ? reverseTail : head;
};