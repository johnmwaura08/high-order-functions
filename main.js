const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
  /*****//////ForEach()///*/
//  using for loop
  // for (let i =0; i< companies.length; i++){
  //   console.log(companies[i]);

  // }
 //now look at forEach

//  companies.forEach(function(mzegede){ //the variable that goes inside the function could be anything i mean any name. you can do mzegede.name or even mzegede.start
//    console.log(mzegede.category)
//  })




  //////////////Filter()
//lets use for loop first to get 21 & over

// let canDrink = []; //we're defining an empty array first
// for( let i =0; i< ages.length; i++){
//   if ( ages[i] >= 21){
//     canDrink.push(ages[i]);
//   }

// }
// console.log(canDrink); 

// using arrow function with the filter

 const canDrink = ages.filter( age => age>=21);
 console.log(canDrink); 
 // filter retail companies
  // const retailCompanies = companies.filter(function(company){
  //     if(company.category === "Retail"){
  //       return true;
  //     }
  // });


// now using arrow functions

const retailCompanies = companies.filter( company=> company.category === "Retail");
  console.log(retailCompanies);
  

  // Get 80's companies

  const eightiesCompanies =  companies.filter( company => (company.start>= 1980 && company.start < 1990));
  console.log( eightiesCompanies);

  // get companies that lasted 10 yrs
  const lastedTenYears = companies.filter ( company=> ( company.end - company. start >=10));
  console.log(lastedTenYears);



  ////////////////////////////////////////////////////////Map()


  //create array of company names

  // const companyNames = companies.map(function(company){
  //   return company.name;

  // });

  // console.log (companyNames);
 // 
//   const companyNames = companies.map ( company => company.name); //see, arrow functions are so so much easier. basically map is like getting stuff from an array and putting it into another
//   console.log (companyNames);




// const testMap = companies.map(company => `${company.name} [${company.start}- ${company.end}]`); //such an easier way
// console.log(testMap);

// const tryMap = companies.map ( kampuni=> `${kampuni.name} : ${kampuni.category}`);
// console.log(tryMap);

const jaribuMap = companies.map ( kampuni=> `${kampuni.name}: ${kampuni.category}: [${kampuni.start}-${kampuni.end}]`); //you get the idea now. the dollar sign and curly braces and the inverted apostrophe make work easier
console.log (jaribuMap);


//get ages and squareroot  them


const agesSquare = ages.map (age => Math.sqrt(age)); //we get an array of the square root of the ages
console.log(agesSquare);

//lets try ages times 2

const agesTimesTwo = ages.map ( age => (age * 2));
console.log ( agesTimesTwo);

// lets square root them and then times by two

const ageMap = ages
   .map(age => Math.sqrt(age))   //you'll have to put them on separate lines. its like basically combining the map functions. map is very powerful man
   .map(age => (age*2));

   console.log(ageMap);


  /////////////////////////////////////////////Sort()


  //lets sort the companies by the start years

  // const sortedCompanies = companies.sort( function(c1, c2){
  //   if (c1.start > c2.start){
  //     return 1;
  //   }    // this returns the companies with theirs starting date in order
  //   else {
  //     return -1;
  //   }

  // }); 

  // lets write that in a shorter form

const sortedCompanies = companies.sort((a,b) => ( a.start > b.start ? 1 : -1)); //so much easier plus we used a ternary operator // c1,c2 is the same as a,b..a, b is just the industry standard


  console.log(sortedCompanies);
  //sort ages

  const sortAges = ages.sort( (a,b) => a -b ); //gives the ages in ascending order 
   // if you want the ages in descending order go ahead and do b - a
  //  const sortAges = ages.sort( (a,b) => b -a ); 

  console.log(sortAges);



///////////////////////////////////////  ///////Reduce()


//lets add all the ages together

// let ageSum = 0; // lets try with a for loop first
// for ( let i =0; i < ages.length; i++){
//   ageSum += ages[i];
// }
//  // now look at the elegant way using es6

const ageSum = ages.reduce ((total,miaka) => total + miaka, 0);


console.log(ageSum);
// get total years for all companies

const totalYears = companies.reduce ((total, company ) => total + ( company.end - company.start) , 0);

console.log(totalYears);

//////////////////////////////////////// combine methods
 const combined = ages
   .map ( age => (age * 2)) // this will give us an array of all the ages times two
  .filter( age => ( age >= 40)) // we're filtering all the ages that are 40 and above
 .sort((a,b) => a-b) // sorted from lowest to highest
 .reduce ((a, b ) => a+ b ,0);

console.log( combined);
