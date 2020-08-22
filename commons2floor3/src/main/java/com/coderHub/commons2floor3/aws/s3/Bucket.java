package com.coderHub.commons2floor3.aws.s3;


public enum Bucket {

	//i spent an hour not being able to connect to my S3 bucket because the bucket name had extra white space 
	PROFILE_IMAGE("commons2floor3bucket");
	
	private final String bucket;
	
	Bucket(String bucket) {
		this.bucket = bucket;
	}
	
	public String getBucket() {
		return bucket;
	}
}
