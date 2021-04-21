package com.shope.shope.db

import org.neo4j.driver.*
import org.neo4j.driver.Values.parameters
import org.springframework.stereotype.Component

@Component
class GraphDBManager {
    final val driver: Driver = GraphDatabase.driver("neo4j://localhost:7687", AuthTokens.basic("neo4j", "secret"))
    val session: Session = driver.session()

    fun query(query: String, parameters: HashMap<String, Any>): Result? {
        return session.run(query, parameters)
    }
}