package com.shope.backendshope;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @GetMapping("/user")
    public User user(@RequestParam(value = "name", defaultValue = "defaultValue") String name) {
        return new User(123456789, "Tommy");
    }

    @GetMapping("/test")
    public void test() {
        DBManager db = new DBManager("bolt://localhost:7687", "neo4j", "secret");
        db.test("test");
    }

}
