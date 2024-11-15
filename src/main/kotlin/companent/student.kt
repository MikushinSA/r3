import org.w3c.dom.HTMLInputElement
import react.FC
import react.Props
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.input
import react.useState
import react.dom.html.InputType

external interface StudentProps : Props {
    var student: Student
    var setGrade: (Int) -> Unit
}

val CStudent = FC<StudentProps> { props ->
    val (grade, setGrade) = useState(props.student.grade)

    div {
        +"${props.student.firstname} ${props.student.surname}"


        input {
            type = InputType.number
            value = grade.toString()
            onChange = { event ->
                val newGrade = (event.target as HTMLInputElement).value.toIntOrNull()
                if (newGrade != null && newGrade in 1..5) {
                    setGrade(newGrade)
                    props.setGrade(newGrade)
                }
            }
        }
    }
}
