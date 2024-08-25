package br.edu.senaisp.API.model;

import java.time.LocalDate;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Document(collection = "usuario")
public class Usuario {

	@Id
	private String id;

	@NotNull
	@Size(min = 2, max = 120)
	private String nome;

	@NotNull
	@Size(min = 2, max = 120)
	private String userName;
	
	@NotNull
	private LocalDate dataNasc;

	@NotNull
	@Size(min = 6, max = 120)
	private String senha;

	public Usuario() {
	}

	public Usuario(String id, String nome, String userName, LocalDate dataNasc, String senha) {
		this.id = id;
		this.nome = nome;
		this.userName = userName;
		this.dataNasc = dataNasc;
		this.senha = senha;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public LocalDate getDataNasc() {
		return dataNasc;
	}

	public void setDataNasc(LocalDate dataNasc) {
		this.dataNasc = dataNasc;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	@Override
	public String toString() {
	    return "Usuario{" +
	            "id='" + id + '\'' +
	            ", nome='" + nome + '\'' +
	            ", userName='" + userName + '\'' +
	            ", dataNasc=" + dataNasc +
	            '}';
	}


}
