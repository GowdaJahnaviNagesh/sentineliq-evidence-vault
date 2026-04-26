package com.internship.tool.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {

        http
                .csrf(csrf -> csrf.disable())   // ✅ new syntax
                .authorizeHttpRequests(auth -> auth
                        .anyRequest().permitAll()   // ✅ new syntax
                )
                .httpBasic(Customizer.withDefaults());

        return http.build();
    }
}