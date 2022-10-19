#include <iostream>
#include <math.h>
using namespace std;



int base2tobase10(int n){
    int count=0, ans=0 ,rem ;
    while(n!=0){
        rem=n%10;
        ans+=pow(2,count)*rem;
        count++;
        n/=10;

    }
    return ans;
}

int main(){
    int n;
    cout<<"Enter a binary number : ";
    cin>>n;
    cout<<"Decimal number of "<<n<<" is "<<base2tobase10(n);

    return 0;
}
