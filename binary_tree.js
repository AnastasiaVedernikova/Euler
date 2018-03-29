
class Node {
    constructor(value){
        this.value = value;
        this.parent = null;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(node){
        this.root = node;
    }

    // Insert Node
    insert(node, root){
        if (node.value == root.value){
            return ;
        }
        else if(node.value < root.value){
            // check if left subtree is null
            if (root.left != null){
                this.insert(node, root.left);
            }
            else{
                root.left = node;
                node.parent = root;
            }
        } else {
            // check if right subtree is null
            if (root.right != null){
                this.insert(node, root.right);
            }
            else{
                root.right = node;
                node.parent = root;
            }
        }
    }
}

(function(){
    var numbers = [9,7,8,15];

    var node = new Node(5);
    var tree = new BinarySearchTree(node);

    for (i in numbers){
        tree.insert(new Node(numbers[i]), tree.root);
    }
    

})();