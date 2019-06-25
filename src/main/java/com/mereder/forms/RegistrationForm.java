package com.mereder.forms;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.validation.constraints.NotEmpty;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RegistrationForm {
    @NotEmpty(message = "Поле логин не может быть пустым")
    private  String login;
    @NotEmpty(message = "Поле пароль не может быть пустым")
    private  String password;
}
