import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Layout } from '../../components/Layout'
import Link from 'next/link'

const Food: NextPage = () => {
    return (
        <div className="bg-white bg-opacity-70">
            <div className="flex min-h-screen flex-col items-center justify-center py-2">
                <Head>
                    <title>Food | Mancation 2022 | Albuquerque, NM</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <Layout>
                    <h1 className="text-6xl font-bold">
                        Food
                    </h1>

                    <p className="mt-3 text-2xl">
                        Mancation '22 &mdash; Albuquerque, NM
                    </p>

                    <div className="bg-white shadow overflow-hidden sm:rounded-lg my-12">
                        <div className="px-4 py-5 sm:px-6">
                            <h3 className="text-lg leading-6 font-medium text-gray-900">Schedule</h3>
                        </div>
                        <div className="border-t border-gray-200">
                            <dl>
                                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Friday, August 26th</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        <ul>
                                            <li>Breakfast: N/A</li>
                                            <li>Lunch: N/A</li>
                                            <li>Dinner: Restaurant</li>
                                        </ul>
                                    </dd>
                                </div>
                                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Saturday, August 27th</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        <ul>
                                            <li>Breakfast: Pancakes</li>
                                            <li>Lunch: Sandwiches</li>
                                            <li>Dinner: Brewery</li>
                                        </ul>
                                    </dd>
                                </div>
                                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Sunday, August 28th</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        <ul>
                                            <li>Breakfast: DIY</li>
                                            <li>Lunch: DIY</li>
                                            <li>Dinner: Burgers</li>
                                        </ul>
                                    </dd>
                                </div>
                                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Monday, August 29th</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        <ul>
                                            <li>Breakfast: DIY</li>
                                            <li>Lunch: DIY</li>
                                            <li>Dinner: Mystery BBQ</li>
                                        </ul>
                                    </dd>
                                </div>
                                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Tuesday, August 30th</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        <ul>
                                            <li>Breakfast: DIY</li>
                                            <li>Lunch: DIY</li>
                                            <li>Dinner: N/A</li>
                                        </ul>
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>

                    <div className="bg-white shadow overflow-hidden sm:rounded-lg my-12">
                        <div className="px-4 py-5 sm:px-6">
                            <h3 className="text-lg leading-6 font-medium text-gray-900">Grocery List</h3>
                        </div>
                        <div className="border-t border-gray-200">
                            <dl>
                                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Burgers</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        <ul>
                                            <li>Buns: 12ish</li>
                                            <li>Burger Meat: 4 lbs</li>
                                            <li>Burger Toppings</li>
                                            <li>Burger Condiments</li>
                                        </ul>
                                    </dd>
                                </div>
                                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Sandwiches</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        <ul>
                                            <li>Sandwich Bread (enough for 6-12 sandwiches)</li>
                                            <li>Sandwich Meats &amp; Cheeses</li>
                                            <li>Sandwich Toppings</li>
                                            <li>Sandwich Condiments</li>
                                        </ul>
                                    </dd>
                                </div>
                                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Mystery BBQ</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        <ul>
                                            <li>Mystery Main</li>
                                            <li>Myster Side(s)</li>
                                        </ul>
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>

                </Layout>
            </div>
        </div>
    )
}

export default Food
