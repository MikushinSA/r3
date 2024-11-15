import csstype.FontWeight
import emotion.react.css
import react.FC
import react.Props
import react.dom.html.ReactHTML.h1
import react.dom.html.ReactHTML.li
import react.dom.html.ReactHTML.ol
import react.useState



val CStudentList = FC<Props>("StudentList") {
    var highlighted by useState<Int>()
    val (grades, setGrades) = useState(studentList.map { it.grade })

    h1 {
        +"Журнал оценок"
    }

    ol {
        studentList.mapIndexed { index, student ->
            li {
                if (index == highlighted)
                    css { fontWeight = FontWeight.bold }

                // Компонент для отображения студента и его оценки
                CStudent {
                    this.student = student
                    setGrade = { newGrade ->
                        student.grade = newGrade
                        setGrades(studentList.map { it.grade }) // ctnth lkz j,yjdktybz списка оценок
                    }
                }

                onClick = {
                    highlighted = index
                }
            }
        }
    }

    // Выводим среднее значение оценок
    val averageGrade = studentList.map { it.grade }.average()
    h1 {
        +"Средняя оценка: ${(averageGrade)}"
    }

}