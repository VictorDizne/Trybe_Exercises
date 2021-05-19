let salary = 10000;
let ir;
let inss;
let salaryMenosInss;
let irMenosParcela;
let liquidSalary;

if (salary < 1600){
  inss = (salary / 100) * 8;
  salaryMenosInss = salary - inss;
  console.log(salaryMenosInss);
}
else if (salary < 2600){
  inss = (salary / 100) * 9;
  salaryMenosInss = salary - inss;
  if (salaryMenosInss > 1900){
    ir = (salaryMenosInss / 100) * 7,5;
    irMenosParcela = ir - 143;
    liquidSalary = salaryMenosInss - irMenosParcela;
    console.log(liquidSalary);
  }
  else{
    liquidSalary = salaryMenosInss;
    console.log(liquidSalary);
  }
}
else if (salary < 5200){
  inss = (salary / 100) * 11;
  salaryMenosInss = salary - inss;
  if (salaryMenosInss < 3800){
    ir = (salaryMenosInss / 100) * 15;
    irMenosParcela = ir - 355;
    liquidSalary = salaryMenosInss - irMenosParcela;
    console.log(liquidSalary);
  }
  else{
    ir = (salaryMenosInss / 100) * 22.5;
    irMenosParcela = ir - 636;
    liquidSalary = salaryMenosInss - irMenosParcela;
    console.log(liquidSalary);
  }
}
else {
  inss = 570;
  salaryMenosInss = salary - inss;
  if (salaryMenosInss < 4700){
    ir = (salaryMenosInss / 100) * 22.5;
    irMenosParcela = ir - 636;
    liquidSalary = salaryMenosInss - irMenosParcela;
    console.log(liquidSalary);
  }
  else {
    ir = (salaryMenosInss / 100) * 27.5;
    irMenosParcela = ir - 870;
    liquidSalary = salaryMenosInss - irMenosParcela;
    console.log(liquidSalary);
  }
}
