function Serialize(pRoot){
    let res = [];
    const SerializeHelper = function(root){
        if(!root){
            res.push('#');
        } else{
            res.push(root.val.toString(10));
            SerializeHelper(root.left);
            SerializeHelper(root.right);
        }
    }
    SerializeHelper(pRoot);
    return res.join('!');
}
function Deserialize(s)
{
    let seriaArr = s.split('!');
    const DeserializeHelper = function(arr){
        if(arr.length){
             const str = arr.shift();
             if (str !== '#'){
                let node = new TreeNode(parseInt(str));
                node.left = DeserializeHelper(arr);
                node.right = DeserializeHelper(arr);
                return node;
             }
             return null;
        }
    }
    return DeserializeHelper(seriaArr);
}

function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

let n1 = new TreeNode(8);
let n2 = new TreeNode(7);
let n3 = new TreeNode(9);
let n4 = new TreeNode(11);
let n5 = new TreeNode(12);
let n6 = new TreeNode(14);
let n7 = new TreeNode(17);
n1.left = n2; n1.right = n3;
n2.left = n4; n2.right = n5;
n3.left = n6; n3.right = n7;

const str = Serialize(n1);
console.log(Deserialize(str));