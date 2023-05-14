$(document).ready(()=>{


    $('#form-appointment').on('submit',(e)=>{
        e.preventDefault();
        var email = $('#email').val();
        var emailRegx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var name = $('#fullname').val();
        var space =  /\s+/g;
        var cnumber = $('#cnumber').val();
        var address = $('#address').val();
        var age = $('#age').val();
        var radio = $('input[name="gender"]');
        var gender;
        var doctor = $('#doctorOption');
        var doctorVal;
        var date = $('#apointement-date').val();
        var dateSeperate =  date.split('-');
        var dd,mm,year;
        var time = $('#apointement-time').val();
        var timesep = time.split(':');
        var hr,min,tz;
        var isValid;
        var err = 'bg-danger';
        // doctor selection
        if(parseInt(doctor.val()) == 0){
            $('#doctorOption').addClass(err);
            isValid =  false;
        }else{
            doctorVal =  doctor.val();
            $('#doctorOption').removeClass(err);
            
        }
        
        
        // Time
        if(timesep.length == 2)
        {
            isValid = true;
            $('#apointement-time').removeClass(err);
            min = timesep[1];
            if(timesep[0]>12)
            {
                tz = 'PM';
                switch (parseInt(timesep[0])) {
                    case 13:
                        hr = 1;
                        break;
                    case 14:
                        hr = 2;
                        break;
                    case 15:
                        hr = 3;
                        break;
                    case 16:
                        hr = 4;
                        break;
                    case 17:
                        hr = 5;
                        break;
                    case 18:
                        hr = 6;
                        break;
                    case 19:
                        hr = 7;
                        break;
                    case 20:
                        hr = 8;
                        break;
                    case 21:
                        hr = 9;
                        break;
                    case 22:
                        hr = 10;
                        break;
                    case 23:
                        hr = 11;
                        break;
                    case 00:
                        hr = 12;
                        break;
                    
                    default:
                        break;
                }
                
            }else{
                
                hr = timesep[0];
                tz = 'AM';
                isValid = true;
            }
        }else{
            $('#apointement-time').addClass(err);
            isValid = false;
        }
        $('#apointement-time').on('change',()=>{
            $('#apointement-time').removeClass(err);
        });
        // email
        if(email.trim() == '')
        {
            $('#email').addClass(err);
            isValid= false;
        }else if(email.match(emailRegx))
        {
            $('#email').removeClass(err);
            isValid  = true;
        }else{
            $('#email').addClass(err);

            isValid = false;
        }
        $('#email').on('keypress',()=>{
            $('#email').removeClass(err);
        });
        
        
        // name
        if(name.trim() == ' ')
        {
            $('#fullname').addClass(err);
            isValid =  false;
        }else if(name.length < 6){
            $('#fullname').addClass(err);
            isValid = false ;
        }else if(!(name.match(space))){
            $('#fullname').addClass(err);
            isValid = false;
        }
        $('#fullname').on('keypress',()=>{
            $('#fullname').removeClass(err);
        });
        // number
        if(cnumber.trim() == ''){
            isValid =  false;
            $('#cnumber').addClass(err);
        }
        if(cnumber.length <10)
        {
            $('#cnumber').addClass(err);
            isValid =  false;
        }else if(cnumber % 1 != 0){
            $('#cnumber').addClass(err);
            isValid =  false;
        }
        $('#cnumber').on('keypress',()=>{
            $('#cnumber').removeClass(err);
        });
        // age
        if(age.trim() == '')
        {
            $('#age').addClass(err);
            isValid = false;
        }else if(age % 1 != 0)
        {
            $('#age').addClass(err);
            isValid =  false;
        }else if(parseInt(age) < 10){
            $('#age').addClass(err);
            isValid =  false;
        }
        $('#age').on('keypress',()=>{
            $('#age').removeClass(err);
        });
        // address
        if(address.trim()=="")
        {    
            $('#address').addClass(err);
            isValid =  false;
        }else if(address.length < 4){
            $('#address').addClass(err);
            isValid =  false;
        }
        $('#address').on('keypress',()=>{
            $('#address').removeClass(err);
        });
        // gender
        if (radio[0].checked)
        {
            gender = 1;
            
        }else if(radio[1].checked)
        {
            gender =  2;
            
        }else if(radio[2].checked)
        {
            gender =  3;
        }else{
            isValid = false;

        }
        //date 
        if(dateSeperate.length == 3)
        {
            yy = dateSeperate[0];
            mm = dateSeperate[1];
            dd = dateSeperate[2];
            
            
            if(yy != '')
            {
                
            }else if(mm != '')
            {
                

            }else if(dd != '')
            {
                

            }else{
                $('#apointement-date').addClass(err);
                isValid = false;
            }
            
        }else{
            $('#apointement-date').addClass(err);
            isValid = false;
        }
        $('#apointement-date').on('change',()=>{
            $('#apointement-date').removeClass(err);
        });
        // submit
        if (isValid)
        {
            let isConfirm = confirm("Are You Sure To Submit form");
            if(isConfirm){
                $('#form-appointment')[0].submit();
                alert("your appointment form have submited");
            }else{
                alert("failed to submit");
            }
        }

    });
  
});