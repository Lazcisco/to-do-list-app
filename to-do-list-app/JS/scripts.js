function newItem() {
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    document.createTextNode(inputValue);
    li.append(inputValue);
    
    if (inputValue === '') {
        alert("You must write something!");
    } 
    else {
        $('#list').append(li);
    };
};
    
    
function crossOut() {
   $('<li>').toggleClass('strike');
}
$('<li>').dblclick( function crossOut(){
    $('<li>').toggleClass('strike');
});

let crossOutButton = $('crossOutButton');
crossOutButton.append()

$('#list').sortable();