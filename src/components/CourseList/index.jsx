import React from 'react'
import {useSelector, useDispatch} from 'react-redux'

const CourseList = () => {
  const qty = 2

  const totalCourses = useSelector(state => state.data.length)
  //const courses = useSelector(state => state.data)
  const courses = useSelector(state => state.data.slice(0, qty), [qty])
  const dispatch = useDispatch()

  function addCourse() {
    dispatch({type: 'ADD_COURSE', title: 'GraphQL'})
  }

  return (
    <>
      <p>Total Courses: {totalCourses}</p>
      <ul>
        {courses.map(c => (
          <li key={c}>{c}</li>
        ))}
      </ul>
      <button type="button" onClick={addCourse}>
        Adicionar curso
      </button>
    </>
  )
}

export default CourseList
