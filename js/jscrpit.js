var i=1;
function Gumb()
{
	var ime=$("#1").val();
	var sem=$("#2").val();
	var ects=$("#3").val();

	$("#tablica").append('<tr><td>'+ime+'</td><td>'+sem+'</td><td>'+ects+'</td><td><button id="obrisi" type="button">Obrisi</button></td>'+
		'<td><input id="mjenjaj" type="checkbox"></td>'+'</tr>');
	i++;
}

$("table").on('click', '#obrisi', function() {
  $(this).closest('tr').remove();
})

$("table").on('change', '#mjenjaj', function() {
	if($(this).closest('tr').css("background-color")=="Red")
	{
		$(this).closest('tr').css("background-color","blue");
	}
	else 
	{
		$(this).closest('tr').css("background-color","red");
	}

})

$("#4").on('keyup', function()
{
	var value = this.val();

    $("table tbody").find("tr").each(function(index) {
        if (!index) return;
        var id = $(this).find("td").first().text();
        $(this).toggle(id.indexOf(value) !== -1);
    });
});

