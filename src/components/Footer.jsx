import React, { useEffect, useState } from "react";
import { footerLinksAjuda, footerLinksLcd, footerLinksLct } from '../constants';

const Footer = () => {
    const [active, setActive] = useState("");
    return (
        <section className='w-full'>


            <div className="w-full bg-rentWhite p-8 flex flex-row">
                <div className="w-2/5">
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
        <div className="w-1/5 p-r-10 gap-5 flex flex-col text-rentBlue">
            <div className="">
                <h2 className="font-extrabold text-sm">Locatário</h2>
                <ul className='w-full list-none flex-col gap-2 flex'>
                    {footerLinksLct.map((nav) => (
                        <li
                            key={nav.id}
                            className={`text-gray-400 hover:text-secondary text-[18px] font-medium cursor-pointer`}
                            onClick={() => setActive(nav.title)}
                        >
                            <a href={`#${nav.id}`} className="text-xs min-w-fit font-light" >{nav.title}</a>
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
                            className={`text-gray-400 hover:text-secondary text-[18px] font-medium cursor-pointer`}
                            onClick={() => setActive(nav.title)}
                        >
                            <a href={`#${nav.id}`} className="text-xs min-w-fit font-light" >{nav.title}</a>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    );
}

const FooterDiv3 = () => {

    return (
        <div className="w-2/5 gap-5 flex flex-col justify-between text-rentBlue">

            <ul className='w-full list-none flex-col justify-between flex'>
                <h2 className="font-extrabold text-sm">Ajuda</h2>
                {footerLinksAjuda.map((nav) => (
                    <li
                        key={nav.id}
                        className={`text-gray-400 hover:text-secondary text-[18px] font-medium cursor-pointer`}
                        onClick={() => setActive(nav.title)}
                    >
                        <a href={`#${nav.id}`} className="text-xs min-w-fit font-light" >{nav.title}</a>
                    </li>
                ))}
            </ul>

            <ul className="flex w-full justify-between self-end">

                <li className="flex flex-col gap-5">
                    <a href="" className="text-xs text-gray-400 hover:text-secondary font-medium cursor-pointer">Termos e condições</a>
                    <a href="" className="text-xs text-gray-400 hover:text-secondary font-medium cursor-pointer">Política de uso de dados</a>
                </li>

                <div>
                    <h2 className="font-extrabold text-sm">Siga-nos</h2>
                    <div className="flex justify-between">
                        <a href=""><img src="../../public/icon.svg" alt="twitter" className="w-10" /></a>
                        <a href=""><img src="../../public/icon.svg" alt="twitter" className="w-10" /></a>
                        <a href=""><img src="../../public/icon.svg" alt="twitter" className="w-10" /></a>
                    </div>
                </div>
            </ul>
        </div>
    );
}

export default Footer;