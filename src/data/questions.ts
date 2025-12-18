export interface Question {
  id: number;
  questionEn: string;
  questionHi: string;
  options: {
    en: string[];
    hi: string[];
  };
  correctOption: number;
}

export const questions: Question[] = [
  {
    id: 1,
    questionEn: "When a number is divided by 56, the remainder is 29. What will be the remainder if the same number is divided by 8?",
    questionHi: "जब किसी संख्या को 56 से विभाजित किया जाता है, तो शेषफल 29 आता है। यदि उसी संख्या को 8 से विभाजित किया जाए तो शेषफल क्या होगा?",
    options: {
      en: ["4", "5", "3", "7"],
      hi: ["4", "5", "3", "7"]
    },
    correctOption: 2
  },
  {
    id: 2,
    questionEn: "The HCF and LCM of two numbers are 12 and 240 respectively. If one of the numbers is 48, find the other number.",
    questionHi: "दो संख्याओं का म.स.प. (HCF) और ल.स.प. (LCM) क्रमशः 12 और 240 है। यदि उनमें से एक संख्या 48 है, तो दूसरी संख्या ज्ञात कीजिए।",
    options: {
      en: ["50", "60", "72", "80"],
      hi: ["50", "60", "72", "80"]
    },
    correctOption: 2
  },
  {
    id: 3,
    questionEn: "A number is increased by 20% and then decreased by 20%. The final value of the number is:",
    questionHi: "एक संख्या में 20% की वृद्धि और फिर 20% की कमी की जाती है। संख्या का अंतिम मान:",
    options: {
      en: ["Same as before", "Decreased by 4%", "Increased by 4%", "Decreased by 2%"],
      hi: ["पहले जैसा", "4% कम", "4% अधिक", "2% कम"]
    },
    correctOption: 2
  },
  {
    id: 4,
    questionEn: "A shopkeeper sells an article at a profit of 20%. If he had bought it at 10% less and sold it for ₹18 less, he would have gained 30%. Find the Cost Price.",
    questionHi: "एक दुकानदार एक वस्तु को 20% लाभ पर बेचता है। यदि उसने इसे 10% कम पर खरीदा होता और ₹18 कम में बेचता, तो उसे 30% लाभ होता। क्रय मूल्य ज्ञात कीजिए।",
    options: {
      en: ["₹600", "₹700", "₹800", "₹900"],
      hi: ["₹600", "₹700", "₹800", "₹900"]
    },
    correctOption: 3
  },
  {
    id: 5,
    questionEn: "If x : y = 3 : 4 and y : z = 5 : 7, then find x : y : z.",
    questionHi: "यदि x : y = 3 : 4 और y : z = 5 : 7, तो x : y : z ज्ञात कीजिए।",
    options: {
      en: ["15 : 20 : 28", "15 : 20 : 21", "12 : 20 : 28", "3 : 9 : 7"],
      hi: ["15 : 20 : 28", "15 : 20 : 21", "12 : 20 : 28", "3 : 9 : 7"]
    },
    correctOption: 1
  },
  {
    id: 6,
    questionEn: "The average weight of 8 persons increases by 2.5 kg when a new person comes in place of one of them weighing 65 kg. What is the weight of the new person?",
    questionHi: "8 व्यक्तियों का औसत भार 2.5 किलो बढ़ जाता है जब उनमें से 65 किलो भार वाले व्यक्ति के स्थान पर एक नया व्यक्ति आता है। नए व्यक्ति का भार कितना है?",
    options: {
      en: ["75 kg", "80 kg", "85 kg", "90 kg"],
      hi: ["75 किग्रा", "80 किग्रा", "85 किग्रा", "90 किग्रा"]
    },
    correctOption: 3
  },
  {
    id: 7,
    questionEn: "A sum of money amounts to ₹850 in 3 years and ₹925 in 4 years at simple interest. What is the sum?",
    questionHi: "साधारण ब्याज पर एक धनराशि 3 वर्ष में ₹850 और 4 वर्ष में ₹925 हो जाती है। धनराशि क्या है?",
    options: {
      en: ["₹600", "₹625", "₹650", "₹700"],
      hi: ["₹600", "₹625", "₹650", "₹700"]
    },
    correctOption: 2
  },
  {
    id: 8,
    questionEn: "A train 240 m long passes a pole in 24 seconds. How long will it take to pass a platform 650 m long?",
    questionHi: "240 मीटर लंबी एक ट्रेन एक खंभे को 24 सेकंड में पार करती है। 650 मीटर लंबे प्लेटफॉर्म को पार करने में इसे कितना समय लगेगा?",
    options: {
      en: ["65 sec", "89 sec", "100 sec", "150 sec"],
      hi: ["65 सेकंड", "89 सेकंड", "100 सेकंड", "150 सेकंड"]
    },
    correctOption: 2
  },
  {
    id: 9,
    questionEn: "If 2x + 3y = 23 and xy = 10, find the value of 4x² + 9y².",
    questionHi: "यदि 2x + 3y = 23 और xy = 10, तो 4x² + 9y² का मान ज्ञात कीजिए।",
    options: {
      en: ["400", "409", "429", "329"],
      hi: ["400", "409", "429", "329"]
    },
    correctOption: 2
  },
  {
    id: 10,
    questionEn: "The diagonal of a rectangle is √41 cm and its area is 20 sq. cm. The perimeter of the rectangle is:",
    questionHi: "एक आयत का विकर्ण √41 सेमी है और इसका क्षेत्रफल 20 वर्ग सेमी है। आयत का परिमाप है:",
    options: {
      en: ["18 cm", "20 cm", "9 cm", "24 cm"],
      hi: ["18 सेमी", "20 सेमी", "9 सेमी", "24 सेमी"]
    },
    correctOption: 1
  },
  {
    id: 11,
    questionEn: "Fresh fruit contains 68% water and dry fruit contains 20% water. How much dry fruit can be obtained from 100 kg of fresh fruits?",
    questionHi: "ताजे फलों में 68% पानी होता है और सूखे फलों में 20% पानी होता है। 100 किग्रा ताजे फलों से कितने सूखे फल प्राप्त किए जा सकते हैं?",
    options: {
      en: ["32 kg", "40 kg", "52 kg", "80 kg"],
      hi: ["32 किग्रा", "40 किग्रा", "52 किग्रा", "80 किग्रा"]
    },
    correctOption: 2
  },
  {
    id: 12,
    questionEn: "A man rows upstream 16 km and downstream 28 km taking 5 hours each time. What is the velocity of water?",
    questionHi: "एक व्यक्ति धारा के विपरीत 16 किमी और धारा के अनुकूल 28 किमी जाने में प्रत्येक बार 5 घंटे लेता है। पानी का वेग क्या है?",
    options: {
      en: ["1.2 km/hr", "2.4 km/hr", "1.8 km/hr", "3 km/hr"],
      hi: ["1.2 किमी/घंटा", "2.4 किमी/घंटा", "1.8 किमी/घंटा", "3 किमी/घंटा"]
    },
    correctOption: 1
  },
  {
    id: 13,
    questionEn: "A boat goes 6 km upstream in 24 minutes. If the speed of the stream is 2 km/hr, find the speed of boat in still water.",
    questionHi: "एक नाव 24 मिनट में धारा के विपरीत 6 किमी जाती है। यदि धारा की गति 2 किमी/घंटा है, तो शांत पानी में नाव की गति ज्ञात कीजिए।",
    options: {
      en: ["17 km/hr", "12 km/hr", "15 km/hr", "10 km/hr"],
      hi: ["17 किमी/घंटा", "12 किमी/घंटा", "15 किमी/घंटा", "10 किमी/घंटा"]
    },
    correctOption: 1
  },
  {
    id: 14,
    questionEn: "The difference between CI and SI on a certain sum at 10% per annum for 2 years is ₹20. Find the principal.",
    questionHi: "किसी धनराशि पर 10% वार्षिक ब्याज दर से 2 वर्ष में चक्रवृद्धि ब्याज और साधारण ब्याज का अंतर ₹20 है। मूलधन ज्ञात कीजिए।",
    options: {
      en: ["₹1000", "₹2000", "₹1500", "₹2500"],
      hi: ["₹1000", "₹2000", "₹1500", "₹2500"]
    },
    correctOption: 2
  },
  {
    id: 15,
    questionEn: "A can do a piece of work in 10 days, B can do in 15 days. How long will they take together?",
    questionHi: "A एक काम को 10 दिन में कर सकता है, B 15 दिन में कर सकता है। वे एक साथ कितने दिन में करेंगे?",
    options: {
      en: ["5 days", "6 days", "7 days", "8 days"],
      hi: ["5 दिन", "6 दिन", "7 दिन", "8 दिन"]
    },
    correctOption: 2
  },
  {
    id: 16,
    questionEn: "A retailer buys goods at a discount of 20% on MRP. If he sells at MRP, his profit percent is?",
    questionHi: "एक खुदरा विक्रेता MRP पर 20% छूट पर सामान खरीदता है। यदि वह MRP पर बेचता है, तो उसका लाभ प्रतिशत क्या है?",
    options: {
      en: ["20%", "25%", "30%", "15%"],
      hi: ["20%", "25%", "30%", "15%"]
    },
    correctOption: 2
  },
  {
    id: 17,
    questionEn: "If A works twice as fast as B and together they finish work in 4 days, in how many days B alone can finish?",
    questionHi: "यदि A, B से दोगुना तेज काम करता है और वे एक साथ 4 दिन में काम खत्म करते हैं, तो B अकेले कितने दिन में काम खत्म करेगा?",
    options: {
      en: ["6 days", "12 days", "8 days", "10 days"],
      hi: ["6 दिन", "12 दिन", "8 दिन", "10 दिन"]
    },
    correctOption: 2
  },
  {
    id: 18,
    questionEn: "Find the compound interest on ₹5000 at 10% per annum for 2 years compounded annually.",
    questionHi: "₹5000 पर 10% वार्षिक दर से 2 वर्ष का चक्रवृद्धि ब्याज ज्ञात कीजिए (वार्षिक संयोजन)।",
    options: {
      en: ["₹1000", "₹1050", "₹1100", "₹1150"],
      hi: ["₹1000", "₹1050", "₹1100", "₹1150"]
    },
    correctOption: 2
  },
  {
    id: 19,
    questionEn: "If selling price is doubled, the profit triples. Find the profit percent.",
    questionHi: "यदि विक्रय मूल्य दोगुना कर दिया जाए, तो लाभ तीन गुना हो जाता है। लाभ प्रतिशत ज्ञात कीजिए।",
    options: {
      en: ["50%", "100%", "75%", "66.67%"],
      hi: ["50%", "100%", "75%", "66.67%"]
    },
    correctOption: 2
  },
  {
    id: 20,
    questionEn: "The ratio of efficiency of A, B and C is 2:5:3. If A can finish work in 15 days, in how many days can B finish?",
    questionHi: "A, B और C की कार्यक्षमता का अनुपात 2:5:3 है। यदि A काम को 15 दिन में पूरा कर सकता है, तो B कितने दिन में पूरा करेगा?",
    options: {
      en: ["25 days", "20 days", "6 days", "10 days"],
      hi: ["25 दिन", "20 दिन", "6 दिन", "10 दिन"]
    },
    correctOption: 3
  },
  {
    id: 21,
    questionEn: "The difference of 2 numbers is 20% of the larger. If smaller is 20, find larger.",
    questionHi: "दो संख्याओं का अंतर बड़ी संख्या का 20% है। यदि छोटी संख्या 20 है, तो बड़ी संख्या ज्ञात कीजिए।",
    options: {
      en: ["20", "25", "30", "40"],
      hi: ["20", "25", "30", "40"]
    },
    correctOption: 2
  },
  {
    id: 22,
    questionEn: "A pipe can fill a tank in 20 seconds. Find time to fill 1/2 of the tank.",
    questionHi: "एक पाइप एक टंकी को 20 सेकंड में भर सकता है। टंकी का 1/2 भाग भरने में कितना समय लगेगा?",
    options: {
      en: ["5 sec", "10 sec", "15 sec", "8 sec"],
      hi: ["5 सेकंड", "10 सेकंड", "15 सेकंड", "8 सेकंड"]
    },
    correctOption: 2
  },
  {
    id: 23,
    questionEn: "Two trains of length 100m and 120m run at 72 km/h and 54 km/h in opposite direction. Time taken to cross each other?",
    questionHi: "100 मीटर और 120 मीटर लंबी दो ट्रेनें विपरीत दिशा में 72 किमी/घंटा और 54 किमी/घंटा की गति से चलती हैं। एक दूसरे को पार करने में कितना समय लगेगा?",
    options: {
      en: ["5.28 sec", "6.28 sec", "7 sec", "8 sec"],
      hi: ["5.28 सेकंड", "6.28 सेकंड", "7 सेकंड", "8 सेकंड"]
    },
    correctOption: 2
  },
  {
    id: 24,
    questionEn: "A and B start a business with ₹3000 and ₹4000 respectively. After 8 months A adds ₹2000. Find ratio of profit at end of year.",
    questionHi: "A और B क्रमशः ₹3000 और ₹4000 से व्यापार शुरू करते हैं। 8 महीने बाद A ₹2000 और जोड़ता है। वर्ष के अंत में लाभ का अनुपात ज्ञात कीजिए।",
    options: {
      en: ["11:12", "10:12", "12:11", "9:12"],
      hi: ["11:12", "10:12", "12:11", "9:12"]
    },
    correctOption: 2
  },
  {
    id: 25,
    questionEn: "A discount of 10% is given. To get final price as ₹720, what should be the marked price?",
    questionHi: "10% की छूट दी जाती है। अंतिम मूल्य ₹720 प्राप्त करने के लिए, अंकित मूल्य क्या होना चाहिए?",
    options: {
      en: ["₹700", "₹800", "₹850", "₹900"],
      hi: ["₹700", "₹800", "₹850", "₹900"]
    },
    correctOption: 2
  },
  {
    id: 26,
    questionEn: "Simplify: (0.2)² + (0.02)² + (0.002)²",
    questionHi: "सरल कीजिए: (0.2)² + (0.02)² + (0.002)²",
    options: {
      en: ["0.040404", "0.0404", "0.404", "0.00404"],
      hi: ["0.040404", "0.0404", "0.404", "0.00404"]
    },
    correctOption: 1
  },
  {
    id: 27,
    questionEn: "A is thrice as good a workman as B. If together they complete work in 15 days, in how many days can A alone finish?",
    questionHi: "A, B से तीन गुना अच्छा कारीगर है। यदि वे एक साथ 15 दिन में काम पूरा करते हैं, तो A अकेले कितने दिन में पूरा करेगा?",
    options: {
      en: ["40 days", "30 days", "20 days", "25 days"],
      hi: ["40 दिन", "30 दिन", "20 दिन", "25 दिन"]
    },
    correctOption: 3
  },
  {
    id: 28,
    questionEn: "If 6 men and 8 boys can do a work in 10 days and 26 men and 48 boys can do same work in 2 days, how many boys are equal to 1 man?",
    questionHi: "यदि 6 पुरुष और 8 लड़के एक काम को 10 दिन में करते हैं और 26 पुरुष और 48 लड़के उसी काम को 2 दिन में करते हैं, तो 1 पुरुष कितने लड़कों के बराबर है?",
    options: {
      en: ["1", "2", "3", "4"],
      hi: ["1", "2", "3", "4"]
    },
    correctOption: 2
  },
  {
    id: 29,
    questionEn: "A man walks at 5 km/hr for 6 hours and at 4 km/hr for 12 hours. His average speed is:",
    questionHi: "एक व्यक्ति 5 किमी/घंटा की गति से 6 घंटे और 4 किमी/घंटा की गति से 12 घंटे चलता है। उसकी औसत गति है:",
    options: {
      en: ["4 km/hr", "4.33 km/hr", "4.5 km/hr", "5 km/hr"],
      hi: ["4 किमी/घंटा", "4.33 किमी/घंटा", "4.5 किमी/घंटा", "5 किमी/घंटा"]
    },
    correctOption: 2
  },
  {
    id: 30,
    questionEn: "The cost of painting a wall is ₹ 4.50 per sq m. Find the cost of painting a wall of 8m × 5m with a door of 2m × 1m.",
    questionHi: "एक दीवार को पेंट करने की लागत ₹4.50 प्रति वर्ग मीटर है। 8 मीटर × 5 मीटर की दीवार जिसमें 2 मीटर × 1 मीटर का दरवाजा है, को पेंट करने की लागत ज्ञात कीजिए।",
    options: {
      en: ["₹162", "₹171", "₹180", "₹189"],
      hi: ["₹162", "₹171", "₹180", "₹189"]
    },
    correctOption: 2
  },
  {
    id: 31,
    questionEn: "A person bought an article and sold it at a loss of 10%. If he had bought it for 20% less and sold it for ₹55 more, he would have had a profit of 40%. The cost price of the article is?",
    questionHi: "एक व्यक्ति ने एक वस्तु खरीदी और 10% हानि पर बेची। यदि उसने इसे 20% कम में खरीदा होता और ₹55 अधिक में बेचा होता, तो उसे 40% लाभ होता। वस्तु का क्रय मूल्य क्या है?",
    options: {
      en: ["₹200", "₹250", "₹225", "₹210"],
      hi: ["₹200", "₹250", "₹225", "₹210"]
    },
    correctOption: 2
  },
  {
    id: 32,
    questionEn: "The average age of A and B is 20 years. If C is included, the average is 19 years. What is the age of C?",
    questionHi: "A और B की औसत आयु 20 वर्ष है। यदि C को शामिल किया जाए, तो औसत 19 वर्ष हो जाता है। C की आयु क्या है?",
    options: {
      en: ["18 years", "17 years", "19 years", "21 years"],
      hi: ["18 वर्ष", "17 वर्ष", "19 वर्ष", "21 वर्ष"]
    },
    correctOption: 2
  },
  {
    id: 33,
    questionEn: "In how many ways can 5 persons be seated in a row?",
    questionHi: "5 व्यक्तियों को एक पंक्ति में कितने तरीकों से बैठाया जा सकता है?",
    options: {
      en: ["60", "24", "120", "20"],
      hi: ["60", "24", "120", "20"]
    },
    correctOption: 3
  },
  {
    id: 34,
    questionEn: "A number when divided by 6 leaves remainder 3. What is the remainder when the square of the number is divided by 6?",
    questionHi: "जब एक संख्या को 6 से विभाजित किया जाता है तो शेष 3 बचता है। जब उस संख्या के वर्ग को 6 से विभाजित किया जाता है तो शेष क्या होगा?",
    options: {
      en: ["0", "3", "1", "2"],
      hi: ["0", "3", "1", "2"]
    },
    correctOption: 2
  },
  {
    id: 35,
    questionEn: "A man can swim 48 meters per minute in still water. If he swims in a river with speed of 8 m/min, find ratio of time taken to swim upstream to downstream for same distance.",
    questionHi: "एक व्यक्ति शांत पानी में 48 मीटर प्रति मिनट तैर सकता है। यदि वह 8 मीटर/मिनट की गति वाली नदी में तैरता है, तो समान दूरी के लिए धारा के विपरीत और धारा के अनुकूल तैरने में लगे समय का अनुपात ज्ञात कीजिए।",
    options: {
      en: ["5:7", "7:6", "7:5", "6:7"],
      hi: ["5:7", "7:6", "7:5", "6:7"]
    },
    correctOption: 3
  },
  {
    id: 36,
    questionEn: "If A:B = 2:3, B:C = 4:5, then A:B:C is?",
    questionHi: "यदि A:B = 2:3, B:C = 4:5, तो A:B:C क्या है?",
    options: {
      en: ["8:12:15", "2:3:5", "2:4:5", "8:15:12"],
      hi: ["8:12:15", "2:3:5", "2:4:5", "8:15:12"]
    },
    correctOption: 1
  },
  {
    id: 37,
    questionEn: "Two pipes can fill a tank in 10 hours and 12 hours respectively. A third pipe can empty it in 20 hours. If all three pipes are opened, in how many hours will the tank be filled?",
    questionHi: "दो पाइप एक टंकी को क्रमशः 10 घंटे और 12 घंटे में भर सकते हैं। एक तीसरा पाइप इसे 20 घंटे में खाली कर सकता है। यदि तीनों पाइप खोल दिए जाएं, तो टंकी कितने घंटे में भरेगी?",
    options: {
      en: ["6 hours", "8 hours", "7.5 hours", "5 hours"],
      hi: ["6 घंटे", "8 घंटे", "7.5 घंटे", "5 घंटे"]
    },
    correctOption: 3
  },
  {
    id: 38,
    questionEn: "LCM of two numbers is 48 and their HCF is 8. If one number is 24, what is the other?",
    questionHi: "दो संख्याओं का ल.स.प. 48 है और उनका म.स.प. 8 है। यदि एक संख्या 24 है, तो दूसरी क्या है?",
    options: {
      en: ["16", "12", "8", "32"],
      hi: ["16", "12", "8", "32"]
    },
    correctOption: 1
  },
  {
    id: 39,
    questionEn: "The population of a town is 10000. It increases by 10% during first year. During second year, it decreases by 10%. Population after 2 years?",
    questionHi: "एक शहर की जनसंख्या 10000 है। पहले वर्ष में यह 10% बढ़ती है। दूसरे वर्ष में, यह 10% घटती है। 2 वर्ष बाद जनसंख्या?",
    options: {
      en: ["10000", "9900", "10100", "9000"],
      hi: ["10000", "9900", "10100", "9000"]
    },
    correctOption: 2
  },
  {
    id: 40,
    questionEn: "A sum becomes ₹2420 in 2 years at 10% compound interest compounded annually. Find the sum.",
    questionHi: "एक धनराशि 10% वार्षिक चक्रवृद्धि ब्याज पर 2 वर्ष में ₹2420 हो जाती है। धनराशि ज्ञात कीजिए।",
    options: {
      en: ["₹1800", "₹2000", "₹2200", "₹1900"],
      hi: ["₹1800", "₹2000", "₹2200", "₹1900"]
    },
    correctOption: 2
  },
  {
    id: 41,
    questionEn: "Find the number of prime factors in 6¹⁰ × 7¹⁷ × 11²¹.",
    questionHi: "6¹⁰ × 7¹⁷ × 11²¹ में अभाज्य गुणनखंडों की संख्या ज्ञात कीजिए।",
    options: {
      en: ["48", "57", "58", "59"],
      hi: ["48", "57", "58", "59"]
    },
    correctOption: 3
  },
  {
    id: 42,
    questionEn: "By selling 45 articles, a man loses equal to SP of 5 articles. Find loss%?",
    questionHi: "45 वस्तुओं को बेचने पर, एक व्यक्ति को 5 वस्तुओं के विक्रय मूल्य के बराबर हानि होती है। हानि% ज्ञात कीजिए?",
    options: {
      en: ["10%", "11.11%", "12.5%", "9%"],
      hi: ["10%", "11.11%", "12.5%", "9%"]
    },
    correctOption: 3
  },
  {
    id: 43,
    questionEn: "A dealer offers a discount of 10% and still makes a profit of 20%. At what percent above CP does he mark his goods?",
    questionHi: "एक व्यापारी 10% की छूट देता है और फिर भी 20% का लाभ कमाता है। वह अपने माल को क्रय मूल्य से कितने प्रतिशत ऊपर अंकित करता है?",
    options: {
      en: ["30%", "33.33%", "25%", "35%"],
      hi: ["30%", "33.33%", "25%", "35%"]
    },
    correctOption: 2
  },
  {
    id: 44,
    questionEn: "Ratio of speed of boat in still water to speed of stream is 3:1. If boat takes 3 hours to go downstream, time to go upstream for same distance?",
    questionHi: "शांत पानी में नाव की गति और धारा की गति का अनुपात 3:1 है। यदि नाव को धारा के अनुकूल जाने में 3 घंटे लगते हैं, तो समान दूरी के लिए धारा के विपरीत जाने में कितना समय लगेगा?",
    options: {
      en: ["5 hours", "6 hours", "4 hours", "7 hours"],
      hi: ["5 घंटे", "6 घंटे", "4 घंटे", "7 घंटे"]
    },
    correctOption: 2
  },
  {
    id: 45,
    questionEn: "A and B invest in ratio 3:5. If 5% of total profit goes to charity and A's share is ₹855, find total profit.",
    questionHi: "A और B 3:5 के अनुपात में निवेश करते हैं। यदि कुल लाभ का 5% दान में जाता है और A का हिस्सा ₹855 है, तो कुल लाभ ज्ञात कीजिए।",
    options: {
      en: ["₹2000", "₹2400", "₹3000", "₹2850"],
      hi: ["₹2000", "₹2400", "₹3000", "₹2850"]
    },
    correctOption: 2
  },
  {
    id: 46,
    questionEn: "Find the value of k if x³ + 6x² + kx + 6 is exactly divisible by (x+2).",
    questionHi: "k का मान ज्ञात कीजिए यदि x³ + 6x² + kx + 6, (x+2) से पूर्णतः विभाज्य है।",
    options: {
      en: ["7", "11", "6", "5"],
      hi: ["7", "11", "6", "5"]
    },
    correctOption: 2
  },
  {
    id: 47,
    questionEn: "In a mixture of 60 litres, ratio of milk to water is 2:1. How much water must be added to make the ratio 1:2?",
    questionHi: "60 लीटर के मिश्रण में दूध और पानी का अनुपात 2:1 है। अनुपात 1:2 बनाने के लिए कितना पानी मिलाना होगा?",
    options: {
      en: ["60 L", "40 L", "30 L", "50 L"],
      hi: ["60 लीटर", "40 लीटर", "30 लीटर", "50 लीटर"]
    },
    correctOption: 1
  },
  {
    id: 48,
    questionEn: "If the cost price of 15 tables is equal to the selling price of 20 tables, find loss%.",
    questionHi: "यदि 15 मेजों का क्रय मूल्य 20 मेजों के विक्रय मूल्य के बराबर है, तो हानि% ज्ञात कीजिए।",
    options: {
      en: ["20%", "15%", "25%", "30%"],
      hi: ["20%", "15%", "25%", "30%"]
    },
    correctOption: 3
  },
  {
    id: 49,
    questionEn: "A alone can do a work in 12 days and B alone in 18 days. If C is 50% more efficient than A, in how many days can C alone finish?",
    questionHi: "A अकेले एक काम को 12 दिन में और B अकेले 18 दिन में कर सकता है। यदि C, A से 50% अधिक कुशल है, तो C अकेले कितने दिन में काम खत्म करेगा?",
    options: {
      en: ["8 days", "9 days", "6 days", "10 days"],
      hi: ["8 दिन", "9 दिन", "6 दिन", "10 दिन"]
    },
    correctOption: 1
  },
  {
    id: 50,
    questionEn: "Two trains start at same time from A and B towards each other. After passing each other, they take 4 hours and 9 hours respectively to reach B and A. Find ratio of their speeds.",
    questionHi: "दो ट्रेनें एक ही समय पर A और B से एक दूसरे की ओर चलती हैं। एक दूसरे को पार करने के बाद, वे क्रमशः 4 घंटे और 9 घंटे में B और A पहुंचती हैं। उनकी गति का अनुपात ज्ञात कीजिए।",
    options: {
      en: ["2:3", "3:2", "4:9", "9:4"],
      hi: ["2:3", "3:2", "4:9", "9:4"]
    },
    correctOption: 2
  },
  {
    id: 51,
    questionEn: "Simplify: 12 ÷ 3 × 2 + 4 - 2",
    questionHi: "सरल कीजिए: 12 ÷ 3 × 2 + 4 - 2",
    options: {
      en: ["8", "10", "6", "4"],
      hi: ["8", "10", "6", "4"]
    },
    correctOption: 2
  },
  {
    id: 52,
    questionEn: "Find the next number: 2, 5, 8, 11, ?",
    questionHi: "अगली संख्या ज्ञात कीजिए: 2, 5, 8, 11, ?",
    options: {
      en: ["14", "13", "15", "12"],
      hi: ["14", "13", "15", "12"]
    },
    correctOption: 1
  },
  {
    id: 53,
    questionEn: "Complete the series: 1, 5, 11, 19, 29, ?",
    questionHi: "श्रृंखला पूरी कीजिए: 1, 5, 11, 19, 29, ?",
    options: {
      en: ["39", "41", "40", "42"],
      hi: ["39", "41", "40", "42"]
    },
    correctOption: 2
  },
  {
    id: 54,
    questionEn: "If A is B's brother, B is C's sister, and C is D's father, how is A related to D?",
    questionHi: "यदि A, B का भाई है, B, C की बहन है, और C, D का पिता है, तो A, D से कैसे संबंधित है?",
    options: {
      en: ["Grandfather", "Father", "Uncle", "Brother"],
      hi: ["दादा", "पिता", "चाचा", "भाई"]
    },
    correctOption: 3
  },
  {
    id: 55,
    questionEn: "A, B, C, D, E and F are sitting in a row. B is to the right of E. F is not at any end. A is sitting second from left. Who is sitting at the right end?",
    questionHi: "A, B, C, D, E और F एक पंक्ति में बैठे हैं। B, E के दाईं ओर है। F किसी भी छोर पर नहीं है। A बाएं से दूसरे स्थान पर है। दाएं छोर पर कौन बैठा है?",
    options: {
      en: ["D", "B", "C", "Cannot be determined"],
      hi: ["D", "B", "C", "निर्धारित नहीं किया जा सकता"]
    },
    correctOption: 3
  },
  {
    id: 56,
    questionEn: "How many numbers from 15 to 45 are divisible by 3?",
    questionHi: "15 से 45 तक कितनी संख्याएं 3 से विभाज्य हैं?",
    options: {
      en: ["10", "11", "9", "12"],
      hi: ["10", "11", "9", "12"]
    },
    correctOption: 2
  },
  {
    id: 57,
    questionEn: "Choose the odd one: Apple, Banana, Tomato, Orange",
    questionHi: "विषम चुनिए: सेब, केला, टमाटर, संतरा",
    options: {
      en: ["Tomato", "Apple", "Banana", "Orange"],
      hi: ["टमाटर", "सेब", "केला", "संतरा"]
    },
    correctOption: 1
  },
  {
    id: 58,
    questionEn: "If 1st January 2000 was Saturday, what day was 1st January 2001?",
    questionHi: "यदि 1 जनवरी 2000 शनिवार था, तो 1 जनवरी 2001 को कौन सा दिन था?",
    options: {
      en: ["Sunday", "Monday", "Saturday", "Friday"],
      hi: ["रविवार", "सोमवार", "शनिवार", "शुक्रवार"]
    },
    correctOption: 2
  },
  {
    id: 59,
    questionEn: "Find next in sequence: Z, Y, W, T, P, ?",
    questionHi: "क्रम में अगला ज्ञात कीजिए: Z, Y, W, T, P, ?",
    options: {
      en: ["K", "L", "M", "O"],
      hi: ["K", "L", "M", "O"]
    },
    correctOption: 1
  },
  {
    id: 60,
    questionEn: "Which one is different? 25, 36, 49, 52, 64",
    questionHi: "कौन सा अलग है? 25, 36, 49, 52, 64",
    options: {
      en: ["25", "36", "49", "52"],
      hi: ["25", "36", "49", "52"]
    },
    correctOption: 4
  },
  {
    id: 61,
    questionEn: "P is the father of Q. R is the daughter of P. S is the brother of Q. How is Q related to P?",
    questionHi: "P, Q का पिता है। R, P की बेटी है। S, Q का भाई है। Q, P से कैसे संबंधित है?",
    options: {
      en: ["Son", "Daughter", "Uncle", "Brother"],
      hi: ["पुत्र", "पुत्री", "चाचा", "भाई"]
    },
    correctOption: 1
  },
  {
    id: 62,
    questionEn: "Find the missing number in the series: 4, 6, 12, 14, 28, 30, ?",
    questionHi: "श्रृंखला में लुप्त संख्या ज्ञात कीजिए: 4, 6, 12, 14, 28, 30, ?",
    options: {
      en: ["32", "60", "62", "64"],
      hi: ["32", "60", "62", "64"]
    },
    correctOption: 2
  },
  {
    id: 63,
    questionEn: "In a certain code, 'GOODNESS' is coded as 'HNPCODTR'. How is 'GREATNESS' coded?",
    questionHi: "एक निश्चित कोड में, 'GOODNESS' को 'HNPCODTR' के रूप में कोडित किया गया है। 'GREATNESS' को कैसे कोडित किया जाएगा?",
    options: {
      en: ["HQFZSMFRT", "HQFZUFRTM", "HQFZUQRT", "HQFZUMFRT"],
      hi: ["HQFZSMFRT", "HQFZUFRTM", "HQFZUQRT", "HQFZUMFRT"]
    },
    correctOption: 4
  },
  {
    id: 64,
    questionEn: "Five boys are sitting in a circle. A is facing South-West. D is facing South-East. B and E are right opposite to A and D respectively and C is equidistant between D and B. Which direction is C facing?",
    questionHi: "पांच लड़के एक गोले में बैठे हैं। A का मुख दक्षिण-पश्चिम है। D का मुख दक्षिण-पूर्व है। B और E क्रमशः A और D के विपरीत हैं और C, D और B के बीच समान दूरी पर है। C किस दिशा की ओर है?",
    options: {
      en: ["West", "South", "North", "East"],
      hi: ["पश्चिम", "दक्षिण", "उत्तर", "पूर्व"]
    },
    correctOption: 4
  },
  {
    id: 65,
    questionEn: "Which letter will be the 6th to the left of the 19th letter from the left end of the English alphabet?",
    questionHi: "अंग्रेजी वर्णमाला में बाएं छोर से 19वें अक्षर के बाएं से 6वां अक्षर कौन सा होगा?",
    options: {
      en: ["M", "N", "L", "O"],
      hi: ["M", "N", "L", "O"]
    },
    correctOption: 1
  },
  {
    id: 66,
    questionEn: "If 'ROSE' is coded as 'TQUG', how is 'BLUE' coded?",
    questionHi: "यदि 'ROSE' को 'TQUG' कोडित किया गया है, तो 'BLUE' को कैसे कोडित किया जाएगा?",
    options: {
      en: ["DNWG", "CMWF", "DNXG", "DMWG"],
      hi: ["DNWG", "CMWF", "DNXG", "DMWG"]
    },
    correctOption: 1
  },
  {
    id: 67,
    questionEn: "Pointing to a photo, Ram said, 'He is the son of my father's only son'. Who is in the photo?",
    questionHi: "एक तस्वीर की ओर इशारा करते हुए राम ने कहा, 'वह मेरे पिता के इकलौते बेटे का बेटा है'। तस्वीर में कौन है?",
    options: {
      en: ["Ram's brother", "Ram's son", "Ram himself", "Ram's father"],
      hi: ["राम का भाई", "राम का बेटा", "राम स्वयं", "राम के पिता"]
    },
    correctOption: 2
  },
  {
    id: 68,
    questionEn: "Rohan walks 3 km North, then turns right and walks 4 km. How far is he from the start?",
    questionHi: "रोहन 3 किमी उत्तर की ओर चलता है, फिर दाएं मुड़ता है और 4 किमी चलता है। वह शुरुआत से कितनी दूर है?",
    options: {
      en: ["7 km", "5 km", "6 km", "1 km"],
      hi: ["7 किमी", "5 किमी", "6 किमी", "1 किमी"]
    },
    correctOption: 2
  },
  {
    id: 69,
    questionEn: "Statements: Some cats are dogs. All dogs are rats. Conclusions: I. Some cats are rats. II. All rats are cats.",
    questionHi: "कथन: कुछ बिल्लियां कुत्ते हैं। सभी कुत्ते चूहे हैं। निष्कर्ष: I. कुछ बिल्लियां चूहे हैं। II. सभी चूहे बिल्लियां हैं।",
    options: {
      en: ["Only I follows", "Only II follows", "Both follow", "None follows"],
      hi: ["केवल I अनुसरण करता है", "केवल II अनुसरण करता है", "दोनों अनुसरण करते हैं", "कोई अनुसरण नहीं करता"]
    },
    correctOption: 1
  },
  {
    id: 70,
    questionEn: "Which number replaces the question mark? [3, 6, 12, 24, ?]",
    questionHi: "प्रश्न चिह्न के स्थान पर कौन सी संख्या आएगी? [3, 6, 12, 24, ?]",
    options: {
      en: ["36", "48", "30", "40"],
      hi: ["36", "48", "30", "40"]
    },
    correctOption: 2
  },
  {
    id: 71,
    questionEn: "In a row, Mohit is 10th from left and Sumit is 10th from right. There are 5 people between them. Total people?",
    questionHi: "एक पंक्ति में, मोहित बाएं से 10वें और सुमित दाएं से 10वें स्थान पर है। उनके बीच 5 लोग हैं। कुल लोग?",
    options: {
      en: ["20", "25", "30", "15"],
      hi: ["20", "25", "30", "15"]
    },
    correctOption: 2
  },
  {
    id: 72,
    questionEn: "Find the missing character: AZ, BY, CX, ?",
    questionHi: "लुप्त पद ज्ञात कीजिए: AZ, BY, CX, ?",
    options: {
      en: ["DW", "DV", "DU", "DX"],
      hi: ["DW", "DV", "DU", "DX"]
    },
    correctOption: 1
  },
  {
    id: 73,
    questionEn: "If + means ×, - means +, × means ÷, and ÷ means -, then 10 - 5 × 5 + 2 = ?",
    questionHi: "यदि + का अर्थ ×, - का अर्थ +, × का अर्थ ÷, और ÷ का अर्थ - है, तो 10 - 5 × 5 + 2 = ?",
    options: {
      en: ["10", "12", "20", "35"],
      hi: ["10", "12", "20", "35"]
    },
    correctOption: 2
  },
  {
    id: 74,
    questionEn: "Amit is taller than Shyam. Shyam is taller than Ravi. Who is the shortest?",
    questionHi: "अमित श्याम से लंबा है। श्याम रवि से लंबा है। सबसे छोटा कौन है?",
    options: {
      en: ["Amit", "Shyam", "Ravi", "Cannot be determined"],
      hi: ["अमित", "श्याम", "रवि", "निर्धारित नहीं किया जा सकता"]
    },
    correctOption: 3
  },
  {
    id: 75,
    questionEn: "Pick the word that does NOT belong in the group: Geometry, Algebra, Calculus, Thermodynamics",
    questionHi: "उस शब्द को चुनें जो समूह से संबंधित नहीं है: ज्यामिति, बीजगणित, कलन, ऊष्मागतिकी",
    options: {
      en: ["Geometry", "Algebra", "Calculus", "Thermodynamics"],
      hi: ["ज्यामिति", "बीजगणित", "कलन", "ऊष्मागतिकी"]
    },
    correctOption: 4
  },
  {
    id: 76,
    questionEn: "Complete the series: 1, 4, 9, 16, 25, ?",
    questionHi: "श्रृंखला पूरी कीजिए: 1, 4, 9, 16, 25, ?",
    options: {
      en: ["30", "35", "36", "49"],
      hi: ["30", "35", "36", "49"]
    },
    correctOption: 3
  },
  {
    id: 77,
    questionEn: "A clock shows 3:00. What is the angle between the hour and minute hand?",
    questionHi: "एक घड़ी में 3:00 बज रहे हैं। घंटे और मिनट की सुई के बीच का कोण क्या है?",
    options: {
      en: ["60°", "90°", "120°", "180°"],
      hi: ["60°", "90°", "120°", "180°"]
    },
    correctOption: 2
  },
  {
    id: 78,
    questionEn: "If today is Monday, what day will it be after 61 days?",
    questionHi: "यदि आज सोमवार है, तो 61 दिन बाद कौन सा दिन होगा?",
    options: {
      en: ["Saturday", "Sunday", "Tuesday", "Wednesday"],
      hi: ["शनिवार", "रविवार", "मंगलवार", "बुधवार"]
    },
    correctOption: 1
  },
  {
    id: 79,
    questionEn: "Choose the word which is least like the others: Zinc, Iron, Aluminum, Mercury",
    questionHi: "वह शब्द चुनें जो दूसरों से सबसे कम मिलता-जुलता है: जस्ता, लोहा, एल्युमिनियम, पारा",
    options: {
      en: ["Zinc", "Iron", "Aluminum", "Mercury"],
      hi: ["जस्ता", "लोहा", "एल्युमिनियम", "पारा"]
    },
    correctOption: 4
  },
  {
    id: 80,
    questionEn: "Complete the series: 8, 27, 64, 125, ?",
    questionHi: "श्रृंखला पूरी कीजिए: 8, 27, 64, 125, ?",
    options: {
      en: ["216", "200", "150", "225"],
      hi: ["216", "200", "150", "225"]
    },
    correctOption: 1
  },
  {
    id: 81,
    questionEn: "If P is the husband of Q and R is the mother of S and Q. How is R related to P?",
    questionHi: "यदि P, Q का पति है और R, S और Q की माँ है। R, P से कैसे संबंधित है?",
    options: {
      en: ["Mother", "Sister", "Mother-in-law", "Aunt"],
      hi: ["माँ", "बहन", "सास", "चाची"]
    },
    correctOption: 3
  },
  {
    id: 82,
    questionEn: "Arrange the words: 1. Seed, 2. Plant, 3. Fruit, 4. Flower",
    questionHi: "शब्दों को व्यवस्थित कीजिए: 1. बीज, 2. पौधा, 3. फल, 4. फूल",
    options: {
      en: ["1, 2, 3, 4", "1, 2, 4, 3", "2, 1, 3, 4", "1, 3, 2, 4"],
      hi: ["1, 2, 3, 4", "1, 2, 4, 3", "2, 1, 3, 4", "1, 3, 2, 4"]
    },
    correctOption: 2
  },
  {
    id: 83,
    questionEn: "Find the missing number: 2, 6, 12, 20, 30, ?",
    questionHi: "लुप्त संख्या ज्ञात कीजिए: 2, 6, 12, 20, 30, ?",
    options: {
      en: ["40", "42", "44", "46"],
      hi: ["40", "42", "44", "46"]
    },
    correctOption: 2
  },
  {
    id: 84,
    questionEn: "If 'SKY' is coded as 'RJX', then 'CLOUD' will be coded as?",
    questionHi: "यदि 'SKY' को 'RJX' के रूप में कोडित किया गया है, तो 'CLOUD' को कैसे कोडित किया जाएगा?",
    options: {
      en: ["BKNTC", "BKOTC", "BMNTC", "AKMTC"],
      hi: ["BKNTC", "BKOTC", "BMNTC", "AKMTC"]
    },
    correctOption: 1
  },
  {
    id: 85,
    questionEn: "Count the number of triangles in a square divided by both diagonals.",
    questionHi: "दोनों विकर्णों द्वारा विभाजित एक वर्ग में त्रिभुजों की संख्या गिनिए।",
    options: {
      en: ["4", "6", "8", "10"],
      hi: ["4", "6", "8", "10"]
    },
    correctOption: 3
  },
  {
    id: 86,
    questionEn: "Statements: All roads are waters. Some waters are boats. Conclusions: I. Some boats are roads. II. All waters are boats.",
    questionHi: "कथन: सभी सड़कें पानी हैं। कुछ पानी नाव हैं। निष्कर्ष: I. कुछ नाव सड़कें हैं। II. सभी पानी नाव हैं।",
    options: {
      en: ["Only I follows", "Only II follows", "Both follow", "Neither follows"],
      hi: ["केवल I अनुसरण करता है", "केवल II अनुसरण करता है", "दोनों अनुसरण करते हैं", "कोई अनुसरण नहीं करता"]
    },
    correctOption: 4
  },
  {
    id: 87,
    questionEn: "If 5 * 4 = 1524, 3 * 2 = 98, 4 * 3 = 1216, then 7 * 4 = ?",
    questionHi: "यदि 5 * 4 = 1524, 3 * 2 = 98, 4 * 3 = 1216, तो 7 * 4 = ?",
    options: {
      en: ["2128", "2821", "2832", "2132"],
      hi: ["2128", "2821", "2832", "2132"]
    },
    correctOption: 1
  },
  {
    id: 88,
    questionEn: "A man facing North-West turns 90° clockwise, then 180° anti-clockwise, and then another 90° anti-clockwise. Which direction is he facing now?",
    questionHi: "उत्तर-पश्चिम की ओर मुख किए एक व्यक्ति 90° दक्षिणावर्त, फिर 180° वामावर्त, और फिर 90° वामावर्त मुड़ता है। अब उसका मुख किस दिशा में है?",
    options: {
      en: ["South-East", "West", "East", "South"],
      hi: ["दक्षिण-पूर्व", "पश्चिम", "पूर्व", "दक्षिण"]
    },
    correctOption: 1
  },
  {
    id: 89,
    questionEn: "In a certain code, '123' means 'hot filtered coffee', '356' means 'very hot day', '589' means 'day and night'. Which digit stands for 'very'?",
    questionHi: "एक निश्चित कोड में, '123' का अर्थ है 'hot filtered coffee', '356' का अर्थ है 'very hot day', '589' का अर्थ है 'day and night'। 'very' के लिए कौन सा अंक है?",
    options: {
      en: ["6", "5", "3", "9"],
      hi: ["6", "5", "3", "9"]
    },
    correctOption: 1
  },
  {
    id: 90,
    questionEn: "Six friends A, B, C, D, E, and F are sitting in a circle facing the center. F is to the immediate left of A and B is opposite to E. A and D are opposite to each other. Who is sitting second to the right of F?",
    questionHi: "छह दोस्त A, B, C, D, E और F केंद्र की ओर मुख किए एक गोले में बैठे हैं। F, A के ठीक बाएं है और B, E के विपरीत है। A और D एक दूसरे के विपरीत हैं। F के दाएं से दूसरे स्थान पर कौन बैठा है?",
    options: {
      en: ["C", "E", "B", "D"],
      hi: ["C", "E", "B", "D"]
    },
    correctOption: 2
  },
  {
    id: 91,
    questionEn: "How many days are there in x weeks and x days?",
    questionHi: "x सप्ताह और x दिन में कितने दिन होते हैं?",
    options: {
      en: ["7x²", "8x", "14x", "7"],
      hi: ["7x²", "8x", "14x", "7"]
    },
    correctOption: 2
  },
  {
    id: 92,
    questionEn: "If (P + Q) means P is the mother of Q; (P - Q) means P is the brother of Q; (P % Q) means P is the father of Q. Which shows A is the maternal uncle of C?",
    questionHi: "यदि (P + Q) का अर्थ है P, Q की माँ है; (P - Q) का अर्थ है P, Q का भाई है; (P % Q) का अर्थ है P, Q का पिता है। कौन सा दर्शाता है कि A, C का मामा है?",
    options: {
      en: ["A - B + C", "A + B - C", "A % B + C", "A - B % C"],
      hi: ["A - B + C", "A + B - C", "A % B + C", "A - B % C"]
    },
    correctOption: 1
  },
  {
    id: 93,
    questionEn: "Find the missing number: 4, 18, ?, 100, 180, 294",
    questionHi: "लुप्त संख्या ज्ञात कीजिए: 4, 18, ?, 100, 180, 294",
    options: {
      en: ["32", "36", "48", "40"],
      hi: ["32", "36", "48", "40"]
    },
    correctOption: 3
  },
  {
    id: 94,
    questionEn: "A cube is painted red on all faces and cut into 27 smaller identical cubes. How many small cubes have no face painted?",
    questionHi: "एक घन के सभी चेहरों पर लाल रंग पोता गया है और 27 छोटे समान घनों में काटा गया है। कितने छोटे घनों का कोई चेहरा रंगा नहीं है?",
    options: {
      en: ["0", "1", "8", "27"],
      hi: ["0", "1", "8", "27"]
    },
    correctOption: 2
  },
  {
    id: 95,
    questionEn: "At what time between 4 and 5 o'clock will the hands of a clock be at right angles?",
    questionHi: "4 और 5 बजे के बीच किस समय घड़ी की सुइयां समकोण पर होंगी?",
    options: {
      en: ["4:05 5/11", "4:38 2/11", "Both A and B", "4:15"],
      hi: ["4:05 5/11", "4:38 2/11", "A और B दोनों", "4:15"]
    },
    correctOption: 3
  },
  {
    id: 96,
    questionEn: "If South-East becomes North, North-East becomes West and so on. What will West become?",
    questionHi: "यदि दक्षिण-पूर्व उत्तर हो जाता है, उत्तर-पूर्व पश्चिम हो जाता है और इसी तरह। पश्चिम क्या होगा?",
    options: {
      en: ["North-East", "North-West", "South-East", "South-West"],
      hi: ["उत्तर-पूर्व", "उत्तर-पश्चिम", "दक्षिण-पूर्व", "दक्षिण-पश्चिम"]
    },
    correctOption: 3
  },
  {
    id: 97,
    questionEn: "Find the wrong number in the series: 3, 8, 15, 24, 34, 48, 63",
    questionHi: "श्रृंखला में गलत संख्या ज्ञात कीजिए: 3, 8, 15, 24, 34, 48, 63",
    options: {
      en: ["15", "24", "34", "48"],
      hi: ["15", "24", "34", "48"]
    },
    correctOption: 3
  },
  {
    id: 98,
    questionEn: "Assertion (A): Leaves are green. Reason (R): Chlorophyll is present in leaves.",
    questionHi: "अभिकथन (A): पत्तियां हरी होती हैं। कारण (R): पत्तियों में क्लोरोफिल मौजूद होता है।",
    options: {
      en: ["Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is not correct explanation", "A is true, R is false", "A is false, R is true"],
      hi: ["A और R दोनों सत्य हैं और R, A की सही व्याख्या है", "A और R दोनों सत्य हैं लेकिन R सही व्याख्या नहीं है", "A सत्य है, R असत्य है", "A असत्य है, R सत्य है"]
    },
    correctOption: 1
  },
  {
    id: 99,
    questionEn: "A family consists of a husband and wife, their three sons and their wives, and three children in each son's family. How many members are there in the family?",
    questionHi: "एक परिवार में पति और पत्नी, उनके तीन बेटे और उनकी पत्नियां, और हर बेटे के परिवार में तीन बच्चे हैं। परिवार में कितने सदस्य हैं?",
    options: {
      en: ["12", "14", "17", "15"],
      hi: ["12", "14", "17", "15"]
    },
    correctOption: 3
  },
  {
    id: 100,
    questionEn: "A is B's sister. C is B's mother. D is C's father. E is D's mother. Then, how is A related to D?",
    questionHi: "A, B की बहन है। C, B की माँ है। D, C का पिता है। E, D की माँ है। तो, A, D से कैसे संबंधित है?",
    options: {
      en: ["Grandmother", "Grandfather", "Granddaughter", "Daughter"],
      hi: ["दादी/नानी", "दादा/नाना", "पोती/नातिन", "बेटी"]
    },
    correctOption: 3
  }
];
