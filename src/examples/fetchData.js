import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const getData = graphql`
    query FirstQuery {
        site {
            info: siteMetadata {
                author
                description
                simpleData
                title
                complexData {
                    age
                }
                person {
                    age
                    name
                }
            }
        }
    }
`

const FetchData = () => {
    const {
        site: {
            siteMetadata: { title },
        },
    } = useStaticQuery(getData);
    return (
        <div>
            <h2>Site title is : {title}</h2>
        </div>
    )
}

export default FetchData