import Score from "./Score"

const Student = (props) => {

  const scoreList = props.student.scores.map(score => {
    return <Score score={score}/>
  })

  return (
    <div>
      <h2>{props.student.name}</h2>
      <h3>{props.student.bio}</h3>
      <h4>{scoreList}</h4>
    </div>
  )
}

export default Student