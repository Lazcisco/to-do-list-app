let li = $('<li></li>');

function newItem() {
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
   li.toggleClass('strike');
};

function deleteListItem() {
    li.addClass('delete')
};


li.dblclick( function crossOut(){
    li.toggleClass('strike');
});

let crossOutButton = $('<crossOutButton></crossOutButton>');
crossOutButton.append(document.createTextNode('X'));
li.append(crossOutButton);
crossOutButton.click(function deleteListItem(){
    li.addClass('delete');
});



$('#list').sortable();
