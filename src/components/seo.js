/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import DUMA from "../images/Favicon.svg"

function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        //<!-- Primary Meta Tags -->
        {
          name: `title`,
          content: `DUMA`,
        },
        {
          name: `author`,
          content: `Diego Ulises Martínez Aguilar`,
        },
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `viewport`,
          content: `width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no`,
        },
        {
          name: `keywords`,
          content: `software, engineer, frontend developer, web, mobile applications, portfolio, ui, ux, DUMA, duma studio, duma.studio, duma mx, duma méxico, Diego Ulises Martínez Aguilar`,
        },
        {
          name: `date`,
          content: `Mar. 03, 2021`,
        },

        //<!-- Open Graph / Facebook -->
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: `https://duma.studio/`,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:image`,
          content: DUMA,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:site_name`,
          content: `DUMA`,
        },

        //<!-- Twitter -->
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:url`,
          content: `https://duma.studio/`,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          property: `twitter:image`,
          content: DUMA,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: `I'm Diego Ulises Martínez Aguilar, a software engineer from Mexico, specialized in the development of web and mobile applications.`,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
