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
	if($(this).is(":checked"))
	{
		$(this).closest('tr').css("background-color","red");
	}
	else 
	{
		$(this).closest('tr').css("background-color","blue");
	}

})

$("#4").on('keyup', function()
{
	var value = $(this).val();

    $("table tbody").find("tr").each(function(index) {
        var bool=false;
        $(this).find("td").each(function()
        {
        	if ($(this).text().search(value)>=0)
        	{
        		bool=true;
        	}
        });
        if(bool)
      	{
      		$(this).show();
      	}
      	else
      	{
      		$(this).hide();
      	}
    });
});

