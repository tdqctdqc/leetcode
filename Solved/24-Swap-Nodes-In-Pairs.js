var swapPairs = function(head) {
    if(!head || !head.next) return head;

    let dummy = {
        val: null,
        next: head
    };
    
    let prev = dummy;
    let curr = head;
    while(curr && curr.next) {
        prev.next = curr.next;
        curr.next = prev.next.next;
        prev.next.next = curr;

        prev = curr;
        curr = curr.next;
    } 
    return dummy.next;
}