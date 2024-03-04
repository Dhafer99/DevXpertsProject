package org.example.gestion_user.payload.request;

import javax.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class LoginRequest {
	@NotBlank
    private String username;

	@NotBlank
	private String password;


}
