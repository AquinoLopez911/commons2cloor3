package com.coderHub.commons2floor3.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.coderHub.commons2floor3.models.entities.Post;

public interface PostRepository extends CrudRepository<Post, Long> {
	
	
	Optional<Post> findByS3ObjectKey(String s3ObjectKey);
	
	

}
