function addStudent(id, Callback)
{
    Callback();  
}

function StudentList() {
    console.log('Hello');
}

addStudent(1, StudentList);