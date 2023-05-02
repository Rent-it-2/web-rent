import React from "react";

const Stepper = ({ currentStep }) => {
  return (
    <div className="w-full flex items-start justify-around gap-5">
      
      <div className={`text-primary text-center`}>
        <i className="mdi mdi-numeric-1-circle text-[35px]"></i>
        <h1 className="text-xs">Informações Pessoais</h1>
      </div>

      <hr
        className={`w-full mt-10 h-[2px] ${
          currentStep >= 1 ? "bg-primary" : "bg-gray-400"
        }`}
      />

      <div
        className={`text-center ${
          currentStep >= 1 ? "text-primary" : "text-gray-400"
        }`}
      >
        <i className="mdi mdi-numeric-2-circle text-[35px]"></i>
        <h1 className="text-xs"> Forma de Pagamento</h1>
      </div>

      
      <hr
        className={`w-full mt-10 h-[2px] ${
          currentStep >= 2 ? "bg-primary" : "bg-gray-400"
        }`}
      />

      <div
        className={`text-center ${
          currentStep >= 2 ? "text-primary" : "text-gray-400"
        }`}
      >
        <i className="mdi mdi-numeric-3-circle text-[35px]"></i>
        <h1 className="text-xs">Resumo</h1>
      </div>
    </div>
  );
};

export default Stepper;
