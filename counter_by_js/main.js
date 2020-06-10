function hendaleDecrement(){
    let spanValue = document.getElementById("prinCount").textContent;
    document.getElementById("prinCount").textContent = parseInt(spanValue) - 1;
};

function hendaleIncrement(){
    let spanValue = document.getElementById("prinCount").textContent;
    document.getElementById("prinCount").textContent = parseInt(spanValue) + 1;
};