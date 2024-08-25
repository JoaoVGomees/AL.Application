package br.edu.senaisp.API.dto;

import java.time.LocalDate;

public class UsuarioDTO {
	
	private String id;
	private String nome;
	private String userName;
	private LocalDate dataNasc;
	
	public UsuarioDTO() {}
	
	public UsuarioDTO(String id, String nome, String userName, LocalDate dataNasc) {
		super();
		this.id = id;
		this.nome = nome;
		this.userName = userName;
		this.dataNasc = dataNasc;
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
	
	@Override
	public String toString() {
	    return "UsuarioDTO{" +
	            "id='" + id + '\'' +
	            ", nome='" + nome + '\'' +
	            ", userName='" + userName + '\'' +
	            ", dataNasc=" + dataNasc +
	            '}';
	}

	
}
