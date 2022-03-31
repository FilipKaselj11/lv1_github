var i=1;
function Gumb()
{
	var ime=$("#1").val();
	var sem=$("#2").val();
	var ects=$("#3").val();

	$("#tablica").append('<tr><th>'+ime+'</th><th>'+sem+'</th><th>'+ects+'</th><th><button id="obrisi" type="button">Obrisi</button></th>'+
		'<th><input id="mjenjaj" type="checkbox"></th>'+'</tr>');
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
