package org.example.gestion_user.payload.request;

import com.fasterxml.jackson.annotation.JsonFormat;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.Set;


@NoArgsConstructor
@AllArgsConstructor
@Data
public class SignupRequest {
  @NotBlank
  @Size(min = 3, max = 20)
  private String username;

  private String firstname;

  private String lastname;

  private String phone;

  @JsonFormat( pattern="dd.MM.yyyy")
  private LocalDate creationDate;

  @NotBlank
  @Size(max = 50)
  @Email
  private String email;

  private Set<String> role;


  @NotBlank
  @Size(min = 6, max = 40)
  private String password;


}
