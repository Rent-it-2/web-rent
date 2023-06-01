import React, { useEffect, useState } from "react";
import { footerLinksAjuda, footerLinksLcd, footerLinksLct } from '../constants';


const Footer = () => {
    return (
        <section className='w-full'>


            <div className="w-full flex flex-wrap gap-10 bg-white p-8 flex-row sm:gap-0">
                <div className="sm:w-2/5">
                    <img src="../../public/logo.svg" alt="home" />
                    <h2 className="text-gray-400 max-w-xs">Sua plataforma número 1 para aluguel de produtos.</h2>
                </div>
                <FooterDiv2/>
                <FooterDiv3/>
            </div>
        </section>
    )
}

const FooterDiv2 = () => {
    return (
        <div className="p-r-10 gap-5 flex flex-col text-rentBlue sm:w-1/5">
            <div className="">
                <h2 className="font-extrabold text-sm">Locatário</h2>
                <ul className='w-full list-none flex-col gap-2 flex'>
                    {footerLinksLct.map((nav) => (
                        <li
                            key={nav.id}
                            className={`text-gray-400 hover:text-secondary text-[18px] font-medium `}
                        >
                            <a href={`${nav.link}`} className="text-xs min-w-fit font-light" >{nav.title}</a>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h2 className="font-extrabold text-sm">Locador</h2>
                <ul className='w-full list-none flex-col gap-2 flex'>
                    {footerLinksLcd.map((nav) => (
                        <li
                            key={nav.id}
                            className={`text-gray-400 hover:text-secondary text-[18px] font-medium `}
                        >
                            <a href={`${nav.link}`} className="text-xs min-w-fit font-light" >{nav.title}</a>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    );
}

const FooterDiv3 = () => {

    return (
        <div className="gap-5 flex flex-col justify-between text-rentBlue sm:w-2/5">

            <ul className='w-full list-none flex-col justify-between flex'>
                <h2 className="font-extrabold text-sm">
                    <a href="https://wa.me/5511976408492?text=Ol%C3%A1%21+PRECISO+DE+AJUDA%21">Ajuda</a>
                </h2>
                {footerLinksAjuda.map((nav) => (
                    <li
                        key={nav.id}
                        className={`text-gray-400 hover:text-secondary text-[18px] font-medium `}
                        onClick={() => setActive(nav.title)}
                    >
                        <a target="_blank" key={nav.id}  href={`${nav.link}`} className="text-xs min-w-fit font-light" >{nav.title}</a>
                    </li>
                ))}
            </ul>

            <ul className="flex flex-wrap w-full justify-between self-end gap-10 sm:gap-0">

                <li className="flex flex-col gap-5">
                    <a href="" className="text-xs text-gray-400 hover:text-secondary font-medium">Termos e condições</a>
                    <a href="" className="text-xs text-gray-400 hover:text-secondary font-medium">Política de uso de dados</a>
                </li>

                <div>
                    <h2 className="font-extrabold text-sm">Siga-nos</h2>
                    <div className="flex justify-between">
                        <a href=""><i className="mdi mdi-instagram text-[35px] hover:text-secondary"/></a>
                        <a href=""><i className="mdi mdi-twitter text-[35px] hover:text-secondary"/></a>
                        <a href=""><i className="mdi mdi-linkedin text-[35px] hover:text-secondary"/></a>
                    </div>
                </div>
            </ul>
        </div>
    );
}

export default Footer;