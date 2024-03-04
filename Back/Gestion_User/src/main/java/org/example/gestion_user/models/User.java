package org.example.gestion_user.models;

import com.fasterxml.jackson.annotation.JsonFormat;
import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name = "users",
    uniqueConstraints = { 
      @UniqueConstraint(columnNames = "username"),
      @UniqueConstraint(columnNames = "email") 
    })
public class User {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @NotBlank
  @Column(unique = true) // Make the username field unique
  @Size(max = 20)
  private String username;

  private String firstname;

  private String lastname;

  private String phone;
  private String cvUrl ;
  private int points;



  @JsonFormat( pattern="dd.MM.yyyy")
  private LocalDate creationDate;
  @NotBlank
  @Size(max = 50)
  @Email
  @Column(unique = true)
  private String email;

  @NotBlank
  @Size(max = 120)
  private String password;

  @ManyToMany(fetch = FetchType.LAZY)
  @JoinTable(  name = "user_roles",
        joinColumns = @JoinColumn(name = "user_id"),
        inverseJoinColumns = @JoinColumn(name = "role_id"))
  private Set<Role> roles = new HashSet<>();
// 2Fa
private boolean tfaEnabled ;

private String location;


  public User(String username, String firstname, String lastname, String phone, LocalDate creationDate, String email, String password) {
    this.username = username;
    this.firstname = firstname;
    this.lastname = lastname;
    this.phone = phone;
    this.creationDate = creationDate;
    this.email = email;
    this.password = password;

  }


}
