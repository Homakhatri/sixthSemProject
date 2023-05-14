$(document).ready(()=>{
    $('body').scrollspy({ target: '#navbar-example' });
    $('#myRange').change(()=>{
        var starnum =$('#myRange').val(); 
        
        switch (parseInt(starnum)) {
            case 1:
                $('#fillstar').html('');
                $('#fillstar').html('<i class="fa fa-star text-warning">');
                break;
            case 2:
                $('#fillstar').html('');
                $('#fillstar').html('<i class="fa fa-star text-warning"><i class="fa fa-star text-warning">');
                break;
            case 3:
                $('#fillstar').html('');
                $('#fillstar').html('<i class="fa fa-star text-warning"><i class="fa fa-star text-warning"><i class="fa fa-star text-warning">');
                break; 
            case 4:
                $('#fillstar').html('');
                $('#fillstar').html('<i class="fa fa-star text-warning"><i class="fa fa-star text-warning"><i class="fa fa-star text-warning"><i class="fa fa-star text-warning">');
                break;
            case 5:
                $('#fillstar').html('');
                $('#fillstar').html('<i class="fa fa-star text-warning"><i class="fa fa-star text-warning"><i class="fa fa-star text-warning"><i class="fa fa-star text-warning"><i class="fa fa-star text-warning">');
                break; 
            default:
                break;
        } 
    });

});