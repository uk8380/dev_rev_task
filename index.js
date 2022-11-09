$(document).ready(function(){
    $("#myInput").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#myTable tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });

  
  

  function myFunction() {
    
    var input, filter, table, tr, td, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
  
    
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }

  
    $(document).ready(function(){
        
      var rowsShown = 10;
      var rowsTotal = $('#myTable tr').length;
      var numPages = rowsTotal/rowsShown;
      for(i = 0;i < numPages;i++) {
      var pageNum = i + 1;
      $('.pagination').append('<li><a href="#" rel="'+i+'">'+pageNum+'</a></li> ');
      }
      $('#myTable tr').hide();
      $('#myTable tr').slice(0, rowsShown).show();
      $('.pagination li:first-child').addClass('active');
      $('.pagination li a').bind('click', function(){

      $('.pagination li').removeClass('active');
      $(this).parent().addClass('active');
      var currPage = $(this).attr('rel');
      var startItem = currPage * rowsShown;
      var endItem = startItem + rowsShown;
      $('#myTable tr').css('opacity','0.0').hide().slice(startItem, endItem).
      css('display','table-row').animate({opacity:1}, 300);
      });

      
      $("#myInput").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#myTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
      $('.total-count').pagination({
        items: numItems,
        itemsOnPage: perPage,
        cssStyle: 'light-theme',
        displayedPages: 1,
        edges: 1,
        currentPage: 1,
        prevText: 'Total Count',
        nextText: numItems,
        onPageClick: function(pageNumber) {
        var showFrom = perPage * (pageNumber - 1);
        var showTo = showFrom + perPage;
        items.hide().slice(showFrom, showTo).show();
        }
        });
      });
      });

      