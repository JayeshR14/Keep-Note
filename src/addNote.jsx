import React, {useState} from 'react'

const AddNotes = (props) => {
  const [noteData, setNoteData] = useState({
     title : '',
     content : '',
  });
  const InputEvent = (event) => {
     setNoteData((preData)=>{
       return {
         ...preData,
         [event.target.name]:event.target.value,
       }
     })
  }
  const getData = () => {
     props.notedata(noteData);
     props.btnstate(false)
     setNoteData(()=>{
      return{title : '',
      content : '',}
     })
   }

   return (<>
    <form onSubmit={(e)=>e.preventDefault()} className="rounded-[10px] form inline-block mb-3 h-[170px] w-[320px] p-[15px] shadow-[1px_1px_8px_rgba(0,0,0,0.5)] shadow-[#bbbbdd] flex-col">
      <input type="text"  value={noteData.title}  placeholder="Title" name="title" className="outline-none h-[30px] focus:border-b-2 border-b-[#254ab9] mb-3 w-full" onChange={InputEvent}/>
      <div className="relative">
      <textarea name="content" value={noteData.content} className="resize-none h-[100px] w-[280px] outline-none" placeholder="Description" onChange={InputEvent}/>
       <button className="absolute h-[35px] w-[35px] top-14 left-[252px] border-0 rounded-[50%]" onClick={getData}><img className="" src="src/next.png"/></button>
      </div>
    </form>

   </>)
}

export default AddNotes;