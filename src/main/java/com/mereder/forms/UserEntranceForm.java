package com.mereder.forms;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserEntranceForm {
    @NotBlank
    private  String login;
    @NotBlank
    private  String password;
}
