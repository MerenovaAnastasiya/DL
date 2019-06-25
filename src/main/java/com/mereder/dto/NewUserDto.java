package com.mereder.dto;

import lombok.Builder;
import lombok.Data;


@Builder
@Data
public class NewUserDto {
    private String login;
    private String sessionId;
}
