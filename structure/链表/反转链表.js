/*
 * @Author: 289608944@qq.com
 * @Date: 2019-12-31 10:18:59
 * @LastEditors: 289608944@qq.com
 * @LastEditTime: 2019-12-31 15:03:53
 * @Description: In User Settings Edit
 */
/**
 * 输入一个链表，反转链表后，输出新链表的表头
 *思路： 迭代法从前往后遍历链表，定义三个指针分别指向相邻的三个结点，反转前两个结点，即让第二个结点指向第一个结点。然后依次往后移动指针，直到第二个结点为空结束，再处理链表头尾即可
 */
/**
 * Definition for singly-linked list.
 * function ListNode(x) {
 *     this.val = x
 *     this.next = null
 * };
 */

const reverseList = function(head){
  if( head === null || head.next === null){ // 空链或只有一个结点，直接返回头指针
    return head
  }else{
    //第一个节点
    let p1 = head
    //第二个节点
    let p2 = p1.next
    //第三个节点
    let p3 = p2.next
    while(p2){//第二个节点为空，到链尾 结束
      p3 = p2.next
      p2.next = p1  //第二个节点指向第一个节点，进行反转
      p1 = p2 //第一个节点往后移
      p2 = p3 //第二个节点往后移
    }
    head.next = null //第一个节点也就是反转后的最后一个节点指向null
    head = p1  //头节点指向反转后的第一个节点
    return head
  }
}