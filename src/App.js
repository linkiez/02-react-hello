import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
export default function App() {
  console.log('Teste no console do navegador')

  return (
    <div>
      <Header >Component Header - Projeto React Hello</Header>
      <Main><main>
        <div className="container mx-auto p-4">
          <p>Meu nome é {'Fabio Moreno'} e tenho {37} anos</p>
        </div>
      </main></Main>

    </div>
  )
}
