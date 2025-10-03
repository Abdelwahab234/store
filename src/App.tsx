
import './App.css'

function  App() {

  return (
    <div  className='section'>
        <div   className="intro">
          <h1 >Welcome To <span>New</span> Generation </h1>
          <p>It all started with a simple idea: to create a place where every product tells a story, and every customer feels at home. Welcome to MyStore</p>
          <button onClick={() => window.scrollTo({
  top: 619.20001220703125,

  behavior: "smooth",
})} >Lets Dive</button>
        </div>

      {/* <img src={png} alt="" className="png" /> */}
    </div>
  )
}

export default App
