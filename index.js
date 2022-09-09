document.getElementById("input-field").addEventListener("keyup", function(){
    const searchInput = event.target.value.toLowerCase();
    const itemsList = document.getElementsByClassName("items");

    for (let i = 0; i < itemsList.length; i++){
        const intendedItem = itemsList[i].textContent.toLowerCase();

        if (intendedItem.includes(searchInput)){
            itemsList[i].style.display = "block";
        } else {
            itemsList[i].style.display = "none";
        }
    }
})