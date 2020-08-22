package com.coderHub.commons2floor3.models.request;

import org.springframework.web.multipart.MultipartFile;

public class PostRequestBody {
	
	private String author;
	
	private String caption;
	
	private MultipartFile file;

	public PostRequestBody(String author, String caption, MultipartFile file) {
		super();
		this.author = author;
		this.caption = caption;
		this.file = file;
	}
	
	public PostRequestBody(String author, String caption) {
		super();
		this.author = author;
		this.caption = caption;
	}
	
	
	public PostRequestBody() {
		
	}


	public String getAuthor() {
		return author;
	}


	public String getCaption() {
		return caption;
	}


	public MultipartFile getFile() {
		return file;
	}


	public void setAuthor(String author) {
		this.author = author;
	}


	public void setCaption(String caption) {
		this.caption = caption;
	}


	public void setFile(MultipartFile file) {
		this.file = file;
	}
	
	
	
	

}
