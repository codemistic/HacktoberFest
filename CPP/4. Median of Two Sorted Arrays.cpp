//4. Median of Two Sorted Arrays 
//https://leetcode.com/problems/median-of-two-sorted-arrays/

class Solution {
public:
    double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
        
        int m = (int)nums1.size(), n = (int)nums2.size();
        vector<int> common(m + n);

        int i = 0, j = 0, k = 0;
        while(i < m && j < n) {
            if(nums1[i] <= nums2[j]) {
                common[k] = nums1[i];
                ++i;
            } else {
                common[k] = nums2[j];
                ++j;
            }

            ++k;
        }

        while(i < m) {
            common[k] = nums1[i];
            ++i;
            ++k;
        }

        while(j < n) {
            common[k] = nums2[j];
            ++j;
            ++k;
        }

        double ans;
        int l = 0, r = (m+n-1);
        int mid = l + (r-l)/2;
        if( (m+n)&1 ) {
            ans = common[mid];
        } else {
            ans = ((common[mid] + common[mid+1])/ (double)2);
        }

        return ans;
    }
};
