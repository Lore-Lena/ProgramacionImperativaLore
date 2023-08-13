const totalAPagar = (vehiculo,litrosConsumidos) => {
    let condicion = 0;
  
    if (vehiculo === "coche") {
      // bloque
      condicion = 86;
    } else if (vehiculo === "moto") {
      // bloque
      condicion = 70;
    } else if (rolUsuario === "autobus") {
      // bloque
      condicion = 55;
    } else {
      // bloque
      condicion = "ingrese vehículo correcto";
    }
    
    let total=0;

  if (litrosConsumidos>=0 && litrosConsumidos<=25) {
    // bloque
    total = condicion*litrosConsumidos+50;
  } else{
    // bloque
    total = condicion*litrosConsumidos+25;
  }
      return total;
  };
  
  let totalFinal = totalAPagar("coche",20);
  console.log(totalFinal);

  


  