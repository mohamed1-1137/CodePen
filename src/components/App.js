import React,{useState,useEffect} from 'react'
import Edite from "./Edite"
import '../App.css'
function App() {
  let [html,sethtml]=useState('')
  let [css,setcss]=useState('')
  let [js,setjs]=useState('')
  let [srcDoc,setsrcDoc]=useState('')
  useEffect(()=>{
    let timeout=setTimeout(()=>{
      setsrcDoc(`
      <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
      </html>
    `)
    },1000)
    return()=>{
      clearTimeout(timeout)
    }
    
  },[html,css,js])

  return (
    <>
      <div className="codeEditor">

        <Edite 
        className="Edit"
        displayName="HTML" 
        value={html} 
        language="xml"
        onChange={sethtml}
        />

        <Edite
        className="Edit"
        displayName="css" 
        value={css}
        language="css"
        onChange={setcss}
        />

        <Edite 
        className="Edit"
        displayName="javascript" 
        value={js} 
        language="javascript"
        onChange={setjs}
        />

      </div>
      <div className="liverServer">
        <iframe 
        srcDoc={srcDoc}
        title="output"
        sandbox="allow-scripts"
        width="100%"
        height="100%"
        frameBorder="0"
        />
      </div>
    </>
  )
}

export default App