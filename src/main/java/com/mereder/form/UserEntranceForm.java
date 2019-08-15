package com.mereder.form;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Data
@AllArgsConstructor
@NoArgsConstructor
public abstract class UserEntranceForm {

    @NotBlank
    @Size(min = 10)
    protected String login;
    @NotBlank
    protected String password;
}
