import React from "react";
import Link from "next/link";
import Layout from "@/layout/Layout";

export default function Home() {
  return <div>
  {/* Article 1 */}
    <Layout style={{background: '#fff8ee'}}>
    <article className="article1" style={{background: '#fff8ee', height: '500px'}}>
                <div className="row container p-5">
                    <div className="col-6 ms-5 mt-2">
                        <h2 className="trade font-bold mt-20" style={{color: '#CC3333', padding: '8px 30px', fontSize: '50px', }}data-aos="fade-up">Madang Resto</h2>
                        <p className="trademark font-semibold pl-8">Whenever hungry choose <span style={{color: '#CC3333', fontSize: '25px'}}><b>Madang</b></span></p>
                        <p className="font-semibold pl-8 pt-3">
                            <Link href="/food">
                            <button className="rounded-lg" style={{background: '#CC3333', color: 'aliceblue', padding: '8px 30px', fontSize: '12px'}}>
                                    <b>Discover Menu</b>
                            </button>
                            </Link>
                        </p>  

                    </div>
                </div>
            </article>

    </Layout>
          
        </div>;
}