import React, {useState} from 'react'

const Note = (props) => {
   
   const deleteNote = (event) => {
      props.deleteItems(event.target.id);
   }
   return (
     <>
     <div className="h-[160px] mr-4 mb-4 p-[15px] relative w-[260px] shadow-[0px_0px_2px_rgba(4,59,92)] rounded-xl hover:shadow-[0px_0px_6px_rgba(30,81,123,0.5)]">
      <p className="text-[#666666] text-xl"><b>{props.title}</b></p>
      <p className="text-[#363636]">{props.content}</p>
      <button onClick={deleteNote} id={props.id} className="absolute top-[122px] left-[220px] rounded-[50%] h-[30px] w-[30px] "><img id={props.id} src="src/delete.png"/></button>
     </div>
     </>
   )
}

export default Note;