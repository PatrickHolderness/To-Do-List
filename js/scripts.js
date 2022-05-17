//Add Item
function newItem () {

    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);

    if (inputValue === '') {
      alert("Please enter an item to add to the list.");
    } else {
      $('#list').append(li);
      
    }

//Cross out
function crossOut() {
    li.toggleClass("strike");
}

li.on("dblclick", function crossOut() {
    li.toggleClass("strike");
});

//Delete
  let crossOutButton = $("<crossOutButton></crossOutButton>");
  crossOutButton.append(document.createTextNode("X"));
  li.append(crossOutButton);

  crossOutButton.on("click", deleteListItem);
    function deleteListItem() {
      li.addClass("delete");
    }
    //Sortable List
    $('#list').sortable();
}