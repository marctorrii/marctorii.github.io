function validaContra(pass) {
    if (pass.length < 6) {
        alert("Contraseña muy corta");
        return false;
    } else {
        alert("Contraseña correcta");
        return true;
    }
}
function validaDOC(doc) {
    var docu = doc;
    var num, ultima_lletra, lletra;
    var expressio_regular_docu = /^[XYZ]?\d{5,8}[A-Z]$/;
    docu = docu.toUpperCase();
    if (expressio_regular_docu.test(docu) === true) {
        num = docu.substr(0, docu.length - 1);
        num = num.replace('X', 0);
        num = num.replace('Y', 1);
        num = num.replace('Z', 2);
        ultima_lletra = docu.substr(docu.length-1, 1);
        alert ("Ultima letra " +ultima_lletra)
        num = num % 23;
        lletra = 'TRWAGMYFPDXBNJZSQVHLCKET';
        //TRWAGMYFPDXBNJZSQVHLCKE
        lletra = lletra.substring(num, num + 1);
        if (lletra != ultima_lletra) {
            alert('DOCUMENTO erronio, la letra no se corresponde');
            return false;
        } else {
            alert('DOCUNENTO correcto');
            return true;
        }
    } else {
        alert('DOCUNENTO erronio, la letra no se corresponde');
        return false;
    }

}

    function validarForm() {
        alert("Hola!");
        var nom = document.getElementById("nom").value;
        var pass = document.getElementById("pass").value;
        var doc = document.getElementById("doc").value;
        alert("Empezamos a validar ..." + nom + "." + doc);
        if (validaContra(pass) && validaDOC(doc)) {
            alert("Todo Correcto, enviamos tu formulario. Grácias " + nom);
            document.getElenentById("formular").submit();
            return true;
        }
        else {
            return false;
        }
    }