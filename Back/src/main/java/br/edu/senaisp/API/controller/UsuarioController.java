package br.edu.senaisp.API.controller;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import br.edu.senaisp.API.dto.ToDTO.UsuarioConverter;
import br.edu.senaisp.API.dto.UsuarioDTO;
import br.edu.senaisp.API.model.Usuario;
import br.edu.senaisp.API.repository.UsuarioRepository;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/usuarios")
@CrossOrigin(origins = "*")
public class UsuarioController {

	@Autowired
	UsuarioRepository repository;

	@GetMapping
	public ResponseEntity<List<UsuarioDTO>> getUsuarios() {
		List<Usuario> usuarios = repository.findAll();
		List<UsuarioDTO> usuarioDTOs = usuarios.stream().map(UsuarioConverter::toDTO).collect(Collectors.toList());
		
		System.out.println("Get Usuários: " + usuarioDTOs.toString());

		return ResponseEntity.ok(usuarioDTOs);
	}

	@GetMapping("/{id}")
	public ResponseEntity<UsuarioDTO> getUsuarioById(@PathVariable String id) {
		Optional<Usuario> usuario = repository.findById(id);

		if (usuario.isEmpty()) {
			return ResponseEntity.notFound().build();
		} else {
			System.out.println("Get Usuário: " + UsuarioConverter.toDTO(usuario.get()).toString());
			
			return ResponseEntity.ok(UsuarioConverter.toDTO(usuario.get()));
		}
	}

	@PostMapping
	public ResponseEntity<UsuarioDTO> insert(@RequestBody @Valid Usuario usuario) {
		Usuario savedUsuario = repository.save(usuario);
		
		System.out.println("Inseriu: " + UsuarioConverter.toDTO(savedUsuario).toString());
		
		return ResponseEntity.created(ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				.buildAndExpand(savedUsuario.getId()).toUri()).body(UsuarioConverter.toDTO(savedUsuario));
	}

	@PutMapping("/{id}")
	public ResponseEntity<UsuarioDTO> update(@PathVariable String id, @RequestBody @Valid Usuario usuario) {

		Optional<Usuario> usuarioExistente = repository.findById(id);
		if (usuarioExistente.isEmpty()) {
			return ResponseEntity.notFound().build();
		}

		Usuario usuarioAtualizado = usuarioExistente.get();
		usuarioAtualizado.setNome(usuario.getNome());
		usuarioAtualizado.setUserName(usuario.getUserName());
		usuarioAtualizado.setDataNasc(usuario.getDataNasc());
		usuarioAtualizado.setSenha(usuario.getSenha());

		try {
			repository.save(usuarioAtualizado);
			
			System.out.println("Alterou: " + UsuarioConverter.toDTO(usuarioAtualizado).toString());
			
			return ResponseEntity.ok(UsuarioConverter.toDTO(usuarioAtualizado));
		} catch (Exception error) {
			return ResponseEntity.notFound().build();
		}
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Void> delete(@PathVariable String id) {

		Optional<Usuario> usuarioExistente = repository.findById(id);
		if (usuarioExistente.isEmpty()) {
			return ResponseEntity.notFound().build();
		}

		System.out.println("Deletou: " + usuarioExistente.toString());
		
		repository.deleteById(id);
		return ResponseEntity.noContent().build();
	}
}
