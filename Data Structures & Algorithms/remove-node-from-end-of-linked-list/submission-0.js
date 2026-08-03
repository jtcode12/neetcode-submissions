/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        // this dummy node is to have the prev pointer connected to the list
        // so both pointers can loop through the list.
        const dummy = new ListNode(0, head);
        let prev = dummy, curr = head;

        // this loop is to create distance between the two pointers initally
        while (n > 0) {
            curr = curr.next;
            n--;
        }

        while (curr) {
            curr = curr.next;
            prev = prev.next;
        }

        prev.next = prev.next.next;

        return dummy.next;
    }
}
