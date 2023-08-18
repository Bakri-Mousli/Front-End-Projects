function showWarning(inputId) {
    var inputField = document.getElementById(inputId);
    if (inputField.value == '') {
    alert('سيتم إصدار تحذير عند مغادرة حقل الإدخال ' + inputField.name);
    }
}