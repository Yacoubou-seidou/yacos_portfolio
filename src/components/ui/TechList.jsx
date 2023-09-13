const TechList = ({ array }) => {
  console.log(array);
  return (
    array.map((element, index) => {
      return (
        <li key={element + index}>
          <a>{element}</a>
        </li>)
    })
  )
}

export default TechList
