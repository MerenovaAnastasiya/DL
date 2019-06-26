package com.mereder.dto;

import lombok.Builder;
import lombok.Data;


@Builder
@Data
public class LoginUserDto {
    private String login;
    private String sessionId;
}
