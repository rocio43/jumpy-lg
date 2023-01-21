const form = document.getElementById('form')
const nome = document.getElementById('nome')
const email = document.getElementById('email')
const telefone = document.getElementById('telefone')
const doc = document.getElementById('doc')
const senha = document.getElementById('senha')
const button = document.getElementById('submit')
const p = document.getElementById('resultados')


form.addEventListener('submit', (event) => {
    event.preventDefault()

    checkInputs()
})

function checkInputs() {
    const nomeValue = nome.value.trim()
    const emailValue = email.value.trim()
    const telefoneValue = telefone.value.trim()
    const docValue = doc.value.trim()
    const senhaValue = senha.value.trim()


    if (nomeValue === '') {
        setErrorFor(nome, '* Campo Obrigatório *')
    } else if (nomeValue.length < 3) {
        setErrorFor(nome, 'Nome incompleto')
    } else {
        setSuccessFor(nome)
    }

    if (emailValue === '') {
        setErrorFor(email, '* Campo Obrigatório *')
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email inválido')
    } else {
        setSuccessFor(email)
    }

    if (telefoneValue === '') {
        setErrorFor(telefone, '* Campo Obrigatório *')
    } else if (telefoneValue.length < 11) {
        setErrorFor(telefone, 'Telefone inválido')
    } else {
        setSuccessFor(telefone)
    }

    if (docValue === '') {
        setErrorFor(doc, '* Campo Obrigatório *')
    } else if (docValue.length < 11) {
        setErrorFor(doc, '* Documento inválido *')
    } else {
        setSuccessFor(doc)
    }

    if (senhaValue === '') {
        setErrorFor(senha, '* Campo Obrigatório *')
    } else if (senhaValue.length < 1) {
        setErrorFor(doc, '* Campo Obrigatório *')
    } else {
        setSuccessFor(senha)
    }

    if (nome.value != '' && email.value != '' && telefone.value != '' && doc.value != '' && senha.value != '') {
        document.getElementById('resultados').innerHTML = 'Sucesso!'
        document.getElementById('resultados').style.color = '#00D6ED'
        document.getElementById('resultados').style.display = 'block'
        setTimeout(() => {
            document.getElementById('resultados').style.display = 'none'
            form.reset()
        }, 7000)
    } else {
        document.getElementById('resultados').innerHTML = 'Campos obrigatórios não registrados'
        document.getElementById('resultados').style.color = 'red';
        setTimeout(() => {
            document.getElementById('resultados').style.display = 'none'
        }, 5000)
    }

}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const span = formControl.querySelector('span')

    span.innerText = message

    formControl.className = 'controle error'
}

function setSuccessFor(input) {
    const formControl = input.parentElement;

    formControl.className = 'controle success'
}

function isEmail(email) {
    return /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email)
}



