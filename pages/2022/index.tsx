import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Layout } from '../../components/Layout'
import Link from 'next/link'

const Home2022: NextPage = () => {
    return (
        <div className="bg-white bg-opacity-70">
            <div className="flex min-h-screen flex-col items-center justify-center py-2">
                <Head>
                    <title>Mancation 2022 | Albuquerque, NM</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <Layout>
                    <h1 className="text-6xl font-bold">
                        Albuquerque, NM
                    </h1>

                    <p className="mt-3 text-2xl">
                        Trevor &amp; Delaney's Home
                    </p>

                    <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">

                        <Link href="/2022/food" prefetch
                        >
                            <a
                                className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600 bg-white bg-opacity-40"
                            >
                                <h3 className="text-2xl font-bold">Food &rarr;</h3>
                                <p className="mt-4 text-xl">
                                    Grocery List &amp; Food Scheduling
                                </p>
                            </a>
                        </Link>

                        <a
                            href="https://github.com/vercel/next.js/tree/canary/examples"
                            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600 bg-white bg-opacity-40"
                        >
                            <h3 className="text-2xl font-bold">Games &rarr;</h3>
                            <p className="mt-4 text-xl">
                                Enough Said
                            </p>
                        </a>

                        <a
                            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600 bg-white bg-opacity-40"
                        >
                            <h3 className="text-2xl font-bold">Locale &rarr;</h3>
                            <p className="mt-4 text-xl">
                                Sight-seeing and adventures in the Mancation '22 locale.
                            </p>
                        </a>

                        <a
                            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600 bg-white bg-opacity-40"
                        >
                            <h3 className="text-2xl font-bold">Things to Bring &rarr;</h3>
                            <p className="mt-4 text-xl">
                                Recommended items and unique items being brought.
                            </p>
                        </a>

                        <a
                            href="https://nextjs.org/docs"
                            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600 bg-white bg-opacity-40"
                        >
                            <h3 className="text-2xl font-bold">Itinerary &rarr;</h3>
                            <p className="mt-4 text-xl">
                                Flights and travel information.
                            </p>
                        </a>

                        <a
                            href="https://nextjs.org/learn"
                            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600 bg-white bg-opacity-40"
                        >
                            <h3 className="text-2xl font-bold">Schedule &rarr;</h3>
                            <p className="mt-4 text-xl">
                                What we're doing, and when!
                            </p>
                        </a>
                    </div>
                </Layout>
            </div>
        </div>
    )
}

export default Home2022
