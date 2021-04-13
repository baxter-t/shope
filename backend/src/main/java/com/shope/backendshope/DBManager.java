package com.shope.backendshope;

import org.neo4j.driver.*;

import static org.neo4j.driver.Values.parameters;

public class DBManager implements AutoCloseable {

    private final Driver driver;

    public DBManager( String uri, String user, String password ) {
        driver = GraphDatabase.driver( uri, AuthTokens.basic( user, password ) );
    }

    @Override
    public void close() throws Exception {
        driver.close();
    }

    public void test(String message) {
        String query = "CREATE (a:Greeting) SET a.message = $message RETURN a.message + ', from node ' + id(a)";
        Value value = parameters("message", message);

        executeQuery(query, value);
    }

    public void executeQuery(final String query, Value value) {
        try ( Session session = driver.session() )
        {
            String greeting = session.writeTransaction( new TransactionWork<String>()
            {
                @Override
                public String execute( Transaction tx )
                {
                    Result result = tx.run(query, value);
                    return result.single().get( 0 ).asString();
                }
            } );
            System.out.println( greeting );
        }
    }
}