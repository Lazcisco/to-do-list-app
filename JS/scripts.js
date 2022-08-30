function newItem() {
  let li = $("<li></li>");
  let inputValue = $("#input").val();
  document.createTextNode(inputValue);
  li.append(inputValue);

  if (inputValue === "") {
    alert("You must write something!");
  } else {
    $("#list").append(li);
  }

  function crossOut() {
    li.toggleClass("strike");
  }

  function deleteListItem() {
    li.addClass("delete");
  }

  li.dblclick(crossOut);

  let crossOutButton = $("<crossOutButton></crossOutButton>");
  crossOutButton.append(document.createTextNode("X"));
  li.append(crossOutButton);
  crossOutButton.click(deleteListItem);
}

$("#list").sortable();
