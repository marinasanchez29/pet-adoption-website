package com.example.dog_adoption.dao;

import com.example.dog_adoption.model.Dog;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

@Repository
public class DogDAO {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    private static final class DogRowMapper implements RowMapper<Dog> {
        @Override
        public Dog mapRow(ResultSet rs, int rowNum) throws SQLException {
            Dog dog = new Dog();
            dog.setId(rs.getLong("id"));
            dog.setName(rs.getString("name"));
            dog.setBreed(rs.getString("breed"));
            dog.setAge(rs.getString("age"));
            dog.setSex(rs.getString("sex"));
            dog.setPhoto(rs.getString("photo"));
            return dog;
        }
    }

    public List<Dog> findAll() {
        return jdbcTemplate.query("SELECT * FROM dogs", new DogRowMapper());
    }
}
