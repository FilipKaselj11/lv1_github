var i=1;
function Gumb()
{
	var ime=$("#1").val();
	var sem=$("#2").val();
	var ects=$("#3").val();

	$("#tablica").append('<tr><th>'+ime+'</th><th>'+sem+'</th><th>'+ects+'</th><th><button id="obrisi" type="button">Obrisi</button></th></tr>');
	i++;
}

$("table").on('click', '#obrisi', function() {
  $(this).closest('tr').remove();
})
