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
     * @return {void}
     */
    reorderList(head) {
      let slow = head, fast = head.next;

    //find the middle of the linked list
      while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
      }
    // set the beginning of the second half of the list
      let second = slow.next;

    // end of first half
      slow.next = null;
      
      let prev = null;
      while (second) {
        let temp = second.next;
        second.next = prev;
        prev = second;
        second = temp; 
      }
      

    //merge the two halves
      let first = head; 
      second = prev;

      while (second) {
        let temp1 = first.next, temp2 = second.next;

        first.next = second;
        second.next = temp1;

        first = temp1;
        second = temp2;
      }
        
    }
}
