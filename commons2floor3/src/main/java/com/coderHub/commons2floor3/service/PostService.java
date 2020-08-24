package com.coderHub.commons2floor3.service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import com.coderHub.commons2floor3.aws.s3.Bucket;
import com.coderHub.commons2floor3.models.entities.Post;
import com.coderHub.commons2floor3.models.request.PostRequestBody;
import com.coderHub.commons2floor3.repository.PostRepository;


import org.apache.http.entity.ContentType;
import java.util.Optional;
import java.util.UUID;

@Service
public class PostService {
	
	private PostRepository postRepo;
	private S3Service s3Serivce;
	
	@Autowired
	public PostService(PostRepository postRepo, S3Service s3Serivce) {
		this.postRepo = postRepo;
		this.s3Serivce = s3Serivce;
	}
	
	
	
	//creates a new post in the data base
	public ResponseEntity<?> uploadPost(String author, String caption, String s3ObjectKey) {
		
		Post newPost = new Post(author, caption, s3ObjectKey);
		System.out.println(newPost.toString());
		
		Post savedPost = postRepo.save(newPost);
		
		return ResponseEntity.ok().body(newPost);
		
	}
	
	
	
	
	//uploads user image to s3
	public String uploadUserProfileImg(MultipartFile file) {
			
		
		//if image is not empty
		if(file.isEmpty()) {
			throw new IllegalStateException("cannot upload empty file [ " + file.getSize() + " ] ");
		}
			
		//verify that upload is an image
		if(!Arrays.asList(ContentType.IMAGE_JPEG.getMimeType(),
				ContentType.IMAGE_PNG.getMimeType(),
				ContentType.IMAGE_GIF.getMimeType()).
				contains(file.getContentType())) {
			throw new IllegalStateException("file must be an image or GIF [ " + file.getName() + " ]");
		}
			
			
		//grab the metadata from file if any
		Map<String, String> metadata = new HashMap<>();
		metadata.put("Content-Type", file.getContentType());
		metadata.put("Content-Length", String.valueOf(file.getSize()));
			
			
		String path = Bucket.PROFILE_IMAGE.getBucket();
			
			
//		save the img to the S3 bucket
		try {
			s3Serivce.save(path , file.getName(), Optional.of(metadata), file.getInputStream());
				
			return "Posted";
		}
		catch(IOException e) {
			throw new IllegalStateException(e);
		}

	}//end uploadUserProfileImg()
		
		

	//returns all posts
	public List<Post> allPosts() {
					
		List<Post> list = new ArrayList<Post>(); 
			
		postRepo.findAll().forEach(list :: add);
			
		return list;
	}
	
	
	//returns all posts
		public List<Post> allPostsByDate() {
			//empty list of Post			
			List<Post> list = new ArrayList<Post>();
					
			//adding elements to list
			postRepo.findByOrderByPostIdDesc().forEach(list::add);
				
			return list;
		}
		
		

	private Post getUserProfileIdOrThrow(String s3ObjectKey) {
			
		List <Post> postList = new ArrayList<Post>(); 
			
		postRepo.findAll().forEach(postList :: add);
			
		return postList
			.stream()
			.filter( post -> post.getS3ObjectKey().equals(s3ObjectKey))
			.findFirst()
			.orElseThrow(() -> new IllegalStateException(String.format( "user profile %s not found ", s3ObjectKey )));
	}//getUserProfileIdOrThrow

}
