

$(document).ready(function() {
    $('#contact-form form').validate({
        rules: {
            name: {
                required: true,
                minlength: 3
            },
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: {
                required: "Por favor, ingresa tu nombre",
                minlength: "Tu nombre debe tener al menos 3 caracteres"
            },
            email: {
                required: "Por favor, ingresa tu email",
                email: "Por favor, ingresa un email válido"
            }
        },
        submitHandler: function(form) {
            const name = $('#name').val();
            const email = $('#email').val();
            const message = $('#message').val();

            const formData = {
                name: name,
                email: email,
                message: message
            };

            localStorage.setItem('contactFormData', JSON.stringify(formData));

            console.log('Formulario almacenado');
            form.reset();
            return false; 
        }
    });
}); 