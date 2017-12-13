// check-off clicked todos
$('ul#content').on('click', 'li', function(){
    $(this).toggleClass('checkoff')
});
// click on X to remove
$('ul').on('click', 'span', function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});
// adding new todo
$('input#addTodo').keypress(function(event){
    console.log($(this).val());
    if(event.which === 13){
        $('#content').append('<li><span><i class="fa fa-minus-circle"></i></span> ' + $(this).val() + '</li>');
        $(this).val('');
    }
});
$('.fa-plus').on('click', function(){
    $('input#addTodo').fadeToggle();
})