
$(document).ready(function(){
    $("#submit-form").validate({
        rules:{
            name:{
                required:true,

            },
            email:{
                required:true,
                email:true,

            },
            subject:{
                required:true,
                minlength:4
            }
        }
    })
})