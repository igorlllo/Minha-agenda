const form = document.getElementById('form-agenda');
const nome = [];
const telefones = [];

form.addEventListener('submit' , function(e){
    e.preventDefault();
    adicionarLinha();
})

function adicionarLinha() {
    const nome = document.getElementById('Nome-Agenda').value;
    const telefone = document.getElementById('Numero-Agenda').value;

    const telefoneExistente = Array.from(document.querySelectorAll('#Lista-contatos td:nth-child(2)'))
    .map(td => td.textContent);

    if (telefoneExistente.includes(telefones)) {
    alert('Este número de telefone já está cadastrado.');
    document.getElementById('Nome-Agenda').value = '';
    document.getElementById('Numero-Agenda').value = '';
    return;
    }

    const tbody = document.getElementById('Lista-contatos');
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${nome}</td>
        <td>${telefone}</td>
        <td><button class="delete" id="btn-delete">Excluir</button>`



    tbody.appendChild(tr);

    document.getElementById('Nome-Agenda').value = '';
    document.getElementById('Numero-Agenda').value = '';

    tr.querySelector('.delete').addEventListener('click', function() {
        tr.remove();
    });
}