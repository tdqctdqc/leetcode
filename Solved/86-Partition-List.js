var partition = function(head, x) {
    if(head === null || head.next === null) return head;
    let lessHead = null;
    let lessTail = null;
    let greaterEqualHead = null;
    let greaterEqualTail = null;
    let curr = head;
    while(curr) {
        if(nodeLess(curr)) {
            if(lessHead) {
                lessTail.next = curr;
                lessTail = curr;
            } else {
                lessHead = curr;
                lessTail = curr;
            }
        } else {
            if(greaterEqualHead) {
                greaterEqualTail.next = curr;
                greaterEqualTail = curr;
            } else {
                greaterEqualHead = curr;
                greaterEqualTail = curr;
            }
        }
        curr = curr.next;
    }
    if(greaterEqualTail) greaterEqualTail.next = null;
    if(lessTail) lessTail.next = greaterEqualHead;
    return lessHead ? lessHead : greaterEqualHead;
    
    function nodeLess(node) {
        return node.val < x;
    }
};