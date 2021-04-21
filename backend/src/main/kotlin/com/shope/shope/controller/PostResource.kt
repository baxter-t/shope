package com.shope.shope.controller

import com.shope.shope.model.Post
import com.shope.shope.service.PostService
import org.springframework.http.MediaType
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController

@RestController
class PostResource(val service: PostService) {
	@GetMapping
	fun allPosts(): List<Post> = service.getPosts()

	@PostMapping(path= ["/post"], consumes = [MediaType.APPLICATION_JSON_VALUE])
	fun create(@RequestBody post: Post) {
	    service.create(post)
	}
}