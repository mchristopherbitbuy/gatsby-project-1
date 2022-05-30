import React from 'react'
import Layout from "../components/Layout"
import { graphql } from 'gatsby'
import RecipesList from '../components/RecipesList'
import SEO from '../components/SEO'

const Contact = ({ data }) => {
    const recipes = data.allContentfulRecipe.nodes
    return (
        <Layout>
            <SEO title="Contact" />
            <main className="page">
                <section className="contact-page">
                    <article className="contact-info">
                        <h3>Want to Get In Touch?</h3>
                        <p>
                            Contrary to popular belief, Lorem Ipsum is not simply 
                            random text. It has roots in a piece of classical Latin 
                            literature from 45 BC, making it over 2000 years old.
                        </p>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing industry.
                        </p>
                        <p>
                            If you are going to use a passage of Lorem Ipsum, you need to be 
                            sure there isn't anything embarrassing hidden in the middle of text.
                        </p>
                    </article>
                    <article>
                        <form
                            className="form contact-form"
                            action="https://formspree.io/f/moqrrvnv"
                            method="POST"
                        >
                            <div className="form-row">
                                <label htmlFor="name">Your name</label>
                                <input type="text" name="name" id="name" />
                            </div>
                            <div className="form-row">
                                <label htmlFor="email">Your email</label>
                                <input type="text" name="email" id="email" />
                            </div>
                            <div className="form-row">
                                <label htmlFor="message">Message</label>
                                <textarea name="message" id="message"></textarea>
                            </div>
                            <button type="submit" className="btn block">Submit</button>
                        </form>
                    </article>
                </section>
                <section className="featured-recipes">
                    <h5>Look at this Awesomesouce!</h5>
                    <RecipesList recipes={recipes} />
                </section>
            </main>
        </Layout>
    )
}

export const query = graphql`
{
  allContentfulRecipe(
    sort: {fields: title, order: ASC}
    filter: {featured: {eq: true}}
  ) {
    nodes {
      id
      title
      cookTime
      prepTime
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
      }
    }
  }
}
`

export default Contact