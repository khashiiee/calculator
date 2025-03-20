import Button from './components/button'

function App() {


  return (
    <div className='flex justify-center items-center h-screen'>

      <div className='w-44 h-44'>
        <div className='flex items-end justify-end bg-red-50 h-14 my-2 rounded-md' > 
          <div className='px-2 py-1'>
34
          </div>
            </div>
        <div className="grid grid-cols-4 gap-1">
          <div><Button>1</Button></div>
          <div><Button>2</Button></div>
          <div><Button>3</Button></div>
          <div><Button>+</Button></div>
          <div><Button>4</Button></div>
          <div><Button>5</Button></div>
          <div><Button>6</Button></div>
          <div><Button>-</Button></div>
          <div><Button>7</Button></div>
          <div><Button>8</Button></div>
          <div><Button>9</Button></div>
          <div><Button>*</Button></div>
          <div><Button>=</Button></div>
          <div><Button>0</Button></div>
          <div><Button>.</Button></div>
          <div><Button>/</Button></div>


        </div>
      </div>
    </div>


  )
}

export default App
