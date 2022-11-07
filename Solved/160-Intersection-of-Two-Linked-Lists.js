var getIntersectionNode = function(headA, headB) {
    let lengthA = getLength(headA);
    let lengthB = getLength(headB);

    let shortHead, longHead;
    if(lengthA < lengthB) {
        shortHead = headA;
        longHead = headB;
    } else {
        shortHead = headB;
        longHead = headA;
    }

    let currShort = shortHead;
    let currLong = longHead;
    let lengthDiff = Math.abs(lengthA - lengthB);
    for (let i = 0; i < lengthDiff; i++) {
        longHead = longHead.next;        
    }

    while(longHead) {
        if(longHead === shortHead) return longHead;
        longHead = longHead.next;
        shortHead = shortHead.next;
    }
    return null;

};

function getLength(head) {
    let length = 0;
    while(head) {
        length++;
        head = head.next;
    }
    return length;
}