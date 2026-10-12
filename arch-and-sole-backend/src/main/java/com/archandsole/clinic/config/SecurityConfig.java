package com.archandsole.clinic.config;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.*;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.core.userdetails.*;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.*;
import java.util.*;
@Configuration
public class SecurityConfig {
  @Bean PasswordEncoder passwordEncoder(){return new BCryptPasswordEncoder();}
  @Bean UserDetailsService users(@Value("${app.admin.username:admin}") String username,@Value("${app.admin.password:change-me}") String password,PasswordEncoder encoder){return new InMemoryUserDetailsManager(User.withUsername(username).password(encoder.encode(password)).roles("ADMIN").build());}
  @Bean SecurityFilterChain chain(HttpSecurity http) throws Exception {return http.csrf(c->c.disable()).cors(Customizer.withDefaults()).authorizeHttpRequests(a->a.requestMatchers("/api/appointments").permitAll().requestMatchers("/api/admin/**").hasRole("ADMIN").anyRequest().permitAll()).httpBasic(Customizer.withDefaults()).build();}
  @Bean CorsConfigurationSource cors(@Value("${app.cors.allowed-origins:http://localhost:5173}") String allowed){CorsConfiguration c=new CorsConfiguration();c.setAllowedOrigins(Arrays.stream(allowed.split(",")).map(String::trim).toList());c.setAllowedMethods(List.of("GET","POST","OPTIONS"));c.setAllowedHeaders(List.of("*"));c.setAllowCredentials(true);UrlBasedCorsConfigurationSource s=new UrlBasedCorsConfigurationSource();s.registerCorsConfiguration("/**",c);return s;}
}
