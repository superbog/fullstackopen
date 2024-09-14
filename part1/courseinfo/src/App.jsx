const Header = (props) => {
  return (
    <div>
      <p>{props.course} </p>
    </div>
  )
} 

const Content = (props) => {
  return (
    <>
    <p>{props.part[0].title} {props.part[0].exercises}</p>
    <p>{props.part[1].title} {props.part[1].exercises}</p>
    <p>{props.part[2].title} {props.part[2].exercises}</p>
    </>
  )
}

const Total = (props) => {
  return (

    <>
  <p>Number of exercises {props.part[0].exercises + props.part[1].exercises + props.part[2].exercises}</p>
  </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part =[
      {
        title :'Fundamentals of React',
        exercises : 10
      },
      {
        title :'Using props to pass data',
        exercises : 7
      },
      {
        title :'State of a component',
        exercises : 14
      }
  ]

  return (
    <div>
      <Header course= {course}/>
      <Content part = {part} />
      <Total part= {part}/>
    </div>  
  )

}

export default App