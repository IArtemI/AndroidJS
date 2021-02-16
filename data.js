function saveCategories(categories){
    localStorage.setItem("categories_data",JSON.stringify(categories));
}

var categories = localStorage.getItem("categories_data");
if(localStorage.getItem("categories_data")===null){
    categories=[
        {
            name:"Smartphone",
            model:"iPhone 12"
        },
        {
            name:"Pad",
            model:"iPad Pro 2"
        }
    ]
    saveCategories(categories)
}
else{
    categories = JSON.parse(categories);
}