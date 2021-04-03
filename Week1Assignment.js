class Student{
    constructor(name,email,community){
        this.name = name;
        this.email = email;
        this.community = community;
    }
}

class Bootcamp {
    constructor(name, level, students = []){
        this.name = name;
        this.level = level;
        this.students = students;
    }  

    registerStudent(studentToRegister){
      
        if(this.students.filter(student => student.email === studentToRegister.email).length){
            console.log(`This email addresss has already been used to register. Please try a different email.`);
        }else{
            this.students.push(studentToRegister);
            console.log(`Registering ${studentToRegister.email} to the ${this.name} bootcamp.`);
        }
    } 
}

const webDevFundamentals = new Bootcamp("Web Development Fundamentals", "Beginners");

const Neo = new Student("Neo", "Neo@gmail.com", "Seattle");

webDevFundamentals.registerStudent(Neo);
