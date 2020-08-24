package com.coderHub.commons2floor3.controller;


import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import javax.validation.Valid;

import org.apache.http.entity.ContentType;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;

import com.coderHub.commons2floor3.aws.s3.Bucket;
import com.coderHub.commons2floor3.models.entities.Post;
import com.coderHub.commons2floor3.models.request.PostRequestBody;
import com.coderHub.commons2floor3.service.PostService;
import com.coderHub.commons2floor3.service.S3Service;




@Controller
public class C2F3Controller {
	
	@Autowired
	private PostService postService;
	
	@Autowired
	private S3Service s3Service;

	
	public C2F3Controller(PostService postService, S3Service s3Service) {
		this.postService = postService;
		this.s3Service = s3Service;
		
	}
	
	
	
	
	@ResponseBody
	@GetMapping("/api/v1")
	public ResponseEntity<?> test() {
		String hi = "all good";
		return ResponseEntity.ok().body(hi);
	}
	
	
	
	@ResponseBody
	@GetMapping("/api/v1/all/posts")
	public List<Post> retriveAllPosts() {
		
		return postService.allPosts();
		
	}
	
	
	
	//return all posts sorted by newest first
	@ResponseBody
	@GetMapping("/api/v2/all/posts")
	public List<Post> retrivePostsFiLo() {
		
		return postService.allPostsByDate();
		
	}
	
	@ResponseBody
	@GetMapping("/api/v1/download/post/{s3ObjectKey}")
	public byte[] downloadImgWithKey(@PathVariable("s3ObjectKey") String s3ObjectKey) {
		
		System.out.println(s3ObjectKey);
		
		return s3Service.download(s3ObjectKey);
	}
	
	
	
	
	
	@ResponseBody
	@PostMapping(
			path="/api/v1/post/upload", 
			consumes = MediaType.APPLICATION_JSON_VALUE,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> apiTest(@RequestBody Post post) {
		
		System.out.println(post.toString());
		
		return postService.uploadPost(post.getAuthor(), post.getCaption(), post.getS3ObjectKey());
		
	}
	
	@ResponseBody
	@PostMapping(
			
			path = "api/v1/s3/upload/{s3ObjectKey}",
			consumes = MediaType.MULTIPART_FORM_DATA_VALUE,
			produces = MediaType.APPLICATION_JSON_VALUE
	)
	public ResponseEntity<?> uploadPostImg(@PathVariable("s3ObjectKey") String s3ObjectKey, @RequestParam("file") MultipartFile file) {
		
		if(file.isEmpty()) {
			throw new IllegalStateException("cannot upload empty file [ " + file.getSize() + " ] ");
		}
		
		//if file is an image
		if(!Arrays.asList(ContentType.IMAGE_JPEG.getMimeType(),
				ContentType.IMAGE_PNG.getMimeType(),
				ContentType.IMAGE_GIF.getMimeType()).
				contains(file.getContentType())) {
			throw new IllegalStateException("file must be an image or GIF [ " + file.getSize() + " ]");
		}
		
		//grab some metadata from file if any
		Map<String, String> metadata = new HashMap<>();
		metadata.put("Content-Type", file.getContentType());
		metadata.put("Content-Length", String.valueOf(file.getSize()));

		String bucketName = Bucket.PROFILE_IMAGE.getBucket();
		
		
		//store the image in s3 bucket AND update database (userProfileImgLink) with s3 image link
		try {
			//user.setUserProfileImgLink(fileName);
			s3Service.save(bucketName, s3ObjectKey, Optional.of(metadata), file.getInputStream());
			List<Post> allPosts = postService.allPostsByDate(); 
			
			return ResponseEntity.ok(allPosts);
		}
		catch(Exception e) {
			throw new IllegalStateException(e);
		}
		
		
	}//end uploadUserProfileImg
	
	

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
//	NAV BAR ROUTES
	
	@RequestMapping("/")
	public String home() {
		return "index";
	}
	
	@RequestMapping("/team")
	public String teamPage() {
		return "meet-the-team";
	}
	
	
	@RequestMapping("/photo-gallery")
	public String PhotoGallery() {
		return "dynamic-photo-gallery";
	}
	
	
	@RequestMapping("/contact")
	public String contact() {
		return "contact";
	}
	
	@RequestMapping(value="/register-page", produces = org.springframework.http.MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public String registerPage() {
		
		return "coming soon";
	}

	
	
//INDEX ROUTES
	
	@RequestMapping("/goof")
	public String goof() {
		return "goof";
	}
	
	
	
//	MEET THE TEAM ROUTES
	
	@RequestMapping("/RA")
	public String RA() {
		return "RA";
	}
	
	
	@RequestMapping("/RS")
	public String RS() {
		return "RS";
	}
	
	
	@RequestMapping("/CGL")
	public String CGL() {		
		return "CGL";
	}
	
	
	
//	RA ROUTES
	
	@RequestMapping("/harrison_newman")
	public String harrison_newman() {
		return "harrison-newman";
	}
	
	
	@RequestMapping("/david_walker")
	public String david_walker() {
		return "david-walker";
	}
	
	
	@RequestMapping("/emily_clubb")
	public String emily_clubb() {
		return "emily-clubb";
	}
	
	
//RS ROUTES
	
	@RequestMapping("/josh_rozelle")
	public String josh_rozelle() {
		return "josh-rozelle";
	}
	
	
	@RequestMapping("/grace_jones")
	public String grace_jones() {
		return "grace-jones";
	}
	
	
	@RequestMapping("/jacob_zook")
	public String jacob_zook() {
		return "jake-zook";
	}
	
	@RequestMapping("/emma_ockerman")
	public String emma_ockerman() {
		return "emma-ockerman";
	}
	
	
//CGL ROUTES
	@RequestMapping("/tyler_hutchins")
	public String tyler_hutchins() {
		return "tyler-hutchins";
	}
	
	@RequestMapping("/perry")
	public String perry() {
		return "perry";
	}
		
	@RequestMapping("/jonah_poulson")
	public String jonah_poulson() {
		return "jonah-poulson";
	}
		
	@RequestMapping("/lilly_wilson")
	public String lilly_wilson() {
		return "lilly-wilson";
	}
	
	@RequestMapping("/josie_anderson")
	public String josie_anderson() {
		return "josie-anderson";
	}
	
	@RequestMapping("/taylor_salvigsen")
	public String taylor_salvigsen() {
		return "taylor-salvigsen";
	}
		
		
	@RequestMapping("/zoe_sommers")
	public String zoe_sommers() {
		return "zoe-sommers";
	}
		
	@RequestMapping("/ryan_warner")
	public String ryan_warner() {
		return "ryan-warner";
	}
	
	@RequestMapping("/jake_ready")
	public String jake_ready() {
		return "jake-ready";
	}
	
	
//	PHOTO GALLERY ROUTS
	
	@RequestMapping("/postForm")
	public String post_form() {
		return "postForm";
	}
	
	
	

}//end controller
