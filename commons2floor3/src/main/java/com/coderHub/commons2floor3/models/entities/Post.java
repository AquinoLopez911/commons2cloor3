package com.coderHub.commons2floor3.models.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Table(name = "post")
@Entity
public class Post {

	@Id
	@GeneratedValue
	private Long postId;
	
	private String author;
	
	private String caption;
	
//	S3 bucket key
	private String s3ObjectKey;

	
	public Post() {
		
	}
	
	public Post(String author, String caption, String s3ObjectKey) {
		
		this.author = author;
		this.caption = caption;
		this.s3ObjectKey = s3ObjectKey;
	}

	public Long getPostId() {
		return postId;
	}

	public String getAuthor() {
		return author;
	}

	public String getCaption() {
		return caption;
	}

	public String getS3ObjectKey() {
		return s3ObjectKey;
	}

	public void setPostId(Long postId) {
		this.postId = postId;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public void setCaption(String caption) {
		this.caption = caption;
	}

	public void sets3ObjectKey(String s3ObjectKey) {
		this.s3ObjectKey = s3ObjectKey;
	}
	
	
	@Override
	public String toString() {
		StringBuffer buff = new StringBuffer();
		
		buff.append("Post{");
		buff.append("id=" + postId);
		buff.append(", author=" + author);
		buff.append(", caption=" + caption);
		buff.append(", s3ObjectKey=" + s3ObjectKey);
		buff.append("}");
		
		
		return buff.toString();
	}
	
	
}
