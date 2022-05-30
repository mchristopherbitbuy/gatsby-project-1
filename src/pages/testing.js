import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Gallery from '../examples/Gallery'

const Testing = () => {
    return (
        <Layout>
            <main className="page">
                <Gallery />
            </main>
        </Layout>
    )
}

export const data = graphql`
    query {
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

export default Testing