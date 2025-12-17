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
    questionEn: "Which of the following is a plant hormone?",
    questionHi: "निम्नलिखित में से कौन एक पादप हार्मोन है?",
    options: {
      en: ["Insulin", "Oestrogen", "Cytokinin", "Testosterone"],
      hi: ["इंसुलिन", "इस्ट्रोजेन", "साइटोकाइनिन", "टेस्टोस्टेरोन"]
    },
    correctOption: 3
  },
  {
    id: 2,
    questionEn: "Damdama lake is situated in the District of_______.",
    questionHi: "दमदमा झील किस जिले में स्थित है?",
    options: {
      en: ["Faridabad", "Gurgaon", "Rohtak", "Hisar"],
      hi: ["फरीदाबाद", "गुरुग्राम", "रोहतक", "हिसार"]
    },
    correctOption: 2
  },
  {
    id: 3,
    questionEn: "The device which converts sound to electrical vibrations",
    questionHi: "वह उपकरण कौन-सा है जो ध्वनि को विद्युत कंपन में परिवर्तित करता है?",
    options: {
      en: ["Speaker", "Microphone", "Integrated Circuit (IC)", "Stereoscope"],
      hi: ["स्पीकर", "माइक्रोफ़ोन", "इंटीग्रेटेड सर्किट (IC)", "स्टीरियोस्कोप"]
    },
    correctOption: 2
  },
  {
    id: 4,
    questionEn: "During the debate on citizenship in the Constitution Assembly, a famous quote, 'There cannot be any divided loyalty', is said by",
    questionHi: "संविधान सभा में नागरिकता पर बहस के दौरान 'There cannot be any divided loyalty' यह प्रसिद्ध कथन किसने कहा था?",
    options: {
      en: ["B. N. Rao", "Somnath Lahiri", "Govind Vallabh Pant", "None of the above"],
      hi: ["बी. एन. राव", "सोमनाथ लाहिड़ी", "गोविंद वल्लभ पंत", "उपरोक्त में से कोई नहीं"]
    },
    correctOption: 3
  },
  {
    id: 5,
    questionEn: "Area of the circle inscribed in a square of side 'a' cm is",
    questionHi: "भुजा 'a' सेमी वाले वर्ग में अंकित वृत्त का क्षेत्रफल क्या होगा?",
    options: {
      en: ["a² cm²", "a²/4 cm²", "πa²/4 cm²", "πa²/2 cm²"],
      hi: ["a² वर्ग सेमी", "a²/4 वर्ग सेमी", "πa²/4 वर्ग सेमी", "πa²/2 वर्ग सेमी"]
    },
    correctOption: 3
  },
  {
    id: 6,
    questionEn: "A and B are friends and B is 2 years younger than A. A's father D is twice as old as A and B is twice as his sister C. The age of D and C differ by 40 years. The ages of 'A' and 'B' are respectively",
    questionHi: "A और B मित्र हैं और B, A से 2 वर्ष छोटा है। A के पिता D की आयु, A की आयु से दोगुनी है और B की आयु उसकी बहन C की आयु से दोगुनी है। D और C की आयु में 40 वर्ष का अंतर है। A और B की आयु क्रमशः क्या है?",
    options: {
      en: ["26 yrs., 24 yrs.", "25 yrs., 23 yrs.", "30 yrs., 28 yrs.", "None of these"],
      hi: ["26 वर्ष, 24 वर्ष", "25 वर्ष, 23 वर्ष", "30 वर्ष, 28 वर्ष", "इनमें से कोई नहीं"]
    },
    correctOption: 1
  },
  {
    id: 7,
    questionEn: "Mahabharata war was fought during",
    questionHi: "महाभारत का युद्ध किस काल में हुआ था?",
    options: {
      en: ["900 BC", "800 BC", "700 BC", "600 BC"],
      hi: ["900 ईसा पूर्व", "800 ईसा पूर्व", "700 ईसा पूर्व", "600 ईसा पूर्व"]
    },
    correctOption: 1
  },
  {
    id: 8,
    questionEn: "The potential difference between 2 points in a current carrying conductor when 1 joule of work is done to move a charge of 1 coulomb from one point to the other is",
    questionHi: "एक धारा वहन करने वाले चालक में दो बिंदुओं के बीच विभवांतर कितना होगा, यदि 1 कूलॉम्ब आवेश को एक बिंदु से दूसरे बिंदु तक ले जाने में 1 जूल कार्य किया जाए?",
    options: {
      en: ["1 ampere", "1 volt", "1 newton", "1 ohm"],
      hi: ["1 ऐम्पियर", "1 वोल्ट", "1 न्यूटन", "1 ओम"]
    },
    correctOption: 2
  },
  {
    id: 9,
    questionEn: "Complete the analogy. Trigonometry : Mathematics :: Zoology : ?",
    questionHi: "समानता पूर्ण कीजिए। Trigonometry : Mathematics :: Zoology : ?",
    options: {
      en: ["Botany", "Chemistry", "Biology", "Bio-chemistry"],
      hi: ["बॉटनी", "केमिस्ट्री", "बायोलॉजी", "बायो-केमिस्ट्री"]
    },
    correctOption: 3
  },
  {
    id: 10,
    questionEn: "The High Court has the jurisdiction under Article 226 for the enforcement of",
    questionHi: "उच्च न्यायालय को अनुच्छेद 226 के अंतर्गत किसके प्रवर्तन का अधिकार है?",
    options: {
      en: ["Civil Rights", "Sanctioning Rights", "Fundamental Rights", "Child Rights"],
      hi: ["सिविल अधिकार", "स्वीकृत अधिकार", "मौलिक अधिकार", "बाल अधिकार"]
    },
    correctOption: 3
  },
  {
    id: 11,
    questionEn: "In order to improve the condition of children, _______ has been implemented in Haryana.",
    questionHi: "बच्चों की स्थिति में सुधार के लिए हरियाणा में _______ लागू किया गया है।",
    options: {
      en: ["Integrated Child Development Project", "Innovational Child Development Plan", "Indian Child Development Plan", "International Child Development Project"],
      hi: ["एकीकृत बाल विकास परियोजना (ICDP)", "नवाचार बाल विकास योजना", "भारतीय बाल विकास योजना", "अंतरराष्ट्रीय बाल विकास परियोजना"]
    },
    correctOption: 1
  },
  {
    id: 12,
    questionEn: "Solutions of the equation √3x² + 11x + 6√3 = 0 are",
    questionHi: "समीकरण √3x² + 11x + 6√3 = 0 के हल हैं:",
    options: {
      en: ["√2, √6", "-2/√3, -3√3", "-√2/√3, √6", "√3/√2, -√6"],
      hi: ["√2, √6", "-2/√3, -3√3", "-√2/√3, √6", "√3/√2, -√6"]
    },
    correctOption: 2
  },
  {
    id: 13,
    questionEn: "During the freedom movement, who among the following revolutionaries turned into a philosopher?",
    questionHi: "स्वतंत्रता आंदोलन के दौरान निम्नलिखित में से कौन-से क्रांतिकारी बाद में दार्शनिक बने?",
    options: {
      en: ["Rash Bihari Ghosh", "Aurobindo Ghosh", "V. D. Savarkar", "Satyendranath Bose"],
      hi: ["रास बिहारी घोष", "अरविंदो घोष", "वी. डी. सावरकर", "सत्येन्द्रनाथ बोस"]
    },
    correctOption: 2
  },
  {
    id: 14,
    questionEn: "Who among the following has been Speaker of Haryana Vidhan Sabha for the maximum number of times?",
    questionHi: "हरियाणा विधानसभा के अध्यक्ष के पद में सर्वाधिक बार कौन रहे हैं?",
    options: {
      en: ["Kuldeep Sharma", "Harmahendra Singh Chadda", "Satbeer Singh", "Ashok Kumar Arora"],
      hi: ["कुलदीप शर्मा", "हरमहेंद्र सिंह चड्ढा", "सतबीर सिंह", "अशोक कुमार अरोड़ा"]
    },
    correctOption: 2
  },
  {
    id: 15,
    questionEn: "During the suzerainty of the British crown, Princely States covered what portion of the land area of the British Indian empire?",
    questionHi: "ब्रिटिश ताज की अधिसत्ता के दौरान, रियासतों ने ब्रिटिश भारतीय साम्राज्य के कुल भू-भाग का कितना हिस्सा घेरा था?",
    options: {
      en: ["One-third", "One-fourth", "One-tenth", "None of the above"],
      hi: ["एक-तिहाई", "एक-चौथाई", "एक-दसवां", "उपरोक्त में से कोई नहीं"]
    },
    correctOption: 4
  },
  {
    id: 16,
    questionEn: "If 'GIVE' is coded as 43, then 'TAKE' is coded as",
    questionHi: "यदि 'GIVE' को 43 कोड किया गया है, तो 'TAKE' को क्या कोड किया जाएगा?",
    options: {
      en: ["47", "27", "36", "37"],
      hi: ["47", "27", "36", "37"]
    },
    correctOption: 4
  },
  {
    id: 17,
    questionEn: "If sec θ = 4/√7, then the value of √(2tan²θ - cosec²θ)/(2cos²θ - cot²θ) is",
    questionHi: "यदि sec θ = 4/√7, तो √(2tan²θ - cosec²θ)/(2cos²θ - cot²θ) का मान क्या होगा?",
    options: {
      en: ["20/7", "0", "4", "None of these"],
      hi: ["20/7", "0", "4", "इनमें से कोई नहीं"]
    },
    correctOption: 1
  },
  {
    id: 18,
    questionEn: "If 15th of August was Wednesday, then 1st August of the same year was",
    questionHi: "यदि 15 अगस्त बुधवार था, तो उसी वर्ष 1 अगस्त कौन-सा दिन था?",
    options: {
      en: ["Thursday", "Wednesday", "Friday", "Saturday"],
      hi: ["गुरुवार", "बुधवार", "शुक्रवार", "शनिवार"]
    },
    correctOption: 2
  },
  {
    id: 19,
    questionEn: "Which of the following form an AP?",
    questionHi: "निम्नलिखित में से कौन-सा क्रम एक समान्तर श्रेणी (AP) बनाता है?",
    options: {
      en: ["1, 1, 2, 2, 3, 3, …", "0.3, 0.33, 0.333, …", "√2, 2, 2√2, 4, …", "3, 3+√2, 3+2√2, 3+3√2"],
      hi: ["1, 1, 2, 2, 3, 3, …", "0.3, 0.33, 0.333, …", "√2, 2, 2√2, 4, …", "3, 3+√2, 3+2√2, 3+3√2"]
    },
    correctOption: 4
  },
  {
    id: 20,
    questionEn: "According to Haryana Municipal Amendment Act, any male member contesting urban local bodies election must possess _______ as minimum education.",
    questionHi: "हरियाणा नगरपालिका संशोधन अधिनियम के अनुसार, शहरी स्थानीय निकाय चुनाव लड़ने वाले किसी भी पुरुष सदस्य के पास न्यूनतम शिक्षा _______ होनी चाहिए।",
    options: {
      en: ["MBBS", "LL. B.", "12th Standard", "Matriculation"],
      hi: ["MBBS", "LL.B.", "12वीं", "मैट्रिक"]
    },
    correctOption: 4
  },
  {
    id: 21,
    questionEn: "Consider the following statements and choose the incorrect regarding the Meghalaya plateau.",
    questionHi: "निम्नलिखित कथनों में से मेघालय पठार के संबंध में गलत कथन चुनिए।",
    options: {
      en: ["It is further sub-divided into Garo Hills, Khasi Hills, Jaintia Hills.", "Plateau stand detached from the main Peninsular Block.", "It is also rich in mineral resources like coal, iron ore, sillimanite, limestone and uranium.", "This area receives maximum rainfall from the north-east monsoon."],
      hi: ["यह आगे गारो, खासी और जयंतिया पहाड़ियों में विभाजित है।", "यह पठार मुख्य प्रायद्वीपीय भाग से अलग स्थित है।", "यह कोयला, लौह अयस्क, सिलिमेनाइट, चूना पत्थर और यूरेनियम जैसे खनिजों से समृद्ध है।", "यह क्षेत्र उत्तर-पूर्व मानसून से सर्वाधिक वर्षा प्राप्त करता है।"]
    },
    correctOption: 4
  },
  {
    id: 22,
    questionEn: "The first Haryanavi movie was?",
    questionHi: "पहली हरियाणवी फिल्म कौन-सी थी?",
    options: {
      en: ["Rijuvi", "Dharti", "Yajurveda", "Osho"],
      hi: ["रिजुवी", "धरती", "यजुर्वेद", "ओशो"]
    },
    correctOption: 2
  },
  {
    id: 23,
    questionEn: "Ms. X moves 20 metres to the East and then turns to her left and walks 15 metres and then turns to her right and moves 25 metres. After this, she turns to her right and moves 15 metres. Now, how far is she from the starting point?",
    questionHi: "सुश्री X 20 मीटर पूर्व की ओर चलती हैं, फिर बाएँ मुड़कर 15 मीटर चलती हैं, फिर दाएँ मुड़कर 25 मीटर चलती हैं। इसके बाद वह दाएँ मुड़कर 15 मीटर चलती हैं। अब वह आरंभिक बिंदु से कितनी दूर हैं?",
    options: {
      en: ["35 metres", "40 metres", "45 metres", "None of these"],
      hi: ["35 मीटर", "40 मीटर", "45 मीटर", "इनमें से कोई नहीं"]
    },
    correctOption: 3
  },
  {
    id: 24,
    questionEn: "_______ does not react with dilute HCl.",
    questionHi: "निम्नलिखित में से कौन-सा धातु तनु HCl के साथ अभिक्रिया नहीं करता?",
    options: {
      en: ["Mg", "Cu", "Al", "Li"],
      hi: ["Mg", "Cu", "Al", "Li"]
    },
    correctOption: 2
  },
  {
    id: 25,
    questionEn: "Arrange the following structures of the atmosphere from the surface of the Earth.",
    questionHi: "वायुमंडल की परतों को पृथ्वी की सतह से ऊपर की ओर सही क्रम में लिखिए।",
    options: {
      en: ["Troposphere - mesosphere - stratosphere - thermosphere", "Troposphere - stratosphere - mesosphere - thermosphere", "Stratosphere - troposphere - mesosphere - thermosphere", "Stratosphere - mesosphere - troposphere - thermosphere"],
      hi: ["क्षोभमंडल – मध्यमंडल – समतापमंडल – ऊष्ममंडल", "क्षोभमंडल – समतापमंडल – मध्यमंडल – ऊष्ममंडल", "समतापमंडल – क्षोभमंडल – मध्यमंडल – ऊष्ममंडल", "समतापमंडल – मध्यमंडल – क्षोभमंडल – ऊष्ममंडल"]
    },
    correctOption: 2
  },
  {
    id: 26,
    questionEn: "Joginder Singh is a litterateur from",
    questionHi: "जोगिंदर सिंह किस स्थान के साहित्यकार हैं?",
    options: {
      en: ["Jalsa", "Shahabad", "Panipat", "Ambala"],
      hi: ["जल्सा", "शाहाबाद", "पानीपत", "अंबाला"]
    },
    correctOption: 2
  },
  {
    id: 27,
    questionEn: "Which of the following statement/s is/are true regarding 97th Amendment of the Constitution?",
    questionHi: "संविधान के 97वें संशोधन के संबंध में कौन-सा/से कथन सही है/हैं?",
    options: {
      en: ["It made the right to form Self Help Group as a Fundamental Right", "It has brought a new provision into the Part IV of the Constitution (Directive Principle of State Policy)", "Both are wrong", "Both are right"],
      hi: ["इसने स्वयं सहायता समूह (Self Help Group) बनाने के अधिकार को मौलिक अधिकार बनाया।", "इसने संविधान के भाग IV (राज्य के नीति निदेशक तत्व) में नया प्रावधान जोड़ा।", "दोनों गलत", "दोनों सही"]
    },
    correctOption: 4
  },
  {
    id: 28,
    questionEn: "Mustafabad is renamed as",
    questionHi: "मुस्तफाबाद का नया नाम क्या है?",
    options: {
      en: ["Brahmavart", "Saraswati Nagar", "Kisan Nagar", "Aryabhatta"],
      hi: ["ब्रह्मावर्त", "सरस्वती नगर", "किसान नगर", "आर्यभट्ट"]
    },
    correctOption: 2
  },
  {
    id: 29,
    questionEn: "The 'Champions of the Earth' Award is presented by",
    questionHi: "'चैंपियंस ऑफ द अर्थ' पुरस्कार किसके द्वारा प्रदान किया जाता है?",
    options: {
      en: ["UNDP", "UNFCCC", "UNEP", "UN General Assembly"],
      hi: ["UNDP", "UNFCCC", "UNEP", "संयुक्त राष्ट्र महासभा"]
    },
    correctOption: 3
  },
  {
    id: 30,
    questionEn: "Panchayat Raj Act came into existence pursuant to _______ Constitutional Amendment Act.",
    questionHi: "पंचायती राज अधिनियम _______ संविधान संशोधन अधिनियम के तहत अस्तित्व में आया।",
    options: {
      en: ["71st", "72nd", "73rd", "74th"],
      hi: ["71वाँ", "72वाँ", "73वाँ", "74वाँ"]
    },
    correctOption: 3
  },
  {
    id: 31,
    questionEn: "When baking powder is heated or mixed in water _______ is produced.",
    questionHi: "बेकिंग पाउडर को गर्म करने या पानी में मिलाने पर _______ उत्पन्न होता है।",
    options: {
      en: ["H₂", "O₂", "CO₂", "CO"],
      hi: ["हाइड्रोजन (H₂)", "ऑक्सीजन (O₂)", "कार्बन डाइऑक्साइड (CO₂)", "कार्बन मोनोऑक्साइड (CO)"]
    },
    correctOption: 3
  },
  {
    id: 32,
    questionEn: "Which of the following hills serve as a connecting link between the Himalayas and Plains?",
    questionHi: "निम्नलिखित में से कौन-सी पहाड़ियाँ हिमालय और मैदानी क्षेत्रों के बीच जोड़ का कार्य करती हैं?",
    options: {
      en: ["Tipra Hills", "Morni Hills", "Aravali Hills", "Ambala Hills"],
      hi: ["टिपरा हिल्स", "मोरनी हिल्स", "अरावली हिल्स", "अंबाला हिल्स"]
    },
    correctOption: 2
  },
  {
    id: 33,
    questionEn: "Find the missing number (?) in the sequence 5, 11, 23, ?, 95, 191.",
    questionHi: "श्रेणी में लुप्त संख्या ज्ञात कीजिए: 5, 11, 23, ?, 95, 191",
    options: {
      en: ["47", "48", "49", "50"],
      hi: ["47", "48", "49", "50"]
    },
    correctOption: 1
  },
  {
    id: 34,
    questionEn: "Aquifer mapping done to assess",
    questionHi: "एक्वीफर मैपिंग का उद्देश्य क्या आकलन करना है?",
    options: {
      en: ["Ground water situation", "State legal situation", "Position of women in the State", "Animal census"],
      hi: ["भूजल की स्थिति", "राज्य की कानूनी स्थिति", "राज्य में महिलाओं की स्थिति", "पशु जनगणना"]
    },
    correctOption: 1
  },
  {
    id: 35,
    questionEn: "In ΔABC, AB = 6√3 cm, AC = 12 cm and BC = 6 cm, then ∠B is",
    questionHi: "त्रिभुज ABC में AB = 6√3 सेमी, AC = 12 सेमी और BC = 6 सेमी है। तब ∠B का मान क्या होगा?",
    options: {
      en: ["120°", "60°", "90°", "45°"],
      hi: ["120°", "60°", "90°", "45°"]
    },
    correctOption: 3
  },
  {
    id: 36,
    questionEn: "The sum of digits of two digit number is 9. Also, nine times this number is twice the number obtained by reversing the order of the digits of the number. Then the number is",
    questionHi: "एक दो-अंकीय संख्या के अंकों का योग 9 है। साथ ही, उस संख्या का नौ गुना, उसके अंकों को उलटकर प्राप्त संख्या के दोगुने के बराबर है। वह संख्या क्या है?",
    options: {
      en: ["18", "81", "36", "None of these"],
      hi: ["18", "81", "36", "इनमें से कोई नहीं"]
    },
    correctOption: 1
  },
  {
    id: 37,
    questionEn: "The distance between the point (a, b) and (-a, -b) is",
    questionHi: "बिंदु (a, b) और (-a, -b) के बीच की दूरी है",
    options: {
      en: ["0", "1", "2√(a² + b²)", "None of these"],
      hi: ["0", "1", "2√(a² + b²)", "इनमें से कोई नहीं"]
    },
    correctOption: 4
  },
  {
    id: 38,
    questionEn: "The main presence of Aravali Hills is found in the District of",
    questionHi: "अरावली पहाड़ियों की मुख्य उपस्थिति किस जिले में पाई जाती है?",
    options: {
      en: ["Faridabad", "Rohtak", "Gurgaon", "Hisar"],
      hi: ["फरीदाबाद", "रोहतक", "गुरुग्राम", "हिसार"]
    },
    correctOption: 3
  },
  {
    id: 39,
    questionEn: "RBI was set up on the basis of the recommendation of",
    questionHi: "भारतीय रिज़र्व बैंक (RBI) की स्थापना किसकी सिफारिश पर हुई थी?",
    options: {
      en: ["Indian Central Bank Enquiry Committee", "Royal Commission", "Simon Commission", "Nehru Report"],
      hi: ["Indian Central Bank Enquiry Committee", "Royal Commission", "Simon Commission", "Nehru Report"]
    },
    correctOption: 2
  },
  {
    id: 40,
    questionEn: "The total area of Haryana is",
    questionHi: "हरियाणा का कुल क्षेत्रफल है",
    options: {
      en: ["44212 sq. kms", "45212 sq. kms", "46212 sq. kms", "47212 sq. kms"],
      hi: ["44212 वर्ग किमी", "45212 वर्ग किमी", "46212 वर्ग किमी", "47212 वर्ग किमी"]
    },
    correctOption: 1
  },
  {
    id: 41,
    questionEn: "If the equations x - 2y = 3 and 2x + by = 6 represent the same line, then the value of b is",
    questionHi: "यदि समीकरण x - 2y = 3 और 2x + by = 6 एक ही रेखा का प्रतिनिधित्व करते हैं, तो b का मान क्या होगा?",
    options: {
      en: ["4", "-4", "-2", "None of these"],
      hi: ["4", "-4", "-2", "इनमें से कोई नहीं"]
    },
    correctOption: 2
  },
  {
    id: 42,
    questionEn: "Balmukund Gupta is a _______ literator of Haryana.",
    questionHi: "बालमुकुंद गुप्ता हरियाणा के किस भाषा-साहित्यकार हैं?",
    options: {
      en: ["Sanskrit", "English", "Urdu", "Hindi"],
      hi: ["संस्कृत", "अंग्रेजी", "उर्दू", "हिन्दी"]
    },
    correctOption: 4
  },
  {
    id: 43,
    questionEn: "Find the missing letters (?) from the options for DW, ?, LO, PK, TG, XC.",
    questionHi: "निम्नलिखित में से कौन-सा अक्षर-युग्म (?) उपयुक्त है: DW, ?, LO, PK, TG, XC.",
    options: {
      en: ["FU", "EV", "HS", "IR"],
      hi: ["FU", "EV", "HS", "IR"]
    },
    correctOption: 3
  },
  {
    id: 44,
    questionEn: "Which of the following statements is wrong about Deccan Plateau?",
    questionHi: "डेक्कन पठार के बारे में निम्नलिखित में से कौन-सा कथन गलत है?",
    options: {
      en: ["This is bordered by the Western Ghats in the west, Eastern Ghats in the east and the Satpura, Maikal range and Mahadeo hills in the north.", "Its western hills are locally known by different names such as Sahyadri in Maharashtra, Nilgiri hills in Karnataka, and Anaimalai hills in Tamil Nadu, and Cardamom hills in Kerala.", "Anaimudi, the highest peak of Peninsular plateau is located on the Anaimalai hills.", "The Eastern and the Western Ghats meet each other at the Sabarimala hills."],
      hi: ["यह पश्चिम में Western Ghats, पूर्व में Eastern Ghats तथा उत्तर में सतपुड़ा, मैकाल श्रेणी और महादेव पहाड़ियों से घिरा है।", "इसकी पश्चिमी पहाड़ियाँ स्थानीय रूप से अलग-अलग नामों से जानी जाती हैं जैसे महाराष्ट्र में सह्याद्री, कर्नाटक में नीलगिरी, तमिलनाडु में अनैमलै पहाड़ियाँ और केरल में इलायची-पहाड़ियाँ।", "अनैमुदी, प्रायद्वीपीय पठार की सबसे ऊँची चोटी, अनैमलै पहाड़ियों पर स्थित है।", "पूर्वी और पश्चिमी घाट एक दूसरे से सबरीमाला पहाड़ियों पर मिलते हैं।"]
    },
    correctOption: 4
  },
  {
    id: 45,
    questionEn: "'Vaishanava Jana To', Gandhiji's one of favourite devotional songs which he adopted into the routine of his public prayer events, is written by",
    questionHi: "'वैष्णव जन तो', जो गांधीजी का प्रिय भजन था और उन्होंने सार्वजनिक प्रार्थना में अपनाया था, इसे किसने लिखा?",
    options: {
      en: ["Rabindranath Tagore", "M. K. Gandhi", "Kabir Das", "Narasinh Mehta"],
      hi: ["रवीन्द्रनाथ टैगोर", "एम. के. गांधी", "कबीर दास", "नरसिंह मेहता"]
    },
    correctOption: 4
  },
  {
    id: 46,
    questionEn: "If P(E) = 0.05, what is the probability of 'not E'?",
    questionHi: "यदि P(E) = 0.05, तो 'नॉट E' की प्रायिकता क्या होगी?",
    options: {
      en: ["0.05", "0.95", "0", "Not defined"],
      hi: ["0.05", "0.95", "0", "परिभाषित नहीं"]
    },
    correctOption: 2
  },
  {
    id: 47,
    questionEn: "Three cubes each of side 2.5 cm are joined end to end, the total surface area of resulting solid is",
    questionHi: "तीन घन जिनकी भुजा 2.5 सेमी है, अंत-से-अंत जुड़ाए गए हैं; परिणामी ठोस का कुल पृष्ठीय क्षेत्रफल कितना होगा?",
    options: {
      en: ["93.5 cm²", "87.5 cm²", "90 cm²", "85 cm²"],
      hi: ["93.5 cm²", "87.5 cm²", "90 cm²", "85 cm²"]
    },
    correctOption: 2
  },
  {
    id: 48,
    questionEn: "_______ is famous for Lac Bangles.",
    questionHi: "लैक्स-चूड़ियाँ (Lac Bangles) के लिए कौन-सा स्थान प्रसिद्ध है?",
    options: {
      en: ["Kurukshetra", "Ambala", "Mahendragarh", "Rohtak"],
      hi: ["कुरुक्षेत्र", "अंबाला", "महेन्द्रगढ़", "रोहतक"]
    },
    correctOption: 3
  },
  {
    id: 49,
    questionEn: "The war of Kurukshetra was narrated to Dhritarashtra by",
    questionHi: "कुरुक्षेत्र का युद्ध किसने धृतराष्ट्र को सुनाया था?",
    options: {
      en: ["Shankaracharya", "Madhvacharya", "Sanjaya", "Vallabhacharya"],
      hi: ["शंकराचार्य", "मध्वाचार्य", "संजय", "वल्लभाचार्य"]
    },
    correctOption: 3
  },
  {
    id: 50,
    questionEn: "If 2 is a zero of polynomial f(x) = ax² - 3(a - 1)x - 1, then value of a is",
    questionHi: "यदि 2, बहुपद f(x) = ax² - 3(a - 1)x - 1 का शून्य है, तो a का मान क्या होगा?",
    options: {
      en: ["5/2", "-2/5", "-5/2", "None of these"],
      hi: ["5/2", "-2/5", "-5/2", "इनमें से कोई नहीं"]
    },
    correctOption: 1
  },
  {
    id: 51,
    questionEn: "The term Mesophytes implies that",
    questionHi: "शब्द Mesophytes का अर्थ है कि",
    options: {
      en: ["Aquatic plants growing in fresh and marine waters", "These are plants growing in soil with optimum soil water conditions prevailing for major part of the year", "Plants growing in extreme weather", "Under water growing plants"],
      hi: ["ताजे और समुद्री जल में उगने वाले जलीय पौधे", "वे पौधे जो वर्ष के अधिकांश भाग में अनुकूल मिट्टी-जल स्थितियों में उगते हैं", "चरम मौसम में उगने वाले पौधे", "पानी के भीतर उगने वाले पौधे"]
    },
    correctOption: 2
  },
  {
    id: 52,
    questionEn: "Who among the following leaders moved 'Objective Resolution' in the Constitutional Assembly?",
    questionHi: "संविधान सभा में 'Objective Resolution' किसने प्रस्तुत किया था?",
    options: {
      en: ["Jawaharlal Nehru", "Dr. B. R. Ambedkar", "Dr. Rajendra Prasad", "Vallabh Bhai Patel"],
      hi: ["जवाहरलाल नेहरू", "डॉ. बी. आर. अम्बेडकर", "डॉ. राजेंद्र प्रसाद", "वल्लभभाई पटेल"]
    },
    correctOption: 1
  },
  {
    id: 53,
    questionEn: "Colour of the wheel, which we see in our National Flag is",
    questionHi: "हमारे राष्ट्रीय ध्वज में जो चक्र दिखता है, उसका रंग क्या है?",
    options: {
      en: ["Dark green", "Black", "Light Blue", "Navy blue"],
      hi: ["गहरा हरा", "काला", "हल्का नीला", "नौसेना-नीला"]
    },
    correctOption: 4
  },
  {
    id: 54,
    questionEn: "Jogis (Saints) use _______ instrument to sing songs.",
    questionHi: "जोगी (संत) गीत गाने के लिए किस वाद्य का उपयोग करते हैं?",
    options: {
      en: ["Shehnai", "Been", "Sarangi", "Dholak"],
      hi: ["शहनाई", "बीन", "सारंगी", "ढोलक"]
    },
    correctOption: 3
  },
  {
    id: 55,
    questionEn: "5000 years old Indus valley civilization, found in the present-day _______ District.",
    questionHi: "5000 वर्ष पुरानी सिंधु घाटी सभ्यता किस जिले के निकट में पाई गई है?",
    options: {
      en: ["Ranchi", "Hisar", "Kurukshetra", "Angeerasa"],
      hi: ["रांची", "हिसार", "कुरुक्षेत्र", "अंजीरासा"]
    },
    correctOption: 2
  },
  {
    id: 56,
    questionEn: "An object 4 cm in size, is placed at 20 cm in front of a concave mirror of focal length 10 cm. At what distance from the mirror should a screen be placed in order to obtain a sharp image?",
    questionHi: "एक वस्तु जिसकी ऊँचाई 4 सेमी है, उसे एक अवतल दर्पण के सामने 20 सेमी पर रखा जाता है; दर्पण का फोकल लंबाई 10 सेमी है। तीक्ष्ण छवि प्राप्त करने के लिए दर्पण से कितनी दूरी पर स्क्रीन रखनी चाहिए?",
    options: {
      en: ["20 cm from the mirror", "10 cm from the mirror", "20/3 cm from the mirror", "10/3 cm from the mirror"],
      hi: ["दर्पण से 20 सेमी", "दर्पण से 10 सेमी", "दर्पण से 20/3 सेमी", "दर्पण से 10/3 सेमी"]
    },
    correctOption: 1
  },
  {
    id: 57,
    questionEn: "Omega-3 fatty acids are present in",
    questionHi: "ओमेगा-3 फैटी एसिड किसमें पाए जाते हैं?",
    options: {
      en: ["Fish", "Walnuts", "Pulses", "Both (1) and (2)"],
      hi: ["मछली", "अखरोट", "दालें", "(1) और (2) दोनों"]
    },
    correctOption: 4
  },
  {
    id: 58,
    questionEn: "The 'hub of making durries' in Haryana is",
    questionHi: "हरियाणा में दरी बनाने का केंद्र (hub) कौन-सा स्थान है?",
    options: {
      en: ["Rohtak", "Manipur", "Panipat", "Gurgaon"],
      hi: ["रोहतक", "मणिपुर", "पानीपत", "गुरुग्राम"]
    },
    correctOption: 3
  },
  {
    id: 59,
    questionEn: "Find the word which is different from the other 3 options given below.",
    questionHi: "नीचे दिए गए चार शब्दों में से वह शब्द चुनिए जो बाकी तीनों से भिन्न है।",
    options: {
      en: ["Mathematics", "Arithmetic", "Algebra", "Geometry"],
      hi: ["Mathematics", "Arithmetic", "Algebra", "Geometry"]
    },
    correctOption: 1
  },
  {
    id: 60,
    questionEn: "ISRO's first woman scientist who recently spent over 403 days in Antarctica is",
    questionHi: "ISRO की वह पहली महिला वैज्ञानिक जिन्होंने हाल-ही में अंटार्कटिका में 403 से अधिक दिन बिताए, कौन हैं?",
    options: {
      en: ["Tessy Thomas", "Mangala Mani", "Nandini Harinath", "Anuradha T. K."],
      hi: ["टेसी थॉमस", "मंगला मणि", "नंदिनी हरिनाथ", "अनुराधा टी. के."]
    },
    correctOption: 2
  },
  {
    id: 61,
    questionEn: "The force that blood exerts against the wall of a vessel is called",
    questionHi: "रक्त द्वारा किसी रक्त-वाहिका की दीवार पर लगाया गया बल क्या कहलाता है?",
    options: {
      en: ["Diastolic pressure", "Hemodialysis", "Systolic pressure", "Blood pressure"],
      hi: ["डायस्टोलिक प्रेशर", "हेमोडायलिसिस", "सिस्टोलिक प्रेशर", "ब्लड प्रेशर"]
    },
    correctOption: 3
  },
  {
    id: 62,
    questionEn: "Asbestos is found in the District of",
    questionHi: "ऐस्बेस्टस किस जिले में पाया जाता है?",
    options: {
      en: ["Hisar", "Gurgaon", "Karnal", "Mahendragarh"],
      hi: ["हिसार", "गुरुग्राम", "करनाल", "महेन्द्रगढ़"]
    },
    correctOption: 4
  },
  {
    id: 63,
    questionEn: "New States come to exist through Union, Consolidation, Confederation etc. Here Confederation refers to",
    questionHi: "नए राज्य संघ, एकीकरण, संघ-समूह (Confederation) आदि के माध्यम से बनते हैं। यहाँ Confederation का अर्थ है:",
    options: {
      en: ["Form of Union where Centre is strong and States are weak", "Form of Union where States are strong and Centre is weak", "Some States have strong power and Centre is also strong", "Equal power sharing between Centre and States"],
      hi: ["ऐसा संघ जहाँ केंद्र मजबूत और राज्य कमजोर हों", "ऐसा संघ जहाँ राज्य मजबूत और केंद्र कमजोर हो", "कुछ राज्यों के पास अधिक शक्ति हो और केंद्र भी मजबूत हो", "केंद्र और राज्यों के बीच समान शक्ति-वितरण"]
    },
    correctOption: 2
  },
  {
    id: 64,
    questionEn: "Find the number which is not like the other 3 numbers: 4/14, 3/21, 6/21, 16/56",
    questionHi: "नीचे दिए गए संख्याओं में से वह संख्या चुनिए जो बाकी तीनों जैसी नहीं है: 4/14, 3/21, 6/21, 16/56",
    options: {
      en: ["4/14", "3/21", "6/21", "16/56"],
      hi: ["4/14", "3/21", "6/21", "16/56"]
    },
    correctOption: 2
  },
  {
    id: 65,
    questionEn: "If '+' means '÷', '÷' means '-', '-' means '×' and '×' means '+', then 9 + 3 ÷ 5 - 3 × 7 =",
    questionHi: "यदि '+' का अर्थ '÷', '÷' का अर्थ '-', '-' का अर्थ '×' और '×' का अर्थ '+', तो 9 + 3 ÷ 5 - 3 × 7 का मान क्या होगा?",
    options: {
      en: ["-5", "15", "25", "None of these"],
      hi: ["-5", "15", "25", "इनमें से कोई नहीं"]
    },
    correctOption: 1
  },
  {
    id: 66,
    questionEn: "The lake which is dedicated to Sun God is",
    questionHi: "वह झील जो सूर्य देव को समर्पित है, कौन-सी है?",
    options: {
      en: ["Damodara lake", "Anangpur lake", "Hathnikund", "Surajkund"],
      hi: ["दमोडरा झील", "अनंगपुर झील", "हथिलकुंड", "सूरजकुंड"]
    },
    correctOption: 4
  },
  {
    id: 67,
    questionEn: "The values of x and y satisfying the equations 2(x/a) + y/b = 2 and x/a - y/b = 4 are",
    questionHi: "निम्न समीकरणों को संतुष्ट करने वाले x और y के मान क्या हैं? 2(x/a) + y/b = 2 और x/a - y/b = 4",
    options: {
      en: ["x = a, y = b", "x = 2a, y = -2b", "x = a, y = -b", "x = 2a, y = 2b"],
      hi: ["x = a, y = b", "x = 2a, y = -2b", "x = a, y = -b", "x = 2a, y = 2b"]
    },
    correctOption: 2
  },
  {
    id: 68,
    questionEn: "Skill of archery was the test in the swayamvara of",
    questionHi: "किसका स्वयंबर में तीरंदाजी-कौशल का परीक्षण हुआ था?",
    options: {
      en: ["Parvati", "Gouri", "Meenakshi", "Draupadi"],
      hi: ["पार्वती", "गौरी", "मीनाक्षी", "द्रौपदी"]
    },
    correctOption: 4
  },
  {
    id: 69,
    questionEn: "Correct the following sentence: I can't imagine why you were believing all those rumours since yesterday.",
    questionHi: "सही वाक्य चुनिए: I can't imagine why you were believing all those rumours since yesterday.",
    options: {
      en: ["I can't imagine why wasn't you believing all those rumours since yesterday.", "I can't imagine why you have been believing all those rumours since yesterday.", "I can't imagine why you believed all those rumours since yesterday.", "I can't imagine why do you believe all those rumours since yesterday."],
      hi: ["I can't imagine why wasn't you believing all those rumours since yesterday.", "I can't imagine why you have been believing all those rumours since yesterday.", "I can't imagine why you believed all those rumours since yesterday.", "I can't imagine why do you believe all those rumours since yesterday."]
    },
    correctOption: 2
  },
  {
    id: 70,
    questionEn: "Correct the following sentence: Each of the sports women were given a certificate.",
    questionHi: "वाक्य सुधारिए: Each of the sports women were given a certificate.",
    options: {
      en: ["Each of the sports women was given a certificate.", "Sports women each were given a certificate.", "Every sports women were given a certificate.", "Each of the sports women have been given a certificate."],
      hi: ["Each of the sports women was given a certificate.", "Sports women each were given a certificate.", "Every sports women were given a certificate.", "Each of the sports women have been given a certificate."]
    },
    correctOption: 1
  },
  {
    id: 71,
    questionEn: "Fill in the blanks with appropriate option: The scheme allows students from many countries to communicate _______",
    questionHi: "रिक्त स्थान भरिए: The scheme allows students from many countries to communicate _______",
    options: {
      en: ["to themselves", "with one another", "each other", "themselves"],
      hi: ["to themselves", "with one another", "each other", "themselves"]
    },
    correctOption: 2
  },
  {
    id: 72,
    questionEn: "An employment advertisement should _______ the number of vacancies.",
    questionHi: "रोजगार विज्ञापन में कितनी रिक्तियाँ हैं यह _______ चाहिए",
    options: {
      en: ["declare", "specify", "provide", "contain"],
      hi: ["declare", "specify", "provide", "contain"]
    },
    correctOption: 2
  },
  {
    id: 73,
    questionEn: "The growing number of visitors _______ the footpaths.",
    questionHi: "बढ़ते हुए आगंतुक _______ फुटपाथों को क्षतिग्रस्त कर रहे हैं।",
    options: {
      en: ["damages", "were damaging", "damaging", "are damaging"],
      hi: ["damages", "were damaging", "damaging", "are damaging"]
    },
    correctOption: 4
  },
  {
    id: 74,
    questionEn: "Choose the correct option to fit in the blank: When I was a child _______ the Violin.",
    questionHi: "रिक्त स्थान भरिए: When I was a child _______ the Violin.",
    options: {
      en: ["I am playing", "I played", "I was playing", "I play"],
      hi: ["I am playing", "I played", "I was playing", "I play"]
    },
    correctOption: 2
  },
  {
    id: 75,
    questionEn: "Ram was appointed ______ Clerk.",
    questionHi: "राम को _______ क्लर्क नियुक्त किया गया था।",
    options: {
      en: ["an", "No article", "a", "the"],
      hi: ["an", "(कोई लेख नहीं)", "a", "the"]
    },
    correctOption: 2
  },
  {
    id: 76,
    questionEn: "Choose the correct answer for the blank: India is one of _______ biggest countries in the world.",
    questionHi: "रिक्त स्थान भरिए: India is one of _______ biggest countries in the world.",
    options: {
      en: ["the", "No article", "an", "a"],
      hi: ["the", "(कोई लेख नहीं)", "an", "a"]
    },
    correctOption: 1
  },
  {
    id: 77,
    questionEn: "Choose the most appropriate expression: To bury the hatchet",
    questionHi: "निम्न मुहावरे का अर्थ चुनिए: To bury the hatchet",
    options: {
      en: ["To make peace", "To bury the dead", "To keep a secret", "To obtain money"],
      hi: ["To make peace", "To bury the dead", "To keep a secret", "To obtain money"]
    },
    correctOption: 1
  },
  {
    id: 78,
    questionEn: "Choose the most appropriate expression: A burning question",
    questionHi: "निम्न मुहावरे का अर्थ चुनिए: A burning question",
    options: {
      en: ["A difficult problem", "An annoying question", "A puzzling question", "A hotly debated question"],
      hi: ["A difficult problem", "An annoying question", "A puzzling question", "A hotly debated question"]
    },
    correctOption: 4
  },
  {
    id: 79,
    questionEn: "Match the following: (अ) 1. बासठ 2. पचपन 3. उन्नीस 4. उनतालीस (ब) अ. 19 आ. 39 इ. 55 ई. 62",
    questionHi: "सुमेलित कीजिए: (अ) 1. बासठ 2. पचपन 3. उन्नीस 4. उनतालीस (ब) अ. 19 आ. 39 इ. 55 ई. 62",
    options: {
      en: ["1 - आ, 2 - अ, 3 - इ, 4 - ई", "1 - ई, 2 - इ, 3 - अ, 4 - आ", "1 - आ, 2 - ई, 3 - आ, 4 - इ", "1 - इ, 2 - आ, 3 - ई, 4 - अ"],
      hi: ["1 - आ, 2 - अ, 3 - इ, 4 - ई", "1 - ई, 2 - इ, 3 - अ, 4 - आ", "1 - आ, 2 - ई, 3 - आ, 4 - इ", "1 - इ, 2 - आ, 3 - ई, 4 - अ"]
    },
    correctOption: 2
  },
  {
    id: 80,
    questionEn: "'अदब' शब्द के साथ कौन सा उपसर्ग सही लगता है?",
    questionHi: "'अदब' शब्द के साथ कौन सा उपसर्ग सही लगता है?",
    options: {
      en: ["बे", "अ", "निन", "कु"],
      hi: ["बे", "अ", "निन", "कु"]
    },
    correctOption: 1
  },
  {
    id: 81,
    questionEn: "'गाय नहीं चलती।' यह वाक्य भाववाच्य में होता है",
    questionHi: "'गाय नहीं चलती।' यह वाक्य भाववाच्य में होता है",
    options: {
      en: ["गाय से चली नहीं जाती।", "गाय से चला नहीं गया।", "गाय से चला नहीं जाता।", "गाय से चली गयी।"],
      hi: ["गाय से चली नहीं जाती।", "गाय से चला नहीं गया।", "गाय से चला नहीं जाता।", "गाय से चली गयी।"]
    },
    correctOption: 3
  },
  {
    id: 82,
    questionEn: "घन जैसा श्याम = 'घनश्याम' यह कौन सा समास है?",
    questionHi: "घन जैसा श्याम = 'घनश्याम' यह कौन सा समास है?",
    options: {
      en: ["कर्मधारय", "द्विगु", "अव्ययीभाव", "तत्पुरुष"],
      hi: ["कर्मधारय", "द्विगु", "अव्ययीभाव", "तत्पुरुष"]
    },
    correctOption: 1
  },
  {
    id: 83,
    questionEn: "निम्नलिखित में से सही वर्तनी का चयन कीजिए।",
    questionHi: "निम्नलिखित में से सही वर्तनी का चयन कीजिए।",
    options: {
      en: ["क्रीम", "कृत्रिम", "कृत्रिम", "कृत्रीम"],
      hi: ["क्रीम", "निर्म", "कृत्रिम", "कृत्रीम"]
    },
    correctOption: 3
  },
  {
    id: 84,
    questionEn: "निम्नलिखित में से 'गाय' का पर्यायवाची शब्द नहीं है",
    questionHi: "निम्नलिखित में से 'गाय' का पर्यायवाची शब्द नहीं है",
    options: {
      en: ["कपिला", "धेनु", "अंबु", "गौ"],
      hi: ["कपिला", "धेनु", "अंबु", "गौ"]
    },
    correctOption: 3
  },
  {
    id: 85,
    questionEn: "जहाँ एक से अधिक वर्ण की दो बार आवृत्ति होती है, वहाँ कौन सा अलंकार होता है?",
    questionHi: "जहाँ एक से अधिक वर्ण की दो बार आवृत्ति होती है, वहाँ कौन सा अलंकार होता है?",
    options: {
      en: ["श्लेष", "उपमा", "छेकानुप्रास", "व्यतिरेक"],
      hi: ["श्लेष", "उपमा", "छेकानुप्रास", "व्यतिरेक"]
    },
    correctOption: 3
  },
  {
    id: 86,
    questionEn: "श्रृंगार रस का स्थायी भाव कौन सा है?",
    questionHi: "श्रृंगार रस का स्थायी भाव कौन सा है?",
    options: {
      en: ["हास", "भय", "रति", "क्रोध"],
      hi: ["हास", "भय", "रति", "क्रोध"]
    },
    correctOption: 3
  },
  {
    id: 87,
    questionEn: "'साधु' शब्द का बहुवचन रूप है",
    questionHi: "'साधु' शब्द का बहुवचन रूप है",
    options: {
      en: ["साधुओं", "साधुयाँ", "साधुएँ", "साधु"],
      hi: ["साधुओं", "साधुयाँ", "साधुएँ", "साधु"]
    },
    correctOption: 4
  },
  {
    id: 88,
    questionEn: "'जमीन पर पैर न पड़ना' मुहावरे का अर्थ है",
    questionHi: "'जमीन पर पैर न पड़ना' मुहावरे का अर्थ है",
    options: {
      en: ["अप्रसन्न हो जाना", "मौज उड़ाना", "अधिक घमंड करना", "लापता होना"],
      hi: ["अप्रसन्न हो जाना", "मौज उड़ाना", "अधिक घमंड करना", "लापता होना"]
    },
    correctOption: 3
  },
  {
    id: 89,
    questionEn: "हित + उपकार = 'हितोपकार' कौन सी संधि है?",
    questionHi: "हित + उपकार = 'हितोपकार' कौन सी संधि है?",
    options: {
      en: ["गुण संधि", "दीर्घ संधि", "वृद्धि संधि", "यण संधि"],
      hi: ["गुण संधि", "दीर्घ संधि", "वृद्धि संधि", "यण संधि"]
    },
    correctOption: 1
  },
  {
    id: 90,
    questionEn: "'गाय फल खा रही है।' इस वाक्य के 'गाय' का पद परिचय दीजिए।",
    questionHi: "'गाय फल खा रही है।' इस वाक्य के 'गाय' का पद परिचय दीजिए।",
    options: {
      en: ["व्यक्तिवाचक संज्ञा, एकवचन, स्त्रीलिंग, कर्ता कारक, 'खा रही है' क्रिया का कर्ता", "जातिवाचक संज्ञा, एकवचन, स्त्रीलिंग, कर्ता कारक, 'खा रही है' क्रिया का कर्ता", "व्यक्तिवाचक संज्ञा, एकवचन, स्त्रीलिंग, कर्म कारक, 'खा रही है' क्रिया का कर्म", "भाववाचक संज्ञा, एकवचन, स्त्रीलिंग, कर्म कारक, 'खा रही है' क्रिया का कर्म"],
      hi: ["व्यक्तिवाचक संज्ञा, एकवचन, स्त्रीलिंग, कर्ता कारक, 'खा रही है' क्रिया का कर्ता", "जातिवाचक संज्ञा, एकवचन, स्त्रीलिंग, कर्ता कारक, 'खा रही है' क्रिया का कर्ता", "व्यक्तिवाचक संज्ञा, एकवचन, स्त्रीलिंग, कर्म कारक, 'खा रही है' क्रिया का कर्म", "भाववाचक संज्ञा, एकवचन, स्त्रीलिंग, कर्म कारक, 'खा रही है' क्रिया का कर्म"]
    },
    correctOption: 2
  }
];
