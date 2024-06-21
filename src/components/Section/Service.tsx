import React from 'react';
import { useRouter } from 'next/router';
import CardSevice from '../Card/Cardservice';

type ServiceProps = {
    service: any[];
    type: string;  
};

const Service = (props: ServiceProps) => {
    const router = useRouter();

    return (
        <section>
            <div className="container">
                <div className="text-center mb-5">
                    <p className="semi-bold font__size--14 text__14-1024 color__orange text-uppercase">service</p>
                    <h3 className="bold font__size--58 text__50-1024 text__50-sm text__50-xs text-uppercase">our service</h3>
                </div>

                <div className="row mb-5">
                    {
                        props.service.map((obj) => {
                            return <div className="col-lg-4 mb-4">
                                <CardSevice data={obj} />
                            </div>
                        })
                    }
                </div>

                {
                    props.type != "service" ? <div className="text-center">
                        <div className="d-inline-block">
                            <button
                                onClick={() => router.push("/service")}
                                className="semi-bold font__size--14 text__14-1024 btn btn__outlined--orange color__orange no__opacity rounded-0 shadow text-uppercase">explore all service</button>
                        </div>
                    </div> : ""
                }

            </div>
        </section>
    )
}

export default Service;