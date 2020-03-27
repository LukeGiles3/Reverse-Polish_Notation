class LinkedListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// const data = {
//     id: 'Papa John\'s pizza',
//     phoneNumber: '8017897711',
//     address: {
//         street: '123 Main St',
//         zip: '84045'
//     }
// }

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    insert(data) {
        const newNode = new LinkedListNode(data);

        if (this.head == null) {
            this.head = newNode;
            this.size++;
        }
        else {
            let current = this.head;

            while (current.next != null) {
                current = current.next;
            }

            current.next = newNode;
            this.size++;
        }
    }
    contains(id) {
        let current = this.head;

        if (current == null) {
            return false;
        }

        while (current != null) {
            if (current.data.id == id) {
                return true;
            }
            current = current.next;
        }
        return false;
    }
    remove(id) {
        if (this.head.data == id) {
            this.head = this.head.next
        } else {
            let previous = this.head;
            let current = previous.next;

            while (current) {
                if (current.data.id == id) {
                    previous.next = current.next;
                    current = current.next;
                    break
                } else {
                    previous = current;
                    current = current.next
                }
            }
        }

    }
    toString() {

    }
}

const pets = new LinkedList();

const cat = { id: 'cat', name: 'izzy' }
const dog = { id: 'dog', name: 'spark' }
const bird = { id: 'bird', name: 'tweety' }
const fish = { id: 'fish', name: 'ruby' }


pets.insert(cat)
pets.insert(dog)
pets.insert(bird)
pets.insert(fish)

pets.contains('cat')

