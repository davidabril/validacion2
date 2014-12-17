$("#formulario").validate({
        rules: {
            nombre: {
                remote: "php/users.php",
                required: true,
                minlength: 2
            },
            email: {
                remote: "php/emails.php",                
                required: true
            },            
            comentarios: "required"
        }
});