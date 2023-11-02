import CourseList from "../../components/CourseList"
import courseData from "../../components/courseData"

const Courses = () => {
    return(
        <CourseList courses={courseData}/>
    )
}

export default Courses;