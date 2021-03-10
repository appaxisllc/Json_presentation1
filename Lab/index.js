/***Resource Linkage through and including Resource Identifier Objects
 * 
 * Resource Linkage
 * used in conjunction w/ compound document requests
 * groups together the included resource objects
 * removes the need for GET URL links
 * MUST be represented as NULL/arrays
 * */

var jcontent = {

    "firstName": "Jonathan",
    "lastName": "Christopher",
    "type": "articles",
    "id": "1",
    "attributes": {
        "title": "Rails is Omakase"
    },
    "relationships": {
        "author": {
            "links": {
                "self": "http://example.com/articles/1/relationships/author",
                "related": "http://example.com/articles/1/author"
            },
            "data": {
                "type": "people",
                "id": "9"
            }
        }
    },
    "links": {
        "self": "http://example.com/articles/1"
    }
}

var output = document.getElementById("output");
console.log(output);

output.innerHTML = jcontent.firstName + " " + jcontent.lastName
/**
 * 
 * 
 * 
 * Resource Identifier Object
 * identifies individual resources
 * MUST contain ID/TYPE
 * may include META
 * 
 */