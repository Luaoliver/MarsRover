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

const Summary = [
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
    summaryContainer: document.querySelector('#data-table tbody'),

    addSummary(summary, index) {
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLSummary(summary)

        DOM.summaryContainer.appendChild(tr)

    },
    innerHTMLSummary(summary, index) {
        const html = `
        <td class="description">${summary.id}</td>
        <td class="description">${summary.landingPosition}</td>
        <td class="description">${summary.instruction}</td>
        <td class="description">${summary.finalPosition}</td>
        `

        return html
    }
}

Summary.forEach(function(summary){
    DOM.addSummary(summary)
})