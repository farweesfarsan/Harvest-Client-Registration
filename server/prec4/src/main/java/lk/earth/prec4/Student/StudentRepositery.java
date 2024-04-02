package lk.earth.prec4.Student;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StudentRepositery extends JpaRepository<Student,Integer> {
    List<Student> findByName( String name);


}
