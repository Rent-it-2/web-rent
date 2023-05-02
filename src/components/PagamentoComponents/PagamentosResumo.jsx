import React from "react";

const PagamentosResumo = ({ data, item, user }) => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-rentBlue font-semibold font-poppins">
        Dados do Produto
      </h1>

      <div className="flex border-[1px] rounded-lg text-gray-500 gap-5 p-2 items-center">
        <i className="mdi mdi-tag-text text-[45px] px-4"/>

        <div className="flex flex-col gap-3">
          <div className="flex-col justify-start">
            <p className="text-sm font-semibold">{item.nome}</p>
            <p className="text-sm">{item.categoria}</p>
            <div className="flex items-end">
              <h2 className="text-sm">R$ {item.valorDia} </h2>
              <span className="text-xs">/dia</span>
            </div>
          </div>

          <div className="">
            <p className="text-sm font-semibold">Devolução do Prevista:</p>
            <h2 className="text-sm">{data.dtFim} </h2>
          </div>
        </div>
      </div>

      <h1 className="text-rentBlue font-semibold font-poppins">
        Forma de Pagamento
      </h1>

      <div className="flex border-[1px] rounded-lg text-gray-500 gap-5 p-2 items-center">
        <i className="mdi mdi-credit-card text-[45px] px-4"/>

        <div className="flex flex-col gap-3">
          <p className="text-sm font-semibold">Mastercard {user.cartaoNum}</p>
          <div className="flex-col justify-start">
            <p className="text-sm">Crédito(O pagamento será cobrado recorreramente se o produto não for devolvido)</p>
          </div>
        </div>
      </div>

      <h1 className="text-rentBlue font-semibold font-poppins">
        Endereço de Cobrança
      </h1>
      <div className="flex border-[1px] rounded-lg text-gray-500 gap-5 p-2 items-center">
        <i className="mdi mdi-home text-[45px] px-4"/>

        <div className="flex flex-col gap-3">
          {/* <p className="text-sm font-semibold">Mastercard {user.cartaoNum}</p>
          <div className="flex-col justify-start">
            <p className="text-sm">Crédito(O pagamento será cobrado recorreramente se o produto não for devolvido)</p>
          </div> */}
        </div>
      </div>

    </div>
  );
};

export default PagamentosResumo;
