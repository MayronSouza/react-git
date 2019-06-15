import React from 'react'// core do framework
import ReactDOM from 'react-dom'// parte do fremawork que lida diretamente com a DOM

import Pai from './componentes/Pai'

ReactDOM.render(
    <div>
        <Pai nome="Mayron" sobrenome="Souza" />
    </div>,
    document.getElementById('root')
)// render() renderiza a nossa página Html