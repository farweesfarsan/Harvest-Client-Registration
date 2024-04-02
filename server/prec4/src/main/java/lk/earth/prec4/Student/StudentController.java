package lk.earth.prec4.Student;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping(value ="/details")
public class StudentController {

    @Autowired
    private StudentRepositery studentRepositery;

    @GetMapping
    public List<Student> getAll(){
        return studentRepositery.findAll();

    }

    @GetMapping("/{id}")
    public Student getStudentById(@PathVariable Integer id){
        Optional<Student> optionalStudent = studentRepositery.findById(id);
        return optionalStudent.orElse(null);
    }
    @GetMapping("/name/{name}")
    public List<Student> getStudentByName(@PathVariable String name){
        return studentRepositery.findByName(name);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Student add(@RequestBody Student student){
        return studentRepositery.save(student);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Integer id){
        if(!studentRepositery.existsById(id)){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND,"Student Not Found");
        }
         studentRepositery.deleteById(id);
    }

}
