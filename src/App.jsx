import React, {useState} from 'react'
import Header from './header'
import Footer from './footer'
import AddNotes from './addNote'
import Note from './note'
import Text from './text'

const App = () => {
  const [currentState, setState] = useState(false);
  const [notes, setNotes] = useState([]);
  const addNote = (noteData) => {
    setNotes((prev)=>{
     return [...prev, noteData]}
    )
  }

  const removeItems = (id) => {
    setNotes(()=>{
      return notes.filter((ele,index)=>{
          return index != id;
      })
    })
  }
 const setCurrentState = (state) => {
   setState(!state);
 }
 const setBtnState = (newstate) => {
   setState(newstate)
 }
 console.log(currentState);
   return( <>
    <Header/>
    <div className="h-auto flex justify-center mt-6 mb-8 max-w-full">
    {!currentState ?
     <Text
       state = {setCurrentState} /> 
     :
     <AddNotes
       notedata = {addNote}
       btnstate = {setBtnState} 
     />
     }
     </div>
    <div className="notes">
     {
     notes.map((ele,index)=>{
          return <Note
           key = {index}
           id = {index}
           title = {ele.title}
           content = {ele.content}
           deleteItems = {removeItems}
          />
     })
     }
     </div>
     {/* <Footer/> */}
     </>
   )
}

export default App;