var rotateRight = function(head, k) {
    if(head === null) return head;
    let curr = head;
    let count = 1;
    while(curr.next) {
        curr = curr.next;
        count++;
    }
    if(curr === head) return head;
    curr.next = head;
    let newEnd = head;
    k = k % count;
    for (let i = 0; i < count - k - 1; i++) {
        newEnd = newEnd.next;
    }
    let newHead = newEnd.next;
    newEnd.next = null;
    return newHead;
};
