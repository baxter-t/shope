package com.shope.shope.controller

import com.shope.shope.model.Post
import com.shope.shope.service.PostService
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class PostResource(val service: PostService) {
	@GetMapping
	fun allPosts(): List<Post> = service.getPosts()

	@GetMapping(path = ["/test"])
	fun test() = service.test()
}