function addTask() {

    let inputField = document.getElementById('taskInput');
    let priorityField = document.getElementById('priorityInput');
    let container = document.getElementById('taskContainer');

    if (inputField.value.trim() === "") return;

    let col = document.createElement('div');
    col.className = 'col';

    let card = document.createElement('div');
    card.className = 'card h-100 ' + priorityField.value;

    let body = document.createElement('div');
    body.className = 'card-body';
 
    let title = document.createElement('h5');
    title.className = 'card-title';
    title.innerText = inputField.value;

    let selector = document.createElement('select');
    selector.className = 'form-select form-select-sm mt-3';

    let options = [
        { text: 'Alta', value: 'bg-danger text-white' },
        { text: 'Média', value: 'bg-warning text-dark' },
        { text: 'Baixa', value: 'bg-success text-white' }
    ];

    options.forEach(function(opt) {
        let o = document.createElement('option');
        o.value = opt.value;
        o.text = opt.text;
        if (priorityField.value === opt.value) o.selected = true;
        selector.appendChild(o);
    });

    selector.onchange = function() {
        this.parentElement.parentElement.className = 'card h-100 ' + this.value;
    };

    body.appendChild(title);
    body.appendChild(selector);
    card.appendChild(body);
    col.appendChild(card);
    container.appendChild(col);

    inputField.value = "";
}
