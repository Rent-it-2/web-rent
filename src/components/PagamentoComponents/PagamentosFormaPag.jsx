import React, { useEffect, useState } from "react";
import CardCartao from "../CardCartao";
import { IMaskInput } from "react-imask";
import { styles } from "../../styles";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const PagamentosFormaPag = ({ data, userInfos, updateFieldHandler }) => {
  const [selectedDateIni, setSelectedDateIni] = useState(new Date());
  const [selectedDateFim, setSelectedDateFim] = useState(new Date());

  const dateFormatAux = (date) => {
    var d = new Date(date),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = "" + d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
    return [ year, month, day].join("/");
  };

  const dateFormat = (key, date) => {
    let format = new Date();

    if(key === "dtFim"){
      setSelectedDateFim(date);
      format = dateFormatAux(selectedDateFim);
    };
    if(key === "dtIni"){
      setSelectedDateIni(date)
      format = dateFormatAux(selectedDateIni);
    };
    
    console.log(key, format);
    updateFieldHandler(key, format);
  };

  return (
    <div className="flex flex-wrap gap-5 px-5 sm:px-10">
      <div className="w-full flex flex-col gap-5">
        <h2 className="text-rentBlue font-semibold font-poppins">
          Período que é pretendido para locação do item
        </h2>

        <div className="w-full flex flex-wrap gap-5 sm:flex-nowrap">
          <div className="w-full flex items-center gap-2">
            <label className="text-sm text-rentBlue">De:</label>

            {/* <IMaskInput
              type="text"
              name="dtIni"
              as={IMaskInput}
              mask="00/00/0000"
              placeholder="00/00/0000"
              value={data.dtIni || ""}
              onChange={(e) => updateFieldHandler("dtIni", e.target.value)}
              className={`${styles.inputPadrao}`}
            /> */}

            <DatePicker
              id="dtIni"
              selected={selectedDateIni}
              dateFormat={"dd/MM/yyyy"}
              placeholderText="00/00/0000"
              onChange={(date) => {
                dateFormat("dtIni", date);
              }}
              className={`${styles.inputPadrao}`}
            />
          </div>

          <div className="w-full flex items-center gap-2">
            <label className="text-sm text-rentBlue">Até:</label>
            <DatePicker
              id="dtFim"
              selected={selectedDateFim}
              dateFormat={"dd/MM/yyyy"}
              placeholderText="00/00/0000"
              onChange={(date) => {
                dateFormat("dtFim", date);
              }}
              className={`${styles.inputPadrao}`}
            />
          </div>
        </div>
      </div>

      <h2 className="text-rentBlue font-semibold font-poppins">
        Forma de Pagamento
      </h2>

      <div className="w-full flex flex-wrap gap-5 justify-center lg:justify-start">
        <CardCartao cartaoInfos={userInfos} showEdit={false}>
          <input
            type="radio"
            name="cartaoId"
            defaultChecked={data.cartaoId === userInfos.cartaoId}
            value={userInfos.cartaoId}
            onChange={(e) => updateFieldHandler("cartaoId", e.target.value)}
          />
        </CardCartao>

        <CardCartao cartaoInfos={userInfos} showEdit={false}>
          <input
            type="radio"
            name="cartaoId"
            defaultChecked={data.cartaoId === userInfos.cartaoId2}
            value={userInfos.cartaoId2}
            onChange={(e) => updateFieldHandler("cartaoId", e.target.value)}
          />
        </CardCartao>
      </div>
    </div>
  );
};

export default PagamentosFormaPag;
