jQuery(document).ready(function () {
    jQuery("#rb-input").hide();

    function shake(elemento) {
        var duracion = 80;
        var distancia = 40;
        jQuery(elemento).animate({marginLeft: ('-=' + distancia)}, duracion, function () {
            jQuery(this).animate({marginLeft: ('+=' + distancia * 2)}, duracion, function () {
                jQuery(this).animate({marginLeft: ('-=' + distancia * 2)}, duracion, function () {
                    jQuery(this).animate({marginLeft: ('+=' + distancia)}, duracion);
                });
            });
        });
    }

    jQuery('#nombre').focus();
    jQuery("#contacto").validate({
        rules: {
            nombre: {required: true, minlength: 3},
            asunto: {required: true, minlength: 3},
            telefono: {required: true, phoneES: true},
            email: {required: true, email: true},
            mensaje: {required: true},
        },
        messages: {
            nombre: {required: '¡Por favor rellene todos los campos requeridos!', minlength: 'La longitud mínima es 3'},
            asunto: {required: '¡Por favor rellene todos los campos requeridos!', minlength: 'La longitud mínima es 3'},
            telefono: {required: '¡Por favor rellene todos los campos requeridos!'},
            email: {required: '¡Por favor rellene todos los campos requeridos!', email: 'Has introducido un e-mail incorrecto. ¡Por favor, corrígelo!'},
            mensaje: {required: '¡Por favor rellene todos los campos requeridos!'},
        },
        success: function (label) {
            label.html('OK').addClass('ok');
            setTimeout(function () {
                label.fadeOut(200);
                setTimeout(function () {
                    label.removeClass('ok');
                }, 400);
            }, 700)
        }
    });
    jQuery('#contacto').submit(function () {
        if (jQuery('#contacto').valid()) {
            if (jQuery("#politica").is(':checked')) {
                return true;
            } else {
                shake(".checkbox-label");
            }
        }
        return false;
    });
    jQuery.validator.addMethod("phoneES", function (value, element) {
        return this.optional(element) || /^[9|6|7][0-9]{8}$/.test(value);
    }, "Por favor introduzca un número de teléfono español válido");
});