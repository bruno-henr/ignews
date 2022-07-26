import { GetStaticProps } from 'next';
import React from 'react';
import * as Prismic from '@prismicio/client'
import Head from '../../../node_modules/next/head';

import styles from './styles.module.scss'
import { getPrismicClient } from '../../services/prismic';

export default function posts() {
    return (
        <>
            <Head>
                <title>Posts | Ignews</title>
            </Head>

            <main className={styles.container}>
                <div className={styles.posts}>
                    <a href="">
                        <time>11 de marco de 1111</time>
                        <strong>Titulo do post</strong>
                        <p>Breve descricao do post</p>
                    </a>
                    <a href="">
                        <time>11 de marco de 1111</time>
                        <strong>Titulo do post</strong>
                        <p>Breve descricao do post</p>
                    </a>
                    <a href="">
                        <time>11 de marco de 1111</time>
                        <strong>Titulo do post</strong>
                        <p>Breve descricao do post</p>
                    </a>
                </div>
            </main>
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const prismic = getPrismicClient();

    const response = await prismic.get({
        predicates: [
            Prismic.predicate.at("document.type", "post")
        ]
    },{
        fetch: ['post.title','post.content'],
        pageSize: 100
    })

    console.log(JSON.stringify(response, null, 2))
    

    return {
        props: {}
    }
}
