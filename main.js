$(document).ready(function() {
    $('#taskForm').submit(function(e) {
      e.preventDefault();
      const taskName = $('#taskInput').val();
      if (taskName) {
        const listItem = $('<li>').text(taskName);
        $('#taskList').append(listItem);
        $('#taskInput').val('');
      }
    });
  
    $('#taskList').on('click', 'li', function() {
      $(this).toggleClass('completed');
    });
  });
  