#include<stdio.h>
#include<stdlib.h>

struct node  {
	int data;
	struct node* next;
	struct node* prev;
};

struct node* head;

//Creates a new node and returns pointer to it. 
struct node* getnewnode(int x) {
	struct node* newnode
		= (struct node*)malloc(sizeof(struct node));
	newnode->data = x;
	newnode->prev = NULL;
	newnode->next = NULL;
	return newnode;
}

//Inserts a node at head of doubly linked list
void InsertAtHead(int x) {
	struct node* newnode = getnewnode(x);
	if(head == NULL) {
		head = newnode;
		return;
	}
	head->prev = newnode;
	newnode->next = head; 
	head = newnode;
}

//Inserts a node at tail of Doubly linked list
void InsertAtTail(int x) {
	struct node* temp = head;
	struct node* newnode = getnewnode(x);
	if(head == NULL) {
		head = newnode;
		return;
	}
	while(temp->next != NULL) temp = temp->next; 
	temp->next = newnode;
	newnode->prev = temp;
}

//Prints all the elements in linked list in forward traversal order
void Print() {
	struct node* temp = head;
	printf("Forward: ");
	while(temp != NULL) {
		printf("%d ",temp->data);
		temp = temp->next;
	}
	printf("\n");
}

//Prints all elements in linked list in reverse traversal order. 
void ReversePrint() {
	struct node* temp = head;
	if(temp == NULL) return; 
	while(temp->next != NULL) {
		temp = temp->next;
	}
	printf("Reverse: ");
	while(temp != NULL) {
		printf("%d ",temp->data);
		temp = temp->prev;
	}
	printf("\n");
}

int main() {

	head = NULL;

	InsertAtTail(2); 
    Print(); ReversePrint();
	InsertAtTail(4); 
    Print(); ReversePrint();
	InsertAtHead(6); 
    Print(); ReversePrint();
	InsertAtTail(8); 
    Print(); ReversePrint();

	printf("Che")
	
}
