function create(path){
    console.log("tree command executed with path ", path+"\n");
    return "Tree executed";
}


module.exports = {
    create: create
}