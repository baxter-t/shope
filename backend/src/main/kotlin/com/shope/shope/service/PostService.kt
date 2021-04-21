package com.shope.shope.service

import com.shope.shope.dao.PostDao
import com.shope.shope.model.Post
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class PostService {
	@Autowired
	protected lateinit var postDao: PostDao

	fun getPosts(): List<Post> {
	    return listOf(
			Post("test1"),
			Post("test2"),
			Post("test3"),
			Post("test4")
	    )
	}

	fun post(message: Post) {
		TODO()
	}

	fun create(post: Post) {
	    postDao.create(post)
	}
}