class TreeNode {
    constructor(element) {
      this.element = element;
      this.right = null;
      this.left = null;
    }
   }

class BinarySearchTree {
    constructor() {
      this.root = null;
    }
    insert(element) {
        const newTreeNode = new TreeNode(element)

        if(this.root == null) {
            this.root = newTreeNode
        }
        else {
            let current = this.root;
            let done = false;
            while(!done) {
                //check current to see if it is the element key
                if((current.key = newTreeNode.element.key)) {
                    done = true;
                }
                else {
                    if(newTreeNode.element.key > current.key) {
                        if(current.right != null) {
                            current = current.right;
                        }
                        else {
                            current.right = newTreeNode;
                            done = true;
                        }
                    }
                    else {
                        if(current.left != null) {
                            current = current.left;
                        }
                        else {
                            current.left = newTreeNode;
                            done = true;
                        }
                    }
                }
                //once we insert the node, we are done
            }
        }
    }
    find(element) {
        
    }
    remove(element) {}
    extractMax(element) {}
   }
   
   const bst = new BinarySearchTree();

   bst.insert({key: 8})
   bst.insert({key: 3})
   bst.insert({key: 10})
   bst.insert({key: 17})
   bst.insert({key: 3})


