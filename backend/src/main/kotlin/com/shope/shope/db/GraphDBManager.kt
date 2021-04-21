package com.shope.shope.db

import org.neo4j.driver.*
import org.neo4j.driver.Values.parameters
import org.springframework.stereotype.Component

@Component
class GraphDBManager {
    final val driver: Driver = GraphDatabase.driver("neo4j://localhost:7687", AuthTokens.basic("neo4j", "secret"))
    val session: Session = driver.session()

    fun test(message: String): String {
        val testParams: HashMap<String, Any> = HashMap()
        testParams.put("message", "hello world")
        return query( "CREATE (a:Greeting) SET a.message = \$message RETURN a.message + ', from node ' + id(a)", testParams )

    }

    fun query(query: String, parameters: HashMap<String, Any>): String {
        return session.writeTransaction(TransactionWork {
            it.run(query, parameters).single().get(0).asString()
        })
    }
}