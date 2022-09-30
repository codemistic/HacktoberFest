// Question Link : https://leetcode.com/problems/single-number/


// T.C. : O(N)
// S.C. : O(1)

class Solution {
public:
    int singleNumber(vector<int>& nums) {
        int temp = 0;
        for(auto x : nums){
            temp^=x;
        }
        return temp;
    }
};
