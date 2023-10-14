import { gql } from "graphql-request"
import sortNewsByImage from "./sortNewsByImage"

const fetchNews = async (
  category?: Category | string,
  keywords?: string,
  isDynamic?: boolean

) => {
  //graphQl query
  const query = gql`
    query myQuery(
        $access_key: String!
        $categories: String!
        $keywords: String
        
        ) {
        myQuery(
            access_key: $access_key
            categories : $categories
            countries: "gb"
            sort: "published_desc"
            keywords: $keywords
            ) {
          data {
            author
            category
            country
            description
            image
            language
            published_at
            source
            title
            url
          }
          pagination {
            count
            limit
            offset
            total
          }
          
        }
      }
      `


  //fetch funtion wiht nextjs 13 caching...
  const res = await fetch("https://hinojosadelduque.stepzen.net/api/idolized-labradoodle/__graphql", {
    method: "POST",
    cache: isDynamic ? "no-cache" : "default",
    next: isDynamic ? { revalidate: 0 } : { revalidate: 20 },
    headers: {
      "Content-Type": "application/json",
      Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`

    },
    body: JSON.stringify({
      query,
      variables: {
        access_key: process.env.MEDIASTACK_API_KEY,
        categories: category,
        keywords: keywords
      }
    })
  })

  console.log(
    "Loading New data from API for category: ",
    category,
    keywords
  )

  const newResponse = await res.json()

  //sort function by images vs not images present
  const news = sortNewsByImage(newResponse.data.myQuery)

  // return res
  return news


}
// stepzen import curl http://api.mediastack.com/v1/news?access_key=716f3199867e6981b84a388463de44c1&sources=business,sports
export default fetchNews  