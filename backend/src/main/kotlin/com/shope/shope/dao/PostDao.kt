package com.shope.shope.dao

import com.shope.shope.db.GraphDBManager
import com.shope.shope.model.Post
import org.springframework.stereotype.Repository
import java.util.*
import kotlin.collections.HashMap

@Repository
class PostDao(val db: GraphDBManager): EntityDao<Post, String> {

    override fun findById(id: String): Optional<Post> {
        TODO("Not yet implemented")
    }

    override fun create(entity: Post) {
        val params : HashMap<String, Any> = HashMap()
        params.put("id", entity.id)
        db.query("CREATE (p: Post) SET p.id = \$id RETURN p", params)
    }
}