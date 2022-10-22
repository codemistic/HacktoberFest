#include <bits/stdc++.h>
using namespace std;

//Bubble sort
void bubbleSort(int arr[], int n) {
    for(int i=1; i<n; i++) {
        for(int j=0; j<n-i; j++) {
            if(arr[j] > arr[j+1])
                swap(arr[i], arr[i+1]);
        }
    }
}

//Selection 
void selectionSort(int arr[], int n) {
    for(int i=0; i<n-1; i++) {
        int small = i;
        for(int j=i+1; j<n-1; j++) {
            if(arr[j] < arr[small])
                small = j;
        }
        if(small != i)
            swap(arr[i], arr[small]);
    }
}

//Insertion sort
void insertionSort(int arr[], int n) {
    for(int i=1; i<n; i++) {
        int key = arr[i];
        int j = i-1;
        while(j>=0 && arr[j] > key) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = key;
    }
}

//MergeSort
vector<int> mergeSort(int a[], int n, int b[], int m) {
   vector<int> v;
   int i=0, j=0;
   while(i<n && j<m) {
        if(a[i] <= b[i]) {
            v.push_back(a[i]);
            i++;
        }
        else {
            v.push_back(b[j]);
            j++;
        }
   }
    while(j < m)
        v.push_back(b[j]);

    while(i<n) 
        v.push_back(a[i]);

   return v;
}

//Merge Function
void mergefun(int arr[], int n, int low, int mid, int high) {
    int lSize = mid - low + 1;
    int rSize = high - (mid-1) + 1;

    int left[lSize], right[rSize];
    for(int i=0; i<lSize; i++) {
        left[i] = arr[i];
    }

    for(int i=0; i<rSize; i++) {
        right[i] = arr[mid+i+1];
    }

    int a=0, b=0, z = 0;
        while(a<lSize && b<rSize) {
            if(left[a] <= right[b]) {
                arr[z] = left[a];
                a++;
                z++;
            }
            else {
                arr[z] = right[b];
                b++;
                z++;
            }
        }
        while(a<lSize) { 
            arr[z] = left[a];
            z++;
        }
        
        while(b<rSize) {
            arr[z] = right[b];
            z++;
        }

}

//Merge Sort Algorthm
void mergeSortAlgo(int arr[], int n, int l, int r) {
    if(l < r) {
        int m = l + (r - l)/2;
        mergeSortAlgo(arr, n, l, m);
        mergeSortAlgo(arr, n, m+1, r);
        mergefun(arr, n, l, m, r);
    }
}