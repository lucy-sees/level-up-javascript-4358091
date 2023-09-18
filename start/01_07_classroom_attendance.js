// destructuring
function getStudents(classroom) {
  let { hasTeachingAssistant, classList } = classroom;
  let teacher, teachingAssistant, students;

  if(hasTeachingAssistant) {
    [teacher,teachingAssistant, students] = classList;
  } else {
    [teacher, ...students] = classList;
  }
  return students;
}

console.log(getStudents({
  hasTeachingAssistant: false,
  classList: ["Raj", "Sheldon", "Howard", "Penny", "Amy"]
}));