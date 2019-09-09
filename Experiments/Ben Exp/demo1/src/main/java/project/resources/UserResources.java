package project.resources;

import project.repository.Users;
import project.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/users")
public class UserResources {

    @Autowired
    UserResources usersRepository;

    @GetMapping(value = "/all")
    public List<Users> getAll() {
        return ((JpaRepository<Users, Integer>) usersRepository).findAll();
    }

    @PostMapping(value = "/load")
    public List<Users> persist(@RequestBody final Users users) {
        ((CrudRepository<Users, Integer>) usersRepository).save(users);
        return ((JpaRepository<Users, Integer>) usersRepository).findAll();
    }

}