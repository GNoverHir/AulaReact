import './App.css'
import Card from './componentes/Card'
import Header from "./componentes/Header"

function App() {

  return (
    <>
      <Header Title="Minha Pagina Maneirinha"/>
      <div className='cardSection'>
        <Card 
          Nome='Nome do pião' 
          Img="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e67ed8b6-0294-465a-a907-c49da6540638/ddjnr5g-7adae5ed-f9df-48c3-842f-389d343f96c1.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2U2N2VkOGI2LTAyOTQtNDY1YS1hOTA3LWM0OWRhNjU0MDYzOFwvZGRqbnI1Zy03YWRhZTVlZC1mOWRmLTQ4YzMtODQyZi0zODlkMzQzZjk2YzEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.0LFTnjry7QgUoJZEFGgLPl5E2dpvnTCoDqX3TzTgv38"
          Email="RM553873@fiap.com.br"
          Rm={553873}
          Funcao="Maluco Doido Biruta"
          />

          <Card
          Nome='Nome do pião' 
          Img="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e67ed8b6-0294-465a-a907-c49da6540638/ddjnr5g-7adae5ed-f9df-48c3-842f-389d343f96c1.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2U2N2VkOGI2LTAyOTQtNDY1YS1hOTA3LWM0OWRhNjU0MDYzOFwvZGRqbnI1Zy03YWRhZTVlZC1mOWRmLTQ4YzMtODQyZi0zODlkMzQzZjk2YzEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.0LFTnjry7QgUoJZEFGgLPl5E2dpvnTCoDqX3TzTgv38"
          Email="RM553873@fiap.com.br"
          Rm={553873}
          Funcao="Maluco Doido Biruta"
          />

          <Card 
          Nome='Nome do pião' 
          Img="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e67ed8b6-0294-465a-a907-c49da6540638/ddjnr5g-7adae5ed-f9df-48c3-842f-389d343f96c1.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2U2N2VkOGI2LTAyOTQtNDY1YS1hOTA3LWM0OWRhNjU0MDYzOFwvZGRqbnI1Zy03YWRhZTVlZC1mOWRmLTQ4YzMtODQyZi0zODlkMzQzZjk2YzEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.0LFTnjry7QgUoJZEFGgLPl5E2dpvnTCoDqX3TzTgv38"
          Email="RM553873@fiap.com.br"
          Rm={553873}
          Funcao="Maluco Doido Biruta"
          />
      </div>

    </>
  )
}

export default App
