// 23. Merge k Sorted Lists
// https://leetcode.com/problems/merge-k-sorted-lists/

/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    struct compare {
        bool operator()(const ListNode *first, const ListNode *second) {
            return first->val > second->val;
        }
    };
    
    ListNode* mergeKLists(vector<ListNode*>& lists) {
        int k = (int)lists.size();
        
        priority_queue<ListNode*, vector<ListNode*>, compare> pq;
        
        for(auto lls : lists) {
            if(lls)
                pq.push(lls);
        }
        
        if((int)pq.size() == 0)
            return NULL;
        
        ListNode *head = pq.top(); //getting the first minimum element
        pq.pop(); //removing the element from queue
        
        if(head->next) //checking if current element has any next element linked to it
            pq.push(head->next);
        
        ListNode *curr = head; //another pointer to store all the remaining element(s)
        while(!pq.empty()) {
            curr->next = pq.top();
            pq.pop();
            
            curr = curr->next;
            if(curr->next) //checking if newly added element has any next element linked to it
                pq.push(curr->next);
        }
        
        return head;
    }
};
