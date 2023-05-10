const Modal = {
    open(){
        document
            .querySelector('.modal-overlay')
            .classList
            .add('active')

    },
    close(){
        document
            .querySelector('.modal-overlay')
            .classList
            .remove('active')
    }
}

const ModalRestart = {
    open(){
        document
            .querySelector('.modal-overlayRestart')
            .classList
            .add('active')

    },
    close(){
        document
            .querySelector('.modal-overlayRestart')
            .classList
            .remove('active')
    }
}

const Transactions = [
    {
        id: 1,
        landingPosition: [1, 2, 'N'],
        instruction: ['L', 'M', 'L', 'M', 'L', 'M', 'L', 'M', 'M'],
        finalPosition: [1, 3, 'N']
    },
    {
        id: 2,
        landingPosition: [3, 3, 'E'],
        instruction: ['M', 'R', 'R', 'M', 'M', 'R', 'M', 'R', 'R', 'M'],
        finalPosition: [2, 3, 'S']
    },
]


const DOM = {
    transactionsContainer: document.querySelector('#data-table tbody'),

    addTransaction(transaction, index) {
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction(transaction)

        DOM.transactionsContainer.appendChild(tr)

    },
    innerHTMLTransaction(transaction, index) {
        const CSSclass = transaction.amount > 0 ? "income" : "expense" // data verification

        const amount = Utils.formatCurrency(transaction.amount)

        const html = `
        <td class="description">${transaction.id}</td>
        <td class="description">${transaction.landingPosition}</td>
        <td class="description">${transaction.instruction}</td>
        <td class="description">${transaction.finalPosition}</td>
        `

        return html
    }
}

const Utils = {
    formatCurrency(value) {
        const signal = Number(value) < 0 ? "-" : ""

        value = String(value).replace(/\D/g, "") //expressão regular - /\D (define) a g (expressão global), trocar por ""

        value = Number(value) / 100

        value = value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        }) //funcionalidade com dois argumentos, tipo/local e opções como objeto (estilo e tipo)

       return signal + value
    }
}

Transactions.forEach(function(transaction){
    DOM.addTransaction(transaction)
})