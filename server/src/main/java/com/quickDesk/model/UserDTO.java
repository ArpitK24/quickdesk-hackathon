package com.quickDesk.model;

import java.util.Set;

public class UserDTO {
    private Long id;      // Only for responses
    private String username;
    private String password; // Only for registration POST, not sent in responses
    private Set<String> roles; // e.g. ["ROLE_USER"], ["ROLE_AGENT"]
    private String fullName; // optional
    private String email;    // optional, if username != email
    private Boolean active;  // optional, for admin control
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public Set<String> getRoles() {
		return roles;
	}
	public void setRoles(Set<String> roles) {
		this.roles = roles;
	}
	public String getFullName() {
		return fullName;
	}
	public void setFullName(String fullName) {
		this.fullName = fullName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public Boolean getActive() {
		return active;
	}
	public void setActive(Boolean active) {
		this.active = active;
	}

   

    // Omit password in toString(), never expose in responses!
}

