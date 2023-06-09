import React, { useContext, useEffect, useState } from "react";
import CardCartao from "../CardCartao";
import { styles } from "../../styles";
import { DateTimeField, LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { getUserCartoes } from "../../api";
import { ItemContext } from "../../contexts/ItemContext";
import { AuthContext } from "../../contexts/Auth";
import { cartoes } from "../../constants";

const PagamentosFormaPag = ({ data, updateFieldHandler }) => {
  // const { cartoes } = useContext(AuthContext);

  // const getCartoes = async () => {
  //   try {
  //     const resposta = await getUserCartoes().then((res) => {
  //       console.log(res.data);
  //       setCartoes(res.data);
  //     });
  //     return resposta;
  //   } catch (error) {
  //     console.log(error);
  //     return null;
  //   }
  // };

  // useEffect(() => {
  //   getCartoes();
  // }, []);

  const dateFormatAux = (date) => {
    var d = new Date(date)
    //   ,month = "" + (d.getMonth() + 1),
    //   day = "" + d.getDate(),
    //   year = "" + d.getFullYear();

    // if (month.length < 2) month = "0" + month;
    // if (day.length < 2) day = "0" + day;
    // return [day, month, year].join("/");
    return d.toISOString();
  };

  const dateFormat = (key, date) => {
    console.log(key, dateFormatAux(date));

    updateFieldHandler(key, dateFormatAux(date));
  };

  return (
    <div className="flex flex-wrap gap-5 px-5 sm:px-10">
      <div className="w-full flex flex-col gap-5">
        <h2 className="text-rentBlue font-semibold font-poppins">
          Período que é pretendido para locação do item
        </h2>

        <div className="w-full flex flex-wrap gap-5 items-center sm:flex-nowrap">
          <div className="w-full flex items-center gap-2">
            <label className="text-sm text-rentBlue">De:</label>
            <LocalizationProvider
              dateAdapter={AdapterDayjs}
              className={`w-full appearance-none`}
            >
              <DemoContainer components={["MobileDatePicker"]}>
                <DemoItem>
                  <MobileDatePicker
                    className={`${styles.inputPadrao}`}
                    onChange={(date) => {
                      dateFormat("dtInicio", date);
                    }}
                    required
                  />
                </DemoItem>
              </DemoContainer>
            </LocalizationProvider>

              {/* <DemoContainer components={["MobileDatePicker"]}>
                <DemoItem>
                  <MobileDatePicker
                    className={`${styles.inputPadrao}`}
                    // onChange={(date) => {
                    //   dateFormat("dtInicio", date);
                    // }}
                    // onChange={(e) => {
                    //   updateFieldHandler("dateInicio", e.target.value);
                    // }}
                    required
                  />
                </DemoItem>
              </DemoContainer>
            </LocalizationProvider> */}
          </div>

          <hr className="hidden w-full sm:block" />

          <div className="w-full flex items-center gap-2">
            <label className="text-sm text-rentBlue">Até:</label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["MobileDatePicker"]}>
                <DemoItem>
                  <MobileDatePicker
                    // onChange={(e) => {
                    //   updateFieldHandler("dateFim", e.target.value);
                    // }}
                    onChange={(date) => {
                      dateFormat("dtFim", date);
                    }}
                    required
                  />
                </DemoItem>
              </DemoContainer>
            </LocalizationProvider>
          </div>
        </div>
      </div>

      <h2 className="text-rentBlue font-semibold font-poppins">
        Forma de Pagamento
      </h2>

      <div className="w-full flex flex-wrap gap-5 justify-center lg:justify-start">
        {cartoes?.map((cartao) => (
          <CardCartao cartaoInfos={cartao}>
            <input
              type="radio"
              name="cartaoId"
              defaultChecked={data.cartaoId == cartao.id}
              value={cartao.id}
              onChange={(e) => updateFieldHandler("cartaoId", e.target.value)}
            />
          </CardCartao>
        ))}

{/* {cartoes?.map((cartao) => (
          <CardCartao cartaoInfos={cartao} showEdit={true} />
        ))} */}
      </div>
    </div>
  );
};

export default PagamentosFormaPag;
