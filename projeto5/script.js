document.addEventListener('DomContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    function isValidEmail (email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\s.[^\s@]+$/;
        return emailRegex.test(email);
    }
    // Função para mostrar estado do campo
    function setFieldState(field, errorElement, isValid) {
        const control = field.closest('.form-control');

        if (isValid) {
            control.classList.remove('error');
            control.classList.add('success');
        } else {
            control.classList.remove('success');
            control.classList.add('error');
        }
    }
    // Validar campo
    function validateField(field) {
        const value = field.value.trim();
        const errorElement = field.nextElementSibling; //Pegar o elemento imediatamente após o campo
        
        if (field.type === 'email') {
            setFieldState(field, errorElement, value === "" ? false: isValidEmail(value));
        } else {
            setFieldState(field, errorElement, value !== "");
        }
    }

    // Validar automaticamente os campos, assim que o usuário interage com eles
    ['name', 'email', 'subject', 'message'].forEach(id => {
        const field = document.getElementById(id);
        field.addEventListener('blur', () => validateField(field)); // Valida ao sair
        field.addEventListener('input', () => validateField(field)); // Valida digitando
    })

});