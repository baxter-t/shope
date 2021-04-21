package com.shope.shope.service

import com.shope.shope.db.GraphDBManager
import com.shope.shope.model.Post
import org.springframework.stereotype.Service

@Service
class PostService (val db: GraphDBManager){
	fun getPosts(): List<Post> {
	    return listOf(
			Post("1", "test1"),
			Post("2", "test2"),
			Post("3", "test3"),
			Post("4", "test4")
	    )
	}

	fun post(message: Post) {
		TODO()
	}

	fun test(): String {
		return db.test("test 1")
	}
}